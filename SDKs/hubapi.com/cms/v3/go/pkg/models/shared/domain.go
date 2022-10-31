package shared

type DomainApexResolutionStatusEnum string

const (
	DomainApexResolutionStatusEnumIneligible       DomainApexResolutionStatusEnum = "INELIGIBLE"
	DomainApexResolutionStatusEnumSuggestResolving DomainApexResolutionStatusEnum = "SUGGEST_RESOLVING"
	DomainApexResolutionStatusEnumAlreadyResolving DomainApexResolutionStatusEnum = "ALREADY_RESOLVING"
	DomainApexResolutionStatusEnumError            DomainApexResolutionStatusEnum = "ERROR"
)

type DomainCosObjectTypeEnum string

const (
	DomainCosObjectTypeEnumContent                      DomainCosObjectTypeEnum = "CONTENT"
	DomainCosObjectTypeEnumExtensionResource            DomainCosObjectTypeEnum = "EXTENSION_RESOURCE"
	DomainCosObjectTypeEnumLayout                       DomainCosObjectTypeEnum = "LAYOUT"
	DomainCosObjectTypeEnumCustomWidget                 DomainCosObjectTypeEnum = "CUSTOM_WIDGET"
	DomainCosObjectTypeEnumWidget                       DomainCosObjectTypeEnum = "WIDGET"
	DomainCosObjectTypeEnumForm                         DomainCosObjectTypeEnum = "FORM"
	DomainCosObjectTypeEnumPlacement                    DomainCosObjectTypeEnum = "PLACEMENT"
	DomainCosObjectTypeEnumImage                        DomainCosObjectTypeEnum = "IMAGE"
	DomainCosObjectTypeEnumDomainSettings               DomainCosObjectTypeEnum = "DOMAIN_SETTINGS"
	DomainCosObjectTypeEnumSiteSettings                 DomainCosObjectTypeEnum = "SITE_SETTINGS"
	DomainCosObjectTypeEnumEmailAddress                 DomainCosObjectTypeEnum = "EMAIL_ADDRESS"
	DomainCosObjectTypeEnumWorkflow                     DomainCosObjectTypeEnum = "WORKFLOW"
	DomainCosObjectTypeEnumHubdbTable                   DomainCosObjectTypeEnum = "HUBDB_TABLE"
	DomainCosObjectTypeEnumRedirectURL                  DomainCosObjectTypeEnum = "REDIRECT_URL"
	DomainCosObjectTypeEnumDesignFolder                 DomainCosObjectTypeEnum = "DESIGN_FOLDER"
	DomainCosObjectTypeEnumSiteMap                      DomainCosObjectTypeEnum = "SITE_MAP"
	DomainCosObjectTypeEnumDomain                       DomainCosObjectTypeEnum = "DOMAIN"
	DomainCosObjectTypeEnumBlog                         DomainCosObjectTypeEnum = "BLOG"
	DomainCosObjectTypeEnumFile                         DomainCosObjectTypeEnum = "FILE"
	DomainCosObjectTypeEnumFolder                       DomainCosObjectTypeEnum = "FOLDER"
	DomainCosObjectTypeEnumSiteMenu                     DomainCosObjectTypeEnum = "SITE_MENU"
	DomainCosObjectTypeEnumTheme                        DomainCosObjectTypeEnum = "THEME"
	DomainCosObjectTypeEnumContentGroup                 DomainCosObjectTypeEnum = "CONTENT_GROUP"
	DomainCosObjectTypeEnumFollowMe                     DomainCosObjectTypeEnum = "FOLLOW_ME"
	DomainCosObjectTypeEnumKnowledgeBase                DomainCosObjectTypeEnum = "KNOWLEDGE_BASE"
	DomainCosObjectTypeEnumListMembership               DomainCosObjectTypeEnum = "LIST_MEMBERSHIP"
	DomainCosObjectTypeEnumContactMembership            DomainCosObjectTypeEnum = "CONTACT_MEMBERSHIP"
	DomainCosObjectTypeEnumPasswordProtected            DomainCosObjectTypeEnum = "PASSWORD_PROTECTED"
	DomainCosObjectTypeEnumUnrestrictedAccess           DomainCosObjectTypeEnum = "UNRESTRICTED_ACCESS"
	DomainCosObjectTypeEnumMarketplaceListing           DomainCosObjectTypeEnum = "MARKETPLACE_LISTING"
	DomainCosObjectTypeEnumLayoutSection                DomainCosObjectTypeEnum = "LAYOUT_SECTION"
	DomainCosObjectTypeEnumThemeSettings                DomainCosObjectTypeEnum = "THEME_SETTINGS"
	DomainCosObjectTypeEnumVideoPlayer                  DomainCosObjectTypeEnum = "VIDEO_PLAYER"
	DomainCosObjectTypeEnumURLMapping                   DomainCosObjectTypeEnum = "URL_MAPPING"
	DomainCosObjectTypeEnumKnowledgeCategory            DomainCosObjectTypeEnum = "KNOWLEDGE_CATEGORY"
	DomainCosObjectTypeEnumKnowledgeHomepageCategory    DomainCosObjectTypeEnum = "KNOWLEDGE_HOMEPAGE_CATEGORY"
	DomainCosObjectTypeEnumRawAsset                     DomainCosObjectTypeEnum = "RAW_ASSET"
	DomainCosObjectTypeEnumGlobalContent                DomainCosObjectTypeEnum = "GLOBAL_CONTENT"
	DomainCosObjectTypeEnumHubdbTableRow                DomainCosObjectTypeEnum = "HUBDB_TABLE_ROW"
	DomainCosObjectTypeEnumBlogAuthor                   DomainCosObjectTypeEnum = "BLOG_AUTHOR"
	DomainCosObjectTypeEnumServerlessFunction           DomainCosObjectTypeEnum = "SERVERLESS_FUNCTION"
	DomainCosObjectTypeEnumKnowledgeCategoryTranslation DomainCosObjectTypeEnum = "KNOWLEDGE_CATEGORY_TRANSLATION"
)

type Domain struct {
	ActualCname                                  string                         `json:"actualCname"`
	ActualIP                                     string                         `json:"actualIp"`
	ApexDomain                                   string                         `json:"apexDomain"`
	ApexIPAddresses                              []string                       `json:"apexIpAddresses"`
	ApexResolutionStatus                         DomainApexResolutionStatusEnum `json:"apexResolutionStatus"`
	AuthorAt                                     int64                          `json:"authorAt"`
	BrandID                                      int64                          `json:"brandId"`
	CdnPurgeEmbargoTime                          int64                          `json:"cdnPurgeEmbargoTime"`
	CertificateID                                int64                          `json:"certificateId"`
	ConsecutiveNonResolvingCount                 int32                          `json:"consecutiveNonResolvingCount"`
	CorrectCname                                 string                         `json:"correctCname"`
	CosObjectType                                DomainCosObjectTypeEnum        `json:"cosObjectType"`
	Created                                      int64                          `json:"created"`
	CreatedByID                                  int32                          `json:"createdById"`
	Deletable                                    bool                           `json:"deletable"`
	DerivedBrandName                             string                         `json:"derivedBrandName"`
	Domain                                       string                         `json:"domain"`
	DomainCdnConfig                              DomainCdnConfig                `json:"domainCdnConfig"`
	FullCategoryKey                              string                         `json:"fullCategoryKey"`
	ID                                           int64                          `json:"id"`
	IsAnyPrimary                                 bool                           `json:"isAnyPrimary"`
	IsDNSCorrect                                 bool                           `json:"isDnsCorrect"`
	IsInternalDomain                             bool                           `json:"isInternalDomain"`
	IsLegacy                                     bool                           `json:"isLegacy"`
	IsLegacyDomain                               bool                           `json:"isLegacyDomain"`
	IsResolving                                  bool                           `json:"isResolving"`
	IsResolvingIgnoringManuallyMarkedAsResolving bool                           `json:"isResolvingIgnoringManuallyMarkedAsResolving"`
	IsResolvingInternalProperty                  bool                           `json:"isResolvingInternalProperty"`
	IsSetupComplete                              bool                           `json:"isSetupComplete"`
	IsSslEnabled                                 bool                           `json:"isSslEnabled"`
	IsSslOnly                                    bool                           `json:"isSslOnly"`
	IsStagingDomain                              bool                           `json:"isStagingDomain"`
	IsUsedForAnyContentType                      bool                           `json:"isUsedForAnyContentType"`
	IsUsedForBlogPost                            bool                           `json:"isUsedForBlogPost"`
	IsUsedForEmail                               bool                           `json:"isUsedForEmail"`
	IsUsedForKnowledge                           bool                           `json:"isUsedForKnowledge"`
	IsUsedForLandingPage                         bool                           `json:"isUsedForLandingPage"`
	IsUsedForSitePage                            bool                           `json:"isUsedForSitePage"`
	Label                                        string                         `json:"label"`
	ManuallyMarkedAsResolving                    bool                           `json:"manuallyMarkedAsResolving"`
	PortalID                                     int32                          `json:"portalId"`
	PrimaryBlog                                  bool                           `json:"primaryBlog"`
	PrimaryBlogPost                              bool                           `json:"primaryBlogPost"`
	PrimaryClickTracking                         bool                           `json:"primaryClickTracking"`
	PrimaryEmail                                 bool                           `json:"primaryEmail"`
	PrimaryKnowledge                             bool                           `json:"primaryKnowledge"`
	PrimaryLandingPage                           bool                           `json:"primaryLandingPage"`
	PrimaryLegacyPage                            bool                           `json:"primaryLegacyPage"`
	PrimarySitePage                              bool                           `json:"primarySitePage"`
	PublicSuffix                                 string                         `json:"publicSuffix"`
	SecondaryToDomain                            string                         `json:"secondaryToDomain"`
	SetUpLanguage                                string                         `json:"setUpLanguage"`
	SetupInfo                                    DomainSetupInfo                `json:"setupInfo"`
	SetupTaskID                                  int64                          `json:"setupTaskId"`
	SiteID                                       int64                          `json:"siteId"`
	SslCname                                     string                         `json:"sslCname"`
	SslRequestID                                 int64                          `json:"sslRequestId"`
	TeamIds                                      []int64                        `json:"teamIds"`
	Updated                                      int64                          `json:"updated"`
	UpdatedByID                                  int32                          `json:"updatedById"`
}
