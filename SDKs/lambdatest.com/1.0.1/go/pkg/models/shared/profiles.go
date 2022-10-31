package shared



type ProfilesProfilesProfileConfigCredentials struct {
    Password *string `json:"password,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

type ProfilesProfilesProfileConfigLocatorsPassword struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ProfilesProfilesProfileConfigLocatorsSubmit struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ProfilesProfilesProfileConfigLocatorsUsername struct {
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ProfilesProfilesProfileConfigLocators struct {
    Password *ProfilesProfilesProfileConfigLocatorsPassword `json:"password,omitempty"`
    Submit *ProfilesProfilesProfileConfigLocatorsSubmit `json:"submit,omitempty"`
    Username *ProfilesProfilesProfileConfigLocatorsUsername `json:"username,omitempty"`
    
}

type ProfilesProfilesProfileConfig struct {
    Credentials *ProfilesProfilesProfileConfigCredentials `json:"credentials,omitempty"`
    Locators *ProfilesProfilesProfileConfigLocators `json:"locators,omitempty"`
    LoginURL *string `json:"login_url,omitempty"`
    ProfileName *string `json:"profile_name,omitempty"`
    
}

type ProfilesProfiles struct {
    Name *string `json:"name,omitempty"`
    ProfileConfig *ProfilesProfilesProfileConfig `json:"profile_config,omitempty"`
    
}

type Profiles struct {
    Profiles []ProfilesProfiles `json:"profiles,omitempty"`
    
}

