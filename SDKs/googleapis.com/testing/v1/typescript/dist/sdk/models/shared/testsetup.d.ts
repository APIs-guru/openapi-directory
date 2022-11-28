import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Apk } from "./apk";
import { EnvironmentVariable } from "./environmentvariable";
import { DeviceFile } from "./devicefile";
import { SystraceSetup } from "./systracesetup";
/**
 * A description of how to set up the Android device prior to running the test.
**/
export declare class TestSetup extends SpeakeasyBase {
    account?: Account;
    additionalApks?: Apk[];
    directoriesToPull?: string[];
    dontAutograntPermissions?: boolean;
    environmentVariables?: EnvironmentVariable[];
    filesToPush?: DeviceFile[];
    networkProfile?: string;
    systrace?: SystraceSetup;
}
