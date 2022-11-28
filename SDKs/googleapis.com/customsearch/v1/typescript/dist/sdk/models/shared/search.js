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
import { Result } from "./result";
import { Promotion } from "./promotion";
// SearchQueriesNextPage
/**
 * Custom search request metadata.
**/
var SearchQueriesNextPage = /** @class */ (function (_super) {
    __extends(SearchQueriesNextPage, _super);
    function SearchQueriesNextPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], SearchQueriesNextPage.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cr" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "cr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cx" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "cx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRestrict" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "dateRestrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableCnTwTranslation" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "disableCnTwTranslation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "exactTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "excludeTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gl" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "gl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleHost" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "googleHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highRange" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "highRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hl" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hq" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "hq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgColorType" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "imgColorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgDominantColor" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "imgDominantColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgSize" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "imgSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgType" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "imgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputEncoding" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "inputEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkSite" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "linkSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowRange" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "lowRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "orTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputEncoding" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "outputEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedSite" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "relatedSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rights" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "rights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "safe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "searchTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchType" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "searchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearch" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "siteSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearchFilter" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "siteSearchFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], SearchQueriesNextPage.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startPage" }),
        __metadata("design:type", Number)
    ], SearchQueriesNextPage.prototype, "startPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", String)
    ], SearchQueriesNextPage.prototype, "totalResults", void 0);
    return SearchQueriesNextPage;
}(SpeakeasyBase));
export { SearchQueriesNextPage };
// SearchQueriesPreviousPage
/**
 * Custom search request metadata.
**/
var SearchQueriesPreviousPage = /** @class */ (function (_super) {
    __extends(SearchQueriesPreviousPage, _super);
    function SearchQueriesPreviousPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], SearchQueriesPreviousPage.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cr" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "cr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cx" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "cx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRestrict" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "dateRestrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableCnTwTranslation" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "disableCnTwTranslation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "exactTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "excludeTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gl" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "gl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleHost" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "googleHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highRange" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "highRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hl" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hq" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "hq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgColorType" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "imgColorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgDominantColor" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "imgDominantColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgSize" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "imgSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgType" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "imgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputEncoding" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "inputEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkSite" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "linkSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowRange" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "lowRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "orTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputEncoding" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "outputEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedSite" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "relatedSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rights" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "rights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "safe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "searchTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchType" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "searchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearch" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "siteSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearchFilter" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "siteSearchFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], SearchQueriesPreviousPage.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startPage" }),
        __metadata("design:type", Number)
    ], SearchQueriesPreviousPage.prototype, "startPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", String)
    ], SearchQueriesPreviousPage.prototype, "totalResults", void 0);
    return SearchQueriesPreviousPage;
}(SpeakeasyBase));
export { SearchQueriesPreviousPage };
// SearchQueriesRequest
/**
 * Custom search request metadata.
**/
var SearchQueriesRequest = /** @class */ (function (_super) {
    __extends(SearchQueriesRequest, _super);
    function SearchQueriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], SearchQueriesRequest.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cr" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "cr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cx" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "cx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRestrict" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "dateRestrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableCnTwTranslation" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "disableCnTwTranslation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exactTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "exactTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludeTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "excludeTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileType" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gl" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "gl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleHost" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "googleHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=highRange" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "highRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hl" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hq" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "hq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgColorType" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "imgColorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgDominantColor" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "imgDominantColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgSize" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "imgSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imgType" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "imgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputEncoding" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "inputEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkSite" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "linkSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowRange" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "lowRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "orTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputEncoding" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "outputEncoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relatedSite" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "relatedSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rights" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "rights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=safe" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "safe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchTerms" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "searchTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchType" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "searchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearch" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "siteSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteSearchFilter" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "siteSearchFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startIndex" }),
        __metadata("design:type", Number)
    ], SearchQueriesRequest.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startPage" }),
        __metadata("design:type", Number)
    ], SearchQueriesRequest.prototype, "startPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", String)
    ], SearchQueriesRequest.prototype, "totalResults", void 0);
    return SearchQueriesRequest;
}(SpeakeasyBase));
export { SearchQueriesRequest };
// SearchQueries
/**
 * Query metadata for the previous, current, and next pages of results.
**/
var SearchQueries = /** @class */ (function (_super) {
    __extends(SearchQueries, _super);
    function SearchQueries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextPage", elemType: SearchQueriesNextPage }),
        __metadata("design:type", Array)
    ], SearchQueries.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousPage", elemType: SearchQueriesPreviousPage }),
        __metadata("design:type", Array)
    ], SearchQueries.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request", elemType: SearchQueriesRequest }),
        __metadata("design:type", Array)
    ], SearchQueries.prototype, "request", void 0);
    return SearchQueries;
}(SpeakeasyBase));
export { SearchQueries };
// SearchSearchInformation
/**
 * Metadata about a search operation.
**/
var SearchSearchInformation = /** @class */ (function (_super) {
    __extends(SearchSearchInformation, _super);
    function SearchSearchInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedSearchTime" }),
        __metadata("design:type", String)
    ], SearchSearchInformation.prototype, "formattedSearchTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formattedTotalResults" }),
        __metadata("design:type", String)
    ], SearchSearchInformation.prototype, "formattedTotalResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchTime" }),
        __metadata("design:type", Number)
    ], SearchSearchInformation.prototype, "searchTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalResults" }),
        __metadata("design:type", String)
    ], SearchSearchInformation.prototype, "totalResults", void 0);
    return SearchSearchInformation;
}(SpeakeasyBase));
export { SearchSearchInformation };
// SearchSpelling
/**
 * Spell correction information for a query.
**/
var SearchSpelling = /** @class */ (function (_super) {
    __extends(SearchSpelling, _super);
    function SearchSpelling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctedQuery" }),
        __metadata("design:type", String)
    ], SearchSpelling.prototype, "correctedQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=htmlCorrectedQuery" }),
        __metadata("design:type", String)
    ], SearchSpelling.prototype, "htmlCorrectedQuery", void 0);
    return SearchSpelling;
}(SpeakeasyBase));
export { SearchSpelling };
// SearchUrl
/**
 * OpenSearch template and URL.
**/
var SearchUrl = /** @class */ (function (_super) {
    __extends(SearchUrl, _super);
    function SearchUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], SearchUrl.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SearchUrl.prototype, "type", void 0);
    return SearchUrl;
}(SpeakeasyBase));
export { SearchUrl };
// Search
/**
 * Response to a custom search request.
**/
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", Map)
    ], Search.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=items", elemType: Result }),
        __metadata("design:type", Array)
    ], Search.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Search.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=promotions", elemType: Promotion }),
        __metadata("design:type", Array)
    ], Search.prototype, "promotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queries" }),
        __metadata("design:type", SearchQueries)
    ], Search.prototype, "queries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchInformation" }),
        __metadata("design:type", SearchSearchInformation)
    ], Search.prototype, "searchInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spelling" }),
        __metadata("design:type", SearchSpelling)
    ], Search.prototype, "spelling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", SearchUrl)
    ], Search.prototype, "url", void 0);
    return Search;
}(SpeakeasyBase));
export { Search };
