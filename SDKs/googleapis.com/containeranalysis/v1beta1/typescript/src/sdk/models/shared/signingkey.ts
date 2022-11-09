import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SigningKey
/** 
 * This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification.
**/
export class SigningKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=keyScheme" })
  keyScheme?: string;

  @Metadata({ data: "json, name=keyType" })
  keyType?: string;

  @Metadata({ data: "json, name=publicKeyValue" })
  publicKeyValue?: string;
}
