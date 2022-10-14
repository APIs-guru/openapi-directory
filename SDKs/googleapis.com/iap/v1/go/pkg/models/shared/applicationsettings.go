package shared

type ApplicationSettings struct {
	AccessDeniedPageSettings     *AccessDeniedPageSettings     `json:"accessDeniedPageSettings,omitempty"`
	AttributePropagationSettings *AttributePropagationSettings `json:"attributePropagationSettings,omitempty"`
	CookieDomain                 *string                       `json:"cookieDomain,omitempty"`
	CsmSettings                  *CsmSettings                  `json:"csmSettings,omitempty"`
}
