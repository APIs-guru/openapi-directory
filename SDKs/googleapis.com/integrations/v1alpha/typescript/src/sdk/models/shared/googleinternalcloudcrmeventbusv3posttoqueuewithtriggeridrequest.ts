import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";


export enum GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum {
    Unspcified = "UNSPCIFIED",
    Sheddable = "SHEDDABLE",
    SheddablePlus = "SHEDDABLE_PLUS",
    Critical = "CRITICAL",
    CriticalPlus = "CRITICAL_PLUS"
}


// GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest
/** 
 * Use this request to post all workflows associated with a given trigger id. Next available id: 10
**/
export class GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreErrorIfNoActiveWorkflow" })
  ignoreErrorIfNoActiveWorkflow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledTime" })
  scheduledTime?: string;

  @SpeakeasyMetadata({ data: "json, name=testMode" })
  testMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @SpeakeasyMetadata({ data: "json, name=workflowName" })
  workflowName?: string;
}
