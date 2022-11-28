import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";
export declare class ReturnaddressCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    merchantId?: string;
    method?: string;
    returnAddress?: ReturnAddress;
    returnAddressId?: string;
}
