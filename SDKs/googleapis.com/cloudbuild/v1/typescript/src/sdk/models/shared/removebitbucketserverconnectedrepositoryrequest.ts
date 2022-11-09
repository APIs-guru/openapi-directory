import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BitbucketServerRepositoryId } from "./bitbucketserverrepositoryid";


// RemoveBitbucketServerConnectedRepositoryRequest
/** 
 * RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method.
**/
export class RemoveBitbucketServerConnectedRepositoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectedRepository" })
  connectedRepository?: BitbucketServerRepositoryId;
}
