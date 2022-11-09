import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateCryptoKeyPrimaryVersionRequest
/** 
 * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
**/
export class UpdateCryptoKeyPrimaryVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cryptoKeyVersionId" })
  cryptoKeyVersionId?: string;
}
