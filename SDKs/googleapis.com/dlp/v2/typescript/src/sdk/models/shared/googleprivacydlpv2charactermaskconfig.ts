import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2CharsToIgnore } from "./googleprivacydlpv2charstoignore";


// GooglePrivacyDlpV2CharacterMaskConfig
/** 
 * Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.
**/
export class GooglePrivacyDlpV2CharacterMaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=charactersToIgnore", elemType: shared.GooglePrivacyDlpV2CharsToIgnore })
  charactersToIgnore?: GooglePrivacyDlpV2CharsToIgnore[];

  @Metadata({ data: "json, name=maskingCharacter" })
  maskingCharacter?: string;

  @Metadata({ data: "json, name=numberToMask" })
  numberToMask?: number;

  @Metadata({ data: "json, name=reverseOrder" })
  reverseOrder?: boolean;
}
