import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
**/
export declare class GooglePrivacyDlpV2CryptoDeterministicConfig extends SpeakeasyBase {
    context?: GooglePrivacyDlpV2FieldId;
    cryptoKey?: GooglePrivacyDlpV2CryptoKey;
    surrogateInfoType?: GooglePrivacyDlpV2InfoType;
}
