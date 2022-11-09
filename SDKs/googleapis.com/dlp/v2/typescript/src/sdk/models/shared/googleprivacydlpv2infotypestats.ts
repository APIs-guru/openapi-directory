import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";


// GooglePrivacyDlpV2InfoTypeStats
/** 
 * Statistics regarding a specific InfoType.
**/
export class GooglePrivacyDlpV2InfoTypeStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=infoType" })
  infoType?: GooglePrivacyDlpV2InfoType;
}
