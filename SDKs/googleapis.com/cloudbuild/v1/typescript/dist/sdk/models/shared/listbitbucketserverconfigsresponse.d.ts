import { SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerConfig } from "./bitbucketserverconfig";
/**
 * RPC response object returned by ListBitbucketServerConfigs RPC method.
**/
export declare class ListBitbucketServerConfigsResponse extends SpeakeasyBase {
    bitbucketServerConfigs?: BitbucketServerConfig[];
    nextPageToken?: string;
}
