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

// UpdateOrganizationBrandingPolicyRequestBodyAdminSettings
// Settings for describing which kinds of admins this policy applies to.
type UpdateOrganizationBrandingPolicyRequestBodyAdminSettings struct {
	AppliesTo *UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum `json:"appliesTo,omitempty"`
	Values    []string                                                               `json:"values,omitempty"`
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

// UpdateOrganizationBrandingPolicyRequestBodyHelpSettings
//
//	Settings for describing the modifications to various Help page features. Each property in this object accepts one of
//	'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
//	the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
//	Dashboard; see the documentation for each property to see the allowed values.
type UpdateOrganizationBrandingPolicyRequestBodyHelpSettings struct {
	APIDocsSubtab                      *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsAPIDocsSubtabEnum                      `json:"apiDocsSubtab,omitempty"`
	CasesSubtab                        *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum                        `json:"casesSubtab,omitempty"`
	CiscoMerakiProductDocumentation    *string                                                                                        `json:"ciscoMerakiProductDocumentation,omitempty"`
	CommunitySubtab                    *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum                    `json:"communitySubtab,omitempty"`
	DataProtectionRequestsSubtab       *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum       `json:"dataProtectionRequestsSubtab,omitempty"`
	FirewallInfoSubtab                 *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum                 `json:"firewallInfoSubtab,omitempty"`
	GetHelpSubtab                      *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum                      `json:"getHelpSubtab,omitempty"`
	GetHelpSubtabKnowledgeBaseSearch   *string                                                                                        `json:"getHelpSubtabKnowledgeBaseSearch,omitempty"`
	HardwareReplacementsSubtab         *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum         `json:"hardwareReplacementsSubtab,omitempty"`
	HelpTab                            *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum                            `json:"helpTab,omitempty"`
	NewFeaturesSubtab                  *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum                  `json:"newFeaturesSubtab,omitempty"`
	SmForums                           *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum                           `json:"smForums,omitempty"`
	SupportContactInfo                 *string                                                                                        `json:"supportContactInfo,omitempty"`
	UniversalSearchKnowledgeBaseSearch *UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum `json:"universalSearchKnowledgeBaseSearch,omitempty"`
}

type UpdateOrganizationBrandingPolicyRequestBody struct {
	AdminSettings *UpdateOrganizationBrandingPolicyRequestBodyAdminSettings `json:"adminSettings,omitempty"`
	Enabled       *bool                                                     `json:"enabled,omitempty"`
	HelpSettings  *UpdateOrganizationBrandingPolicyRequestBodyHelpSettings  `json:"helpSettings,omitempty"`
	Name          *string                                                   `json:"name,omitempty"`
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
