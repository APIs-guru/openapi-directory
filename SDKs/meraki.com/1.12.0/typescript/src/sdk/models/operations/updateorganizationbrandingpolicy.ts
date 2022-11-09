import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=brandingPolicyId" })
  brandingPolicyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum {
    AllOrganizationAdmins = "All organization admins"
,    AllEnterpriseAdmins = "All enterprise admins"
,    AllNetworkAdmins = "All network admins"
,    AllAdminsOfNetworks = "All admins of networks..."
,    AllAdminsOfNetworksTagged = "All admins of networks tagged..."
,    SpecificAdmins = "Specific admins..."
,    AllAdmins = "All admins"
,    AllSamlAdmins = "All SAML admins"
}


// UpdateOrganizationBrandingPolicyRequestBodyAdminSettings
/** 
 * Settings for describing which kinds of admins this policy applies to.
**/
export class UpdateOrganizationBrandingPolicyRequestBodyAdminSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliesTo" })
  appliesTo?: UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
    DefaultOrInherit = "default or inherit"
,    Hide = "hide"
,    Show = "show"
}


// UpdateOrganizationBrandingPolicyRequestBodyHelpSettings
/** 
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 * 
**/
export class UpdateOrganizationBrandingPolicyRequestBodyHelpSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiDocsSubtab" })
  apiDocsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;

  @Metadata({ data: "json, name=casesSubtab" })
  casesSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;

  @Metadata({ data: "json, name=ciscoMerakiProductDocumentation" })
  ciscoMerakiProductDocumentation?: string;

  @Metadata({ data: "json, name=communitySubtab" })
  communitySubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;

  @Metadata({ data: "json, name=dataProtectionRequestsSubtab" })
  dataProtectionRequestsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;

  @Metadata({ data: "json, name=firewallInfoSubtab" })
  firewallInfoSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;

  @Metadata({ data: "json, name=getHelpSubtab" })
  getHelpSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;

  @Metadata({ data: "json, name=getHelpSubtabKnowledgeBaseSearch" })
  getHelpSubtabKnowledgeBaseSearch?: string;

  @Metadata({ data: "json, name=hardwareReplacementsSubtab" })
  hardwareReplacementsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;

  @Metadata({ data: "json, name=helpTab" })
  helpTab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;

  @Metadata({ data: "json, name=newFeaturesSubtab" })
  newFeaturesSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;

  @Metadata({ data: "json, name=smForums" })
  smForums?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;

  @Metadata({ data: "json, name=supportContactInfo" })
  supportContactInfo?: string;

  @Metadata({ data: "json, name=universalSearchKnowledgeBaseSearch" })
  universalSearchKnowledgeBaseSearch?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}


export class UpdateOrganizationBrandingPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminSettings" })
  adminSettings?: UpdateOrganizationBrandingPolicyRequestBodyAdminSettings;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=helpSettings" })
  helpSettings?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettings;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateOrganizationBrandingPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationBrandingPolicyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationBrandingPolicyRequestBody;
}


export class UpdateOrganizationBrandingPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationBrandingPolicy200ApplicationJsonObject?: Map<string, any>;
}
