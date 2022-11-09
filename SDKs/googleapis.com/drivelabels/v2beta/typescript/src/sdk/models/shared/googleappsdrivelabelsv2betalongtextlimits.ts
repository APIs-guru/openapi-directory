import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsDriveLabelsV2betaLongTextLimits
/** 
 * Limits for long text Field type.
**/
export class GoogleAppsDriveLabelsV2betaLongTextLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;
}
