import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AttributeDefinitionCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Resource = "RESOURCE",
    Request = "REQUEST"
}
/**
 * A client-defined consent attribute.
**/
export declare class AttributeDefinition extends SpeakeasyBase {
    allowedValues?: string[];
    category?: AttributeDefinitionCategoryEnum;
    consentDefaultValues?: string[];
    dataMappingDefaultValue?: string;
    description?: string;
    name?: string;
}
