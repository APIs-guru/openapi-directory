import { SpeakeasyBase } from "../../../internal/utils";
import { AdvertisedId } from "./advertisedid";
/**
 * Represents one beacon observed once.
**/
export declare class Observation extends SpeakeasyBase {
    advertisedId?: AdvertisedId;
    telemetry?: string;
    timestampMs?: string;
}
