import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportStateAndNotificationDevice } from "./reportstateandnotificationdevice";



// StateAndNotificationPayload
/** 
 * Payload containing the state and notification information for devices.
**/
export class StateAndNotificationPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices" })
  devices?: ReportStateAndNotificationDevice;
}
