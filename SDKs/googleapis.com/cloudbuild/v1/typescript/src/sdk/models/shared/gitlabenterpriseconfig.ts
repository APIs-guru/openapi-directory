import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceDirectoryConfig } from "./servicedirectoryconfig";


// GitLabEnterpriseConfig
/** 
 * GitLabEnterpriseConfig represents the configuration for a GitLabEnterprise integration.
**/
export class GitLabEnterpriseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @Metadata({ data: "json, name=serviceDirectoryConfig" })
  serviceDirectoryConfig?: ServiceDirectoryConfig;

  @Metadata({ data: "json, name=sslCa" })
  sslCa?: string;
}
