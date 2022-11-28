import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo } from "./enterprisecrmfrontendseventbusprotoeventexecutioninfo";
import { GoogleCloudIntegrationsV1alphaExecution } from "./googlecloudintegrationsv1alphaexecution";



// GoogleCloudIntegrationsV1alphaListExecutionsResponse
/** 
 * Response for listing the integration execution data.
**/
export class GoogleCloudIntegrationsV1alphaListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionInfos", elemType: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo })
  executionInfos?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo[];

  @SpeakeasyMetadata({ data: "json, name=executions", elemType: GoogleCloudIntegrationsV1alphaExecution })
  executions?: GoogleCloudIntegrationsV1alphaExecution[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
