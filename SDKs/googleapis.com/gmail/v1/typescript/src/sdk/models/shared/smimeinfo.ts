import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SmimeInfo
/** 
 * An S/MIME email config.
**/
export class SmimeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encryptedKeyPassword" })
  encryptedKeyPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=issuerCn" })
  issuerCn?: string;

  @SpeakeasyMetadata({ data: "json, name=pem" })
  pem?: string;

  @SpeakeasyMetadata({ data: "json, name=pkcs12" })
  pkcs12?: string;
}
