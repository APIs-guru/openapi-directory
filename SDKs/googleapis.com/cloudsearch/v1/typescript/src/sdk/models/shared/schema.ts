import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObjectDefinition } from "./objectdefinition";


// Schema
/** 
 * The schema definition for a data source.
**/
export class Schema extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectDefinitions", elemType: shared.ObjectDefinition })
  objectDefinitions?: ObjectDefinition[];

  @Metadata({ data: "json, name=operationIds" })
  operationIds?: string[];
}
