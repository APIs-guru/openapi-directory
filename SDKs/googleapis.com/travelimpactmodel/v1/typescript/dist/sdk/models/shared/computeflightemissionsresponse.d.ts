import { SpeakeasyBase } from "../../../internal/utils";
import { FlightWithEmissions } from "./flightwithemissions";
import { ModelVersion } from "./modelversion";
/**
 * Output definition for the ComputeFlightEmissions response.
**/
export declare class ComputeFlightEmissionsResponse extends SpeakeasyBase {
    flightEmissions?: FlightWithEmissions[];
    modelVersion?: ModelVersion;
}
