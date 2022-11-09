import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2StoredInfoTypeVersion } from "./googleprivacydlpv2storedinfotypeversion";
import { GooglePrivacyDlpV2StoredInfoTypeVersion } from "./googleprivacydlpv2storedinfotypeversion";


// GooglePrivacyDlpV2StoredInfoType
/** 
 * StoredInfoType resource message that contains information about the current version and any pending updates.
**/
export class GooglePrivacyDlpV2StoredInfoType extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentVersion" })
  currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pendingVersions", elemType: shared.GooglePrivacyDlpV2StoredInfoTypeVersion })
  pendingVersions?: GooglePrivacyDlpV2StoredInfoTypeVersion[];
}
