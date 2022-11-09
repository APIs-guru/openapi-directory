import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleRpcStatus } from "./googlerpcstatus";


// GoogleCloudDatalabelingV1beta1Attempt
/** 
 * Records a failed evaluation job run.
**/
export class GoogleCloudDatalabelingV1beta1Attempt extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptTime" })
  attemptTime?: string;

  @Metadata({ data: "json, name=partialFailures", elemType: shared.GoogleRpcStatus })
  partialFailures?: GoogleRpcStatus[];
}
