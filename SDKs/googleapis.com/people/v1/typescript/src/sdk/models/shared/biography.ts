import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";


export enum BiographyContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    TextPlain = "TEXT_PLAIN",
    TextHtml = "TEXT_HTML"
}


// Biography
/** 
 * A person's short biography.
**/
export class Biography extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: BiographyContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// BiographyInput
/** 
 * A person's short biography.
**/
export class BiographyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: BiographyContentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
