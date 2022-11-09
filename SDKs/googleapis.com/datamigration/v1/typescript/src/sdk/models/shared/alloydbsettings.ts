import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserPassword } from "./userpassword";
import { PrimaryInstanceSettings } from "./primaryinstancesettings";


// AlloyDbSettings
/** 
 * Settings for creating an AlloyDB cluster.
**/
export class AlloyDbSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialUser" })
  initialUser?: UserPassword;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=primaryInstanceSettings" })
  primaryInstanceSettings?: PrimaryInstanceSettings;

  @Metadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}
