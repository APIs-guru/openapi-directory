import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerfSample } from "./perfsample";



export class BatchCreatePerfSamplesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=perfSamples", elemType: PerfSample })
  perfSamples?: PerfSample[];
}
