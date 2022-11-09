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
export var IndexStatusInspectionResultCrawledAsEnum;
(function (IndexStatusInspectionResultCrawledAsEnum) {
    IndexStatusInspectionResultCrawledAsEnum["CrawlingUserAgentUnspecified"] = "CRAWLING_USER_AGENT_UNSPECIFIED";
    IndexStatusInspectionResultCrawledAsEnum["Desktop"] = "DESKTOP";
    IndexStatusInspectionResultCrawledAsEnum["Mobile"] = "MOBILE";
})(IndexStatusInspectionResultCrawledAsEnum || (IndexStatusInspectionResultCrawledAsEnum = {}));
export var IndexStatusInspectionResultIndexingStateEnum;
(function (IndexStatusInspectionResultIndexingStateEnum) {
    IndexStatusInspectionResultIndexingStateEnum["IndexingStateUnspecified"] = "INDEXING_STATE_UNSPECIFIED";
    IndexStatusInspectionResultIndexingStateEnum["IndexingAllowed"] = "INDEXING_ALLOWED";
    IndexStatusInspectionResultIndexingStateEnum["BlockedByMetaTag"] = "BLOCKED_BY_META_TAG";
    IndexStatusInspectionResultIndexingStateEnum["BlockedByHttpHeader"] = "BLOCKED_BY_HTTP_HEADER";
    IndexStatusInspectionResultIndexingStateEnum["BlockedByRobotsTxt"] = "BLOCKED_BY_ROBOTS_TXT";
})(IndexStatusInspectionResultIndexingStateEnum || (IndexStatusInspectionResultIndexingStateEnum = {}));
export var IndexStatusInspectionResultPageFetchStateEnum;
(function (IndexStatusInspectionResultPageFetchStateEnum) {
    IndexStatusInspectionResultPageFetchStateEnum["PageFetchStateUnspecified"] = "PAGE_FETCH_STATE_UNSPECIFIED";
    IndexStatusInspectionResultPageFetchStateEnum["Successful"] = "SUCCESSFUL";
    IndexStatusInspectionResultPageFetchStateEnum["Soft404"] = "SOFT_404";
    IndexStatusInspectionResultPageFetchStateEnum["BlockedRobotsTxt"] = "BLOCKED_ROBOTS_TXT";
    IndexStatusInspectionResultPageFetchStateEnum["NotFound"] = "NOT_FOUND";
    IndexStatusInspectionResultPageFetchStateEnum["AccessDenied"] = "ACCESS_DENIED";
    IndexStatusInspectionResultPageFetchStateEnum["ServerError"] = "SERVER_ERROR";
    IndexStatusInspectionResultPageFetchStateEnum["RedirectError"] = "REDIRECT_ERROR";
    IndexStatusInspectionResultPageFetchStateEnum["AccessForbidden"] = "ACCESS_FORBIDDEN";
    IndexStatusInspectionResultPageFetchStateEnum["Blocked4Xx"] = "BLOCKED_4XX";
    IndexStatusInspectionResultPageFetchStateEnum["InternalCrawlError"] = "INTERNAL_CRAWL_ERROR";
    IndexStatusInspectionResultPageFetchStateEnum["InvalidUrl"] = "INVALID_URL";
})(IndexStatusInspectionResultPageFetchStateEnum || (IndexStatusInspectionResultPageFetchStateEnum = {}));
export var IndexStatusInspectionResultRobotsTxtStateEnum;
(function (IndexStatusInspectionResultRobotsTxtStateEnum) {
    IndexStatusInspectionResultRobotsTxtStateEnum["RobotsTxtStateUnspecified"] = "ROBOTS_TXT_STATE_UNSPECIFIED";
    IndexStatusInspectionResultRobotsTxtStateEnum["Allowed"] = "ALLOWED";
    IndexStatusInspectionResultRobotsTxtStateEnum["Disallowed"] = "DISALLOWED";
})(IndexStatusInspectionResultRobotsTxtStateEnum || (IndexStatusInspectionResultRobotsTxtStateEnum = {}));
export var IndexStatusInspectionResultVerdictEnum;
(function (IndexStatusInspectionResultVerdictEnum) {
    IndexStatusInspectionResultVerdictEnum["VerdictUnspecified"] = "VERDICT_UNSPECIFIED";
    IndexStatusInspectionResultVerdictEnum["Pass"] = "PASS";
    IndexStatusInspectionResultVerdictEnum["Partial"] = "PARTIAL";
    IndexStatusInspectionResultVerdictEnum["Fail"] = "FAIL";
    IndexStatusInspectionResultVerdictEnum["Neutral"] = "NEUTRAL";
})(IndexStatusInspectionResultVerdictEnum || (IndexStatusInspectionResultVerdictEnum = {}));
// IndexStatusInspectionResult
/**
 * Results of index status inspection for either the live page or the version in Google's index, depending on whether you requested a live inspection or not. For more information, see the [Index coverage report documentation](https://support.google.com/webmasters/answer/7440203).
**/
var IndexStatusInspectionResult = /** @class */ (function (_super) {
    __extends(IndexStatusInspectionResult, _super);
    function IndexStatusInspectionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=coverageState" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "coverageState", void 0);
    __decorate([
        Metadata({ data: "json, name=crawledAs" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "crawledAs", void 0);
    __decorate([
        Metadata({ data: "json, name=googleCanonical" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "googleCanonical", void 0);
    __decorate([
        Metadata({ data: "json, name=indexingState" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "indexingState", void 0);
    __decorate([
        Metadata({ data: "json, name=lastCrawlTime" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "lastCrawlTime", void 0);
    __decorate([
        Metadata({ data: "json, name=pageFetchState" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "pageFetchState", void 0);
    __decorate([
        Metadata({ data: "json, name=referringUrls" }),
        __metadata("design:type", Array)
    ], IndexStatusInspectionResult.prototype, "referringUrls", void 0);
    __decorate([
        Metadata({ data: "json, name=robotsTxtState" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "robotsTxtState", void 0);
    __decorate([
        Metadata({ data: "json, name=sitemap" }),
        __metadata("design:type", Array)
    ], IndexStatusInspectionResult.prototype, "sitemap", void 0);
    __decorate([
        Metadata({ data: "json, name=userCanonical" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "userCanonical", void 0);
    __decorate([
        Metadata({ data: "json, name=verdict" }),
        __metadata("design:type", String)
    ], IndexStatusInspectionResult.prototype, "verdict", void 0);
    return IndexStatusInspectionResult;
}(SpeakeasyBase));
export { IndexStatusInspectionResult };
