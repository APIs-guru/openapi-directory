import { SpeakeasyBase } from "../../../internal/utils";
import { EmissionsGramsPerPax } from "./emissionsgramsperpax";
import { Flight } from "./flight";
/**
 * Direct flight with emission estimates.
**/
export declare class FlightWithEmissions extends SpeakeasyBase {
    emissionsGramsPerPax?: EmissionsGramsPerPax;
    flight?: Flight;
}
