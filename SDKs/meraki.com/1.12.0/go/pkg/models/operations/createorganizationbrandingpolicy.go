package operations

type CreateOrganizationBrandingPolicyPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllOrganizationAdmins     CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All organization admins"
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllEnterpriseAdmins       CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All enterprise admins"
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllNetworkAdmins          CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All network admins"
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllAdminsOfNetworks       CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All admins of networks..."
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllAdminsOfNetworksTagged CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All admins of networks tagged..."
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumSpecificAdmins            CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "Specific admins..."
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllAdmins                 CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All admins"
	CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllSamlAdmins             CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All SAML admins"
)

type CreateOrganizationBrandingPolicyRequestBodyAdminSettings struct {
	AppliesTo *CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum `json:"appliesTo,omitempty"`
	Values    []string                                                               `json:"values,omitempty"`
}

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum string

const (
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumDefaultOrInherit CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = "default or inherit"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumHide             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = "hide"
	CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumShow             CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = "show"
)

type CreateOrganizationBrandingPolicyRequestBodyHelpSettings struct {
	APIDocsSubtab                      *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum                      `json:"apiDocsSubtab,omitempty"`
	CasesSubtab                        *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum                        `json:"casesSubtab,omitempty"`
	CiscoMerakiProductDocumentation    *string                                                                                        `json:"ciscoMerakiProductDocumentation,omitempty"`
	CommunitySubtab                    *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum                    `json:"communitySubtab,omitempty"`
	DataProtectionRequestsSubtab       *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum       `json:"dataProtectionRequestsSubtab,omitempty"`
	FirewallInfoSubtab                 *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum                 `json:"firewallInfoSubtab,omitempty"`
	GetHelpSubtab                      *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum                      `json:"getHelpSubtab,omitempty"`
	GetHelpSubtabKnowledgeBaseSearch   *string                                                                                        `json:"getHelpSubtabKnowledgeBaseSearch,omitempty"`
	HardwareReplacementsSubtab         *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum         `json:"hardwareReplacementsSubtab,omitempty"`
	HelpTab                            *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum                            `json:"helpTab,omitempty"`
	NewFeaturesSubtab                  *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum                  `json:"newFeaturesSubtab,omitempty"`
	SmForums                           *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum                           `json:"smForums,omitempty"`
	SupportContactInfo                 *string                                                                                        `json:"supportContactInfo,omitempty"`
	UniversalSearchKnowledgeBaseSearch *CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum `json:"universalSearchKnowledgeBaseSearch,omitempty"`
}

type CreateOrganizationBrandingPolicyRequestBody struct {
	AdminSettings CreateOrganizationBrandingPolicyRequestBodyAdminSettings `json:"adminSettings"`
	Enabled       bool                                                     `json:"enabled"`
	HelpSettings  *CreateOrganizationBrandingPolicyRequestBodyHelpSettings `json:"helpSettings,omitempty"`
	Name          string                                                   `json:"name"`
}

type CreateOrganizationBrandingPolicyRequest struct {
	PathParams CreateOrganizationBrandingPolicyPathParams
	Request    CreateOrganizationBrandingPolicyRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationBrandingPolicyResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	CreateOrganizationBrandingPolicy201ApplicationJSONObject map[string]interface{}
}
