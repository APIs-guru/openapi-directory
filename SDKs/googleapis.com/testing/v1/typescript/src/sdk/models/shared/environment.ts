import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidDevice } from "./androiddevice";
import { IosDevice } from "./iosdevice";


// Environment
/** 
 * The environment in which the test is run.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidDevice" })
  androidDevice?: AndroidDevice;

  @Metadata({ data: "json, name=iosDevice" })
  iosDevice?: IosDevice;
}
