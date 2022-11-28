import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectReferences
/** 
 * A collection of object IDs.
**/
export class ObjectReferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds?: string[];
}
