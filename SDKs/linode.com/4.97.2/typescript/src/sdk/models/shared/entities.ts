import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Entities
/** 
 * A collection of the entities to include in this transfer request, separated by type.
 * 
**/
export class Entities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linodes" })
  linodes?: number[];
}
