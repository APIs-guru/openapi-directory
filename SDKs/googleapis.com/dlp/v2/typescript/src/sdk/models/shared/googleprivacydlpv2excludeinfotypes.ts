import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";


// GooglePrivacyDlpV2ExcludeInfoTypes
/** 
 * List of excluded infoTypes.
**/
export class GooglePrivacyDlpV2ExcludeInfoTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=infoTypes", elemType: shared.GooglePrivacyDlpV2InfoType })
  infoTypes?: GooglePrivacyDlpV2InfoType[];
}
