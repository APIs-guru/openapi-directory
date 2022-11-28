import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IosAppInfo } from "./iosappinfo";
import { IosTestLoop } from "./iostestloop";
import { IosXcTest } from "./iosxctest";
import { Duration } from "./duration";



// IosTest
/** 
 * A iOS mobile test specification
**/
export class IosTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iosAppInfo" })
  iosAppInfo?: IosAppInfo;

  @SpeakeasyMetadata({ data: "json, name=iosRoboTest" })
  iosRoboTest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=iosTestLoop" })
  iosTestLoop?: IosTestLoop;

  @SpeakeasyMetadata({ data: "json, name=iosXcTest" })
  iosXcTest?: IosXcTest;

  @SpeakeasyMetadata({ data: "json, name=testTimeout" })
  testTimeout?: Duration;
}
