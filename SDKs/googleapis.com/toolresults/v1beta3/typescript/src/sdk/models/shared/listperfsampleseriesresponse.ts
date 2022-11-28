import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerfSampleSeries } from "./perfsampleseries";



export class ListPerfSampleSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=perfSampleSeries", elemType: PerfSampleSeries })
  perfSampleSeries?: PerfSampleSeries[];
}
