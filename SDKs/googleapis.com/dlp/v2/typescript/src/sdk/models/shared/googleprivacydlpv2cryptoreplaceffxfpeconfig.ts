import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2CryptoKey } from "./googleprivacydlpv2cryptokey";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";

export enum GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum {
    FfxCommonNativeAlphabetUnspecified = "FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED"
,    Numeric = "NUMERIC"
,    Hexadecimal = "HEXADECIMAL"
,    UpperCaseAlphaNumeric = "UPPER_CASE_ALPHA_NUMERIC"
,    AlphaNumeric = "ALPHA_NUMERIC"
}


// GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig
/** 
 * Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.
**/
export class GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=commonAlphabet" })
  commonAlphabet?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabetEnum;

  @Metadata({ data: "json, name=context" })
  context?: GooglePrivacyDlpV2FieldId;

  @Metadata({ data: "json, name=cryptoKey" })
  cryptoKey?: GooglePrivacyDlpV2CryptoKey;

  @Metadata({ data: "json, name=customAlphabet" })
  customAlphabet?: string;

  @Metadata({ data: "json, name=radix" })
  radix?: number;

  @Metadata({ data: "json, name=surrogateInfoType" })
  surrogateInfoType?: GooglePrivacyDlpV2InfoType;
}
