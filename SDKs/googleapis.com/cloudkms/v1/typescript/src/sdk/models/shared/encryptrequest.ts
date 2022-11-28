import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptRequest
/** 
 * Request message for KeyManagementService.Encrypt.
**/
export class EncryptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalAuthenticatedData" })
  additionalAuthenticatedData?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalAuthenticatedDataCrc32c" })
  additionalAuthenticatedDataCrc32c?: string;

  @SpeakeasyMetadata({ data: "json, name=plaintext" })
  plaintext?: string;

  @SpeakeasyMetadata({ data: "json, name=plaintextCrc32c" })
  plaintextCrc32c?: string;
}
