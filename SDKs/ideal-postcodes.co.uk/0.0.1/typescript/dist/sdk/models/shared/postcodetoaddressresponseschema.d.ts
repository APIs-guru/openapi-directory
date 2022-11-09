import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
export declare class PostcodeToAddressResponseSchema extends SpeakeasyBase {
    code?: number;
    message?: string;
    result?: Address[];
}
