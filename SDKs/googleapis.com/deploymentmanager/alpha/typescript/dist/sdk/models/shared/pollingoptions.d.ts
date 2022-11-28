import { SpeakeasyBase } from "../../../internal/utils";
import { Diagnostic } from "./diagnostic";
export declare class PollingOptions extends SpeakeasyBase {
    diagnostics?: Diagnostic[];
    failCondition?: string;
    finishCondition?: string;
    pollingLink?: string;
    targetLink?: string;
}
