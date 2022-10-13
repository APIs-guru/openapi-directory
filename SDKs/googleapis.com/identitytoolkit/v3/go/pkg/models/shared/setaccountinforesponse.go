package shared

type SetAccountInfoResponseProviderUserInfo struct {
	DisplayName *string `json:"displayName"`
	FederatedID *string `json:"federatedId"`
	PhotoURL    *string `json:"photoUrl"`
	ProviderID  *string `json:"providerId"`
}

type SetAccountInfoResponse struct {
	DisplayName      *string                                  `json:"displayName"`
	Email            *string                                  `json:"email"`
	EmailVerified    *bool                                    `json:"emailVerified"`
	ExpiresIn        *string                                  `json:"expiresIn"`
	IDToken          *string                                  `json:"idToken"`
	Kind             *string                                  `json:"kind"`
	LocalID          *string                                  `json:"localId"`
	NewEmail         *string                                  `json:"newEmail"`
	PasswordHash     *string                                  `json:"passwordHash"`
	PhotoURL         *string                                  `json:"photoUrl"`
	ProviderUserInfo []SetAccountInfoResponseProviderUserInfo `json:"providerUserInfo"`
	RefreshToken     *string                                  `json:"refreshToken"`
}
