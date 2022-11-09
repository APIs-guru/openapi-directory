import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdvertisedId } from "./advertisedid";
import { EphemeralIdRegistration } from "./ephemeralidregistration";
import { IndoorLevel } from "./indoorlevel";
import { LatLng } from "./latlng";

export enum BeaconExpectedStabilityEnum {
    StabilityUnspecified = "STABILITY_UNSPECIFIED"
,    Stable = "STABLE"
,    Portable = "PORTABLE"
,    Mobile = "MOBILE"
,    Roving = "ROVING"
}

export enum BeaconStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Active = "ACTIVE"
,    Decommissioned = "DECOMMISSIONED"
,    Inactive = "INACTIVE"
}


// Beacon
/** 
 * Details of a beacon device.
**/
export class Beacon extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisedId" })
  advertisedId?: AdvertisedId;

  @Metadata({ data: "json, name=beaconName" })
  beaconName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ephemeralIdRegistration" })
  ephemeralIdRegistration?: EphemeralIdRegistration;

  @Metadata({ data: "json, name=expectedStability" })
  expectedStability?: BeaconExpectedStabilityEnum;

  @Metadata({ data: "json, name=indoorLevel" })
  indoorLevel?: IndoorLevel;

  @Metadata({ data: "json, name=latLng" })
  latLng?: LatLng;

  @Metadata({ data: "json, name=placeId" })
  placeId?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=provisioningKey" })
  provisioningKey?: string;

  @Metadata({ data: "json, name=status" })
  status?: BeaconStatusEnum;
}
