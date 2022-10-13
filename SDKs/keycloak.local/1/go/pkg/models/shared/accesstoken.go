package shared

type AccessTokenCategoryEnum string

const (
	AccessTokenCategoryEnumInternal AccessTokenCategoryEnum = "INTERNAL"
	AccessTokenCategoryEnumAccess   AccessTokenCategoryEnum = "ACCESS"
	AccessTokenCategoryEnumID       AccessTokenCategoryEnum = "ID"
	AccessTokenCategoryEnumAdmin    AccessTokenCategoryEnum = "ADMIN"
	AccessTokenCategoryEnumUserinfo AccessTokenCategoryEnum = "USERINFO"
)

type AccessToken struct {
	Acr                 *string                   `json:"acr"`
	Address             *AddressClaimSet          `json:"address"`
	AllowedOrigins      []string                  `json:"allowed-origins"`
	AtHash              *string                   `json:"at_hash"`
	AuthTime            *int64                    `json:"auth_time"`
	Authorization       *AccessTokenAuthorization `json:"authorization"`
	Azp                 *string                   `json:"azp"`
	Birthdate           *string                   `json:"birthdate"`
	CHash               *string                   `json:"c_hash"`
	Category            *AccessTokenCategoryEnum  `json:"category"`
	ClaimsLocales       *string                   `json:"claims_locales"`
	Cnf                 *AccessTokenCertConf      `json:"cnf"`
	Email               *string                   `json:"email"`
	EmailVerified       *bool                     `json:"email_verified"`
	Exp                 *int64                    `json:"exp"`
	FamilyName          *string                   `json:"family_name"`
	Gender              *string                   `json:"gender"`
	GivenName           *string                   `json:"given_name"`
	Iat                 *int64                    `json:"iat"`
	Iss                 *string                   `json:"iss"`
	Jti                 *string                   `json:"jti"`
	Locale              *string                   `json:"locale"`
	MiddleName          *string                   `json:"middle_name"`
	Name                *string                   `json:"name"`
	Nbf                 *int64                    `json:"nbf"`
	Nickname            *string                   `json:"nickname"`
	Nonce               *string                   `json:"nonce"`
	OtherClaims         map[string]interface{}    `json:"otherClaims"`
	PhoneNumber         *string                   `json:"phone_number"`
	PhoneNumberVerified *bool                     `json:"phone_number_verified"`
	Picture             *string                   `json:"picture"`
	PreferredUsername   *string                   `json:"preferred_username"`
	Profile             *string                   `json:"profile"`
	RealmAccess         *AccessTokenAccess        `json:"realm_access"`
	SHash               *string                   `json:"s_hash"`
	Scope               *string                   `json:"scope"`
	SessionState        *string                   `json:"session_state"`
	Sub                 *string                   `json:"sub"`
	TrustedCerts        []string                  `json:"trusted-certs"`
	Typ                 *string                   `json:"typ"`
	UpdatedAt           *int64                    `json:"updated_at"`
	Website             *string                   `json:"website"`
	Zoneinfo            *string                   `json:"zoneinfo"`
}
