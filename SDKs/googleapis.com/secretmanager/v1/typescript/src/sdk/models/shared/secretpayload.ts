import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SecretPayload
/** 
 * A secret payload resource in the Secret Manager API. This contains the sensitive secret payload that is associated with a SecretVersion.
**/
export class SecretPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=dataCrc32c" })
  dataCrc32c?: string;
}
