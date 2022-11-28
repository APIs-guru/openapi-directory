package shared

// ApplicationSettings
// Wrapper over application specific settings for IAP.
type ApplicationSettings struct {
	AccessDeniedPageSettings     *AccessDeniedPageSettings     `json:"accessDeniedPageSettings,omitempty"`
	AttributePropagationSettings *AttributePropagationSettings `json:"attributePropagationSettings,omitempty"`
	CookieDomain                 *string                       `json:"cookieDomain,omitempty"`
	CsmSettings                  *CsmSettings                  `json:"csmSettings,omitempty"`
}
