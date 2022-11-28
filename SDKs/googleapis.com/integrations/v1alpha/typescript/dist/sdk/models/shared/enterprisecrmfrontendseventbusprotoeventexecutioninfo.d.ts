import { SpeakeasyBase } from "../../../internal/utils";
import { CrmlogErrorCode } from "./crmlogerrorcode";
import { EnterpriseCrmEventbusProtoErrorDetail } from "./enterprisecrmeventbusprotoerrordetail";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails } from "./enterprisecrmfrontendseventbusprotoeventexecutiondetails";
import { EnterpriseCrmEventbusProtoExecutionTraceInfo } from "./enterprisecrmeventbusprotoexecutiontraceinfo";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
export declare enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum {
    Unspecified = "UNSPECIFIED",
    Post = "POST",
    PostToQueue = "POST_TO_QUEUE",
    Schedule = "SCHEDULE",
    PostByEventConfigId = "POST_BY_EVENT_CONFIG_ID",
    PostWithEventDetails = "POST_WITH_EVENT_DETAILS"
}
export declare enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum {
    UnspecifiedProduct = "UNSPECIFIED_PRODUCT",
    Ip = "IP",
    Apigee = "APIGEE",
    Security = "SECURITY"
}
/**
 * Contains all the execution details for a workflow instance. Next available id: 24
**/
export declare class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo extends SpeakeasyBase {
    clientId?: string;
    createTime?: string;
    errorCode?: CrmlogErrorCode;
    errors?: EnterpriseCrmEventbusProtoErrorDetail[];
    eventExecutionDetails?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails;
    eventExecutionInfoId?: string;
    executionTraceInfo?: EnterpriseCrmEventbusProtoExecutionTraceInfo;
    lastModifiedTime?: string;
    postMethod?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum;
    product?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum;
    requestId?: string;
    requestParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    responseParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    snapshotNumber?: string;
    tenant?: string;
    triggerId?: string;
    workflowId?: string;
    workflowName?: string;
    workflowRetryBackoffIntervalSeconds?: string;
}
