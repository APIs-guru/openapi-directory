import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricsValue
/** 
 * Metrics value that holds number of executions counted.
**/
export class MetricsValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
