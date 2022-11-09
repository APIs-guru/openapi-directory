import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaTextLimits
/** 
 * Limits for text Field type.
**/
export class GoogleAppsDriveLabelsV2betaTextLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;
}
