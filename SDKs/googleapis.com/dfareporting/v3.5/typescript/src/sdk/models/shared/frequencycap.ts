import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FrequencyCap
/** 
 * Frequency Cap.
**/
export class FrequencyCap extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=impressions" })
  impressions?: string;
}
