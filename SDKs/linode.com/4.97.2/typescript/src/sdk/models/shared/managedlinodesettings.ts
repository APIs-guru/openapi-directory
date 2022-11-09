import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedLinodeSettingsSsh
/** 
 * The SSH settings for this Linode.
 * 
**/
export class ManagedLinodeSettingsSsh extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: boolean;

  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=user" })
  user?: string;
}


// ManagedLinodeSettings
/** 
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
 * 
**/
export class ManagedLinodeSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=ssh" })
  ssh?: ManagedLinodeSettingsSsh;
}
