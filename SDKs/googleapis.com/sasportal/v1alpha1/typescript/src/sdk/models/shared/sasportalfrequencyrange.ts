import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalFrequencyRange
/** 
 * Frequency range from `low_frequency` to `high_frequency`.
**/
export class SasPortalFrequencyRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=highFrequencyMhz" })
  highFrequencyMhz?: number;

  @Metadata({ data: "json, name=lowFrequencyMhz" })
  lowFrequencyMhz?: number;
}
