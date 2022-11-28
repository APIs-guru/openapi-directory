import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CrmlogErrorCode } from "./crmlogerrorcode";
import { EnterpriseCrmEventbusProtoErrorDetail } from "./enterprisecrmeventbusprotoerrordetail";
import { EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails } from "./enterprisecrmfrontendseventbusprotoeventexecutiondetails";
import { EnterpriseCrmEventbusProtoExecutionTraceInfo } from "./enterprisecrmeventbusprotoexecutiontraceinfo";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";


export enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum {
    Unspecified = "UNSPECIFIED",
    Post = "POST",
    PostToQueue = "POST_TO_QUEUE",
    Schedule = "SCHEDULE",
    PostByEventConfigId = "POST_BY_EVENT_CONFIG_ID",
    PostWithEventDetails = "POST_WITH_EVENT_DETAILS"
}

export enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum {
    UnspecifiedProduct = "UNSPECIFIED_PRODUCT",
    Ip = "IP",
    Apigee = "APIGEE",
    Security = "SECURITY"
}


// EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo
/** 
 * Contains all the execution details for a workflow instance. Next available id: 24
**/
export class EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: CrmlogErrorCode;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: EnterpriseCrmEventbusProtoErrorDetail })
  errors?: EnterpriseCrmEventbusProtoErrorDetail[];

  @SpeakeasyMetadata({ data: "json, name=eventExecutionDetails" })
  eventExecutionDetails?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTraceInfo" })
  executionTraceInfo?: EnterpriseCrmEventbusProtoExecutionTraceInfo;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=postMethod" })
  postMethod?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoProductEnum;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestParams" })
  requestParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=responseParams" })
  responseParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=snapshotNumber" })
  snapshotNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowId" })
  workflowId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowName" })
  workflowName?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowRetryBackoffIntervalSeconds" })
  workflowRetryBackoffIntervalSeconds?: string;
}
