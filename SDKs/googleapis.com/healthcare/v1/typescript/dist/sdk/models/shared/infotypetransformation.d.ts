import { SpeakeasyBase } from "../../../internal/utils";
import { CharacterMaskConfig } from "./charactermaskconfig";
import { CryptoHashConfig } from "./cryptohashconfig";
import { DateShiftConfig } from "./dateshiftconfig";
/**
 * A transformation to apply to text that is identified as a specific info_type.
**/
export declare class InfoTypeTransformation extends SpeakeasyBase {
    characterMaskConfig?: CharacterMaskConfig;
    cryptoHashConfig?: CryptoHashConfig;
    dateShiftConfig?: DateShiftConfig;
    infoTypes?: string[];
    redactConfig?: Map<string, any>;
    replaceWithInfoTypeConfig?: Map<string, any>;
}
