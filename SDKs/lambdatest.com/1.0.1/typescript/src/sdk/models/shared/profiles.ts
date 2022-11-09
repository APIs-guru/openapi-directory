import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProfilesProfilesProfileConfigCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class ProfilesProfilesProfileConfigLocatorsPassword extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ProfilesProfilesProfileConfigLocatorsSubmit extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ProfilesProfilesProfileConfigLocatorsUsername extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class ProfilesProfilesProfileConfigLocators extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: ProfilesProfilesProfileConfigLocatorsPassword;

  @Metadata({ data: "json, name=submit" })
  submit?: ProfilesProfilesProfileConfigLocatorsSubmit;

  @Metadata({ data: "json, name=username" })
  username?: ProfilesProfilesProfileConfigLocatorsUsername;
}


export class ProfilesProfilesProfileConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials" })
  credentials?: ProfilesProfilesProfileConfigCredentials;

  @Metadata({ data: "json, name=locators" })
  locators?: ProfilesProfilesProfileConfigLocators;

  @Metadata({ data: "json, name=login_url" })
  loginUrl?: string;

  @Metadata({ data: "json, name=profile_name" })
  profileName?: string;
}


export class ProfilesProfiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=profile_config" })
  profileConfig?: ProfilesProfilesProfileConfig;
}


export class Profiles extends SpeakeasyBase {
  @Metadata({ data: "json, name=profiles", elemType: shared.ProfilesProfiles })
  profiles?: ProfilesProfiles[];
}
