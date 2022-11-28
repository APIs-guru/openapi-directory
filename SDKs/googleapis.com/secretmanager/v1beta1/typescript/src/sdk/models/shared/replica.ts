import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Replica
/** 
 * Represents a Replica for this Secret.
**/
export class Replica extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
