import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldTypeDefinition } from "./fieldtypedefinition";


export enum InputFieldDefinitionSupportedValueTypesEnum {
    StaticValue = "STATIC_VALUE",
    ObjectProperty = "OBJECT_PROPERTY",
    FieldData = "FIELD_DATA"
}


// InputFieldDefinition
/** 
 * Configuration for an input field on the custom action
**/
export class InputFieldDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isRequired" })
  isRequired: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportedValueTypes" })
  supportedValueTypes?: InputFieldDefinitionSupportedValueTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=typeDefinition" })
  typeDefinition: FieldTypeDefinition;
}
