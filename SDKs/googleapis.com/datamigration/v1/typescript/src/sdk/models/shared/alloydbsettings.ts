import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPasswordInput } from "./userpassword";
import { PrimaryInstanceSettingsInput } from "./primaryinstancesettings";
import { UserPassword } from "./userpassword";
import { PrimaryInstanceSettings } from "./primaryinstancesettings";



// AlloyDbSettingsInput
/** 
 * Settings for creating an AlloyDB cluster.
**/
export class AlloyDbSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialUser" })
  initialUser?: UserPasswordInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=primaryInstanceSettings" })
  primaryInstanceSettings?: PrimaryInstanceSettingsInput;

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}


// AlloyDbSettings
/** 
 * Settings for creating an AlloyDB cluster.
**/
export class AlloyDbSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialUser" })
  initialUser?: UserPassword;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=primaryInstanceSettings" })
  primaryInstanceSettings?: PrimaryInstanceSettings;

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}
