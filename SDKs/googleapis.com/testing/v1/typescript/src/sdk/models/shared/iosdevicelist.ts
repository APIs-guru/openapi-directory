import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IosDevice } from "./iosdevice";



// IosDeviceList
/** 
 * A list of iOS device configurations in which the test is to be executed.
**/
export class IosDeviceList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iosDevices", elemType: IosDevice })
  iosDevices?: IosDevice[];
}
