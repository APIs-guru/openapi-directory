import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedLinodeSettingsSsh
/** 
 * The SSH settings for this Linode.
 * 
**/
export class ManagedLinodeSettingsSsh extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}


// ManagedLinodeSettingsInput
/** 
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
 * 
**/
export class ManagedLinodeSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssh" })
  ssh?: ManagedLinodeSettingsSsh;
}


// ManagedLinodeSettings
/** 
 * Settings for a specific Linode related to Managed Services. There is one ManagedLinodeSettings object for each Linode on your Account.
 * 
**/
export class ManagedLinodeSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=ssh" })
  ssh?: ManagedLinodeSettingsSsh;
}
