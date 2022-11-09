import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PerfSample } from "./perfsample";


export class BatchCreatePerfSamplesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=perfSamples", elemType: shared.PerfSample })
  perfSamples?: PerfSample[];
}
