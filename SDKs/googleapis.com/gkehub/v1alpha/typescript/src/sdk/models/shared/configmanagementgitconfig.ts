import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementGitConfig
/** 
 * Git repo configuration for a single cluster.
**/
export class ConfigManagementGitConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcpServiceAccountEmail" })
  gcpServiceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=httpsProxy" })
  httpsProxy?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDir" })
  policyDir?: string;

  @SpeakeasyMetadata({ data: "json, name=secretType" })
  secretType?: string;

  @SpeakeasyMetadata({ data: "json, name=syncBranch" })
  syncBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=syncRepo" })
  syncRepo?: string;

  @SpeakeasyMetadata({ data: "json, name=syncRev" })
  syncRev?: string;

  @SpeakeasyMetadata({ data: "json, name=syncWaitSecs" })
  syncWaitSecs?: string;
}
