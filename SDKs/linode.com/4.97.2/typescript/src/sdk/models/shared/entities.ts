import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Entities
/** 
 * A collection of the entities to include in this transfer request, separated by type.
 * 
**/
export class Entities extends SpeakeasyBase {
  @Metadata({ data: "json, name=linodes" })
  linodes?: number[];
}
