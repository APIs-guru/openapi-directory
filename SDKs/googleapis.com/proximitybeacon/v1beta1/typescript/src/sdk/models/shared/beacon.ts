import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvertisedId } from "./advertisedid";
import { EphemeralIdRegistration } from "./ephemeralidregistration";
import { IndoorLevel } from "./indoorlevel";
import { LatLng } from "./latlng";


export enum BeaconExpectedStabilityEnum {
    StabilityUnspecified = "STABILITY_UNSPECIFIED",
    Stable = "STABLE",
    Portable = "PORTABLE",
    Mobile = "MOBILE",
    Roving = "ROVING"
}

export enum BeaconStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Active = "ACTIVE",
    Decommissioned = "DECOMMISSIONED",
    Inactive = "INACTIVE"
}


// Beacon
/** 
 * Details of a beacon device.
**/
export class Beacon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisedId" })
  advertisedId?: AdvertisedId;

  @SpeakeasyMetadata({ data: "json, name=beaconName" })
  beaconName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ephemeralIdRegistration" })
  ephemeralIdRegistration?: EphemeralIdRegistration;

  @SpeakeasyMetadata({ data: "json, name=expectedStability" })
  expectedStability?: BeaconExpectedStabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=indoorLevel" })
  indoorLevel?: IndoorLevel;

  @SpeakeasyMetadata({ data: "json, name=latLng" })
  latLng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=placeId" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=provisioningKey" })
  provisioningKey?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BeaconStatusEnum;
}
