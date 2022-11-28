import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsDriveLabelsV2betaLongTextLimits
/** 
 * Limits for long text Field type.
**/
export class GoogleAppsDriveLabelsV2betaLongTextLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;
}
