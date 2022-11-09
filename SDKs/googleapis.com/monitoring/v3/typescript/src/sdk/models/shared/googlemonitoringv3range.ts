import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleMonitoringV3Range
/** 
 * Range of numerical values within min and max.
**/
export class GoogleMonitoringV3Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}
