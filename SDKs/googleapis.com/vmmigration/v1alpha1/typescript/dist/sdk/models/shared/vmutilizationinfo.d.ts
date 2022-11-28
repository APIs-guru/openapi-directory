import { SpeakeasyBase } from "../../../internal/utils";
import { VmUtilizationMetrics } from "./vmutilizationmetrics";
import { VmwareVmDetails } from "./vmwarevmdetails";
import { VmwareVmDetailsInput } from "./vmwarevmdetails";
/**
 * Utilization information of a single VM.
**/
export declare class VmUtilizationInfo extends SpeakeasyBase {
    utilization?: VmUtilizationMetrics;
    vmId?: string;
    vmwareVmDetails?: VmwareVmDetails;
}
/**
 * Utilization information of a single VM.
**/
export declare class VmUtilizationInfoInput extends SpeakeasyBase {
    utilization?: VmUtilizationMetrics;
    vmId?: string;
    vmwareVmDetails?: VmwareVmDetailsInput;
}
