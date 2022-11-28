import { SpeakeasyBase } from "../../../internal/utils";
import { FieldTypeDefinition } from "./fieldtypedefinition";
export declare enum InputFieldDefinitionSupportedValueTypesEnum {
    StaticValue = "STATIC_VALUE",
    ObjectProperty = "OBJECT_PROPERTY",
    FieldData = "FIELD_DATA"
}
/**
 * Configuration for an input field on the custom action
**/
export declare class InputFieldDefinition extends SpeakeasyBase {
    isRequired: boolean;
    supportedValueTypes?: InputFieldDefinitionSupportedValueTypesEnum[];
    typeDefinition: FieldTypeDefinition;
}
