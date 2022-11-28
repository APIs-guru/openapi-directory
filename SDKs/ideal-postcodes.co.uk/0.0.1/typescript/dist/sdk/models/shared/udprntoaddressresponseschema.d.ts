import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class UdprnToAddressResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: Address;
}
