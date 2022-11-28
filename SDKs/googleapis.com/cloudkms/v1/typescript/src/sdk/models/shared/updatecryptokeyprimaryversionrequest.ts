import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateCryptoKeyPrimaryVersionRequest
/** 
 * Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.
**/
export class UpdateCryptoKeyPrimaryVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKeyVersionId" })
  cryptoKeyVersionId?: string;
}
