import { SpeakeasyBase } from "../../../internal/utils";
import { StateAndNotificationPayload } from "./stateandnotificationpayload";
/**
 * Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, "123" and "456" in the following example). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "agentUserId": "1234", "payload": { "devices": { "states": { "123": { "on": true }, "456": { "on": true, "brightness": 10 } }, } } } ```
**/
export declare class ReportStateAndNotificationRequest extends SpeakeasyBase {
    agentUserId?: string;
    eventId?: string;
    followUpToken?: string;
    payload?: StateAndNotificationPayload;
    requestId?: string;
}
