var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainCdnConfig } from "./domaincdnconfig";
import { DomainSetupInfo } from "./domainsetupinfo";
export var DomainApexResolutionStatusEnum;
(function (DomainApexResolutionStatusEnum) {
    DomainApexResolutionStatusEnum["Ineligible"] = "INELIGIBLE";
    DomainApexResolutionStatusEnum["SuggestResolving"] = "SUGGEST_RESOLVING";
    DomainApexResolutionStatusEnum["AlreadyResolving"] = "ALREADY_RESOLVING";
    DomainApexResolutionStatusEnum["Error"] = "ERROR";
})(DomainApexResolutionStatusEnum || (DomainApexResolutionStatusEnum = {}));
export var DomainCosObjectTypeEnum;
(function (DomainCosObjectTypeEnum) {
    DomainCosObjectTypeEnum["Content"] = "CONTENT";
    DomainCosObjectTypeEnum["ExtensionResource"] = "EXTENSION_RESOURCE";
    DomainCosObjectTypeEnum["Layout"] = "LAYOUT";
    DomainCosObjectTypeEnum["CustomWidget"] = "CUSTOM_WIDGET";
    DomainCosObjectTypeEnum["Widget"] = "WIDGET";
    DomainCosObjectTypeEnum["Form"] = "FORM";
    DomainCosObjectTypeEnum["Placement"] = "PLACEMENT";
    DomainCosObjectTypeEnum["Image"] = "IMAGE";
    DomainCosObjectTypeEnum["DomainSettings"] = "DOMAIN_SETTINGS";
    DomainCosObjectTypeEnum["SiteSettings"] = "SITE_SETTINGS";
    DomainCosObjectTypeEnum["EmailAddress"] = "EMAIL_ADDRESS";
    DomainCosObjectTypeEnum["Workflow"] = "WORKFLOW";
    DomainCosObjectTypeEnum["HubdbTable"] = "HUBDB_TABLE";
    DomainCosObjectTypeEnum["RedirectUrl"] = "REDIRECT_URL";
    DomainCosObjectTypeEnum["DesignFolder"] = "DESIGN_FOLDER";
    DomainCosObjectTypeEnum["SiteMap"] = "SITE_MAP";
    DomainCosObjectTypeEnum["Domain"] = "DOMAIN";
    DomainCosObjectTypeEnum["Blog"] = "BLOG";
    DomainCosObjectTypeEnum["File"] = "FILE";
    DomainCosObjectTypeEnum["Folder"] = "FOLDER";
    DomainCosObjectTypeEnum["SiteMenu"] = "SITE_MENU";
    DomainCosObjectTypeEnum["Theme"] = "THEME";
    DomainCosObjectTypeEnum["ContentGroup"] = "CONTENT_GROUP";
    DomainCosObjectTypeEnum["FollowMe"] = "FOLLOW_ME";
    DomainCosObjectTypeEnum["KnowledgeBase"] = "KNOWLEDGE_BASE";
    DomainCosObjectTypeEnum["ListMembership"] = "LIST_MEMBERSHIP";
    DomainCosObjectTypeEnum["ContactMembership"] = "CONTACT_MEMBERSHIP";
    DomainCosObjectTypeEnum["PasswordProtected"] = "PASSWORD_PROTECTED";
    DomainCosObjectTypeEnum["UnrestrictedAccess"] = "UNRESTRICTED_ACCESS";
    DomainCosObjectTypeEnum["MarketplaceListing"] = "MARKETPLACE_LISTING";
    DomainCosObjectTypeEnum["LayoutSection"] = "LAYOUT_SECTION";
    DomainCosObjectTypeEnum["ThemeSettings"] = "THEME_SETTINGS";
    DomainCosObjectTypeEnum["VideoPlayer"] = "VIDEO_PLAYER";
    DomainCosObjectTypeEnum["UrlMapping"] = "URL_MAPPING";
    DomainCosObjectTypeEnum["KnowledgeCategory"] = "KNOWLEDGE_CATEGORY";
    DomainCosObjectTypeEnum["KnowledgeHomepageCategory"] = "KNOWLEDGE_HOMEPAGE_CATEGORY";
    DomainCosObjectTypeEnum["RawAsset"] = "RAW_ASSET";
    DomainCosObjectTypeEnum["GlobalContent"] = "GLOBAL_CONTENT";
    DomainCosObjectTypeEnum["HubdbTableRow"] = "HUBDB_TABLE_ROW";
    DomainCosObjectTypeEnum["BlogAuthor"] = "BLOG_AUTHOR";
    DomainCosObjectTypeEnum["ServerlessFunction"] = "SERVERLESS_FUNCTION";
    DomainCosObjectTypeEnum["KnowledgeCategoryTranslation"] = "KNOWLEDGE_CATEGORY_TRANSLATION";
})(DomainCosObjectTypeEnum || (DomainCosObjectTypeEnum = {}));
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    function Domain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=actualCname" }),
        __metadata("design:type", String)
    ], Domain.prototype, "actualCname", void 0);
    __decorate([
        Metadata({ data: "json, name=actualIp" }),
        __metadata("design:type", String)
    ], Domain.prototype, "actualIp", void 0);
    __decorate([
        Metadata({ data: "json, name=apexDomain" }),
        __metadata("design:type", String)
    ], Domain.prototype, "apexDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=apexIpAddresses" }),
        __metadata("design:type", Array)
    ], Domain.prototype, "apexIpAddresses", void 0);
    __decorate([
        Metadata({ data: "json, name=apexResolutionStatus" }),
        __metadata("design:type", String)
    ], Domain.prototype, "apexResolutionStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=authorAt" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "authorAt", void 0);
    __decorate([
        Metadata({ data: "json, name=brandId" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "brandId", void 0);
    __decorate([
        Metadata({ data: "json, name=cdnPurgeEmbargoTime" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "cdnPurgeEmbargoTime", void 0);
    __decorate([
        Metadata({ data: "json, name=certificateId" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "certificateId", void 0);
    __decorate([
        Metadata({ data: "json, name=consecutiveNonResolvingCount" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "consecutiveNonResolvingCount", void 0);
    __decorate([
        Metadata({ data: "json, name=correctCname" }),
        __metadata("design:type", String)
    ], Domain.prototype, "correctCname", void 0);
    __decorate([
        Metadata({ data: "json, name=cosObjectType" }),
        __metadata("design:type", String)
    ], Domain.prototype, "cosObjectType", void 0);
    __decorate([
        Metadata({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=createdById" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "createdById", void 0);
    __decorate([
        Metadata({ data: "json, name=deletable" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "deletable", void 0);
    __decorate([
        Metadata({ data: "json, name=derivedBrandName" }),
        __metadata("design:type", String)
    ], Domain.prototype, "derivedBrandName", void 0);
    __decorate([
        Metadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Domain.prototype, "domain", void 0);
    __decorate([
        Metadata({ data: "json, name=domainCdnConfig" }),
        __metadata("design:type", DomainCdnConfig)
    ], Domain.prototype, "domainCdnConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=fullCategoryKey" }),
        __metadata("design:type", String)
    ], Domain.prototype, "fullCategoryKey", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=isAnyPrimary" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isAnyPrimary", void 0);
    __decorate([
        Metadata({ data: "json, name=isDnsCorrect" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isDnsCorrect", void 0);
    __decorate([
        Metadata({ data: "json, name=isInternalDomain" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isInternalDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=isLegacy" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isLegacy", void 0);
    __decorate([
        Metadata({ data: "json, name=isLegacyDomain" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isLegacyDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=isResolving" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isResolving", void 0);
    __decorate([
        Metadata({ data: "json, name=isResolvingIgnoringManuallyMarkedAsResolving" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isResolvingIgnoringManuallyMarkedAsResolving", void 0);
    __decorate([
        Metadata({ data: "json, name=isResolvingInternalProperty" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isResolvingInternalProperty", void 0);
    __decorate([
        Metadata({ data: "json, name=isSetupComplete" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isSetupComplete", void 0);
    __decorate([
        Metadata({ data: "json, name=isSslEnabled" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isSslEnabled", void 0);
    __decorate([
        Metadata({ data: "json, name=isSslOnly" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isSslOnly", void 0);
    __decorate([
        Metadata({ data: "json, name=isStagingDomain" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isStagingDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=isUsedForAnyContentType" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForAnyContentType", void 0);
    __decorate([
        Metadata({ data: "json, name=isUsedForBlogPost" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForBlogPost", void 0);
    __decorate([
        Metadata({ data: "json, name=isUsedForEmail" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=isUsedForKnowledge" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForKnowledge", void 0);
    __decorate([
        Metadata({ data: "json, name=isUsedForLandingPage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForLandingPage", void 0);
    __decorate([
        Metadata({ data: "json, name=isUsedForSitePage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForSitePage", void 0);
    __decorate([
        Metadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Domain.prototype, "label", void 0);
    __decorate([
        Metadata({ data: "json, name=manuallyMarkedAsResolving" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "manuallyMarkedAsResolving", void 0);
    __decorate([
        Metadata({ data: "json, name=portalId" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "portalId", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryBlog" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryBlog", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryBlogPost" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryBlogPost", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryClickTracking" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryClickTracking", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryEmail" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryEmail", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryKnowledge" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryKnowledge", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryLandingPage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryLandingPage", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryLegacyPage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryLegacyPage", void 0);
    __decorate([
        Metadata({ data: "json, name=primarySitePage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primarySitePage", void 0);
    __decorate([
        Metadata({ data: "json, name=publicSuffix" }),
        __metadata("design:type", String)
    ], Domain.prototype, "publicSuffix", void 0);
    __decorate([
        Metadata({ data: "json, name=secondaryToDomain" }),
        __metadata("design:type", String)
    ], Domain.prototype, "secondaryToDomain", void 0);
    __decorate([
        Metadata({ data: "json, name=setUpLanguage" }),
        __metadata("design:type", String)
    ], Domain.prototype, "setUpLanguage", void 0);
    __decorate([
        Metadata({ data: "json, name=setupInfo" }),
        __metadata("design:type", DomainSetupInfo)
    ], Domain.prototype, "setupInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=setupTaskId" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "setupTaskId", void 0);
    __decorate([
        Metadata({ data: "json, name=siteId" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "siteId", void 0);
    __decorate([
        Metadata({ data: "json, name=sslCname" }),
        __metadata("design:type", String)
    ], Domain.prototype, "sslCname", void 0);
    __decorate([
        Metadata({ data: "json, name=sslRequestId" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "sslRequestId", void 0);
    __decorate([
        Metadata({ data: "json, name=teamIds" }),
        __metadata("design:type", Array)
    ], Domain.prototype, "teamIds", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "updated", void 0);
    __decorate([
        Metadata({ data: "json, name=updatedById" }),
        __metadata("design:type", Number)
    ], Domain.prototype, "updatedById", void 0);
    return Domain;
}(SpeakeasyBase));
export { Domain };
