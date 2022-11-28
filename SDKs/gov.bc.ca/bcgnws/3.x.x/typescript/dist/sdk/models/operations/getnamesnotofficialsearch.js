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
export var GetNamesNotOfficialSearchOutputFormatEnum;
(function (GetNamesNotOfficialSearchOutputFormatEnum) {
    GetNamesNotOfficialSearchOutputFormatEnum["Json"] = "json";
    GetNamesNotOfficialSearchOutputFormatEnum["Xml"] = "xml";
    GetNamesNotOfficialSearchOutputFormatEnum["Kml"] = "kml";
    GetNamesNotOfficialSearchOutputFormatEnum["Csv"] = "csv";
})(GetNamesNotOfficialSearchOutputFormatEnum || (GetNamesNotOfficialSearchOutputFormatEnum = {}));
export var GetNamesNotOfficialSearchOutputStyleEnum;
(function (GetNamesNotOfficialSearchOutputStyleEnum) {
    GetNamesNotOfficialSearchOutputStyleEnum["Summary"] = "summary";
    GetNamesNotOfficialSearchOutputStyleEnum["Detail"] = "detail";
})(GetNamesNotOfficialSearchOutputStyleEnum || (GetNamesNotOfficialSearchOutputStyleEnum = {}));
export var GetNamesNotOfficialSearchSortByEnum;
(function (GetNamesNotOfficialSearchSortByEnum) {
    GetNamesNotOfficialSearchSortByEnum["Relevance"] = "relevance";
    GetNamesNotOfficialSearchSortByEnum["Name"] = "name";
    GetNamesNotOfficialSearchSortByEnum["FeatureType"] = "featureType";
    GetNamesNotOfficialSearchSortByEnum["DecisionDate"] = "decisionDate";
})(GetNamesNotOfficialSearchSortByEnum || (GetNamesNotOfficialSearchSortByEnum = {}));
var GetNamesNotOfficialSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesNotOfficialSearchQueryParams, _super);
    function GetNamesNotOfficialSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Number)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exactSpelling" }),
        __metadata("design:type", Number)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "exactSpelling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureCategory" }),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "featureCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureClass" }),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "featureClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureType" }),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "featureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "itemsPerPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "outputFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputStyle" }),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "outputStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetNamesNotOfficialSearchQueryParams.prototype, "startIndex", void 0);
    return GetNamesNotOfficialSearchQueryParams;
}(SpeakeasyBase));
export { GetNamesNotOfficialSearchQueryParams };
var GetNamesNotOfficialSearchRequest = /** @class */ (function (_super) {
    __extends(GetNamesNotOfficialSearchRequest, _super);
    function GetNamesNotOfficialSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNamesNotOfficialSearchQueryParams)
    ], GetNamesNotOfficialSearchRequest.prototype, "queryParams", void 0);
    return GetNamesNotOfficialSearchRequest;
}(SpeakeasyBase));
export { GetNamesNotOfficialSearchRequest };
var GetNamesNotOfficialSearchResponse = /** @class */ (function (_super) {
    __extends(GetNamesNotOfficialSearchResponse, _super);
    function GetNamesNotOfficialSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNamesNotOfficialSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNamesNotOfficialSearchResponse.prototype, "statusCode", void 0);
    return GetNamesNotOfficialSearchResponse;
}(SpeakeasyBase));
export { GetNamesNotOfficialSearchResponse };
