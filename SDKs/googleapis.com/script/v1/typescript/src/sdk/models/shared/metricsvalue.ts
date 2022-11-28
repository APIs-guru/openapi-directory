import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricsValue
/** 
 * Metrics value that holds number of executions counted.
**/
export class MetricsValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
