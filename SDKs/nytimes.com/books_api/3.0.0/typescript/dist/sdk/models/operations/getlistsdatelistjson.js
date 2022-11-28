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
var GetListsDateListJsonPathParams = /** @class */ (function (_super) {
    __extends(GetListsDateListJsonPathParams, _super);
    function GetListsDateListJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" }),
        __metadata("design:type", String)
    ], GetListsDateListJsonPathParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=list" }),
        __metadata("design:type", String)
    ], GetListsDateListJsonPathParams.prototype, "list", void 0);
    return GetListsDateListJsonPathParams;
}(SpeakeasyBase));
export { GetListsDateListJsonPathParams };
export var GetListsDateListJsonSortOrderEnum;
(function (GetListsDateListJsonSortOrderEnum) {
    GetListsDateListJsonSortOrderEnum["Asc"] = "ASC";
    GetListsDateListJsonSortOrderEnum["Desc"] = "DESC";
})(GetListsDateListJsonSortOrderEnum || (GetListsDateListJsonSortOrderEnum = {}));
var GetListsDateListJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetListsDateListJsonQueryParams, _super);
    function GetListsDateListJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bestsellers-date" }),
        __metadata("design:type", String)
    ], GetListsDateListJsonQueryParams.prototype, "bestsellersDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isbn" }),
        __metadata("design:type", Number)
    ], GetListsDateListJsonQueryParams.prototype, "isbn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=list-name" }),
        __metadata("design:type", String)
    ], GetListsDateListJsonQueryParams.prototype, "listName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetListsDateListJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published-date" }),
        __metadata("design:type", Date)
    ], GetListsDateListJsonQueryParams.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank" }),
        __metadata("design:type", String)
    ], GetListsDateListJsonQueryParams.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rank-last-week" }),
        __metadata("design:type", Number)
    ], GetListsDateListJsonQueryParams.prototype, "rankLastWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort-order" }),
        __metadata("design:type", String)
    ], GetListsDateListJsonQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weeks-on-list" }),
        __metadata("design:type", Number)
    ], GetListsDateListJsonQueryParams.prototype, "weeksOnList", void 0);
    return GetListsDateListJsonQueryParams;
}(SpeakeasyBase));
export { GetListsDateListJsonQueryParams };
var GetListsDateListJsonSecurity = /** @class */ (function (_super) {
    __extends(GetListsDateListJsonSecurity, _super);
    function GetListsDateListJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetListsDateListJsonSecurity.prototype, "apiKey", void 0);
    return GetListsDateListJsonSecurity;
}(SpeakeasyBase));
export { GetListsDateListJsonSecurity };
var GetListsDateListJson200ApplicationJsonResultsBooksIsbns = /** @class */ (function (_super) {
    __extends(GetListsDateListJson200ApplicationJsonResultsBooksIsbns, _super);
    function GetListsDateListJson200ApplicationJsonResultsBooksIsbns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isbn10" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooksIsbns.prototype, "isbn10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isbn13" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooksIsbns.prototype, "isbn13", void 0);
    return GetListsDateListJson200ApplicationJsonResultsBooksIsbns;
}(SpeakeasyBase));
export { GetListsDateListJson200ApplicationJsonResultsBooksIsbns };
var GetListsDateListJson200ApplicationJsonResultsBooks = /** @class */ (function (_super) {
    __extends(GetListsDateListJson200ApplicationJsonResultsBooks, _super);
    function GetListsDateListJson200ApplicationJsonResultsBooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=age_group" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "ageGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amazon_product_url" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "amazonProductUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=article_chapter_link" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "articleChapterLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asterisk" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "asterisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=book_image" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "bookImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=book_review_link" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "bookReviewLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "contributor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_note" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "contributorNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dagger" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "dagger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_chapter_link" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "firstChapterLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isbns", elemType: GetListsDateListJson200ApplicationJsonResultsBooksIsbns }),
        __metadata("design:type", Array)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "isbns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_isbn10" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "primaryIsbn10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_isbn13" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "primaryIsbn13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank_last_week" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "rankLastWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sunday_review_link" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "sundayReviewLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weeks_on_list" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJsonResultsBooks.prototype, "weeksOnList", void 0);
    return GetListsDateListJson200ApplicationJsonResultsBooks;
}(SpeakeasyBase));
export { GetListsDateListJson200ApplicationJsonResultsBooks };
var GetListsDateListJson200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetListsDateListJson200ApplicationJsonResults, _super);
    function GetListsDateListJson200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestsellers_date" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "bestsellersDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=books", elemType: GetListsDateListJson200ApplicationJsonResultsBooks }),
        __metadata("design:type", Array)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "books", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=corrections" }),
        __metadata("design:type", Array)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "corrections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_name" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "listName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=normal_list_ends_at" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "normalListEndsAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJsonResults.prototype, "updated", void 0);
    return GetListsDateListJson200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetListsDateListJson200ApplicationJsonResults };
var GetListsDateListJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListsDateListJson200ApplicationJson, _super);
    function GetListsDateListJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_modified" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJson.prototype, "lastModified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetListsDateListJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", GetListsDateListJson200ApplicationJsonResults)
    ], GetListsDateListJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetListsDateListJson200ApplicationJson.prototype, "status", void 0);
    return GetListsDateListJson200ApplicationJson;
}(SpeakeasyBase));
export { GetListsDateListJson200ApplicationJson };
var GetListsDateListJsonRequest = /** @class */ (function (_super) {
    __extends(GetListsDateListJsonRequest, _super);
    function GetListsDateListJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsDateListJsonPathParams)
    ], GetListsDateListJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsDateListJsonQueryParams)
    ], GetListsDateListJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsDateListJsonSecurity)
    ], GetListsDateListJsonRequest.prototype, "security", void 0);
    return GetListsDateListJsonRequest;
}(SpeakeasyBase));
export { GetListsDateListJsonRequest };
var GetListsDateListJsonResponse = /** @class */ (function (_super) {
    __extends(GetListsDateListJsonResponse, _super);
    function GetListsDateListJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListsDateListJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsDateListJson200ApplicationJson)
    ], GetListsDateListJsonResponse.prototype, "getListsDateListJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListsDateListJsonResponse.prototype, "statusCode", void 0);
    return GetListsDateListJsonResponse;
}(SpeakeasyBase));
export { GetListsDateListJsonResponse };
