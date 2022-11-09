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
export var GetNamesOfficialSearchOutputFormatEnum;
(function (GetNamesOfficialSearchOutputFormatEnum) {
    GetNamesOfficialSearchOutputFormatEnum["Json"] = "json";
    GetNamesOfficialSearchOutputFormatEnum["Xml"] = "xml";
    GetNamesOfficialSearchOutputFormatEnum["Kml"] = "kml";
    GetNamesOfficialSearchOutputFormatEnum["Csv"] = "csv";
})(GetNamesOfficialSearchOutputFormatEnum || (GetNamesOfficialSearchOutputFormatEnum = {}));
export var GetNamesOfficialSearchOutputStyleEnum;
(function (GetNamesOfficialSearchOutputStyleEnum) {
    GetNamesOfficialSearchOutputStyleEnum["Summary"] = "summary";
    GetNamesOfficialSearchOutputStyleEnum["Detail"] = "detail";
})(GetNamesOfficialSearchOutputStyleEnum || (GetNamesOfficialSearchOutputStyleEnum = {}));
export var GetNamesOfficialSearchSortByEnum;
(function (GetNamesOfficialSearchSortByEnum) {
    GetNamesOfficialSearchSortByEnum["Relevance"] = "relevance";
    GetNamesOfficialSearchSortByEnum["Name"] = "name";
    GetNamesOfficialSearchSortByEnum["FeatureType"] = "featureType";
    GetNamesOfficialSearchSortByEnum["DecisionDate"] = "decisionDate";
})(GetNamesOfficialSearchSortByEnum || (GetNamesOfficialSearchSortByEnum = {}));
var GetNamesOfficialSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesOfficialSearchQueryParams, _super);
    function GetNamesOfficialSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Number)
    ], GetNamesOfficialSearchQueryParams.prototype, "embed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=exactSpelling" }),
        __metadata("design:type", Number)
    ], GetNamesOfficialSearchQueryParams.prototype, "exactSpelling", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureCategory" }),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchQueryParams.prototype, "featureCategory", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureClass" }),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchQueryParams.prototype, "featureClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureType" }),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchQueryParams.prototype, "featureType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GetNamesOfficialSearchQueryParams.prototype, "itemsPerPage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchQueryParams.prototype, "outputFormat", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetNamesOfficialSearchQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" }),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchQueryParams.prototype, "outputStyle", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchQueryParams.prototype, "sortBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetNamesOfficialSearchQueryParams.prototype, "startIndex", void 0);
    return GetNamesOfficialSearchQueryParams;
}(SpeakeasyBase));
export { GetNamesOfficialSearchQueryParams };
var GetNamesOfficialSearchRequest = /** @class */ (function (_super) {
    __extends(GetNamesOfficialSearchRequest, _super);
    function GetNamesOfficialSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNamesOfficialSearchQueryParams)
    ], GetNamesOfficialSearchRequest.prototype, "queryParams", void 0);
    return GetNamesOfficialSearchRequest;
}(SpeakeasyBase));
export { GetNamesOfficialSearchRequest };
var GetNamesOfficialSearchResponse = /** @class */ (function (_super) {
    __extends(GetNamesOfficialSearchResponse, _super);
    function GetNamesOfficialSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNamesOfficialSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNamesOfficialSearchResponse.prototype, "statusCode", void 0);
    return GetNamesOfficialSearchResponse;
}(SpeakeasyBase));
export { GetNamesOfficialSearchResponse };
