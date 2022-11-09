import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PerfSample } from "./perfsample";


// BatchCreatePerfSamplesRequest
/** 
 * The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
**/
export class BatchCreatePerfSamplesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=perfSamples", elemType: shared.PerfSample })
  perfSamples?: PerfSample[];
}
