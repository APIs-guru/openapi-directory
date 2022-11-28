import { SpeakeasyBase } from "../../../internal/utils";
import { SnappedWaypoint } from "./snappedwaypoint";
/**
 * Address of activity
**/
export declare class ResponseAddress extends SpeakeasyBase {
    lat?: number;
    locationId?: string;
    lon?: number;
    name?: string;
    snappedWaypoint?: SnappedWaypoint;
    streetHint?: string;
}
