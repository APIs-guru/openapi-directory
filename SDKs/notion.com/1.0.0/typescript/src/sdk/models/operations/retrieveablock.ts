import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrieveABlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveABlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveABlockPathParams;
}


export class RetrieveABlock200ApplicationJsonParagraphTextAnnotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=bold" })
  bold?: boolean;

  @Metadata({ data: "json, name=code" })
  code?: boolean;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=italic" })
  italic?: boolean;

  @Metadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @Metadata({ data: "json, name=underline" })
  underline?: boolean;
}


export class RetrieveABlock200ApplicationJsonParagraphTextText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveABlock200ApplicationJsonParagraphText extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: RetrieveABlock200ApplicationJsonParagraphTextAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: RetrieveABlock200ApplicationJsonParagraphTextText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveABlock200ApplicationJsonParagraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=text", elemType: operations.RetrieveABlock200ApplicationJsonParagraphText })
  text?: RetrieveABlock200ApplicationJsonParagraphText[];
}


export class RetrieveABlock200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime?: string;

  @Metadata({ data: "json, name=has_children" })
  hasChildren?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=paragraph" })
  paragraph?: RetrieveABlock200ApplicationJsonParagraph;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveABlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveABlock200ApplicationJsonObject?: RetrieveABlock200ApplicationJson;
}
