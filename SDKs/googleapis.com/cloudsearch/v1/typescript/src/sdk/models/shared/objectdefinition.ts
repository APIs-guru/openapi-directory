import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectOptions } from "./objectoptions";
import { PropertyDefinition } from "./propertydefinition";



// ObjectDefinition
/** 
 * The definition for an object within a data source.
**/
export class ObjectDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: ObjectOptions;

  @SpeakeasyMetadata({ data: "json, name=propertyDefinitions", elemType: PropertyDefinition })
  propertyDefinitions?: PropertyDefinition[];
}
