import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";



// SasPortalDpaMoveList
/** 
 * An entry in a DPA's move list.
**/
export class SasPortalDpaMoveList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dpaId" })
  dpaId?: string;

  @SpeakeasyMetadata({ data: "json, name=frequencyRange" })
  frequencyRange?: SasPortalFrequencyRange;
}
