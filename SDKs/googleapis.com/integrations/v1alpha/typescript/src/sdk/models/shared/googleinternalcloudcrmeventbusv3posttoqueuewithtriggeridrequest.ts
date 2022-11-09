import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";

export enum GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum {
    Unspcified = "UNSPCIFIED"
,    Sheddable = "SHEDDABLE"
,    SheddablePlus = "SHEDDABLE_PLUS"
,    Critical = "CRITICAL"
,    CriticalPlus = "CRITICAL_PLUS"
}


// GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest
/** 
 * Use this request to post all workflows associated with a given trigger id. Next available id: 10
**/
export class GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ignoreErrorIfNoActiveWorkflow" })
  ignoreErrorIfNoActiveWorkflow?: boolean;

  @Metadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @Metadata({ data: "json, name=priority" })
  priority?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=scheduledTime" })
  scheduledTime?: string;

  @Metadata({ data: "json, name=testMode" })
  testMode?: boolean;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @Metadata({ data: "json, name=workflowName" })
  workflowName?: string;
}
