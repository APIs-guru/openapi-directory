import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
**/
export declare class GoogleLocation extends SpeakeasyBase {
    location?: Location;
    name?: string;
    requestAdminRightsUrl?: string;
}
