import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SasPortalFrequencyRange } from "./sasportalfrequencyrange";



// SasPortalChannelWithScore
/** 
 * The channel with score.
**/
export class SasPortalChannelWithScore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frequencyRange" })
  frequencyRange?: SasPortalFrequencyRange;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
