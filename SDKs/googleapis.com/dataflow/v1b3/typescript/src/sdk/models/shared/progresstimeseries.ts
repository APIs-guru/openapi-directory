import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Point } from "./point";


// ProgressTimeseries
/** 
 * Information about the progress of some component of job execution.
**/
export class ProgressTimeseries extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentProgress" })
  currentProgress?: number;

  @Metadata({ data: "json, name=dataPoints", elemType: shared.Point })
  dataPoints?: Point[];
}
