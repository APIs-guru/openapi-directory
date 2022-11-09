import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Measurement3d } from "./measurement3d";
import { Measurement3d } from "./measurement3d";
import { Measurement3d } from "./measurement3d";


// Imu
/** 
 * IMU data from the device sensors.
**/
export class Imu extends SpeakeasyBase {
  @Metadata({ data: "json, name=accelMpsps", elemType: shared.Measurement3d })
  accelMpsps?: Measurement3d[];

  @Metadata({ data: "json, name=gyroRps", elemType: shared.Measurement3d })
  gyroRps?: Measurement3d[];

  @Metadata({ data: "json, name=magUt", elemType: shared.Measurement3d })
  magUt?: Measurement3d[];
}
