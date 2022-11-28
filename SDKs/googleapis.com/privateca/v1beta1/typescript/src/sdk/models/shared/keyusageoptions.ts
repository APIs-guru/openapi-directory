import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyUsageOptions
/** 
 * KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.
**/
export class KeyUsageOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certSign" })
  certSign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contentCommitment" })
  contentCommitment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=crlSign" })
  crlSign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataEncipherment" })
  dataEncipherment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=decipherOnly" })
  decipherOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=digitalSignature" })
  digitalSignature?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encipherOnly" })
  encipherOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyAgreement" })
  keyAgreement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keyEncipherment" })
  keyEncipherment?: boolean;
}
