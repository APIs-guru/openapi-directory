import { SpeakeasyBase } from "../../../internal/utils";
import { Measurement3d } from "./measurement3d";
/**
 * IMU data from the device sensors.
**/
export declare class Imu extends SpeakeasyBase {
    accelMpsps?: Measurement3d[];
    gyroRps?: Measurement3d[];
    magUt?: Measurement3d[];
}
