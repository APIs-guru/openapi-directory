import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAccelerator } from "./guestaccelerator";
export declare enum VmResourceBasedCudPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    TwelveMonth = "TWELVE_MONTH",
    ThirtySixMonth = "THIRTY_SIX_MONTH"
}
/**
 * Specifies a resource-based committed use discount (CUD).
**/
export declare class VmResourceBasedCud extends SpeakeasyBase {
    guestAccelerator?: GuestAccelerator;
    machineSeries?: string;
    memorySizeGb?: number;
    plan?: VmResourceBasedCudPlanEnum;
    region?: string;
    virtualCpuCount?: string;
}
