import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyDefinition } from "./propertydefinition";


// ObjectPropertyOptions
/** 
 * The options for object properties.
**/
export class ObjectPropertyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=subobjectProperties", elemType: shared.PropertyDefinition })
  subobjectProperties?: PropertyDefinition[];
}
