import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNamePhoneCodedOut } from "./firstlastnamephonecodedout";



// BatchFirstLastNamePhoneCodedOut
/** 
 * Represents the output of inferring the LIKELY country and phone code of personal names+phones.
**/
export class BatchFirstLastNamePhoneCodedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNamesWithPhoneNumbers", elemType: FirstLastNamePhoneCodedOut })
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneCodedOut[];
}
