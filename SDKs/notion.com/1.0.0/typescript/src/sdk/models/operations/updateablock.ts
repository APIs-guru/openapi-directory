import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateABlockPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateABlockRequestBodyParagraphTextText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}


export class UpdateABlockRequestBodyParagraphText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: UpdateABlockRequestBodyParagraphTextText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateABlockRequestBodyParagraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text", elemType: UpdateABlockRequestBodyParagraphText })
  text?: UpdateABlockRequestBodyParagraphText[];
}


export class UpdateABlockRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paragraph" })
  paragraph?: UpdateABlockRequestBodyParagraph;
}


export class UpdateABlock200ApplicationJsonParagraphTextAnnotations extends SpeakeasyBase {
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


export class UpdateABlock200ApplicationJsonParagraphTextText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class UpdateABlock200ApplicationJsonParagraphText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: UpdateABlock200ApplicationJsonParagraphTextAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: UpdateABlock200ApplicationJsonParagraphTextText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateABlock200ApplicationJsonParagraph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text", elemType: UpdateABlock200ApplicationJsonParagraphText })
  text?: UpdateABlock200ApplicationJsonParagraphText[];
}


export class UpdateABlock200ApplicationJson extends SpeakeasyBase {
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
  paragraph?: UpdateABlock200ApplicationJsonParagraph;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateABlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateABlockPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateABlockRequestBody;
}


export class UpdateABlockResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateABlock200ApplicationJsonObject?: UpdateABlock200ApplicationJson;
}
