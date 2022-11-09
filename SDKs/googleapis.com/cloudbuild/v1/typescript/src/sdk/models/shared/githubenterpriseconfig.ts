import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitHubEnterpriseSecrets } from "./githubenterprisesecrets";


// GitHubEnterpriseConfig
/** 
 * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
**/
export class GitHubEnterpriseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=hostUrl" })
  hostUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;

  @Metadata({ data: "json, name=secrets" })
  secrets?: GitHubEnterpriseSecrets;

  @Metadata({ data: "json, name=sslCa" })
  sslCa?: string;

  @Metadata({ data: "json, name=webhookKey" })
  webhookKey?: string;
}
