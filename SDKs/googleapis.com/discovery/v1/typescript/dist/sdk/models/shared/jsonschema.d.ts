import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information about this property.
**/
export declare class JsonSchemaAnnotations extends SpeakeasyBase {
    required?: string[];
}
export declare class JsonSchemaVariantMap extends SpeakeasyBase {
    dollarRef?: string;
    typeValue?: string;
}
/**
 * In a variant data type, the value of one property is used to determine how to interpret the entire entity. Its value must exist in a map of descriminant values to schema names.
**/
export declare class JsonSchemaVariant extends SpeakeasyBase {
    discriminant?: string;
    map?: JsonSchemaVariantMap[];
}
export declare class JsonSchema extends SpeakeasyBase {
    dollarRef?: string;
    additionalProperties?: JsonSchema;
    annotations?: JsonSchemaAnnotations;
    description?: string;
    enum?: string[];
    enumDescriptions?: string[];
    format?: string;
    id?: string;
    items?: JsonSchema;
    location?: string;
    maximum?: string;
    minimum?: string;
    pattern?: string;
    properties?: Map<string, JsonSchema>;
    readOnly?: boolean;
    repeated?: boolean;
    required?: boolean;
    type?: string;
    variant?: JsonSchemaVariant;
}
