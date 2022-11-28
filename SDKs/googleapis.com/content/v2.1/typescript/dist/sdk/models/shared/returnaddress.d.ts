import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddressAddress } from "./returnaddressaddress";
/**
 * Return address resource.
**/
export declare class ReturnAddress extends SpeakeasyBase {
    address?: ReturnAddressAddress;
    country?: string;
    kind?: string;
    label?: string;
    phoneNumber?: string;
    returnAddressId?: string;
}
