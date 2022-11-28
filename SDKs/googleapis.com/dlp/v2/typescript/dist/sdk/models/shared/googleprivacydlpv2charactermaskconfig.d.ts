import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CharsToIgnore } from "./googleprivacydlpv2charstoignore";
/**
 * Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.
**/
export declare class GooglePrivacyDlpV2CharacterMaskConfig extends SpeakeasyBase {
    charactersToIgnore?: GooglePrivacyDlpV2CharsToIgnore[];
    maskingCharacter?: string;
    numberToMask?: number;
    reverseOrder?: boolean;
}
