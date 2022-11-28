import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Flight } from "./flight";



// ComputeFlightEmissionsRequest
/** 
 * Input definition for the ComputeFlightEmissions request.
**/
export class ComputeFlightEmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flights", elemType: Flight })
  flights?: Flight[];
}
