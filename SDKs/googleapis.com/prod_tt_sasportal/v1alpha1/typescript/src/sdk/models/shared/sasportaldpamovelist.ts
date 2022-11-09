import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";


// SasPortalDpaMoveList
/** 
 * An entry in a DPA's move list.
**/
export class SasPortalDpaMoveList extends SpeakeasyBase {
  @Metadata({ data: "json, name=dpaId" })
  dpaId?: string;

  @Metadata({ data: "json, name=frequencyRange" })
  frequencyRange?: SasPortalFrequencyRange;
}
