import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Measurement3d } from "./measurement3d";



// Imu
/** 
 * IMU data from the device sensors.
**/
export class Imu extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelMpsps", elemType: Measurement3d })
  accelMpsps?: Measurement3d[];

  @SpeakeasyMetadata({ data: "json, name=gyroRps", elemType: Measurement3d })
  gyroRps?: Measurement3d[];

  @SpeakeasyMetadata({ data: "json, name=magUt", elemType: Measurement3d })
  magUt?: Measurement3d[];
}
