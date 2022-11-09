import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CrmlogErrorCode } from "./crmlogerrorcode";
import { EnterpriseCrmEventbusProtoErrorDetail } from "./enterprisecrmeventbusprotoerrordetail";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails } from "./enterprisecrmfrontendseventbusprotoeventexecutiondetails";
import { EnterpriseCrmEventbusProtoExecutionTraceInfo } from "./enterprisecrmeventbusprotoexecutiontraceinfo";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";

export enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum {
    Unspecified = "UNSPECIFIED"
,    Post = "POST"
,    PostToQueue = "POST_TO_QUEUE"
,    Schedule = "SCHEDULE"
,    PostByEventConfigId = "POST_BY_EVENT_CONFIG_ID"
,    PostWithEventDetails = "POST_WITH_EVENT_DETAILS"
}

export enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum {
    UnspecifiedProduct = "UNSPECIFIED_PRODUCT"
,    Ip = "IP"
,    Apigee = "APIGEE"
,    Security = "SECURITY"
}


// EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo
/** 
 * Contains all the execution details for a workflow instance. Next available id: 24
**/
export class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: CrmlogErrorCode;

  @Metadata({ data: "json, name=errors", elemType: shared.EnterpriseCrmEventbusProtoErrorDetail })
  errors?: EnterpriseCrmEventbusProtoErrorDetail[];

  @Metadata({ data: "json, name=eventExecutionDetails" })
  eventExecutionDetails?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails;

  @Metadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @Metadata({ data: "json, name=executionTraceInfo" })
  executionTraceInfo?: EnterpriseCrmEventbusProtoExecutionTraceInfo;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=postMethod" })
  postMethod?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum;

  @Metadata({ data: "json, name=product" })
  product?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=requestParams" })
  requestParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @Metadata({ data: "json, name=responseParams" })
  responseParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @Metadata({ data: "json, name=snapshotNumber" })
  snapshotNumber?: string;

  @Metadata({ data: "json, name=tenant" })
  tenant?: string;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @Metadata({ data: "json, name=workflowId" })
  workflowId?: string;

  @Metadata({ data: "json, name=workflowName" })
  workflowName?: string;

  @Metadata({ data: "json, name=workflowRetryBackoffIntervalSeconds" })
  workflowRetryBackoffIntervalSeconds?: string;
}
