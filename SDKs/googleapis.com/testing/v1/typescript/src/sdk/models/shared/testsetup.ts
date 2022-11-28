import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Apk } from "./apk";
import { EnvironmentVariable } from "./environmentvariable";
import { DeviceFile } from "./devicefile";
import { SystraceSetup } from "./systracesetup";



// TestSetup
/** 
 * A description of how to set up the Android device prior to running the test.
**/
export class TestSetup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Account;

  @SpeakeasyMetadata({ data: "json, name=additionalApks", elemType: Apk })
  additionalApks?: Apk[];

  @SpeakeasyMetadata({ data: "json, name=directoriesToPull" })
  directoriesToPull?: string[];

  @SpeakeasyMetadata({ data: "json, name=dontAutograntPermissions" })
  dontAutograntPermissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables", elemType: EnvironmentVariable })
  environmentVariables?: EnvironmentVariable[];

  @SpeakeasyMetadata({ data: "json, name=filesToPush", elemType: DeviceFile })
  filesToPush?: DeviceFile[];

  @SpeakeasyMetadata({ data: "json, name=networkProfile" })
  networkProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=systrace" })
  systrace?: SystraceSetup;
}
