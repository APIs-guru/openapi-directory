import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterMaskConfig } from "./charactermaskconfig";
import { CryptoHashConfig } from "./cryptohashconfig";
import { DateShiftConfig } from "./dateshiftconfig";
/**
 * Specifies additional options to apply to the base `profile`.
**/
export declare class GoogleCloudHealthcareV1beta1DeidentifyOptions extends SpeakeasyBase {
    characterMaskConfig?: CharacterMaskConfig;
    contextualDeid?: Map<string, any>;
    cryptoHashConfig?: CryptoHashConfig;
    dateShiftConfig?: DateShiftConfig;
    keepExtensions?: Map<string, any>;
}
