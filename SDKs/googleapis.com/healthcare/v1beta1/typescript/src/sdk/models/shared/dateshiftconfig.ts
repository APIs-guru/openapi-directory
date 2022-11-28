import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KmsWrappedCryptoKey } from "./kmswrappedcryptokey";



// DateShiftConfig
/** 
 * Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
**/
export class DateShiftConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKey" })
  cryptoKey?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsWrapped" })
  kmsWrapped?: KmsWrappedCryptoKey;
}
