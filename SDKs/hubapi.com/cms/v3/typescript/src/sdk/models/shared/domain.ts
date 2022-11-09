import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainCdnConfig } from "./domaincdnconfig";
import { DomainSetupInfo } from "./domainsetupinfo";

export enum DomainApexResolutionStatusEnum {
    Ineligible = "INELIGIBLE"
,    SuggestResolving = "SUGGEST_RESOLVING"
,    AlreadyResolving = "ALREADY_RESOLVING"
,    Error = "ERROR"
}

export enum DomainCosObjectTypeEnum {
    Content = "CONTENT"
,    ExtensionResource = "EXTENSION_RESOURCE"
,    Layout = "LAYOUT"
,    CustomWidget = "CUSTOM_WIDGET"
,    Widget = "WIDGET"
,    Form = "FORM"
,    Placement = "PLACEMENT"
,    Image = "IMAGE"
,    DomainSettings = "DOMAIN_SETTINGS"
,    SiteSettings = "SITE_SETTINGS"
,    EmailAddress = "EMAIL_ADDRESS"
,    Workflow = "WORKFLOW"
,    HubdbTable = "HUBDB_TABLE"
,    RedirectUrl = "REDIRECT_URL"
,    DesignFolder = "DESIGN_FOLDER"
,    SiteMap = "SITE_MAP"
,    Domain = "DOMAIN"
,    Blog = "BLOG"
,    File = "FILE"
,    Folder = "FOLDER"
,    SiteMenu = "SITE_MENU"
,    Theme = "THEME"
,    ContentGroup = "CONTENT_GROUP"
,    FollowMe = "FOLLOW_ME"
,    KnowledgeBase = "KNOWLEDGE_BASE"
,    ListMembership = "LIST_MEMBERSHIP"
,    ContactMembership = "CONTACT_MEMBERSHIP"
,    PasswordProtected = "PASSWORD_PROTECTED"
,    UnrestrictedAccess = "UNRESTRICTED_ACCESS"
,    MarketplaceListing = "MARKETPLACE_LISTING"
,    LayoutSection = "LAYOUT_SECTION"
,    ThemeSettings = "THEME_SETTINGS"
,    VideoPlayer = "VIDEO_PLAYER"
,    UrlMapping = "URL_MAPPING"
,    KnowledgeCategory = "KNOWLEDGE_CATEGORY"
,    KnowledgeHomepageCategory = "KNOWLEDGE_HOMEPAGE_CATEGORY"
,    RawAsset = "RAW_ASSET"
,    GlobalContent = "GLOBAL_CONTENT"
,    HubdbTableRow = "HUBDB_TABLE_ROW"
,    BlogAuthor = "BLOG_AUTHOR"
,    ServerlessFunction = "SERVERLESS_FUNCTION"
,    KnowledgeCategoryTranslation = "KNOWLEDGE_CATEGORY_TRANSLATION"
}


export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=actualCname" })
  actualCname: string;

  @Metadata({ data: "json, name=actualIp" })
  actualIp: string;

  @Metadata({ data: "json, name=apexDomain" })
  apexDomain: string;

  @Metadata({ data: "json, name=apexIpAddresses" })
  apexIpAddresses: string[];

  @Metadata({ data: "json, name=apexResolutionStatus" })
  apexResolutionStatus: DomainApexResolutionStatusEnum;

  @Metadata({ data: "json, name=authorAt" })
  authorAt: number;

  @Metadata({ data: "json, name=brandId" })
  brandId: number;

  @Metadata({ data: "json, name=cdnPurgeEmbargoTime" })
  cdnPurgeEmbargoTime: number;

  @Metadata({ data: "json, name=certificateId" })
  certificateId: number;

  @Metadata({ data: "json, name=consecutiveNonResolvingCount" })
  consecutiveNonResolvingCount: number;

  @Metadata({ data: "json, name=correctCname" })
  correctCname: string;

  @Metadata({ data: "json, name=cosObjectType" })
  cosObjectType: DomainCosObjectTypeEnum;

  @Metadata({ data: "json, name=created" })
  created: number;

  @Metadata({ data: "json, name=createdById" })
  createdById: number;

  @Metadata({ data: "json, name=deletable" })
  deletable: boolean;

  @Metadata({ data: "json, name=derivedBrandName" })
  derivedBrandName: string;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=domainCdnConfig" })
  domainCdnConfig: DomainCdnConfig;

  @Metadata({ data: "json, name=fullCategoryKey" })
  fullCategoryKey: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isAnyPrimary" })
  isAnyPrimary: boolean;

  @Metadata({ data: "json, name=isDnsCorrect" })
  isDnsCorrect: boolean;

  @Metadata({ data: "json, name=isInternalDomain" })
  isInternalDomain: boolean;

  @Metadata({ data: "json, name=isLegacy" })
  isLegacy: boolean;

  @Metadata({ data: "json, name=isLegacyDomain" })
  isLegacyDomain: boolean;

  @Metadata({ data: "json, name=isResolving" })
  isResolving: boolean;

  @Metadata({ data: "json, name=isResolvingIgnoringManuallyMarkedAsResolving" })
  isResolvingIgnoringManuallyMarkedAsResolving: boolean;

  @Metadata({ data: "json, name=isResolvingInternalProperty" })
  isResolvingInternalProperty: boolean;

  @Metadata({ data: "json, name=isSetupComplete" })
  isSetupComplete: boolean;

  @Metadata({ data: "json, name=isSslEnabled" })
  isSslEnabled: boolean;

  @Metadata({ data: "json, name=isSslOnly" })
  isSslOnly: boolean;

  @Metadata({ data: "json, name=isStagingDomain" })
  isStagingDomain: boolean;

  @Metadata({ data: "json, name=isUsedForAnyContentType" })
  isUsedForAnyContentType: boolean;

  @Metadata({ data: "json, name=isUsedForBlogPost" })
  isUsedForBlogPost: boolean;

  @Metadata({ data: "json, name=isUsedForEmail" })
  isUsedForEmail: boolean;

  @Metadata({ data: "json, name=isUsedForKnowledge" })
  isUsedForKnowledge: boolean;

  @Metadata({ data: "json, name=isUsedForLandingPage" })
  isUsedForLandingPage: boolean;

  @Metadata({ data: "json, name=isUsedForSitePage" })
  isUsedForSitePage: boolean;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=manuallyMarkedAsResolving" })
  manuallyMarkedAsResolving: boolean;

  @Metadata({ data: "json, name=portalId" })
  portalId: number;

  @Metadata({ data: "json, name=primaryBlog" })
  primaryBlog: boolean;

  @Metadata({ data: "json, name=primaryBlogPost" })
  primaryBlogPost: boolean;

  @Metadata({ data: "json, name=primaryClickTracking" })
  primaryClickTracking: boolean;

  @Metadata({ data: "json, name=primaryEmail" })
  primaryEmail: boolean;

  @Metadata({ data: "json, name=primaryKnowledge" })
  primaryKnowledge: boolean;

  @Metadata({ data: "json, name=primaryLandingPage" })
  primaryLandingPage: boolean;

  @Metadata({ data: "json, name=primaryLegacyPage" })
  primaryLegacyPage: boolean;

  @Metadata({ data: "json, name=primarySitePage" })
  primarySitePage: boolean;

  @Metadata({ data: "json, name=publicSuffix" })
  publicSuffix: string;

  @Metadata({ data: "json, name=secondaryToDomain" })
  secondaryToDomain: string;

  @Metadata({ data: "json, name=setUpLanguage" })
  setUpLanguage: string;

  @Metadata({ data: "json, name=setupInfo" })
  setupInfo: DomainSetupInfo;

  @Metadata({ data: "json, name=setupTaskId" })
  setupTaskId: number;

  @Metadata({ data: "json, name=siteId" })
  siteId: number;

  @Metadata({ data: "json, name=sslCname" })
  sslCname: string;

  @Metadata({ data: "json, name=sslRequestId" })
  sslRequestId: number;

  @Metadata({ data: "json, name=teamIds" })
  teamIds: number[];

  @Metadata({ data: "json, name=updated" })
  updated: number;

  @Metadata({ data: "json, name=updatedById" })
  updatedById: number;
}
