import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IosDevice } from "./iosdevice";


// IosDeviceList
/** 
 * A list of iOS device configurations in which the test is to be executed.
**/
export class IosDeviceList extends SpeakeasyBase {
  @Metadata({ data: "json, name=iosDevices", elemType: shared.IosDevice })
  iosDevices?: IosDevice[];
}
