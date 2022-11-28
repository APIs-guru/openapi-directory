import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
export declare enum BiographyContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    TextPlain = "TEXT_PLAIN",
    TextHtml = "TEXT_HTML"
}
/**
 * A person's short biography.
**/
export declare class Biography extends SpeakeasyBase {
    contentType?: BiographyContentTypeEnum;
    metadata?: FieldMetadata;
    value?: string;
}
/**
 * A person's short biography.
**/
export declare class BiographyInput extends SpeakeasyBase {
    contentType?: BiographyContentTypeEnum;
    metadata?: FieldMetadataInput;
    value?: string;
}
