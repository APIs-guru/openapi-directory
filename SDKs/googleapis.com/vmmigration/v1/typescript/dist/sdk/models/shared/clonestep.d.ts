import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CloneStep holds information about the clone step progress.
**/
export declare class CloneStep extends SpeakeasyBase {
    adaptingOs?: Map<string, any>;
    endTime?: string;
    instantiatingMigratedVm?: Map<string, any>;
    preparingVmDisks?: Map<string, any>;
    startTime?: string;
}
