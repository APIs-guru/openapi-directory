import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvertisedId } from "./advertisedid";
import { EphemeralIdRegistration } from "./ephemeralidregistration";
import { IndoorLevel } from "./indoorlevel";
import { LatLng } from "./latlng";
export declare enum BeaconExpectedStabilityEnum {
    StabilityUnspecified = "STABILITY_UNSPECIFIED",
    Stable = "STABLE",
    Portable = "PORTABLE",
    Mobile = "MOBILE",
    Roving = "ROVING"
}
export declare enum BeaconStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Active = "ACTIVE",
    Decommissioned = "DECOMMISSIONED",
    Inactive = "INACTIVE"
}
/**
 * Details of a beacon device.
**/
export declare class Beacon extends SpeakeasyBase {
    advertisedId?: AdvertisedId;
    beaconName?: string;
    description?: string;
    ephemeralIdRegistration?: EphemeralIdRegistration;
    expectedStability?: BeaconExpectedStabilityEnum;
    indoorLevel?: IndoorLevel;
    latLng?: LatLng;
    placeId?: string;
    properties?: Map<string, string>;
    provisioningKey?: string;
    status?: BeaconStatusEnum;
}
