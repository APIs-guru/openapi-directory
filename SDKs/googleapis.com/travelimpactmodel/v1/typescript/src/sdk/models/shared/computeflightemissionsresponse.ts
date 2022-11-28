import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlightWithEmissions } from "./flightwithemissions";
import { ModelVersion } from "./modelversion";



// ComputeFlightEmissionsResponse
/** 
 * Output definition for the ComputeFlightEmissions response.
**/
export class ComputeFlightEmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flightEmissions", elemType: FlightWithEmissions })
  flightEmissions?: FlightWithEmissions[];

  @SpeakeasyMetadata({ data: "json, name=modelVersion" })
  modelVersion?: ModelVersion;
}
