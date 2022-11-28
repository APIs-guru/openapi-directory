import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo } from "./enterprisecrmfrontendseventbusprotoeventexecutioninfo";
import { GoogleCloudIntegrationsV1alphaExecution } from "./googlecloudintegrationsv1alphaexecution";
/**
 * Response for listing the integration execution data.
**/
export declare class GoogleCloudIntegrationsV1alphaListExecutionsResponse extends SpeakeasyBase {
    executionInfos?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo[];
    executions?: GoogleCloudIntegrationsV1alphaExecution[];
    nextPageToken?: string;
}
