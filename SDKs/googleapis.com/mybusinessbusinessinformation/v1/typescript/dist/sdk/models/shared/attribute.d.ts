import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatedEnumAttributeValue } from "./repeatedenumattributevalue";
import { UriAttributeValue } from "./uriattributevalue";
export declare enum AttributeValueTypeEnum {
    AttributeValueTypeUnspecified = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Enum = "ENUM",
    Url = "URL",
    RepeatedEnum = "REPEATED_ENUM"
}
/**
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
export declare class Attribute extends SpeakeasyBase {
    name?: string;
    repeatedEnumValue?: RepeatedEnumAttributeValue;
    uriValues?: UriAttributeValue[];
    valueType?: AttributeValueTypeEnum;
    values?: any[];
}
/**
 * A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.
**/
export declare class AttributeInput extends SpeakeasyBase {
    name?: string;
    repeatedEnumValue?: RepeatedEnumAttributeValue;
    uriValues?: UriAttributeValue[];
    values?: any[];
}
