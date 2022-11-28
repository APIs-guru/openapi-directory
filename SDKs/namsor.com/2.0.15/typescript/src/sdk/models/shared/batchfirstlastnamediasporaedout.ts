import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameDiasporaedOut } from "./firstlastnamediasporaedout";



// BatchFirstLastNameDiasporaedOut
/** 
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
**/
export class BatchFirstLastNameDiasporaedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameDiasporaedOut })
  personalNames?: FirstLastNameDiasporaedOut[];
}
