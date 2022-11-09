import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";


// GooglePrivacyDlpV2SelectedInfoTypes
/** 
 * Apply transformation to the selected info_types.
**/
export class GooglePrivacyDlpV2SelectedInfoTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=infoTypes", elemType: shared.GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];
}
