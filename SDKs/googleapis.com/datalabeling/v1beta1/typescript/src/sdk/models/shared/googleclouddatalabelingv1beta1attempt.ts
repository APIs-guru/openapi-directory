import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";



// GoogleCloudDatalabelingV1beta1Attempt
/** 
 * Records a failed evaluation job run.
**/
export class GoogleCloudDatalabelingV1beta1Attempt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptTime" })
  attemptTime?: string;

  @SpeakeasyMetadata({ data: "json, name=partialFailures", elemType: GoogleRpcStatus })
  partialFailures?: GoogleRpcStatus[];
}
