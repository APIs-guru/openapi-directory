import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo } from "./enterprisecrmfrontendseventbusprotoeventexecutioninfo";
import { GoogleCloudIntegrationsV1alphaExecution } from "./googlecloudintegrationsv1alphaexecution";


// GoogleCloudIntegrationsV1alphaListExecutionsResponse
/** 
 * Response for listing the integration execution data.
**/
export class GoogleCloudIntegrationsV1alphaListExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionInfos", elemType: shared.EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo })
  executionInfos?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo[];

  @Metadata({ data: "json, name=executions", elemType: shared.GoogleCloudIntegrationsV1alphaExecution })
  executions?: GoogleCloudIntegrationsV1alphaExecution[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
