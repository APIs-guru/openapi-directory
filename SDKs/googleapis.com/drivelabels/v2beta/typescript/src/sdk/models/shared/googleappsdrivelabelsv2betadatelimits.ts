import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDate } from "./googletypedate";


// GoogleAppsDriveLabelsV2betaDateLimits
/** 
 * Limits for date Field type.
**/
export class GoogleAppsDriveLabelsV2betaDateLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: GoogleTypeDate;

  @Metadata({ data: "json, name=minValue" })
  minValue?: GoogleTypeDate;
}
