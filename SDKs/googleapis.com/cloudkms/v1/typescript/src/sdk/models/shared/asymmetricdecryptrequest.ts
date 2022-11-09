import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AsymmetricDecryptRequest
/** 
 * Request message for KeyManagementService.AsymmetricDecrypt.
**/
export class AsymmetricDecryptRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @Metadata({ data: "json, name=ciphertextCrc32c" })
  ciphertextCrc32c?: string;
}
