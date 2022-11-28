import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReportStateAndNotificationDevice
/** 
 * The states and notifications specific to a device.
**/
export class ReportStateAndNotificationDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=states" })
  states?: Map<string, any>;
}
