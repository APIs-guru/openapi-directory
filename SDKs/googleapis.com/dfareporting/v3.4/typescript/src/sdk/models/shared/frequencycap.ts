import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FrequencyCap
/** 
 * Frequency Cap.
**/
export class FrequencyCap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=impressions" })
  impressions?: string;
}
