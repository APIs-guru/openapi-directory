import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementGitConfig
/** 
 * Git repo configuration for a single cluster.
**/
export class ConfigManagementGitConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcpServiceAccountEmail" })
  gcpServiceAccountEmail?: string;

  @Metadata({ data: "json, name=httpsProxy" })
  httpsProxy?: string;

  @Metadata({ data: "json, name=policyDir" })
  policyDir?: string;

  @Metadata({ data: "json, name=secretType" })
  secretType?: string;

  @Metadata({ data: "json, name=syncBranch" })
  syncBranch?: string;

  @Metadata({ data: "json, name=syncRepo" })
  syncRepo?: string;

  @Metadata({ data: "json, name=syncRev" })
  syncRev?: string;

  @Metadata({ data: "json, name=syncWaitSecs" })
  syncWaitSecs?: string;
}
