import { SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerRepositoryIdInput } from "./bitbucketserverrepositoryid";
/**
 * RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method.
**/
export declare class RemoveBitbucketServerConnectedRepositoryRequestInput extends SpeakeasyBase {
    connectedRepository?: BitbucketServerRepositoryIdInput;
}
