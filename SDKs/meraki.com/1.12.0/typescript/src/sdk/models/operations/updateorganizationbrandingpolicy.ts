import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=brandingPolicyId" })
  brandingPolicyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum {
    AllOrganizationAdmins = "All organization admins",
    AllEnterpriseAdmins = "All enterprise admins",
    AllNetworkAdmins = "All network admins",
    AllAdminsOfNetworks = "All admins of networks...",
    AllAdminsOfNetworksTagged = "All admins of networks tagged...",
    SpecificAdmins = "Specific admins...",
    AllAdmins = "All admins",
    AllSamlAdmins = "All SAML admins"
}


// UpdateOrganizationBrandingPolicyRequestBodyAdminSettings
/** 
 * Settings for describing which kinds of admins this policy applies to.
**/
export class UpdateOrganizationBrandingPolicyRequestBodyAdminSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliesTo" })
  appliesTo?: UpdateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
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
  @SpeakeasyMetadata({ data: "json, name=apiDocsSubtab" })
  apiDocsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=casesSubtab" })
  casesSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=ciscoMerakiProductDocumentation" })
  ciscoMerakiProductDocumentation?: string;

  @SpeakeasyMetadata({ data: "json, name=communitySubtab" })
  communitySubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=dataProtectionRequestsSubtab" })
  dataProtectionRequestsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=firewallInfoSubtab" })
  firewallInfoSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=getHelpSubtab" })
  getHelpSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=getHelpSubtabKnowledgeBaseSearch" })
  getHelpSubtabKnowledgeBaseSearch?: string;

  @SpeakeasyMetadata({ data: "json, name=hardwareReplacementsSubtab" })
  hardwareReplacementsSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=helpTab" })
  helpTab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;

  @SpeakeasyMetadata({ data: "json, name=newFeaturesSubtab" })
  newFeaturesSubtab?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=smForums" })
  smForums?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;

  @SpeakeasyMetadata({ data: "json, name=supportContactInfo" })
  supportContactInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=universalSearchKnowledgeBaseSearch" })
  universalSearchKnowledgeBaseSearch?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}


export class UpdateOrganizationBrandingPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminSettings" })
  adminSettings?: UpdateOrganizationBrandingPolicyRequestBodyAdminSettings;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=helpSettings" })
  helpSettings?: UpdateOrganizationBrandingPolicyRequestBodyHelpSettings;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateOrganizationBrandingPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationBrandingPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationBrandingPolicyRequestBody;
}


export class UpdateOrganizationBrandingPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationBrandingPolicy200ApplicationJsonObject?: Map<string, any>;
}
