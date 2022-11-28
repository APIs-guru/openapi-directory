import { SpeakeasyBase } from "../../../internal/utils";
import { KmsWrappedCryptoKey } from "./kmswrappedcryptokey";
/**
 * Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
**/
export declare class DateShiftConfig extends SpeakeasyBase {
    cryptoKey?: string;
    kmsWrapped?: KmsWrappedCryptoKey;
}
