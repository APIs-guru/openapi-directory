import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleMonitoringV3Range
/** 
 * Range of numerical values within min and max.
**/
export class GoogleMonitoringV3Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}
