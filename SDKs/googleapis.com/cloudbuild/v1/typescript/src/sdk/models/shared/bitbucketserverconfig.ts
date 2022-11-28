import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerRepositoryId } from "./bitbucketserverrepositoryid";
import { BitbucketServerSecrets } from "./bitbucketserversecrets";



// BitbucketServerConfig
/** 
 * BitbucketServerConfig represents the configuration for a Bitbucket Server.
**/
export class BitbucketServerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=connectedRepositories", elemType: BitbucketServerRepositoryId })
  connectedRepositories?: BitbucketServerRepositoryId[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets" })
  secrets?: BitbucketServerSecrets;

  @SpeakeasyMetadata({ data: "json, name=sslCa" })
  sslCa?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookKey" })
  webhookKey?: string;
}


// BitbucketServerConfigInput
/** 
 * BitbucketServerConfig represents the configuration for a Bitbucket Server.
**/
export class BitbucketServerConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets" })
  secrets?: BitbucketServerSecrets;

  @SpeakeasyMetadata({ data: "json, name=sslCa" })
  sslCa?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
