package shared



type CertificateAuthorityPolicy struct {
    AllowedCommonNames []string `json:"allowedCommonNames,omitempty"`
    AllowedConfigList *AllowedConfigList `json:"allowedConfigList,omitempty"`
    AllowedIssuanceModes *IssuanceModes `json:"allowedIssuanceModes,omitempty"`
    AllowedLocationsAndOrganizations []Subject `json:"allowedLocationsAndOrganizations,omitempty"`
    AllowedSans *AllowedSubjectAltNames `json:"allowedSans,omitempty"`
    MaximumLifetime *string `json:"maximumLifetime,omitempty"`
    OverwriteConfigValues *ReusableConfigWrapper `json:"overwriteConfigValues,omitempty"`
    
}

