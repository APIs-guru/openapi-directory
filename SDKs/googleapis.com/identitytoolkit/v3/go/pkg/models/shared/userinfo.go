package shared



type UserInfoProviderUserInfo struct {
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    FederatedID *string `json:"federatedId,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    PhotoURL *string `json:"photoUrl,omitempty"`
    ProviderID *string `json:"providerId,omitempty"`
    RawID *string `json:"rawId,omitempty"`
    ScreenName *string `json:"screenName,omitempty"`
    
}

type UserInfo struct {
    CreatedAt *string `json:"createdAt,omitempty"`
    CustomAttributes *string `json:"customAttributes,omitempty"`
    CustomAuth *bool `json:"customAuth,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    EmailVerified *bool `json:"emailVerified,omitempty"`
    LastLoginAt *string `json:"lastLoginAt,omitempty"`
    LocalID *string `json:"localId,omitempty"`
    PasswordHash *string `json:"passwordHash,omitempty"`
    PasswordUpdatedAt *float64 `json:"passwordUpdatedAt,omitempty"`
    PhoneNumber *string `json:"phoneNumber,omitempty"`
    PhotoURL *string `json:"photoUrl,omitempty"`
    ProviderUserInfo []UserInfoProviderUserInfo `json:"providerUserInfo,omitempty"`
    RawPassword *string `json:"rawPassword,omitempty"`
    Salt *string `json:"salt,omitempty"`
    ScreenName *string `json:"screenName,omitempty"`
    ValidSince *string `json:"validSince,omitempty"`
    Version *int32 `json:"version,omitempty"`
    
}

