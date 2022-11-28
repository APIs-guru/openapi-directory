import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Reservation
/** 
 * Metadata about a reservation resource.
**/
export class Reservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=throughputCapacity" })
  throughputCapacity?: string;
}
