import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceDirectoryConfig } from "./servicedirectoryconfig";



// GitLabEnterpriseConfig
/** 
 * GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration.
**/
export class GitLabEnterpriseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDirectoryConfig" })
  serviceDirectoryConfig?: ServiceDirectoryConfig;

  @SpeakeasyMetadata({ data: "json, name=sslCa" })
  sslCa?: string;
}
