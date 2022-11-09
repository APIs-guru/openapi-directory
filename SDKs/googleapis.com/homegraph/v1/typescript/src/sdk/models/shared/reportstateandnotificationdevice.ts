import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReportStateAndNotificationDevice
/** 
 * The states and notifications specific to a device.
**/
export class ReportStateAndNotificationDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=notifications" })
  notifications?: Map<string, any>;

  @Metadata({ data: "json, name=states" })
  states?: Map<string, any>;
}
