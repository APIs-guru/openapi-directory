import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";



// GoogleAppsDriveLabelsV2betaDateLimits
/** 
 * Limits for date Field type.
**/
export class GoogleAppsDriveLabelsV2betaDateLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: GoogleTypeDate;
}
