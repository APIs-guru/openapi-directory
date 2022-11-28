import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaTextLimits
/** 
 * Limits for text Field type.
**/
export class GoogleAppsDriveLabelsV2betaTextLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;
}
