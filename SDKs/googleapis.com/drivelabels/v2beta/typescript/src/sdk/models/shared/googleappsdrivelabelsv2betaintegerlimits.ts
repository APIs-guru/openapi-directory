import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaIntegerLimits
/** 
 * Limits for integer Field type.
**/
export class GoogleAppsDriveLabelsV2betaIntegerLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: string;
}
