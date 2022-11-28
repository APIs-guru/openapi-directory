import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionDetails } from "./enterprisecrmeventbusprotoeventexecutiondetails";
import { GoogleCloudIntegrationsV1alphaExecutionDetails } from "./googlecloudintegrationsv1alphaexecutiondetails";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";


export enum GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum {
    ExecutionMethodUnspecified = "EXECUTION_METHOD_UNSPECIFIED",
    Post = "POST",
    PostToQueue = "POST_TO_QUEUE",
    Schedule = "SCHEDULE"
}


// GoogleCloudIntegrationsV1alphaExecution
/** 
 * The Execution resource contains detailed information of an individual integration execution.
**/
export class GoogleCloudIntegrationsV1alphaExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=directSubExecutions", elemType: GoogleCloudIntegrationsV1alphaExecution })
  directSubExecutions?: GoogleCloudIntegrationsV1alphaExecution[];

  @SpeakeasyMetadata({ data: "json, name=eventExecutionDetails" })
  eventExecutionDetails?: EnterpriseCrmEventbusProtoEventExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=executionDetails" })
  executionDetails?: GoogleCloudIntegrationsV1alphaExecutionDetails;

  @SpeakeasyMetadata({ data: "json, name=executionMethod" })
  executionMethod?: GoogleCloudIntegrationsV1alphaExecutionExecutionMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requestParameters", elemType: GoogleCloudIntegrationsV1alphaValueType })
  requestParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @SpeakeasyMetadata({ data: "json, name=requestParams", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  requestParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @SpeakeasyMetadata({ data: "json, name=responseParameters", elemType: GoogleCloudIntegrationsV1alphaValueType })
  responseParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @SpeakeasyMetadata({ data: "json, name=responseParams", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  responseParams?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
