import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProfilesProfilesProfileConfigCredentials extends SpeakeasyBase {
    password?: string;
    username?: string;
}
export declare class ProfilesProfilesProfileConfigLocatorsPassword extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class ProfilesProfilesProfileConfigLocatorsSubmit extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class ProfilesProfilesProfileConfigLocatorsUsername extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class ProfilesProfilesProfileConfigLocators extends SpeakeasyBase {
    password?: ProfilesProfilesProfileConfigLocatorsPassword;
    submit?: ProfilesProfilesProfileConfigLocatorsSubmit;
    username?: ProfilesProfilesProfileConfigLocatorsUsername;
}
export declare class ProfilesProfilesProfileConfig extends SpeakeasyBase {
    credentials?: ProfilesProfilesProfileConfigCredentials;
    locators?: ProfilesProfilesProfileConfigLocators;
    loginUrl?: string;
    profileName?: string;
}
export declare class ProfilesProfiles extends SpeakeasyBase {
    name?: string;
    profileConfig?: ProfilesProfilesProfileConfig;
}
export declare class Profiles extends SpeakeasyBase {
    profiles?: ProfilesProfiles[];
}
