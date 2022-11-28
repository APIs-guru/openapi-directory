import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InjectCredentialsRequest
/** 
 * A request to inject credentials into a cluster.
**/
export class InjectCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterUuid" })
  clusterUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=credentialsCiphertext" })
  credentialsCiphertext?: string;
}
