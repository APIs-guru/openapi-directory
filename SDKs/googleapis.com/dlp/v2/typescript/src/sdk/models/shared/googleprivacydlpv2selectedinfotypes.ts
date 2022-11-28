import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";



// GooglePrivacyDlpV2SelectedInfoTypes
/** 
 * Apply transformation to the selected info_types.
**/
export class GooglePrivacyDlpV2SelectedInfoTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=infoTypes", elemType: GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];
}
