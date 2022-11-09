import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BitbucketServerConfig } from "./bitbucketserverconfig";


// ListBitbucketServerConfigsResponse
/** 
 * RPC response object returned by ListBitbucketServerConfigs RPC method.
**/
export class ListBitbucketServerConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitbucketServerConfigs", elemType: shared.BitbucketServerConfig })
  bitbucketServerConfigs?: BitbucketServerConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
