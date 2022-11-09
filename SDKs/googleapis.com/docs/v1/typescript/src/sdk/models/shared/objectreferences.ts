import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectReferences
/** 
 * A collection of object IDs.
**/
export class ObjectReferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectIds" })
  objectIds?: string[];
}
