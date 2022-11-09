import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainCdnConfig } from "./domaincdnconfig";
import { DomainSetupInfo } from "./domainsetupinfo";
export declare enum DomainApexResolutionStatusEnum {
    Ineligible = "INELIGIBLE",
    SuggestResolving = "SUGGEST_RESOLVING",
    AlreadyResolving = "ALREADY_RESOLVING",
    Error = "ERROR"
}
export declare enum DomainCosObjectTypeEnum {
    Content = "CONTENT",
    ExtensionResource = "EXTENSION_RESOURCE",
    Layout = "LAYOUT",
    CustomWidget = "CUSTOM_WIDGET",
    Widget = "WIDGET",
    Form = "FORM",
    Placement = "PLACEMENT",
    Image = "IMAGE",
    DomainSettings = "DOMAIN_SETTINGS",
    SiteSettings = "SITE_SETTINGS",
    EmailAddress = "EMAIL_ADDRESS",
    Workflow = "WORKFLOW",
    HubdbTable = "HUBDB_TABLE",
    RedirectUrl = "REDIRECT_URL",
    DesignFolder = "DESIGN_FOLDER",
    SiteMap = "SITE_MAP",
    Domain = "DOMAIN",
    Blog = "BLOG",
    File = "FILE",
    Folder = "FOLDER",
    SiteMenu = "SITE_MENU",
    Theme = "THEME",
    ContentGroup = "CONTENT_GROUP",
    FollowMe = "FOLLOW_ME",
    KnowledgeBase = "KNOWLEDGE_BASE",
    ListMembership = "LIST_MEMBERSHIP",
    ContactMembership = "CONTACT_MEMBERSHIP",
    PasswordProtected = "PASSWORD_PROTECTED",
    UnrestrictedAccess = "UNRESTRICTED_ACCESS",
    MarketplaceListing = "MARKETPLACE_LISTING",
    LayoutSection = "LAYOUT_SECTION",
    ThemeSettings = "THEME_SETTINGS",
    VideoPlayer = "VIDEO_PLAYER",
    UrlMapping = "URL_MAPPING",
    KnowledgeCategory = "KNOWLEDGE_CATEGORY",
    KnowledgeHomepageCategory = "KNOWLEDGE_HOMEPAGE_CATEGORY",
    RawAsset = "RAW_ASSET",
    GlobalContent = "GLOBAL_CONTENT",
    HubdbTableRow = "HUBDB_TABLE_ROW",
    BlogAuthor = "BLOG_AUTHOR",
    ServerlessFunction = "SERVERLESS_FUNCTION",
    KnowledgeCategoryTranslation = "KNOWLEDGE_CATEGORY_TRANSLATION"
}
export declare class Domain extends SpeakeasyBase {
    actualCname: string;
    actualIp: string;
    apexDomain: string;
    apexIpAddresses: string[];
    apexResolutionStatus: DomainApexResolutionStatusEnum;
    authorAt: number;
    brandId: number;
    cdnPurgeEmbargoTime: number;
    certificateId: number;
    consecutiveNonResolvingCount: number;
    correctCname: string;
    cosObjectType: DomainCosObjectTypeEnum;
    created: number;
    createdById: number;
    deletable: boolean;
    derivedBrandName: string;
    domain: string;
    domainCdnConfig: DomainCdnConfig;
    fullCategoryKey: string;
    id: number;
    isAnyPrimary: boolean;
    isDnsCorrect: boolean;
    isInternalDomain: boolean;
    isLegacy: boolean;
    isLegacyDomain: boolean;
    isResolving: boolean;
    isResolvingIgnoringManuallyMarkedAsResolving: boolean;
    isResolvingInternalProperty: boolean;
    isSetupComplete: boolean;
    isSslEnabled: boolean;
    isSslOnly: boolean;
    isStagingDomain: boolean;
    isUsedForAnyContentType: boolean;
    isUsedForBlogPost: boolean;
    isUsedForEmail: boolean;
    isUsedForKnowledge: boolean;
    isUsedForLandingPage: boolean;
    isUsedForSitePage: boolean;
    label: string;
    manuallyMarkedAsResolving: boolean;
    portalId: number;
    primaryBlog: boolean;
    primaryBlogPost: boolean;
    primaryClickTracking: boolean;
    primaryEmail: boolean;
    primaryKnowledge: boolean;
    primaryLandingPage: boolean;
    primaryLegacyPage: boolean;
    primarySitePage: boolean;
    publicSuffix: string;
    secondaryToDomain: string;
    setUpLanguage: string;
    setupInfo: DomainSetupInfo;
    setupTaskId: number;
    siteId: number;
    sslCname: string;
    sslRequestId: number;
    teamIds: number[];
    updated: number;
    updatedById: number;
}
