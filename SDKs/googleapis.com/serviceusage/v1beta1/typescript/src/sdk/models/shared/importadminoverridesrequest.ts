import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OverrideInlineSource } from "./overrideinlinesource";

export enum ImportAdminOverridesRequestForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
,    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE"
,    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}


// ImportAdminOverridesRequest
/** 
 * Request message for ImportAdminOverrides
**/
export class ImportAdminOverridesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=forceOnly" })
  forceOnly?: ImportAdminOverridesRequestForceOnlyEnum[];

  @Metadata({ data: "json, name=inlineSource" })
  inlineSource?: OverrideInlineSource;
}
