import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AdvertisedIdTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Eddystone = "EDDYSTONE",
    Ibeacon = "IBEACON",
    Altbeacon = "ALTBEACON",
    EddystoneEid = "EDDYSTONE_EID"
}
/**
 * Defines a unique identifier of a beacon as broadcast by the device.
**/
export declare class AdvertisedId extends SpeakeasyBase {
    id?: string;
    type?: AdvertisedIdTypeEnum;
}
