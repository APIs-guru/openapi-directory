import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectDefinition } from "./objectdefinition";



// Schema
/** 
 * The schema definition for a data source.
**/
export class Schema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectDefinitions", elemType: ObjectDefinition })
  objectDefinitions?: ObjectDefinition[];

  @SpeakeasyMetadata({ data: "json, name=operationIds" })
  operationIds?: string[];
}
