import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
export declare enum GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum {
    Unspcified = "UNSPCIFIED",
    Sheddable = "SHEDDABLE",
    SheddablePlus = "SHEDDABLE_PLUS",
    Critical = "CRITICAL",
    CriticalPlus = "CRITICAL_PLUS"
}
/**
 * Use this request to post all workflows associated with a given trigger id. Next available id: 10
**/
export declare class GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest extends SpeakeasyBase {
    clientId?: string;
    ignoreErrorIfNoActiveWorkflow?: boolean;
    parameters?: EnterpriseCrmEventbusProtoEventParameters;
    priority?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriorityEnum;
    requestId?: string;
    scheduledTime?: string;
    testMode?: boolean;
    triggerId?: string;
    workflowName?: string;
}
