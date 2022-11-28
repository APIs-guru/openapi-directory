import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AdvertisedIdTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Eddystone = "EDDYSTONE",
    Ibeacon = "IBEACON",
    Altbeacon = "ALTBEACON",
    EddystoneEid = "EDDYSTONE_EID"
}


// AdvertisedId
/** 
 * Defines a unique identifier of a beacon as broadcast by the device.
**/
export class AdvertisedId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AdvertisedIdTypeEnum;
}
