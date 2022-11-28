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
export var GetListsOverviewFormatFormatEnum;
(function (GetListsOverviewFormatFormatEnum) {
    GetListsOverviewFormatFormatEnum["Json"] = "json";
    GetListsOverviewFormatFormatEnum["Jsonp"] = "jsonp";
})(GetListsOverviewFormatFormatEnum || (GetListsOverviewFormatFormatEnum = {}));
var GetListsOverviewFormatPathParams = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormatPathParams, _super);
    function GetListsOverviewFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormatPathParams.prototype, "format", void 0);
    return GetListsOverviewFormatPathParams;
}(SpeakeasyBase));
export { GetListsOverviewFormatPathParams };
var GetListsOverviewFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormatQueryParams, _super);
    function GetListsOverviewFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-key" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormatQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published_date" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormatQueryParams.prototype, "publishedDate", void 0);
    return GetListsOverviewFormatQueryParams;
}(SpeakeasyBase));
export { GetListsOverviewFormatQueryParams };
var GetListsOverviewFormatSecurity = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormatSecurity, _super);
    function GetListsOverviewFormatSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetListsOverviewFormatSecurity.prototype, "apiKey", void 0);
    return GetListsOverviewFormatSecurity;
}(SpeakeasyBase));
export { GetListsOverviewFormatSecurity };
var GetListsOverviewFormat200ApplicationJsonResultsListsBooks = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormat200ApplicationJsonResultsListsBooks, _super);
    function GetListsOverviewFormat200ApplicationJsonResultsListsBooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=age_group" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "ageGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "contributor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributor_note" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "contributorNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_date" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_isbn10" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "primaryIsbn10", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_isbn13" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "primaryIsbn13", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rank" }),
        __metadata("design:type", Number)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_date" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsListsBooks.prototype, "updatedDate", void 0);
    return GetListsOverviewFormat200ApplicationJsonResultsListsBooks;
}(SpeakeasyBase));
export { GetListsOverviewFormat200ApplicationJsonResultsListsBooks };
var GetListsOverviewFormat200ApplicationJsonResultsLists = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormat200ApplicationJsonResultsLists, _super);
    function GetListsOverviewFormat200ApplicationJsonResultsLists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=books", elemType: GetListsOverviewFormat200ApplicationJsonResultsListsBooks }),
        __metadata("design:type", Array)
    ], GetListsOverviewFormat200ApplicationJsonResultsLists.prototype, "books", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsLists.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_id" }),
        __metadata("design:type", Number)
    ], GetListsOverviewFormat200ApplicationJsonResultsLists.prototype, "listId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_image" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsLists.prototype, "listImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=list_name" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsLists.prototype, "listName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResultsLists.prototype, "updated", void 0);
    return GetListsOverviewFormat200ApplicationJsonResultsLists;
}(SpeakeasyBase));
export { GetListsOverviewFormat200ApplicationJsonResultsLists };
var GetListsOverviewFormat200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormat200ApplicationJsonResults, _super);
    function GetListsOverviewFormat200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bestsellers_date" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResults.prototype, "bestsellersDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lists", elemType: GetListsOverviewFormat200ApplicationJsonResultsLists }),
        __metadata("design:type", Array)
    ], GetListsOverviewFormat200ApplicationJsonResults.prototype, "lists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJsonResults.prototype, "publishedDate", void 0);
    return GetListsOverviewFormat200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetListsOverviewFormat200ApplicationJsonResults };
var GetListsOverviewFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormat200ApplicationJson, _super);
    function GetListsOverviewFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetListsOverviewFormat200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", GetListsOverviewFormat200ApplicationJsonResults)
    ], GetListsOverviewFormat200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetListsOverviewFormat200ApplicationJson.prototype, "status", void 0);
    return GetListsOverviewFormat200ApplicationJson;
}(SpeakeasyBase));
export { GetListsOverviewFormat200ApplicationJson };
var GetListsOverviewFormatRequest = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormatRequest, _super);
    function GetListsOverviewFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsOverviewFormatPathParams)
    ], GetListsOverviewFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsOverviewFormatQueryParams)
    ], GetListsOverviewFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsOverviewFormatSecurity)
    ], GetListsOverviewFormatRequest.prototype, "security", void 0);
    return GetListsOverviewFormatRequest;
}(SpeakeasyBase));
export { GetListsOverviewFormatRequest };
var GetListsOverviewFormatResponse = /** @class */ (function (_super) {
    __extends(GetListsOverviewFormatResponse, _super);
    function GetListsOverviewFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetListsOverviewFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetListsOverviewFormat200ApplicationJson)
    ], GetListsOverviewFormatResponse.prototype, "getListsOverviewFormat200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetListsOverviewFormatResponse.prototype, "statusCode", void 0);
    return GetListsOverviewFormatResponse;
}(SpeakeasyBase));
export { GetListsOverviewFormatResponse };
