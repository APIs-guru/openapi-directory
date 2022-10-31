package shared




type AccessTokenCategoryEnum string

const (
    AccessTokenCategoryEnumInternal AccessTokenCategoryEnum = "INTERNAL"
AccessTokenCategoryEnumAccess AccessTokenCategoryEnum = "ACCESS"
AccessTokenCategoryEnumID AccessTokenCategoryEnum = "ID"
AccessTokenCategoryEnumAdmin AccessTokenCategoryEnum = "ADMIN"
AccessTokenCategoryEnumUserinfo AccessTokenCategoryEnum = "USERINFO"
)


type AccessToken struct {
    Acr *string `json:"acr,omitempty"`
    Address *AddressClaimSet `json:"address,omitempty"`
    AllowedOrigins []string `json:"allowed-origins,omitempty"`
    AtHash *string `json:"at_hash,omitempty"`
    AuthTime *int64 `json:"auth_time,omitempty"`
    Authorization *AccessTokenAuthorization `json:"authorization,omitempty"`
    Azp *string `json:"azp,omitempty"`
    Birthdate *string `json:"birthdate,omitempty"`
    CHash *string `json:"c_hash,omitempty"`
    Category *AccessTokenCategoryEnum `json:"category,omitempty"`
    ClaimsLocales *string `json:"claims_locales,omitempty"`
    Cnf *AccessTokenCertConf `json:"cnf,omitempty"`
    Email *string `json:"email,omitempty"`
    EmailVerified *bool `json:"email_verified,omitempty"`
    Exp *int64 `json:"exp,omitempty"`
    FamilyName *string `json:"family_name,omitempty"`
    Gender *string `json:"gender,omitempty"`
    GivenName *string `json:"given_name,omitempty"`
    Iat *int64 `json:"iat,omitempty"`
    Iss *string `json:"iss,omitempty"`
    Jti *string `json:"jti,omitempty"`
    Locale *string `json:"locale,omitempty"`
    MiddleName *string `json:"middle_name,omitempty"`
    Name *string `json:"name,omitempty"`
    Nbf *int64 `json:"nbf,omitempty"`
    Nickname *string `json:"nickname,omitempty"`
    Nonce *string `json:"nonce,omitempty"`
    OtherClaims map[string]interface{} `json:"otherClaims,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    PhoneNumberVerified *bool `json:"phone_number_verified,omitempty"`
    Picture *string `json:"picture,omitempty"`
    PreferredUsername *string `json:"preferred_username,omitempty"`
    Profile *string `json:"profile,omitempty"`
    RealmAccess *AccessTokenAccess `json:"realm_access,omitempty"`
    SHash *string `json:"s_hash,omitempty"`
    Scope *string `json:"scope,omitempty"`
    SessionState *string `json:"session_state,omitempty"`
    Sub *string `json:"sub,omitempty"`
    TrustedCerts []string `json:"trusted-certs,omitempty"`
    Typ *string `json:"typ,omitempty"`
    UpdatedAt *int64 `json:"updated_at,omitempty"`
    Website *string `json:"website,omitempty"`
    Zoneinfo *string `json:"zoneinfo,omitempty"`
    
}

