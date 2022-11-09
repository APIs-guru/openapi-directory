import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";


// SasPortalChannelWithScore
/** 
 * The channel with score.
**/
export class SasPortalChannelWithScore extends SpeakeasyBase {
  @Metadata({ data: "json, name=frequencyRange" })
  frequencyRange?: SasPortalFrequencyRange;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
