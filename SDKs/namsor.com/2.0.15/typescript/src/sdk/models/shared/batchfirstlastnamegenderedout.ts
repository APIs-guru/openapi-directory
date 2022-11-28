import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameGenderedOut } from "./firstlastnamegenderedout";



// BatchFirstLastNameGenderedOut
/** 
 * Represents the output of inferring the LIKELY gender from a list of personal names.
**/
export class BatchFirstLastNameGenderedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameGenderedOut })
  personalNames?: FirstLastNameGenderedOut[];
}
