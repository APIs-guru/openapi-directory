import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BitbucketServerRepositoryId } from "./bitbucketserverrepositoryid";
import { BitbucketServerSecrets } from "./bitbucketserversecrets";


// BitbucketServerConfig
/** 
 * BitbucketServerConfig represents the configuration for a Bitbucket Server.
**/
export class BitbucketServerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=connectedRepositories", elemType: shared.BitbucketServerRepositoryId })
  connectedRepositories?: BitbucketServerRepositoryId[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=peeredNetwork" })
  peeredNetwork?: string;

  @Metadata({ data: "json, name=secrets" })
  secrets?: BitbucketServerSecrets;

  @Metadata({ data: "json, name=sslCa" })
  sslCa?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=webhookKey" })
  webhookKey?: string;
}
