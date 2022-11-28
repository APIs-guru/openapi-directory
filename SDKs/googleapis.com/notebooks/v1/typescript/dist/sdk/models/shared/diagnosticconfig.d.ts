import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines flags that are used to run the diagnostic tool
**/
export declare class DiagnosticConfig extends SpeakeasyBase {
    copyHomeFilesFlagEnabled?: boolean;
    gcsBucket?: string;
    packetCaptureFlagEnabled?: boolean;
    relativePath?: string;
    repairFlagEnabled?: boolean;
}
