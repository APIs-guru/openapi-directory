import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidDevice } from "./androiddevice";
import { IosDevice } from "./iosdevice";



// Environment
/** 
 * The environment in which the test is run.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidDevice" })
  androidDevice?: AndroidDevice;

  @SpeakeasyMetadata({ data: "json, name=iosDevice" })
  iosDevice?: IosDevice;
}
