import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BitbucketServerRepositoryIdInput } from "./bitbucketserverrepositoryid";



// RemoveBitbucketServerConnectedRepositoryRequestInput
/** 
 * RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method.
**/
export class RemoveBitbucketServerConnectedRepositoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectedRepository" })
  connectedRepository?: BitbucketServerRepositoryIdInput;
}
