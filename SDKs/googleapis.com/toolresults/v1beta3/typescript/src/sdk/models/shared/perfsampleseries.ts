import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicPerfSampleSeries } from "./basicperfsampleseries";


// PerfSampleSeries
/** 
 * Resource representing a collection of performance samples (or data points)
**/
export class PerfSampleSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicPerfSampleSeries" })
  basicPerfSampleSeries?: BasicPerfSampleSeries;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=sampleSeriesId" })
  sampleSeriesId?: string;

  @Metadata({ data: "json, name=stepId" })
  stepId?: string;
}
