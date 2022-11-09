import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Replica
/** 
 * Represents a Replica for this Secret.
**/
export class Replica extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;
}
