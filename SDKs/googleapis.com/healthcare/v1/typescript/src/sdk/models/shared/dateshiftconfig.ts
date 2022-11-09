import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KmsWrappedCryptoKey } from "./kmswrappedcryptokey";


// DateShiftConfig
/** 
 * Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
**/
export class DateShiftConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cryptoKey" })
  cryptoKey?: string;

  @Metadata({ data: "json, name=kmsWrapped" })
  kmsWrapped?: KmsWrappedCryptoKey;
}
