import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum {
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
export declare class CreateOrganizationBrandingPolicyRequestBodyAdminSettings extends SpeakeasyBase {
    appliesTo?: CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;
    values?: string[];
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
export declare enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}
/**
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 *  Each property defaults to 'default or inherit' when not provided.
**/
export declare class CreateOrganizationBrandingPolicyRequestBodyHelpSettings extends SpeakeasyBase {
    apiDocsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;
    casesSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;
    ciscoMerakiProductDocumentation?: string;
    communitySubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;
    dataProtectionRequestsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;
    firewallInfoSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;
    getHelpSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;
    getHelpSubtabKnowledgeBaseSearch?: string;
    hardwareReplacementsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;
    helpTab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;
    newFeaturesSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;
    smForums?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;
    supportContactInfo?: string;
    universalSearchKnowledgeBaseSearch?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}
export declare class CreateOrganizationBrandingPolicyRequestBody extends SpeakeasyBase {
    adminSettings: CreateOrganizationBrandingPolicyRequestBodyAdminSettings;
    enabled: boolean;
    helpSettings?: CreateOrganizationBrandingPolicyRequestBodyHelpSettings;
    name: string;
}
export declare class CreateOrganizationBrandingPolicyRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationBrandingPolicyPathParams;
    request: CreateOrganizationBrandingPolicyRequestBody;
}
export declare class CreateOrganizationBrandingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationBrandingPolicy201ApplicationJsonObject?: Map<string, any>;
}
