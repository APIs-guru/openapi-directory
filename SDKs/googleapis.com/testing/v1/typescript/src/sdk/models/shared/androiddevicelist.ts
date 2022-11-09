import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AndroidDevice } from "./androiddevice";


// AndroidDeviceList
/** 
 * A list of Android device configurations in which the test is to be executed.
**/
export class AndroidDeviceList extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidDevices", elemType: shared.AndroidDevice })
  androidDevices?: AndroidDevice[];
}
