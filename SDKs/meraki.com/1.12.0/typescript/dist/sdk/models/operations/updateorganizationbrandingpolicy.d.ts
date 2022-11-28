import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
    brandingPolicyId: string;
    organizationId: string;
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum {
    AllOrganizationAdmins = "All organization admins",
    AllEnterpriseAdmins = "All enterprise admins",
    AllNetworkAdmins = "All network admins",
    AllAdminsOfNetworks = "All admins of networks...",
    AllAdminsOfNetworksTagged = "All admins of networks tagged...",
    SpecificAdmins = "Specific admins...",
    AllAdmins = "All admins",
    AllSamlAdmins = "All SAML admins"
}
/**
 * Settings for describing which kinds of admins this policy applies to.
**/
export declare class UpdateOrganizationBrandingPolicyRequestBodyAdminSettings extends SpeakeasyBase {
    appliesTo?: UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
    values?: string[];
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 *
**/
export declare class UpdateOrganizationBrandingPolicyRequestBodyHelpSettings extends SpeakeasyBase {
    apiDocsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
    casesSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
    ciscoMerakiProductDocumentation?: string;
    communitySubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
    dataProtectionRequestsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
    firewallInfoSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
    getHelpSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
    getHelpSubtabKnowledgeBaseSearch?: string;
    hardwareReplacementsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
    helpTab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
    newFeaturesSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
    smForums?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
    supportContactInfo?: string;
    universalSearchKnowledgeBaseSearch?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}
export declare class UpdateOrganizationBrandingPolicyRequestBody extends SpeakeasyBase {
    adminSettings?: UpdateOrganizationBrandingPolicyRequestBodyAdminSettings;
    enabled?: boolean;
    helpSettings?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettings;
    name?: string;
}
export declare class UpdateOrganizationBrandingPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationBrandingPolicyPathParams;
    request?: UpdateOrganizationBrandingPolicyRequestBody;
}
export declare class UpdateOrganizationBrandingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationBrandingPolicy200ApplicationJsonObject?: Map<string, any>;
}
