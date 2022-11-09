import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";

export enum BiographyContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"
,    TextPlain = "TEXT_PLAIN"
,    TextHtml = "TEXT_HTML"
}


// Biography
/** 
 * A person's short biography.
**/
export class Biography extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentType" })
  contentType?: BiographyContentTypeEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
