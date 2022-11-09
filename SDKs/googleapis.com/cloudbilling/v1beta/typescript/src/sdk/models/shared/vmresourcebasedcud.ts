import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GuestAccelerator } from "./guestaccelerator";

export enum VmResourceBasedCudPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED"
,    TwelveMonth = "TWELVE_MONTH"
,    ThirtySixMonth = "THIRTY_SIX_MONTH"
}


// VmResourceBasedCud
/** 
 * Specifies a resource-based committed use discount (CUD).
**/
export class VmResourceBasedCud extends SpeakeasyBase {
  @Metadata({ data: "json, name=guestAccelerator" })
  guestAccelerator?: GuestAccelerator;

  @Metadata({ data: "json, name=machineSeries" })
  machineSeries?: string;

  @Metadata({ data: "json, name=memorySizeGb" })
  memorySizeGb?: number;

  @Metadata({ data: "json, name=plan" })
  plan?: VmResourceBasedCudPlanEnum;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=virtualCpuCount" })
  virtualCpuCount?: string;
}
