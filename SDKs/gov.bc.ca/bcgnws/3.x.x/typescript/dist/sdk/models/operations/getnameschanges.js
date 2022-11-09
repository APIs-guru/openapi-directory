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
export var GetNamesChangesOutputFormatEnum;
(function (GetNamesChangesOutputFormatEnum) {
    GetNamesChangesOutputFormatEnum["Json"] = "json";
    GetNamesChangesOutputFormatEnum["Xml"] = "xml";
    GetNamesChangesOutputFormatEnum["Kml"] = "kml";
    GetNamesChangesOutputFormatEnum["Csv"] = "csv";
})(GetNamesChangesOutputFormatEnum || (GetNamesChangesOutputFormatEnum = {}));
export var GetNamesChangesOutputStyleEnum;
(function (GetNamesChangesOutputStyleEnum) {
    GetNamesChangesOutputStyleEnum["Summary"] = "summary";
    GetNamesChangesOutputStyleEnum["Detail"] = "detail";
})(GetNamesChangesOutputStyleEnum || (GetNamesChangesOutputStyleEnum = {}));
export var GetNamesChangesSortByEnum;
(function (GetNamesChangesSortByEnum) {
    GetNamesChangesSortByEnum["Name"] = "name";
    GetNamesChangesSortByEnum["FeatureType"] = "featureType";
    GetNamesChangesSortByEnum["DecisionDate"] = "decisionDate";
})(GetNamesChangesSortByEnum || (GetNamesChangesSortByEnum = {}));
var GetNamesChangesQueryParams = /** @class */ (function (_super) {
    __extends(GetNamesChangesQueryParams, _super);
    function GetNamesChangesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=embed" }),
        __metadata("design:type", Number)
    ], GetNamesChangesQueryParams.prototype, "embed", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureCategory" }),
        __metadata("design:type", String)
    ], GetNamesChangesQueryParams.prototype, "featureCategory", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureClass" }),
        __metadata("design:type", String)
    ], GetNamesChangesQueryParams.prototype, "featureClass", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=featureType" }),
        __metadata("design:type", String)
    ], GetNamesChangesQueryParams.prototype, "featureType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromDate" }),
        __metadata("design:type", Number)
    ], GetNamesChangesQueryParams.prototype, "fromDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=itemsPerPage" }),
        __metadata("design:type", Number)
    ], GetNamesChangesQueryParams.prototype, "itemsPerPage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputFormat" }),
        __metadata("design:type", String)
    ], GetNamesChangesQueryParams.prototype, "outputFormat", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputSRS" }),
        __metadata("design:type", Number)
    ], GetNamesChangesQueryParams.prototype, "outputSrs", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=outputStyle" }),
        __metadata("design:type", String)
    ], GetNamesChangesQueryParams.prototype, "outputStyle", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetNamesChangesQueryParams.prototype, "sortBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], GetNamesChangesQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=toDate" }),
        __metadata("design:type", Number)
    ], GetNamesChangesQueryParams.prototype, "toDate", void 0);
    return GetNamesChangesQueryParams;
}(SpeakeasyBase));
export { GetNamesChangesQueryParams };
var GetNamesChangesRequest = /** @class */ (function (_super) {
    __extends(GetNamesChangesRequest, _super);
    function GetNamesChangesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetNamesChangesQueryParams)
    ], GetNamesChangesRequest.prototype, "queryParams", void 0);
    return GetNamesChangesRequest;
}(SpeakeasyBase));
export { GetNamesChangesRequest };
var GetNamesChangesResponse = /** @class */ (function (_super) {
    __extends(GetNamesChangesResponse, _super);
    function GetNamesChangesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetNamesChangesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetNamesChangesResponse.prototype, "statusCode", void 0);
    return GetNamesChangesResponse;
}(SpeakeasyBase));
export { GetNamesChangesResponse };
