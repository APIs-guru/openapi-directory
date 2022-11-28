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
var GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=x" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams.prototype, "x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=y" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams.prototype, "y", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams.prototype, "z", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams;
}(SpeakeasyBase));
export { GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams };
var GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams.prototype, "isAnalysis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMobile" }),
        __metadata("design:type", Boolean)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams.prototype, "isMobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedFrom" }),
        __metadata("design:type", Object)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams.prototype, "lastUpdatedFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastUpdatedTo" }),
        __metadata("design:type", Object)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams.prototype, "lastUpdatedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", Array)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parameter" }),
        __metadata("design:type", Object)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project" }),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams.prototype, "project", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams;
}(SpeakeasyBase));
export { GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams };
var GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest.prototype, "queryParams", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest;
}(SpeakeasyBase));
export { GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest };
var GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse = /** @class */ (function (_super) {
    __extends(GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse, _super);
    function GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse.prototype, "statusCode", void 0);
    return GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse;
}(SpeakeasyBase));
export { GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse };
