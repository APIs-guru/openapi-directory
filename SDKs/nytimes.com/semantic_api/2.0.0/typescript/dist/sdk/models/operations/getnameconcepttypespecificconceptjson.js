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
export var GetNameConceptTypeSpecificConceptJsonConceptTypeEnum;
(function (GetNameConceptTypeSpecificConceptJsonConceptTypeEnum) {
    GetNameConceptTypeSpecificConceptJsonConceptTypeEnum["NytdGeo"] = "nytd_geo";
    GetNameConceptTypeSpecificConceptJsonConceptTypeEnum["NytdPer"] = "nytd_per";
    GetNameConceptTypeSpecificConceptJsonConceptTypeEnum["NytdOrg"] = "nytd_org";
    GetNameConceptTypeSpecificConceptJsonConceptTypeEnum["NytdDes"] = "nytd_des";
})(GetNameConceptTypeSpecificConceptJsonConceptTypeEnum || (GetNameConceptTypeSpecificConceptJsonConceptTypeEnum = {}));
var GetNameConceptTypeSpecificConceptJsonPathParams = /** @class */ (function (_super) {
    __extends(GetNameConceptTypeSpecificConceptJsonPathParams, _super);
    function GetNameConceptTypeSpecificConceptJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=concept-type" }),
        __metadata("design:type", String)
    ], GetNameConceptTypeSpecificConceptJsonPathParams.prototype, "conceptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=specific-concept" }),
        __metadata("design:type", String)
    ], GetNameConceptTypeSpecificConceptJsonPathParams.prototype, "specificConcept", void 0);
    return GetNameConceptTypeSpecificConceptJsonPathParams;
}(SpeakeasyBase));
export { GetNameConceptTypeSpecificConceptJsonPathParams };
export var GetNameConceptTypeSpecificConceptJsonFieldsEnum;
(function (GetNameConceptTypeSpecificConceptJsonFieldsEnum) {
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["All"] = "all";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["Pages"] = "pages";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["TickerSymbol"] = "ticker_symbol";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["Links"] = "links";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["Taxonomy"] = "taxonomy";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["Combinations"] = "combinations";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["Geocodes"] = "geocodes";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["ArticleList"] = "article_list";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["ScopeNotes"] = "scope_notes";
    GetNameConceptTypeSpecificConceptJsonFieldsEnum["SearchApiQuery"] = "search_api_query";
})(GetNameConceptTypeSpecificConceptJsonFieldsEnum || (GetNameConceptTypeSpecificConceptJsonFieldsEnum = {}));
var GetNameConceptTypeSpecificConceptJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetNameConceptTypeSpecificConceptJsonQueryParams, _super);
    function GetNameConceptTypeSpecificConceptJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetNameConceptTypeSpecificConceptJsonQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetNameConceptTypeSpecificConceptJsonQueryParams.prototype, "query", void 0);
    return GetNameConceptTypeSpecificConceptJsonQueryParams;
}(SpeakeasyBase));
export { GetNameConceptTypeSpecificConceptJsonQueryParams };
var GetNameConceptTypeSpecificConceptJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNameConceptTypeSpecificConceptJson200ApplicationJson, _super);
    function GetNameConceptTypeSpecificConceptJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetNameConceptTypeSpecificConceptJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetNameConceptTypeSpecificConceptJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Concept }),
        __metadata("design:type", Array)
    ], GetNameConceptTypeSpecificConceptJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetNameConceptTypeSpecificConceptJson200ApplicationJson.prototype, "status", void 0);
    return GetNameConceptTypeSpecificConceptJson200ApplicationJson;
}(SpeakeasyBase));
export { GetNameConceptTypeSpecificConceptJson200ApplicationJson };
var GetNameConceptTypeSpecificConceptJsonRequest = /** @class */ (function (_super) {
    __extends(GetNameConceptTypeSpecificConceptJsonRequest, _super);
    function GetNameConceptTypeSpecificConceptJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNameConceptTypeSpecificConceptJsonPathParams)
    ], GetNameConceptTypeSpecificConceptJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNameConceptTypeSpecificConceptJsonQueryParams)
    ], GetNameConceptTypeSpecificConceptJsonRequest.prototype, "queryParams", void 0);
    return GetNameConceptTypeSpecificConceptJsonRequest;
}(SpeakeasyBase));
export { GetNameConceptTypeSpecificConceptJsonRequest };
var GetNameConceptTypeSpecificConceptJsonResponse = /** @class */ (function (_super) {
    __extends(GetNameConceptTypeSpecificConceptJsonResponse, _super);
    function GetNameConceptTypeSpecificConceptJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNameConceptTypeSpecificConceptJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNameConceptTypeSpecificConceptJson200ApplicationJson)
    ], GetNameConceptTypeSpecificConceptJsonResponse.prototype, "getNameConceptTypeSpecificConceptJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNameConceptTypeSpecificConceptJsonResponse.prototype, "statusCode", void 0);
    return GetNameConceptTypeSpecificConceptJsonResponse;
}(SpeakeasyBase));
export { GetNameConceptTypeSpecificConceptJsonResponse };
