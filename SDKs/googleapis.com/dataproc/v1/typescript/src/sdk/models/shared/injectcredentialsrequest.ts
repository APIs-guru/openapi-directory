import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InjectCredentialsRequest
/** 
 * A request to inject credentials into a cluster.
**/
export class InjectCredentialsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @Metadata({ data: "json, name=credentialsCiphertext" })
  credentialsCiphertext?: string;
}
