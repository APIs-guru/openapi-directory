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
export var GetSearchJsonFieldsEnum;
(function (GetSearchJsonFieldsEnum) {
    GetSearchJsonFieldsEnum["All"] = "all";
    GetSearchJsonFieldsEnum["Pages"] = "pages";
    GetSearchJsonFieldsEnum["TickerSymbol"] = "ticker_symbol";
    GetSearchJsonFieldsEnum["Links"] = "links";
    GetSearchJsonFieldsEnum["Taxonomy"] = "taxonomy";
    GetSearchJsonFieldsEnum["Combinations"] = "combinations";
    GetSearchJsonFieldsEnum["Geocodes"] = "geocodes";
    GetSearchJsonFieldsEnum["ArticleList"] = "article_list";
    GetSearchJsonFieldsEnum["ScopeNotes"] = "scope_notes";
    GetSearchJsonFieldsEnum["SearchApiQuery"] = "search_api_query";
})(GetSearchJsonFieldsEnum || (GetSearchJsonFieldsEnum = {}));
var GetSearchJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchJsonQueryParams, _super);
    function GetSearchJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetSearchJsonQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSearchJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetSearchJsonQueryParams.prototype, "query", void 0);
    return GetSearchJsonQueryParams;
}(SpeakeasyBase));
export { GetSearchJsonQueryParams };
var GetSearchJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSearchJson200ApplicationJson, _super);
    function GetSearchJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetSearchJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetSearchJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ConceptRelation }),
        __metadata("design:type", Array)
    ], GetSearchJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetSearchJson200ApplicationJson.prototype, "status", void 0);
    return GetSearchJson200ApplicationJson;
}(SpeakeasyBase));
export { GetSearchJson200ApplicationJson };
var GetSearchJsonRequest = /** @class */ (function (_super) {
    __extends(GetSearchJsonRequest, _super);
    function GetSearchJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchJsonQueryParams)
    ], GetSearchJsonRequest.prototype, "queryParams", void 0);
    return GetSearchJsonRequest;
}(SpeakeasyBase));
export { GetSearchJsonRequest };
var GetSearchJsonResponse = /** @class */ (function (_super) {
    __extends(GetSearchJsonResponse, _super);
    function GetSearchJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSearchJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSearchJson200ApplicationJson)
    ], GetSearchJsonResponse.prototype, "getSearchJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSearchJsonResponse.prototype, "statusCode", void 0);
    return GetSearchJsonResponse;
}(SpeakeasyBase));
export { GetSearchJsonResponse };
