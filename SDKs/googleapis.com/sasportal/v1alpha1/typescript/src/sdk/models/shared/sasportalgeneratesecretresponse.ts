import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalGenerateSecretResponse
/** 
 * Response for GenerateSecret.
**/
export class SasPortalGenerateSecretResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
