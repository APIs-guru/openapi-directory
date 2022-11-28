import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";



// GooglePrivacyDlpV2InfoTypeStats
/** 
 * Statistics regarding a specific InfoType.
**/
export class GooglePrivacyDlpV2InfoTypeStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;
}
