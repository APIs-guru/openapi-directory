import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyDefinition } from "./propertydefinition";



// ObjectPropertyOptions
/** 
 * The options for object properties.
**/
export class ObjectPropertyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subobjectProperties", elemType: PropertyDefinition })
  subobjectProperties?: PropertyDefinition[];
}
