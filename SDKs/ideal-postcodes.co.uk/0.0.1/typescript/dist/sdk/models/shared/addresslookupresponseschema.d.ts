import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
export declare class AddressLookupResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: Address;
}
