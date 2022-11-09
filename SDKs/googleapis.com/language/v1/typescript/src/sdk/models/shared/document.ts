import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DocumentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    PlainText = "PLAIN_TEXT"
,    Html = "HTML"
}


// Document
/** 
 * Represents the input to API methods.
**/
export class Document extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=gcsContentUri" })
  gcsContentUri?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=type" })
  type?: DocumentTypeEnum;
}
