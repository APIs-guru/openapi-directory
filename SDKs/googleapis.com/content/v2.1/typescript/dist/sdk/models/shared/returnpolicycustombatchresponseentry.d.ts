import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ReturnPolicy } from "./returnpolicy";
export declare class ReturnpolicyCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    kind?: string;
    returnPolicy?: ReturnPolicy;
}
