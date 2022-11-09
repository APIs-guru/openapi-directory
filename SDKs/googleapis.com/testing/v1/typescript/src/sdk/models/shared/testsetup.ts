import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=account" })
  account?: Account;

  @Metadata({ data: "json, name=additionalApks", elemType: shared.Apk })
  additionalApks?: Apk[];

  @Metadata({ data: "json, name=directoriesToPull" })
  directoriesToPull?: string[];

  @Metadata({ data: "json, name=dontAutograntPermissions" })
  dontAutograntPermissions?: boolean;

  @Metadata({ data: "json, name=environmentVariables", elemType: shared.EnvironmentVariable })
  environmentVariables?: EnvironmentVariable[];

  @Metadata({ data: "json, name=filesToPush", elemType: shared.DeviceFile })
  filesToPush?: DeviceFile[];

  @Metadata({ data: "json, name=networkProfile" })
  networkProfile?: string;

  @Metadata({ data: "json, name=systrace" })
  systrace?: SystraceSetup;
}
