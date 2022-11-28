import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DecryptRequest
/** 
 * Request message for KeyManagementService.Decrypt.
**/
export class DecryptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAuthenticatedData" })
  additionalAuthenticatedData?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalAuthenticatedDataCrc32c" })
  additionalAuthenticatedDataCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @SpeakeasyMetadata({ data: "json, name=ciphertextCrc32c" })
  ciphertextCrc32c?: string;
}
