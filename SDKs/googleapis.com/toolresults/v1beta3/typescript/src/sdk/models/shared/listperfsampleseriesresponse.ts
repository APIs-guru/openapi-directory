import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PerfSampleSeries } from "./perfsampleseries";


export class ListPerfSampleSeriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=perfSampleSeries", elemType: shared.PerfSampleSeries })
  perfSampleSeries?: PerfSampleSeries[];
}
