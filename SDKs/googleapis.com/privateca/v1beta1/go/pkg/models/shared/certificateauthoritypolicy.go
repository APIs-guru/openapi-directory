package shared

type CertificateAuthorityPolicy struct {
	AllowedCommonNames               []string                `json:"allowedCommonNames"`
	AllowedConfigList                *AllowedConfigList      `json:"allowedConfigList"`
	AllowedIssuanceModes             *IssuanceModes          `json:"allowedIssuanceModes"`
	AllowedLocationsAndOrganizations []Subject               `json:"allowedLocationsAndOrganizations"`
	AllowedSans                      *AllowedSubjectAltNames `json:"allowedSans"`
	MaximumLifetime                  *string                 `json:"maximumLifetime"`
	OverwriteConfigValues            *ReusableConfigWrapper  `json:"overwriteConfigValues"`
}
