import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecretPayload
/** 
 * A secret payload resource in the Secret Manager API. This contains the sensitive secret data that is associated with a SecretVersion.
**/
export class SecretPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;
}
