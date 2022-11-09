import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AdvertisedIdTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Eddystone = "EDDYSTONE"
,    Ibeacon = "IBEACON"
,    Altbeacon = "ALTBEACON"
,    EddystoneEid = "EDDYSTONE_EID"
}


// AdvertisedId
/** 
 * Defines a unique identifier of a beacon as broadcast by the device.
**/
export class AdvertisedId extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: AdvertisedIdTypeEnum;
}
