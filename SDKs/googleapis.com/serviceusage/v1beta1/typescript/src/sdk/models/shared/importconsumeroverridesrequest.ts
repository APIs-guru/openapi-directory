import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OverrideInlineSource } from "./overrideinlinesource";

export enum ImportConsumerOverridesRequestForceOnlyEnum {
    QuotaSafetyCheckUnspecified = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
,    LimitDecreaseBelowUsage = "LIMIT_DECREASE_BELOW_USAGE"
,    LimitDecreasePercentageTooHigh = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
}


// ImportConsumerOverridesRequest
/** 
 * Request message for ImportConsumerOverrides
**/
export class ImportConsumerOverridesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=forceOnly" })
  forceOnly?: ImportConsumerOverridesRequestForceOnlyEnum[];

  @Metadata({ data: "json, name=inlineSource" })
  inlineSource?: OverrideInlineSource;
}
