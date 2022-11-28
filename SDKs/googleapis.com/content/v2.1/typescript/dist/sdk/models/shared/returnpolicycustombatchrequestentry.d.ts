import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
export declare class ReturnpolicyCustomBatchRequestEntry extends SpeakeasyBase {
    batchId?: number;
    merchantId?: string;
    method?: string;
    returnPolicy?: ReturnPolicy;
    returnPolicyId?: string;
}
