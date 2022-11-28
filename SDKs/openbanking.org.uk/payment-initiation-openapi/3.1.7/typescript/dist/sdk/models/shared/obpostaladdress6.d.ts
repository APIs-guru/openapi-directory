import { SpeakeasyBase } from "../../../internal/utils";
import { ObAddressTypeCodeEnum } from "./obaddresstypecodeenum";
/**
 * Information that locates and identifies a specific address, as defined by postal services.
**/
export declare class ObPostalAddress6 extends SpeakeasyBase {
    addressLine?: string[];
    addressType?: ObAddressTypeCodeEnum;
    buildingNumber?: string;
    country?: string;
    countrySubDivision?: string;
    department?: string;
    postCode?: string;
    streetName?: string;
    subDepartment?: string;
    townName?: string;
}
