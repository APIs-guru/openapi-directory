import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SmimeInfo
/** 
 * An S/MIME email config.
**/
export class SmimeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=encryptedKeyPassword" })
  encryptedKeyPassword?: string;

  @Metadata({ data: "json, name=expiration" })
  expiration?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=issuerCn" })
  issuerCn?: string;

  @Metadata({ data: "json, name=pem" })
  pem?: string;

  @Metadata({ data: "json, name=pkcs12" })
  pkcs12?: string;
}
