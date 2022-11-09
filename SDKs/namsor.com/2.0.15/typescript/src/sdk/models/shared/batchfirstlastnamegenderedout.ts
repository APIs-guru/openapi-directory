import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameGenderedOut } from "./firstlastnamegenderedout";


// BatchFirstLastNameGenderedOut
/** 
 * Represents the output of inferring the LIKELY gender from a list of personal names.
**/
export class BatchFirstLastNameGenderedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameGenderedOut })
  personalNames?: FirstLastNameGenderedOut[];
}
