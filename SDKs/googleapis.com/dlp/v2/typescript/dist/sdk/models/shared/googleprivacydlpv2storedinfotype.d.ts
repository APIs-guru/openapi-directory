import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StoredInfoTypeVersion } from "./googleprivacydlpv2storedinfotypeversion";
/**
 * StoredInfoType resource message that contains information about the current version and any pending updates.
**/
export declare class GooglePrivacyDlpV2StoredInfoType extends SpeakeasyBase {
    currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion;
    name?: string;
    pendingVersions?: GooglePrivacyDlpV2StoredInfoTypeVersion[];
}
