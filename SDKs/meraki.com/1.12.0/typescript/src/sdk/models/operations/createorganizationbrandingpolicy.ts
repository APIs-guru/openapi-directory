import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationBrandingPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum {
    AllOrganizationAdmins = "All organization admins",
    AllEnterpriseAdmins = "All enterprise admins",
    AllNetworkAdmins = "All network admins",
    AllAdminsOfNetworks = "All admins of networks...",
    AllAdminsOfNetworksTagged = "All admins of networks tagged...",
    SpecificAdmins = "Specific admins...",
    AllAdmins = "All admins",
    AllSamlAdmins = "All SAML admins"
}


// CreateOrganizationBrandingPolicyRequestBodyAdminSettings
/** 
 * Settings for describing which kinds of admins this policy applies to.
**/
export class CreateOrganizationBrandingPolicyRequestBodyAdminSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliesTo" })
  appliesTo?: CreateOrganizationBrandingPolicyRequestBodyAdminSettingsAppliesToEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}

export enum CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum {
    DefaultOrInherit = "default or inherit",
    Hide = "hide",
    Show = "show"
}


// CreateOrganizationBrandingPolicyRequestBodyHelpSettings
/** 
 *     Settings for describing the modifications to various Help page features. Each property in this object accepts one of
 *     'default or inherit' (do not modify functionality), 'hide' (remove the section from Dashboard), or 'show' (always show
 *     the section on Dashboard). Some properties in this object also accept custom HTML used to replace the section on
 *     Dashboard; see the documentation for each property to see the allowed values.
 *  Each property defaults to 'default or inherit' when not provided.
**/
export class CreateOrganizationBrandingPolicyRequestBodyHelpSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiDocsSubtab" })
  apiDocsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsApiDocsSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=casesSubtab" })
  casesSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCasesSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=ciscoMerakiProductDocumentation" })
  ciscoMerakiProductDocumentation?: string;

  @SpeakeasyMetadata({ data: "json, name=communitySubtab" })
  communitySubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsCommunitySubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=dataProtectionRequestsSubtab" })
  dataProtectionRequestsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsDataProtectionRequestsSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=firewallInfoSubtab" })
  firewallInfoSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsFirewallInfoSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=getHelpSubtab" })
  getHelpSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsGetHelpSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=getHelpSubtabKnowledgeBaseSearch" })
  getHelpSubtabKnowledgeBaseSearch?: string;

  @SpeakeasyMetadata({ data: "json, name=hardwareReplacementsSubtab" })
  hardwareReplacementsSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHardwareReplacementsSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=helpTab" })
  helpTab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsHelpTabEnum;

  @SpeakeasyMetadata({ data: "json, name=newFeaturesSubtab" })
  newFeaturesSubtab?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsNewFeaturesSubtabEnum;

  @SpeakeasyMetadata({ data: "json, name=smForums" })
  smForums?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsSmForumsEnum;

  @SpeakeasyMetadata({ data: "json, name=supportContactInfo" })
  supportContactInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=universalSearchKnowledgeBaseSearch" })
  universalSearchKnowledgeBaseSearch?: CreateOrganizationBrandingPolicyRequestBodyHelpSettingsUniversalSearchKnowledgeBaseSearchEnum;
}


export class CreateOrganizationBrandingPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminSettings" })
  adminSettings: CreateOrganizationBrandingPolicyRequestBodyAdminSettings;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=helpSettings" })
  helpSettings?: CreateOrganizationBrandingPolicyRequestBodyHelpSettings;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CreateOrganizationBrandingPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationBrandingPolicyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationBrandingPolicyRequestBody;
}


export class CreateOrganizationBrandingPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationBrandingPolicy201ApplicationJsonObject?: Map<string, any>;
}
