import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidDeviceList } from "./androiddevicelist";
import { AndroidMatrix } from "./androidmatrix";
import { IosDeviceList } from "./iosdevicelist";
/**
 * The matrix of environments in which the test is to be executed.
**/
export declare class EnvironmentMatrix extends SpeakeasyBase {
    androidDeviceList?: AndroidDeviceList;
    androidMatrix?: AndroidMatrix;
    iosDeviceList?: IosDeviceList;
}
