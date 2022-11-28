import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerfSample } from "./perfsample";



// BatchCreatePerfSamplesRequest
/** 
 * The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
**/
export class BatchCreatePerfSamplesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=perfSamples", elemType: PerfSample })
  perfSamples?: PerfSample[];
}
