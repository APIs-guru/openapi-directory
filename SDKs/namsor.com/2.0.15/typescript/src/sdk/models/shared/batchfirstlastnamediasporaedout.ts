import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameDiasporaedOut } from "./firstlastnamediasporaedout";


// BatchFirstLastNameDiasporaedOut
/** 
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
**/
export class BatchFirstLastNameDiasporaedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameDiasporaedOut })
  personalNames?: FirstLastNameDiasporaedOut[];
}
