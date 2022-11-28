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
var GetUntaggedImagesPathParams = /** @class */ (function (_super) {
    __extends(GetUntaggedImagesPathParams, _super);
    function GetUntaggedImagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetUntaggedImagesPathParams.prototype, "projectId", void 0);
    return GetUntaggedImagesPathParams;
}(SpeakeasyBase));
export { GetUntaggedImagesPathParams };
export var GetUntaggedImagesOrderByEnum;
(function (GetUntaggedImagesOrderByEnum) {
    GetUntaggedImagesOrderByEnum["Newest"] = "Newest";
    GetUntaggedImagesOrderByEnum["Oldest"] = "Oldest";
})(GetUntaggedImagesOrderByEnum || (GetUntaggedImagesOrderByEnum = {}));
var GetUntaggedImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetUntaggedImagesQueryParams, _super);
    function GetUntaggedImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], GetUntaggedImagesQueryParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GetUntaggedImagesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetUntaggedImagesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetUntaggedImagesQueryParams.prototype, "take", void 0);
    return GetUntaggedImagesQueryParams;
}(SpeakeasyBase));
export { GetUntaggedImagesQueryParams };
var GetUntaggedImagesHeaders = /** @class */ (function (_super) {
    __extends(GetUntaggedImagesHeaders, _super);
    function GetUntaggedImagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetUntaggedImagesHeaders.prototype, "trainingKey", void 0);
    return GetUntaggedImagesHeaders;
}(SpeakeasyBase));
export { GetUntaggedImagesHeaders };
var GetUntaggedImagesRequest = /** @class */ (function (_super) {
    __extends(GetUntaggedImagesRequest, _super);
    function GetUntaggedImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntaggedImagesPathParams)
    ], GetUntaggedImagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntaggedImagesQueryParams)
    ], GetUntaggedImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUntaggedImagesHeaders)
    ], GetUntaggedImagesRequest.prototype, "headers", void 0);
    return GetUntaggedImagesRequest;
}(SpeakeasyBase));
export { GetUntaggedImagesRequest };
var GetUntaggedImagesResponse = /** @class */ (function (_super) {
    __extends(GetUntaggedImagesResponse, _super);
    function GetUntaggedImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetUntaggedImagesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUntaggedImagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Image }),
        __metadata("design:type", Array)
    ], GetUntaggedImagesResponse.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUntaggedImagesResponse.prototype, "statusCode", void 0);
    return GetUntaggedImagesResponse;
}(SpeakeasyBase));
export { GetUntaggedImagesResponse };
