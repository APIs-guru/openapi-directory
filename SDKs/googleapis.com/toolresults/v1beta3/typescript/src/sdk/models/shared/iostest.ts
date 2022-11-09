import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IosAppInfo } from "./iosappinfo";
import { IosTestLoop } from "./iostestloop";
import { IosXcTest } from "./iosxctest";
import { Duration } from "./duration";


// IosTest
/** 
 * A iOS mobile test specification
**/
export class IosTest extends SpeakeasyBase {
  @Metadata({ data: "json, name=iosAppInfo" })
  iosAppInfo?: IosAppInfo;

  @Metadata({ data: "json, name=iosRoboTest" })
  iosRoboTest?: Map<string, any>;

  @Metadata({ data: "json, name=iosTestLoop" })
  iosTestLoop?: IosTestLoop;

  @Metadata({ data: "json, name=iosXcTest" })
  iosXcTest?: IosXcTest;

  @Metadata({ data: "json, name=testTimeout" })
  testTimeout?: Duration;
}
