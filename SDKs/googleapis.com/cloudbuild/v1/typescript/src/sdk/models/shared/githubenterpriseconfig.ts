import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitHubEnterpriseSecrets } from "./githubenterprisesecrets";



// GitHubEnterpriseConfig
/** 
 * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
**/
export class GitHubEnterpriseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=hostUrl" })
  hostUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets" })
  secrets?: GitHubEnterpriseSecrets;

  @SpeakeasyMetadata({ data: "json, name=sslCa" })
  sslCa?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookKey" })
  webhookKey?: string;
}


// GitHubEnterpriseConfigInput
/** 
 * GitHubEnterpriseConfig represents a configuration for a GitHub Enterprise server.
**/
export class GitHubEnterpriseConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=hostUrl" })
  hostUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets" })
  secrets?: GitHubEnterpriseSecrets;

  @SpeakeasyMetadata({ data: "json, name=sslCa" })
  sslCa?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookKey" })
  webhookKey?: string;
}
