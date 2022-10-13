package shared

type UserInfoProviderUserInfo struct {
	DisplayName *string `json:"displayName"`
	Email       *string `json:"email"`
	FederatedID *string `json:"federatedId"`
	PhoneNumber *string `json:"phoneNumber"`
	PhotoURL    *string `json:"photoUrl"`
	ProviderID  *string `json:"providerId"`
	RawID       *string `json:"rawId"`
	ScreenName  *string `json:"screenName"`
}

type UserInfo struct {
	CreatedAt         *string                    `json:"createdAt"`
	CustomAttributes  *string                    `json:"customAttributes"`
	CustomAuth        *bool                      `json:"customAuth"`
	Disabled          *bool                      `json:"disabled"`
	DisplayName       *string                    `json:"displayName"`
	Email             *string                    `json:"email"`
	EmailVerified     *bool                      `json:"emailVerified"`
	LastLoginAt       *string                    `json:"lastLoginAt"`
	LocalID           *string                    `json:"localId"`
	PasswordHash      *string                    `json:"passwordHash"`
	PasswordUpdatedAt *float64                   `json:"passwordUpdatedAt"`
	PhoneNumber       *string                    `json:"phoneNumber"`
	PhotoURL          *string                    `json:"photoUrl"`
	ProviderUserInfo  []UserInfoProviderUserInfo `json:"providerUserInfo"`
	RawPassword       *string                    `json:"rawPassword"`
	Salt              *string                    `json:"salt"`
	ScreenName        *string                    `json:"screenName"`
	ValidSince        *string                    `json:"validSince"`
	Version           *int32                     `json:"version"`
}
