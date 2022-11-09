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
export var GetNamesDecisionsYearOutputFormatEnum;
(function (GetNamesDecisionsYearOutputFormatEnum) {
    GetNamesDecisionsYearOutputFormatEnum["Json"] = "json";
    GetNamesDecisionsYearOutputFormatEnum["Xml"] = "xml";
    GetNamesDecisionsYearOutputFormatEnum["Kml"] = "kml";
    GetNamesDecisionsYearOutputFormatEnum["Csv"] = "csv";
})(GetNamesDecisionsYearOutputFormatEnum || (GetNamesDecisionsYearOutputFormatEnum = {}));
export var GetNamesDecisionsYearOutputStyleEnum;
(function (GetNamesDecisionsYearOutputStyleEnum) {
    GetNamesDecisionsYearOutputStyleEnum["Summary"] = "summary";
    GetNamesDecisionsYearOutputStyleEnum["Detail"] = "detail";
})(GetNamesDecisionsYearOutputStyleEnum || (GetNamesDecisionsYearOutputStyleEnum = {}));
export var GetNamesDecisionsYearSortByEnum;
(function (GetNamesDecisionsYearSortByEnum) {
    GetNamesDecisionsYearSortByEnum["Name"] = "name";
    GetNamesDecisionsYearSortByEnum["FeatureType"] = "featureType";
    GetNamesDecisionsYearSortByEnum["DecisionDate"] = "decisionDate";
})(GetNamesDecisionsYearSortByEnum || (GetNamesDecisionsYearSortByEnum = {}));
var GetNamesDecisionsYearQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesDecisionsYearQueryParams, _super);
    function GetNamesDecisionsYearQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "embed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureCategory" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "featureCategory", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureClass" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "featureClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureType" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "featureType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "itemsPerPage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "outputFormat", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "outputStyle", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearQueryParams.prototype, "sortBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearQueryParams.prototype, "year", void 0);
    return GetNamesDecisionsYearQueryParams;
}(SpeakeasyBase));
export { GetNamesDecisionsYearQueryParams };
var GetNamesDecisionsYearRequest = /** @class */ (function (_super) {
    __extends(GetNamesDecisionsYearRequest, _super);
    function GetNamesDecisionsYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNamesDecisionsYearQueryParams)
    ], GetNamesDecisionsYearRequest.prototype, "queryParams", void 0);
    return GetNamesDecisionsYearRequest;
}(SpeakeasyBase));
export { GetNamesDecisionsYearRequest };
var GetNamesDecisionsYearResponse = /** @class */ (function (_super) {
    __extends(GetNamesDecisionsYearResponse, _super);
    function GetNamesDecisionsYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNamesDecisionsYearResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNamesDecisionsYearResponse.prototype, "statusCode", void 0);
    return GetNamesDecisionsYearResponse;
}(SpeakeasyBase));
export { GetNamesDecisionsYearResponse };
