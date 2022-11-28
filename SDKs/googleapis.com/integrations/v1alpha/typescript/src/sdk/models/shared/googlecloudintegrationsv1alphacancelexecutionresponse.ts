import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaCancelExecutionResponse
/** 
 * Response for cancelling an execution.
**/
export class GoogleCloudIntegrationsV1alphaCancelExecutionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isCanceled" })
  isCanceled?: boolean;
}
