import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveABlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveABlock200ApplicationJsonParagraphTextAnnotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bold" })
  bold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=italic" })
  italic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=underline" })
  underline?: boolean;
}


export class RetrieveABlock200ApplicationJsonParagraphTextText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveABlock200ApplicationJsonParagraphText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: RetrieveABlock200ApplicationJsonParagraphTextAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: RetrieveABlock200ApplicationJsonParagraphTextText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveABlock200ApplicationJsonParagraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text", elemType: RetrieveABlock200ApplicationJsonParagraphText })
  text?: RetrieveABlock200ApplicationJsonParagraphText[];
}


export class RetrieveABlock200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=has_children" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=paragraph" })
  paragraph?: RetrieveABlock200ApplicationJsonParagraph;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveABlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveABlockPathParams;
}


export class RetrieveABlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveABlock200ApplicationJsonObject?: RetrieveABlock200ApplicationJson;
}
