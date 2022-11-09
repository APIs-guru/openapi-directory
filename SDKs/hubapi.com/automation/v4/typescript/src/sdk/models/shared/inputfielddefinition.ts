import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldTypeDefinition } from "./fieldtypedefinition";

export enum InputFieldDefinitionSupportedValueTypesEnum {
    StaticValue = "STATIC_VALUE"
,    ObjectProperty = "OBJECT_PROPERTY"
,    FieldData = "FIELD_DATA"
}


// InputFieldDefinition
/** 
 * Configuration for an input field on the custom action
**/
export class InputFieldDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=isRequired" })
  isRequired: boolean;

  @Metadata({ data: "json, name=supportedValueTypes" })
  supportedValueTypes?: InputFieldDefinitionSupportedValueTypesEnum[];

  @Metadata({ data: "json, name=typeDefinition" })
  typeDefinition: FieldTypeDefinition;
}
