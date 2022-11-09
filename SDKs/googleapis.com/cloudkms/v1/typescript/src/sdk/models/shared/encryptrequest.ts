import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptRequest
/** 
 * Request message for KeyManagementService.Encrypt.
**/
export class EncryptRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalAuthenticatedData" })
  additionalAuthenticatedData?: string;

  @Metadata({ data: "json, name=additionalAuthenticatedDataCrc32c" })
  additionalAuthenticatedDataCrc32c?: string;

  @Metadata({ data: "json, name=plaintext" })
  plaintext?: string;

  @Metadata({ data: "json, name=plaintextCrc32c" })
  plaintextCrc32c?: string;
}
