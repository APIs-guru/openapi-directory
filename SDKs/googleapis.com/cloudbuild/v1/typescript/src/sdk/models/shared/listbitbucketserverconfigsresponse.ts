import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerConfig } from "./bitbucketserverconfig";



// ListBitbucketServerConfigsResponse
/** 
 * RPC response object returned by ListBitbucketServerConfigs RPC method.
**/
export class ListBitbucketServerConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitbucketServerConfigs", elemType: BitbucketServerConfig })
  bitbucketServerConfigs?: BitbucketServerConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
