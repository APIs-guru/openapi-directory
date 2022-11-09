import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementOciConfig
/** 
 * OCI repo configuration for a single cluster
**/
export class ConfigManagementOciConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcpServiceAccountEmail" })
  gcpServiceAccountEmail?: string;

  @Metadata({ data: "json, name=policyDir" })
  policyDir?: string;

  @Metadata({ data: "json, name=secretType" })
  secretType?: string;

  @Metadata({ data: "json, name=syncRepo" })
  syncRepo?: string;

  @Metadata({ data: "json, name=syncWaitSecs" })
  syncWaitSecs?: string;
}
