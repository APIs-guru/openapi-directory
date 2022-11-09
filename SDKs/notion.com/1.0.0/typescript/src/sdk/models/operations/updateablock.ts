import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateABlockPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateABlockRequestBodyParagraphTextText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;
}


export class UpdateABlockRequestBodyParagraphText extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: UpdateABlockRequestBodyParagraphTextText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateABlockRequestBodyParagraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=text", elemType: operations.UpdateABlockRequestBodyParagraphText })
  text?: UpdateABlockRequestBodyParagraphText[];
}


export class UpdateABlockRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=paragraph" })
  paragraph?: UpdateABlockRequestBodyParagraph;
}


export class UpdateABlockRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateABlockPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateABlockRequestBody;
}


export class UpdateABlock200ApplicationJsonParagraphTextAnnotations extends SpeakeasyBase {
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


export class UpdateABlock200ApplicationJsonParagraphTextText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class UpdateABlock200ApplicationJsonParagraphText extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: UpdateABlock200ApplicationJsonParagraphTextAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: UpdateABlock200ApplicationJsonParagraphTextText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateABlock200ApplicationJsonParagraph extends SpeakeasyBase {
  @Metadata({ data: "json, name=text", elemType: operations.UpdateABlock200ApplicationJsonParagraphText })
  text?: UpdateABlock200ApplicationJsonParagraphText[];
}


export class UpdateABlock200ApplicationJson extends SpeakeasyBase {
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
  paragraph?: UpdateABlock200ApplicationJsonParagraph;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateABlockResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateABlock200ApplicationJsonObject?: UpdateABlock200ApplicationJson;
}
