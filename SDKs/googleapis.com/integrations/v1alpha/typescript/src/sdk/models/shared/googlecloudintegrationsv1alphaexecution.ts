import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaExecution } from "./googlecloudintegrationsv1alphaexecution";
import { EnterpriseCrmEventbusProtoEventExecutionDetails } from "./enterprisecrmeventbusprotoeventexecutiondetails";
import { GoogleCloudIntegrationsV1alphaExecutionDetails } from "./googlecloudintegrationsv1alphaexecutiondetails";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";

export enum GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum {
    ExecutionMethodUnspecified = "EXECUTION_METHOD_UNSPECIFIED"
,    Post = "POST"
,    PostToQueue = "POST_TO_QUEUE"
,    Schedule = "SCHEDULE"
}


// GoogleCloudIntegrationsV1alphaExecution
/** 
 * The Execution resource contains detailed information of an individual integration execution.
**/
export class GoogleCloudIntegrationsV1alphaExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=directSubExecutions", elemType: shared.GoogleCloudIntegrationsV1alphaExecution })
  directSubExecutions?: GoogleCloudIntegrationsV1alphaExecution[];

  @Metadata({ data: "json, name=eventExecutionDetails" })
  eventExecutionDetails?: EnterpriseCrmEventbusProtoEventExecutionDetails;

  @Metadata({ data: "json, name=executionDetails" })
  executionDetails?: GoogleCloudIntegrationsV1alphaExecutionDetails;

  @Metadata({ data: "json, name=executionMethod" })
  executionMethod?: GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=requestParameters", elemType: shared.GoogleCloudIntegrationsV1alphaValueType })
  requestParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @Metadata({ data: "json, name=requestParams", elemType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  requestParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @Metadata({ data: "json, name=responseParameters", elemType: shared.GoogleCloudIntegrationsV1alphaValueType })
  responseParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @Metadata({ data: "json, name=responseParams", elemType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  responseParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
