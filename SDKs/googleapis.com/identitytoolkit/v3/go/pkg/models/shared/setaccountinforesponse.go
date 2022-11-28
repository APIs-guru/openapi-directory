package shared

type SetAccountInfoResponseProviderUserInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	FederatedID *string `json:"federatedId,omitempty"`
	PhotoURL    *string `json:"photoUrl,omitempty"`
	ProviderID  *string `json:"providerId,omitempty"`
}

// SetAccountInfoResponse
// Respone of setting the account information.
type SetAccountInfoResponse struct {
	DisplayName      *string                                  `json:"displayName,omitempty"`
	Email            *string                                  `json:"email,omitempty"`
	EmailVerified    *bool                                    `json:"emailVerified,omitempty"`
	ExpiresIn        *string                                  `json:"expiresIn,omitempty"`
	IDToken          *string                                  `json:"idToken,omitempty"`
	Kind             *string                                  `json:"kind,omitempty"`
	LocalID          *string                                  `json:"localId,omitempty"`
	NewEmail         *string                                  `json:"newEmail,omitempty"`
	PasswordHash     *string                                  `json:"passwordHash,omitempty"`
	PhotoURL         *string                                  `json:"photoUrl,omitempty"`
	ProviderUserInfo []SetAccountInfoResponseProviderUserInfo `json:"providerUserInfo,omitempty"`
	RefreshToken     *string                                  `json:"refreshToken,omitempty"`
}
