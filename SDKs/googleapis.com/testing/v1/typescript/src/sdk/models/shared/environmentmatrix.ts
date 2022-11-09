import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidDeviceList } from "./androiddevicelist";
import { AndroidMatrix } from "./androidmatrix";
import { IosDeviceList } from "./iosdevicelist";


// EnvironmentMatrix
/** 
 * The matrix of environments in which the test is to be executed.
**/
export class EnvironmentMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidDeviceList" })
  androidDeviceList?: AndroidDeviceList;

  @Metadata({ data: "json, name=androidMatrix" })
  androidMatrix?: AndroidMatrix;

  @Metadata({ data: "json, name=iosDeviceList" })
  iosDeviceList?: IosDeviceList;
}
