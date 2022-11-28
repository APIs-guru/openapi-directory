import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmissionsGramsPerPax } from "./emissionsgramsperpax";
import { Flight } from "./flight";



// FlightWithEmissions
/** 
 * Direct flight with emission estimates.
**/
export class FlightWithEmissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emissionsGramsPerPax" })
  emissionsGramsPerPax?: EmissionsGramsPerPax;

  @SpeakeasyMetadata({ data: "json, name=flight" })
  flight?: Flight;
}
