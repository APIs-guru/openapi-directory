import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
export declare class AddressLookupResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: Address;
}
