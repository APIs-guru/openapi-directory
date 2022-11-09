import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyUsageOptions
/** 
 * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
**/
export class KeyUsageOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=certSign" })
  certSign?: boolean;

  @Metadata({ data: "json, name=contentCommitment" })
  contentCommitment?: boolean;

  @Metadata({ data: "json, name=crlSign" })
  crlSign?: boolean;

  @Metadata({ data: "json, name=dataEncipherment" })
  dataEncipherment?: boolean;

  @Metadata({ data: "json, name=decipherOnly" })
  decipherOnly?: boolean;

  @Metadata({ data: "json, name=digitalSignature" })
  digitalSignature?: boolean;

  @Metadata({ data: "json, name=encipherOnly" })
  encipherOnly?: boolean;

  @Metadata({ data: "json, name=keyAgreement" })
  keyAgreement?: boolean;

  @Metadata({ data: "json, name=keyEncipherment" })
  keyEncipherment?: boolean;
}
