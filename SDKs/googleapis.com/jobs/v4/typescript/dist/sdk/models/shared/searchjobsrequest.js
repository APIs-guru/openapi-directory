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
import { CustomRankingInfo } from "./customrankinginfo";
import { HistogramQuery } from "./histogramquery";
import { JobQuery } from "./jobquery";
import { RequestMetadata } from "./requestmetadata";
export var SearchJobsRequestDiversificationLevelEnum;
(function (SearchJobsRequestDiversificationLevelEnum) {
    SearchJobsRequestDiversificationLevelEnum["DiversificationLevelUnspecified"] = "DIVERSIFICATION_LEVEL_UNSPECIFIED";
    SearchJobsRequestDiversificationLevelEnum["Disabled"] = "DISABLED";
    SearchJobsRequestDiversificationLevelEnum["Simple"] = "SIMPLE";
    SearchJobsRequestDiversificationLevelEnum["OnePerCompany"] = "ONE_PER_COMPANY";
    SearchJobsRequestDiversificationLevelEnum["TwoPerCompany"] = "TWO_PER_COMPANY";
    SearchJobsRequestDiversificationLevelEnum["DiversifyByLooserSimilarity"] = "DIVERSIFY_BY_LOOSER_SIMILARITY";
})(SearchJobsRequestDiversificationLevelEnum || (SearchJobsRequestDiversificationLevelEnum = {}));
export var SearchJobsRequestJobViewEnum;
(function (SearchJobsRequestJobViewEnum) {
    SearchJobsRequestJobViewEnum["JobViewUnspecified"] = "JOB_VIEW_UNSPECIFIED";
    SearchJobsRequestJobViewEnum["JobViewIdOnly"] = "JOB_VIEW_ID_ONLY";
    SearchJobsRequestJobViewEnum["JobViewMinimal"] = "JOB_VIEW_MINIMAL";
    SearchJobsRequestJobViewEnum["JobViewSmall"] = "JOB_VIEW_SMALL";
    SearchJobsRequestJobViewEnum["JobViewFull"] = "JOB_VIEW_FULL";
})(SearchJobsRequestJobViewEnum || (SearchJobsRequestJobViewEnum = {}));
export var SearchJobsRequestKeywordMatchModeEnum;
(function (SearchJobsRequestKeywordMatchModeEnum) {
    SearchJobsRequestKeywordMatchModeEnum["KeywordMatchModeUnspecified"] = "KEYWORD_MATCH_MODE_UNSPECIFIED";
    SearchJobsRequestKeywordMatchModeEnum["KeywordMatchDisabled"] = "KEYWORD_MATCH_DISABLED";
    SearchJobsRequestKeywordMatchModeEnum["KeywordMatchAll"] = "KEYWORD_MATCH_ALL";
    SearchJobsRequestKeywordMatchModeEnum["KeywordMatchTitleOnly"] = "KEYWORD_MATCH_TITLE_ONLY";
})(SearchJobsRequestKeywordMatchModeEnum || (SearchJobsRequestKeywordMatchModeEnum = {}));
export var SearchJobsRequestSearchModeEnum;
(function (SearchJobsRequestSearchModeEnum) {
    SearchJobsRequestSearchModeEnum["SearchModeUnspecified"] = "SEARCH_MODE_UNSPECIFIED";
    SearchJobsRequestSearchModeEnum["JobSearch"] = "JOB_SEARCH";
    SearchJobsRequestSearchModeEnum["FeaturedJobSearch"] = "FEATURED_JOB_SEARCH";
})(SearchJobsRequestSearchModeEnum || (SearchJobsRequestSearchModeEnum = {}));
// SearchJobsRequest
/**
 * The Request body of the `SearchJobs` call.
**/
var SearchJobsRequest = /** @class */ (function (_super) {
    __extends(SearchJobsRequest, _super);
    function SearchJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customRankingInfo" }),
        __metadata("design:type", CustomRankingInfo)
    ], SearchJobsRequest.prototype, "customRankingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableKeywordMatch" }),
        __metadata("design:type", Boolean)
    ], SearchJobsRequest.prototype, "disableKeywordMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diversificationLevel" }),
        __metadata("design:type", String)
    ], SearchJobsRequest.prototype, "diversificationLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableBroadening" }),
        __metadata("design:type", Boolean)
    ], SearchJobsRequest.prototype, "enableBroadening", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=histogramQueries", elemType: HistogramQuery }),
        __metadata("design:type", Array)
    ], SearchJobsRequest.prototype, "histogramQueries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobQuery" }),
        __metadata("design:type", JobQuery)
    ], SearchJobsRequest.prototype, "jobQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobView" }),
        __metadata("design:type", String)
    ], SearchJobsRequest.prototype, "jobView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keywordMatchMode" }),
        __metadata("design:type", String)
    ], SearchJobsRequest.prototype, "keywordMatchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPageSize" }),
        __metadata("design:type", Number)
    ], SearchJobsRequest.prototype, "maxPageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], SearchJobsRequest.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], SearchJobsRequest.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], SearchJobsRequest.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMetadata" }),
        __metadata("design:type", RequestMetadata)
    ], SearchJobsRequest.prototype, "requestMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchMode" }),
        __metadata("design:type", String)
    ], SearchJobsRequest.prototype, "searchMode", void 0);
    return SearchJobsRequest;
}(SpeakeasyBase));
export { SearchJobsRequest };
