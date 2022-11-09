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
import * as shared from "../shared";
var GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams, _super);
    function GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=x" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams.prototype, "x", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=y" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams.prototype, "y", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams.prototype, "z", void 0);
    return GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams;
}(SpeakeasyBase));
export { GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams };
var GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams, _super);
    function GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "dateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "dateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedFrom" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "lastUpdatedFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedTo" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "lastUpdatedTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Object)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams.prototype, "project", void 0);
    return GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams;
}(SpeakeasyBase));
export { GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams };
var GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest, _super);
    function GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest.prototype, "queryParams", void 0);
    return GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest;
}(SpeakeasyBase));
export { GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest };
var GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse = /** @class */ (function (_super) {
    __extends(GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse, _super);
    function GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse.prototype, "statusCode", void 0);
    return GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse;
}(SpeakeasyBase));
export { GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse };
