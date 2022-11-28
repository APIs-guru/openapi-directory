import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValueMetadata } from "./attributevaluemetadata";
export declare enum AttributeMetadataValueTypeEnum {
    AttributeValueTypeUnspecified = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Enum = "ENUM",
    Url = "URL",
    RepeatedEnum = "REPEATED_ENUM"
}
/**
 * Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.
**/
export declare class AttributeMetadata extends SpeakeasyBase {
    deprecated?: boolean;
    displayName?: string;
    groupDisplayName?: string;
    parent?: string;
    repeatable?: boolean;
    valueMetadata?: AttributeValueMetadata[];
    valueType?: AttributeMetadataValueTypeEnum;
}
