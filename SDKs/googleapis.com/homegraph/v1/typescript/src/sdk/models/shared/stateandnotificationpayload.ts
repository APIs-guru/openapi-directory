import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportStateAndNotificationDevice } from "./reportstateandnotificationdevice";


// StateAndNotificationPayload
/** 
 * Payload containing the state and notification information for devices.
**/
export class StateAndNotificationPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=devices" })
  devices?: ReportStateAndNotificationDevice;
}
