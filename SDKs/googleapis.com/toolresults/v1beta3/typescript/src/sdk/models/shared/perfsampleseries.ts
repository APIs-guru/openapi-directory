import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicPerfSampleSeries } from "./basicperfsampleseries";



// PerfSampleSeries
/** 
 * Resource representing a collection of performance samples (or data points)
**/
export class PerfSampleSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicPerfSampleSeries" })
  basicPerfSampleSeries?: BasicPerfSampleSeries;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=sampleSeriesId" })
  sampleSeriesId?: string;

  @SpeakeasyMetadata({ data: "json, name=stepId" })
  stepId?: string;
}
