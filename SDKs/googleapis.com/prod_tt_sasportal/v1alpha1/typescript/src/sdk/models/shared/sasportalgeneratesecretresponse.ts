import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalGenerateSecretResponse
/** 
 * Response for GenerateSecret.
**/
export class SasPortalGenerateSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
