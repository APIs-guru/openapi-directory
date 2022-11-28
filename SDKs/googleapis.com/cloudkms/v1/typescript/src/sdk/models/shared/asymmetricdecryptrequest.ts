import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AsymmetricDecryptRequest
/** 
 * Request message for KeyManagementService.AsymmetricDecrypt.
**/
export class AsymmetricDecryptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @SpeakeasyMetadata({ data: "json, name=ciphertextCrc32c" })
  ciphertextCrc32c?: string;
}
