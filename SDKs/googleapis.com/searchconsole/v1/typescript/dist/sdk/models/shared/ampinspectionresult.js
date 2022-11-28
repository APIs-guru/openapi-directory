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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmpIssue } from "./ampissue";
export var AmpInspectionResultAmpIndexStatusVerdictEnum;
(function (AmpInspectionResultAmpIndexStatusVerdictEnum) {
    AmpInspectionResultAmpIndexStatusVerdictEnum["VerdictUnspecified"] = "VERDICT_UNSPECIFIED";
    AmpInspectionResultAmpIndexStatusVerdictEnum["Pass"] = "PASS";
    AmpInspectionResultAmpIndexStatusVerdictEnum["Partial"] = "PARTIAL";
    AmpInspectionResultAmpIndexStatusVerdictEnum["Fail"] = "FAIL";
    AmpInspectionResultAmpIndexStatusVerdictEnum["Neutral"] = "NEUTRAL";
})(AmpInspectionResultAmpIndexStatusVerdictEnum || (AmpInspectionResultAmpIndexStatusVerdictEnum = {}));
export var AmpInspectionResultIndexingStateEnum;
(function (AmpInspectionResultIndexingStateEnum) {
    AmpInspectionResultIndexingStateEnum["AmpIndexingStateUnspecified"] = "AMP_INDEXING_STATE_UNSPECIFIED";
    AmpInspectionResultIndexingStateEnum["AmpIndexingAllowed"] = "AMP_INDEXING_ALLOWED";
    AmpInspectionResultIndexingStateEnum["BlockedDueToNoindex"] = "BLOCKED_DUE_TO_NOINDEX";
    AmpInspectionResultIndexingStateEnum["BlockedDueToExpiredUnavailableAfter"] = "BLOCKED_DUE_TO_EXPIRED_UNAVAILABLE_AFTER";
})(AmpInspectionResultIndexingStateEnum || (AmpInspectionResultIndexingStateEnum = {}));
export var AmpInspectionResultPageFetchStateEnum;
(function (AmpInspectionResultPageFetchStateEnum) {
    AmpInspectionResultPageFetchStateEnum["PageFetchStateUnspecified"] = "PAGE_FETCH_STATE_UNSPECIFIED";
    AmpInspectionResultPageFetchStateEnum["Successful"] = "SUCCESSFUL";
    AmpInspectionResultPageFetchStateEnum["Soft404"] = "SOFT_404";
    AmpInspectionResultPageFetchStateEnum["BlockedRobotsTxt"] = "BLOCKED_ROBOTS_TXT";
    AmpInspectionResultPageFetchStateEnum["NotFound"] = "NOT_FOUND";
    AmpInspectionResultPageFetchStateEnum["AccessDenied"] = "ACCESS_DENIED";
    AmpInspectionResultPageFetchStateEnum["ServerError"] = "SERVER_ERROR";
    AmpInspectionResultPageFetchStateEnum["RedirectError"] = "REDIRECT_ERROR";
    AmpInspectionResultPageFetchStateEnum["AccessForbidden"] = "ACCESS_FORBIDDEN";
    AmpInspectionResultPageFetchStateEnum["Blocked4Xx"] = "BLOCKED_4XX";
    AmpInspectionResultPageFetchStateEnum["InternalCrawlError"] = "INTERNAL_CRAWL_ERROR";
    AmpInspectionResultPageFetchStateEnum["InvalidUrl"] = "INVALID_URL";
})(AmpInspectionResultPageFetchStateEnum || (AmpInspectionResultPageFetchStateEnum = {}));
export var AmpInspectionResultRobotsTxtStateEnum;
(function (AmpInspectionResultRobotsTxtStateEnum) {
    AmpInspectionResultRobotsTxtStateEnum["RobotsTxtStateUnspecified"] = "ROBOTS_TXT_STATE_UNSPECIFIED";
    AmpInspectionResultRobotsTxtStateEnum["Allowed"] = "ALLOWED";
    AmpInspectionResultRobotsTxtStateEnum["Disallowed"] = "DISALLOWED";
})(AmpInspectionResultRobotsTxtStateEnum || (AmpInspectionResultRobotsTxtStateEnum = {}));
export var AmpInspectionResultVerdictEnum;
(function (AmpInspectionResultVerdictEnum) {
    AmpInspectionResultVerdictEnum["VerdictUnspecified"] = "VERDICT_UNSPECIFIED";
    AmpInspectionResultVerdictEnum["Pass"] = "PASS";
    AmpInspectionResultVerdictEnum["Partial"] = "PARTIAL";
    AmpInspectionResultVerdictEnum["Fail"] = "FAIL";
    AmpInspectionResultVerdictEnum["Neutral"] = "NEUTRAL";
})(AmpInspectionResultVerdictEnum || (AmpInspectionResultVerdictEnum = {}));
// AmpInspectionResult
/**
 * AMP inspection result of the live page or the current information from Google's index, depending on whether you requested a live inspection or not.
**/
var AmpInspectionResult = /** @class */ (function (_super) {
    __extends(AmpInspectionResult, _super);
    function AmpInspectionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ampIndexStatusVerdict" }),
        __metadata("design:type", String)
    ], AmpInspectionResult.prototype, "ampIndexStatusVerdict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ampUrl" }),
        __metadata("design:type", String)
    ], AmpInspectionResult.prototype, "ampUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexingState" }),
        __metadata("design:type", String)
    ], AmpInspectionResult.prototype, "indexingState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues", elemType: AmpIssue }),
        __metadata("design:type", Array)
    ], AmpInspectionResult.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastCrawlTime" }),
        __metadata("design:type", String)
    ], AmpInspectionResult.prototype, "lastCrawlTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageFetchState" }),
        __metadata("design:type", String)
    ], AmpInspectionResult.prototype, "pageFetchState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=robotsTxtState" }),
        __metadata("design:type", String)
    ], AmpInspectionResult.prototype, "robotsTxtState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verdict" }),
        __metadata("design:type", String)
    ], AmpInspectionResult.prototype, "verdict", void 0);
    return AmpInspectionResult;
}(SpeakeasyBase));
export { AmpInspectionResult };
