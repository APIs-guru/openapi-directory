import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Reservation
/** 
 * Metadata about a reservation resource.
**/
export class Reservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=throughputCapacity" })
  throughputCapacity?: string;
}
