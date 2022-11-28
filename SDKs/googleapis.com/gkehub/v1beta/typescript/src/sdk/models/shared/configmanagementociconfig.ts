import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementOciConfig
/** 
 * OCI repo configuration for a single cluster
**/
export class ConfigManagementOciConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcpServiceAccountEmail" })
  gcpServiceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=policyDir" })
  policyDir?: string;

  @SpeakeasyMetadata({ data: "json, name=secretType" })
  secretType?: string;

  @SpeakeasyMetadata({ data: "json, name=syncRepo" })
  syncRepo?: string;

  @SpeakeasyMetadata({ data: "json, name=syncWaitSecs" })
  syncWaitSecs?: string;
}
