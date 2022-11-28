import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalFrequencyRange
/** 
 * Frequency range from `low_frequency` to `high_frequency`.
**/
export class SasPortalFrequencyRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=highFrequencyMhz" })
  highFrequencyMhz?: number;

  @SpeakeasyMetadata({ data: "json, name=lowFrequencyMhz" })
  lowFrequencyMhz?: number;
}
