import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeVersion } from "./googleprivacydlpv2storedinfotypeversion";



// GooglePrivacyDlpV2StoredInfoType
/** 
 * StoredInfoType resource message that contains information about the current version and any pending updates.
**/
export class GooglePrivacyDlpV2StoredInfoType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentVersion" })
  currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingVersions", elemType: GooglePrivacyDlpV2StoredInfoTypeVersion })
  pendingVersions?: GooglePrivacyDlpV2StoredInfoTypeVersion[];
}
