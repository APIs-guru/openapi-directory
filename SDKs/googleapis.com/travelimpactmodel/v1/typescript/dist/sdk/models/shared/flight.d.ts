import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * All details related to a single request item for a direct flight emission estimates.
**/
export declare class Flight extends SpeakeasyBase {
    departureDate?: Date;
    destination?: string;
    flightNumber?: number;
    operatingCarrierCode?: string;
    origin?: string;
}
