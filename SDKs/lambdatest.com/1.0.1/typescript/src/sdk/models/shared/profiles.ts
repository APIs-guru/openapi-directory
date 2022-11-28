import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProfilesProfilesProfileConfigCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class ProfilesProfilesProfileConfigLocatorsPassword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ProfilesProfilesProfileConfigLocatorsSubmit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ProfilesProfilesProfileConfigLocatorsUsername extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ProfilesProfilesProfileConfigLocators extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: ProfilesProfilesProfileConfigLocatorsPassword;

  @SpeakeasyMetadata({ data: "json, name=submit" })
  submit?: ProfilesProfilesProfileConfigLocatorsSubmit;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: ProfilesProfilesProfileConfigLocatorsUsername;
}


export class ProfilesProfilesProfileConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: ProfilesProfilesProfileConfigCredentials;

  @SpeakeasyMetadata({ data: "json, name=locators" })
  locators?: ProfilesProfilesProfileConfigLocators;

  @SpeakeasyMetadata({ data: "json, name=login_url" })
  loginUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_name" })
  profileName?: string;
}


export class ProfilesProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_config" })
  profileConfig?: ProfilesProfilesProfileConfig;
}


export class Profiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profiles", elemType: ProfilesProfiles })
  profiles?: ProfilesProfiles[];
}
