import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestAccelerator } from "./guestaccelerator";


export enum VmResourceBasedCudPlanEnum {
    CommitmentPlanUnspecified = "COMMITMENT_PLAN_UNSPECIFIED",
    TwelveMonth = "TWELVE_MONTH",
    ThirtySixMonth = "THIRTY_SIX_MONTH"
}


// VmResourceBasedCud
/** 
 * Specifies a resource-based committed use discount (CUD).
**/
export class VmResourceBasedCud extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guestAccelerator" })
  guestAccelerator?: GuestAccelerator;

  @SpeakeasyMetadata({ data: "json, name=machineSeries" })
  machineSeries?: string;

  @SpeakeasyMetadata({ data: "json, name=memorySizeGb" })
  memorySizeGb?: number;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: VmResourceBasedCudPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualCpuCount" })
  virtualCpuCount?: string;
}
