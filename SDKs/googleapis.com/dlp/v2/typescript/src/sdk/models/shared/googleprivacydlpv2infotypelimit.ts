import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";



// GooglePrivacyDlpV2InfoTypeLimit
/** 
 * Max findings configuration per infoType, per content item or long running DlpJob.
**/
export class GooglePrivacyDlpV2InfoTypeLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;

  @SpeakeasyMetadata({ data: "json, name=maxFindings" })
  maxFindings?: number;
}
