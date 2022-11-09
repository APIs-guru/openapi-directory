import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectOptions } from "./objectoptions";
import { PropertyDefinition } from "./propertydefinition";


// ObjectDefinition
/** 
 * The definition for an object within a data source.
**/
export class ObjectDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: ObjectOptions;

  @Metadata({ data: "json, name=propertyDefinitions", elemType: shared.PropertyDefinition })
  propertyDefinitions?: PropertyDefinition[];
}
