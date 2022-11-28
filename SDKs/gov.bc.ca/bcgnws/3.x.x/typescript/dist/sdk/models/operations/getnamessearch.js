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
export var GetNamesSearchOutputFormatEnum;
(function (GetNamesSearchOutputFormatEnum) {
    GetNamesSearchOutputFormatEnum["Json"] = "json";
    GetNamesSearchOutputFormatEnum["Xml"] = "xml";
    GetNamesSearchOutputFormatEnum["Kml"] = "kml";
    GetNamesSearchOutputFormatEnum["Csv"] = "csv";
})(GetNamesSearchOutputFormatEnum || (GetNamesSearchOutputFormatEnum = {}));
export var GetNamesSearchOutputStyleEnum;
(function (GetNamesSearchOutputStyleEnum) {
    GetNamesSearchOutputStyleEnum["Summary"] = "summary";
    GetNamesSearchOutputStyleEnum["Detail"] = "detail";
})(GetNamesSearchOutputStyleEnum || (GetNamesSearchOutputStyleEnum = {}));
export var GetNamesSearchSortByEnum;
(function (GetNamesSearchSortByEnum) {
    GetNamesSearchSortByEnum["Relevance"] = "relevance";
    GetNamesSearchSortByEnum["Name"] = "name";
    GetNamesSearchSortByEnum["FeatureType"] = "featureType";
    GetNamesSearchSortByEnum["DecisionDate"] = "decisionDate";
})(GetNamesSearchSortByEnum || (GetNamesSearchSortByEnum = {}));
var GetNamesSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesSearchQueryParams, _super);
    function GetNamesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Number)
    ], GetNamesSearchQueryParams.prototype, "embed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exactSpelling" }),
        __metadata("design:type", Number)
    ], GetNamesSearchQueryParams.prototype, "exactSpelling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureCategory" }),
        __metadata("design:type", String)
    ], GetNamesSearchQueryParams.prototype, "featureCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureClass" }),
        __metadata("design:type", String)
    ], GetNamesSearchQueryParams.prototype, "featureClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureType" }),
        __metadata("design:type", String)
    ], GetNamesSearchQueryParams.prototype, "featureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GetNamesSearchQueryParams.prototype, "itemsPerPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetNamesSearchQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetNamesSearchQueryParams.prototype, "outputFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetNamesSearchQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outputStyle" }),
        __metadata("design:type", String)
    ], GetNamesSearchQueryParams.prototype, "outputStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetNamesSearchQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetNamesSearchQueryParams.prototype, "startIndex", void 0);
    return GetNamesSearchQueryParams;
}(SpeakeasyBase));
export { GetNamesSearchQueryParams };
var GetNamesSearchRequest = /** @class */ (function (_super) {
    __extends(GetNamesSearchRequest, _super);
    function GetNamesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNamesSearchQueryParams)
    ], GetNamesSearchRequest.prototype, "queryParams", void 0);
    return GetNamesSearchRequest;
}(SpeakeasyBase));
export { GetNamesSearchRequest };
var GetNamesSearchResponse = /** @class */ (function (_super) {
    __extends(GetNamesSearchResponse, _super);
    function GetNamesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNamesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNamesSearchResponse.prototype, "statusCode", void 0);
    return GetNamesSearchResponse;
}(SpeakeasyBase));
export { GetNamesSearchResponse };
