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
import * as shared from "../shared";
export var GetListsFormatFormatEnum;
(function (GetListsFormatFormatEnum) {
    GetListsFormatFormatEnum["Json"] = "json";
    GetListsFormatFormatEnum["Jsonp"] = "jsonp";
})(GetListsFormatFormatEnum || (GetListsFormatFormatEnum = {}));
var GetListsFormatPathParams = /** @class */ (function (_super) {
    __extends(GetListsFormatPathParams, _super);
    function GetListsFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetListsFormatPathParams.prototype, "format", void 0);
    return GetListsFormatPathParams;
}(SpeakeasyBase));
export { GetListsFormatPathParams };
export var GetListsFormatSortOrderEnum;
(function (GetListsFormatSortOrderEnum) {
    GetListsFormatSortOrderEnum["Asc"] = "ASC";
    GetListsFormatSortOrderEnum["Desc"] = "DESC";
})(GetListsFormatSortOrderEnum || (GetListsFormatSortOrderEnum = {}));
var GetListsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetListsFormatQueryParams, _super);
    function GetListsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bestsellers-date" }),
        __metadata("design:type", Date)
    ], GetListsFormatQueryParams.prototype, "bestsellersDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetListsFormatQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isbn" }),
        __metadata("design:type", String)
    ], GetListsFormatQueryParams.prototype, "isbn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list" }),
        __metadata("design:type", String)
    ], GetListsFormatQueryParams.prototype, "list", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetListsFormatQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published-date" }),
        __metadata("design:type", String)
    ], GetListsFormatQueryParams.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank" }),
        __metadata("design:type", Number)
    ], GetListsFormatQueryParams.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank-last-week" }),
        __metadata("design:type", Number)
    ], GetListsFormatQueryParams.prototype, "rankLastWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort-order" }),
        __metadata("design:type", String)
    ], GetListsFormatQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weeks-on-list" }),
        __metadata("design:type", Number)
    ], GetListsFormatQueryParams.prototype, "weeksOnList", void 0);
    return GetListsFormatQueryParams;
}(SpeakeasyBase));
export { GetListsFormatQueryParams };
var GetListsFormatSecurity = /** @class */ (function (_super) {
    __extends(GetListsFormatSecurity, _super);
    function GetListsFormatSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetListsFormatSecurity.prototype, "apiKey", void 0);
    return GetListsFormatSecurity;
}(SpeakeasyBase));
export { GetListsFormatSecurity };
var GetListsFormat200ApplicationJsonResultsBookDetails = /** @class */ (function (_super) {
    __extends(GetListsFormat200ApplicationJsonResultsBookDetails, _super);
    function GetListsFormat200ApplicationJsonResultsBookDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=age_group" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "ageGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "contributor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_note" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "contributorNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_isbn10" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "primaryIsbn10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_isbn13" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "primaryIsbn13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsBookDetails.prototype, "title", void 0);
    return GetListsFormat200ApplicationJsonResultsBookDetails;
}(SpeakeasyBase));
export { GetListsFormat200ApplicationJsonResultsBookDetails };
var GetListsFormat200ApplicationJsonResultsIsbns = /** @class */ (function (_super) {
    __extends(GetListsFormat200ApplicationJsonResultsIsbns, _super);
    function GetListsFormat200ApplicationJsonResultsIsbns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isbn10" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsIsbns.prototype, "isbn10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isbn13" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsIsbns.prototype, "isbn13", void 0);
    return GetListsFormat200ApplicationJsonResultsIsbns;
}(SpeakeasyBase));
export { GetListsFormat200ApplicationJsonResultsIsbns };
var GetListsFormat200ApplicationJsonResultsReviews = /** @class */ (function (_super) {
    __extends(GetListsFormat200ApplicationJsonResultsReviews, _super);
    function GetListsFormat200ApplicationJsonResultsReviews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=article_chapter_link" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsReviews.prototype, "articleChapterLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=book_review_link" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsReviews.prototype, "bookReviewLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_chapter_link" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsReviews.prototype, "firstChapterLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sunday_review_link" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResultsReviews.prototype, "sundayReviewLink", void 0);
    return GetListsFormat200ApplicationJsonResultsReviews;
}(SpeakeasyBase));
export { GetListsFormat200ApplicationJsonResultsReviews };
var GetListsFormat200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetListsFormat200ApplicationJsonResults, _super);
    function GetListsFormat200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amazon_product_url" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResults.prototype, "amazonProductUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asterisk" }),
        __metadata("design:type", Number)
    ], GetListsFormat200ApplicationJsonResults.prototype, "asterisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestsellers_date" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResults.prototype, "bestsellersDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=book_details", elemType: GetListsFormat200ApplicationJsonResultsBookDetails }),
        __metadata("design:type", Array)
    ], GetListsFormat200ApplicationJsonResults.prototype, "bookDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dagger" }),
        __metadata("design:type", Number)
    ], GetListsFormat200ApplicationJsonResults.prototype, "dagger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResults.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isbns", elemType: GetListsFormat200ApplicationJsonResultsIsbns }),
        __metadata("design:type", Array)
    ], GetListsFormat200ApplicationJsonResults.prototype, "isbns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_name" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResults.prototype, "listName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJsonResults.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], GetListsFormat200ApplicationJsonResults.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank_last_week" }),
        __metadata("design:type", Number)
    ], GetListsFormat200ApplicationJsonResults.prototype, "rankLastWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviews", elemType: GetListsFormat200ApplicationJsonResultsReviews }),
        __metadata("design:type", Array)
    ], GetListsFormat200ApplicationJsonResults.prototype, "reviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weeks_on_list" }),
        __metadata("design:type", Number)
    ], GetListsFormat200ApplicationJsonResults.prototype, "weeksOnList", void 0);
    return GetListsFormat200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetListsFormat200ApplicationJsonResults };
var GetListsFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListsFormat200ApplicationJson, _super);
    function GetListsFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJson.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetListsFormat200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GetListsFormat200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetListsFormat200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetListsFormat200ApplicationJson.prototype, "status", void 0);
    return GetListsFormat200ApplicationJson;
}(SpeakeasyBase));
export { GetListsFormat200ApplicationJson };
var GetListsFormatRequest = /** @class */ (function (_super) {
    __extends(GetListsFormatRequest, _super);
    function GetListsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsFormatPathParams)
    ], GetListsFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsFormatQueryParams)
    ], GetListsFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsFormatSecurity)
    ], GetListsFormatRequest.prototype, "security", void 0);
    return GetListsFormatRequest;
}(SpeakeasyBase));
export { GetListsFormatRequest };
var GetListsFormatResponse = /** @class */ (function (_super) {
    __extends(GetListsFormatResponse, _super);
    function GetListsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsFormat200ApplicationJson)
    ], GetListsFormatResponse.prototype, "getListsFormat200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListsFormatResponse.prototype, "statusCode", void 0);
    return GetListsFormatResponse;
}(SpeakeasyBase));
export { GetListsFormatResponse };
