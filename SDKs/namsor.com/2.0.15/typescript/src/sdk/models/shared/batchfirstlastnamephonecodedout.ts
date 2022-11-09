import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNamePhoneCodedOut } from "./firstlastnamephonecodedout";


// BatchFirstLastNamePhoneCodedOut
/** 
 * Represents the output of inferring the LIKELY country and phone code of personal names+phones.
**/
export class BatchFirstLastNamePhoneCodedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNamesWithPhoneNumbers", elemType: shared.FirstLastNamePhoneCodedOut })
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneCodedOut[];
}
