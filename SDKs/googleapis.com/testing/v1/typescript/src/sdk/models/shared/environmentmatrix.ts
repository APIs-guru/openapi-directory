import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidDeviceList } from "./androiddevicelist";
import { AndroidMatrix } from "./androidmatrix";
import { IosDeviceList } from "./iosdevicelist";



// EnvironmentMatrix
/** 
 * The matrix of environments in which the test is to be executed.
**/
export class EnvironmentMatrix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidDeviceList" })
  androidDeviceList?: AndroidDeviceList;

  @SpeakeasyMetadata({ data: "json, name=androidMatrix" })
  androidMatrix?: AndroidMatrix;

  @SpeakeasyMetadata({ data: "json, name=iosDeviceList" })
  iosDeviceList?: IosDeviceList;
}
