package operations

type UpdateOrganizationBrandingPolicyPathParams struct {
	BrandingPolicyID string `pathParam:"style=simple,explode=false,name=brandingPolicyId"`
	OrganizationID   string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllOrganizationAdmins     UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All organization admins"
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllEnterpriseAdmins       UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All enterprise admins"
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllNetworkAdmins          UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All network admins"
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllAdminsOfNetworks       UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All admins of networks..."
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllAdminsOfNetworksTagged UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All admins of networks tagged..."
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumSpecificAdmins            UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "Specific admins..."
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllAdmins                 UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All admins"
	UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnumAllSamlAdmins             UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum = "All SAML admins"
)

type UpdateOrganizationBrandingPolicyRequestBodyAdminSettings struct {
	AppliesTo *UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum `json:"appliesTo"`
	Values    []string                                                               `json:"values"`
}

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum string

const (
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumDefaultOrInherit UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = "default or inherit"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumHide             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = "hide"
	UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnumShow             UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum = "show"
)

type UpdateOrganizationBrandingPolicyRequestBodyHelpSettings struct {
	APIDocsSubtab                      *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum                      `json:"apiDocsSubtab"`
	CasesSubtab                        *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum                        `json:"casesSubtab"`
	CiscoMerakiProductDocumentation    *string                                                                                        `json:"ciscoMerakiProductDocumentation"`
	CommunitySubtab                    *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum                    `json:"communitySubtab"`
	DataProtectionRequestsSubtab       *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum       `json:"dataProtectionRequestsSubtab"`
	FirewallInfoSubtab                 *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum                 `json:"firewallInfoSubtab"`
	GetHelpSubtab                      *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum                      `json:"getHelpSubtab"`
	GetHelpSubtabKnowledgeBaseSearch   *string                                                                                        `json:"getHelpSubtabKnowledgeBaseSearch"`
	HardwareReplacementsSubtab         *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum         `json:"hardwareReplacementsSubtab"`
	HelpTab                            *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum                            `json:"helpTab"`
	NewFeaturesSubtab                  *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum                  `json:"newFeaturesSubtab"`
	SmForums                           *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum                           `json:"smForums"`
	SupportContactInfo                 *string                                                                                        `json:"supportContactInfo"`
	UniversalSearchKnowledgeBaseSearch *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum `json:"universalSearchKnowledgeBaseSearch"`
}

type UpdateOrganizationBrandingPolicyRequestBody struct {
	AdminSettings *UpdateOrganizationBrandingPolicyRequestBodyAdminSettings `json:"adminSettings"`
	Enabled       *bool                                                     `json:"enabled"`
	HelpSettings  *UpdateOrganizationBrandingPolicyRequestBodyHelpSettings  `json:"helpSettings"`
	Name          *string                                                   `json:"name"`
}

type UpdateOrganizationBrandingPolicyRequest struct {
	PathParams UpdateOrganizationBrandingPolicyPathParams
	Request    *UpdateOrganizationBrandingPolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationBrandingPolicyResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	UpdateOrganizationBrandingPolicy200ApplicationJSONObject map[string]interface{}
}
