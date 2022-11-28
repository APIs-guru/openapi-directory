import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";



// GooglePrivacyDlpV2ExcludeInfoTypes
/** 
 * List of excluded infoTypes.
**/
export class GooglePrivacyDlpV2ExcludeInfoTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoTypes", elemType: GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];
}
