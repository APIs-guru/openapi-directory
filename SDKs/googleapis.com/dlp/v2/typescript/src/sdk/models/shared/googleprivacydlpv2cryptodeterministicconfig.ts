import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";


// GooglePrivacyDlpV2CryptoDeterministicConfig
/** 
 * Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
**/
export class GooglePrivacyDlpV2CryptoDeterministicConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=cryptoKey" })
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;

  @Metadata({ data: "json, name=surrogateInfoType" })
  surrogateInfoType?: GooglePrivacyDlpV2InfoType;
}
