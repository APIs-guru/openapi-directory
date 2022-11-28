import { SpeakeasyBase } from "../../../internal/utils";
import { IosAppInfo } from "./iosappinfo";
import { IosTestLoop } from "./iostestloop";
import { IosXcTest } from "./iosxctest";
import { Duration } from "./duration";
/**
 * A iOS mobile test specification
**/
export declare class IosTest extends SpeakeasyBase {
    iosAppInfo?: IosAppInfo;
    iosRoboTest?: Map<string, any>;
    iosTestLoop?: IosTestLoop;
    iosXcTest?: IosXcTest;
    testTimeout?: Duration;
}
