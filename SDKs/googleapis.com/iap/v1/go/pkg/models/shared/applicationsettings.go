package shared

type ApplicationSettings struct {
	AccessDeniedPageSettings     *AccessDeniedPageSettings     `json:"accessDeniedPageSettings"`
	AttributePropagationSettings *AttributePropagationSettings `json:"attributePropagationSettings"`
	CookieDomain                 *string                       `json:"cookieDomain"`
	CsmSettings                  *CsmSettings                  `json:"csmSettings"`
}
