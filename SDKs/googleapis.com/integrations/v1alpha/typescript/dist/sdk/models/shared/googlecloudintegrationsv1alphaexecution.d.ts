import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionDetails } from "./enterprisecrmeventbusprotoeventexecutiondetails";
import { GoogleCloudIntegrationsV1alphaExecutionDetails } from "./googlecloudintegrationsv1alphaexecutiondetails";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
export declare enum GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum {
    ExecutionMethodUnspecified = "EXECUTION_METHOD_UNSPECIFIED",
    Post = "POST",
    PostToQueue = "POST_TO_QUEUE",
    Schedule = "SCHEDULE"
}
/**
 * The Execution resource contains detailed information of an individual integration execution.
**/
export declare class GoogleCloudIntegrationsV1alphaExecution extends SpeakeasyBase {
    createTime?: string;
    directSubExecutions?: GoogleCloudIntegrationsV1alphaExecution[];
    eventExecutionDetails?: EnterpriseCrmEventbusProtoEventExecutionDetails;
    executionDetails?: GoogleCloudIntegrationsV1alphaExecutionDetails;
    executionMethod?: GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum;
    name?: string;
    requestParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;
    requestParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    responseParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;
    responseParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    triggerId?: string;
    updateTime?: string;
}
