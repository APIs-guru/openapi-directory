import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidDevice } from "./androiddevice";
import { IosDevice } from "./iosdevice";
/**
 * The environment in which the test is run.
**/
export declare class Environment extends SpeakeasyBase {
    androidDevice?: AndroidDevice;
    iosDevice?: IosDevice;
}
