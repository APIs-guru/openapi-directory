import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DecryptRequest
/** 
 * Request message for KeyManagementService.Decrypt.
**/
export class DecryptRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalAuthenticatedData" })
  additionalAuthenticatedData?: string;

  @Metadata({ data: "json, name=additionalAuthenticatedDataCrc32c" })
  additionalAuthenticatedDataCrc32c?: string;

  @Metadata({ data: "json, name=ciphertext" })
  ciphertext?: string;

  @Metadata({ data: "json, name=ciphertextCrc32c" })
  ciphertextCrc32c?: string;
}
