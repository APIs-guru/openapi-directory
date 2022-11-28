import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidDevice } from "./androiddevice";



// AndroidDeviceList
/** 
 * A list of Android device configurations in which the test is to be executed.
**/
export class AndroidDeviceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidDevices", elemType: AndroidDevice })
  androidDevices?: AndroidDevice[];
}
