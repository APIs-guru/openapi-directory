package shared

type ProfilesProfilesProfileConfigCredentials struct {
	Password *string `json:"password"`
	Username *string `json:"username"`
}

type ProfilesProfilesProfileConfigLocatorsPassword struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type ProfilesProfilesProfileConfigLocatorsSubmit struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type ProfilesProfilesProfileConfigLocatorsUsername struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type ProfilesProfilesProfileConfigLocators struct {
	Password *ProfilesProfilesProfileConfigLocatorsPassword `json:"password"`
	Submit   *ProfilesProfilesProfileConfigLocatorsSubmit   `json:"submit"`
	Username *ProfilesProfilesProfileConfigLocatorsUsername `json:"username"`
}

type ProfilesProfilesProfileConfig struct {
	Credentials *ProfilesProfilesProfileConfigCredentials `json:"credentials"`
	Locators    *ProfilesProfilesProfileConfigLocators    `json:"locators"`
	LoginURL    *string                                   `json:"login_url"`
	ProfileName *string                                   `json:"profile_name"`
}

type ProfilesProfiles struct {
	Name          *string                        `json:"name"`
	ProfileConfig *ProfilesProfilesProfileConfig `json:"profile_config"`
}

type Profiles struct {
	Profiles []ProfilesProfiles `json:"profiles"`
}
