import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ReturnAddress } from "./returnaddress";
export declare class ReturnaddressCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    kind?: string;
    returnAddress?: ReturnAddress;
}
