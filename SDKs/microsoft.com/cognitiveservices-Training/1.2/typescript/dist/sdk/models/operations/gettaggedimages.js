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
var GetTaggedImagesPathParams = /** @class */ (function (_super) {
    __extends(GetTaggedImagesPathParams, _super);
    function GetTaggedImagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], GetTaggedImagesPathParams.prototype, "projectId", void 0);
    return GetTaggedImagesPathParams;
}(SpeakeasyBase));
export { GetTaggedImagesPathParams };
export var GetTaggedImagesOrderByEnum;
(function (GetTaggedImagesOrderByEnum) {
    GetTaggedImagesOrderByEnum["Newest"] = "Newest";
    GetTaggedImagesOrderByEnum["Oldest"] = "Oldest";
})(GetTaggedImagesOrderByEnum || (GetTaggedImagesOrderByEnum = {}));
var GetTaggedImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetTaggedImagesQueryParams, _super);
    function GetTaggedImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], GetTaggedImagesQueryParams.prototype, "iterationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], GetTaggedImagesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], GetTaggedImagesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", Array)
    ], GetTaggedImagesQueryParams.prototype, "tagIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" }),
        __metadata("design:type", Number)
    ], GetTaggedImagesQueryParams.prototype, "take", void 0);
    return GetTaggedImagesQueryParams;
}(SpeakeasyBase));
export { GetTaggedImagesQueryParams };
var GetTaggedImagesHeaders = /** @class */ (function (_super) {
    __extends(GetTaggedImagesHeaders, _super);
    function GetTaggedImagesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], GetTaggedImagesHeaders.prototype, "trainingKey", void 0);
    return GetTaggedImagesHeaders;
}(SpeakeasyBase));
export { GetTaggedImagesHeaders };
var GetTaggedImagesRequest = /** @class */ (function (_super) {
    __extends(GetTaggedImagesRequest, _super);
    function GetTaggedImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedImagesPathParams)
    ], GetTaggedImagesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedImagesQueryParams)
    ], GetTaggedImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaggedImagesHeaders)
    ], GetTaggedImagesRequest.prototype, "headers", void 0);
    return GetTaggedImagesRequest;
}(SpeakeasyBase));
export { GetTaggedImagesRequest };
var GetTaggedImagesResponse = /** @class */ (function (_super) {
    __extends(GetTaggedImagesResponse, _super);
    function GetTaggedImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTaggedImagesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTaggedImagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Image }),
        __metadata("design:type", Array)
    ], GetTaggedImagesResponse.prototype, "images", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaggedImagesResponse.prototype, "statusCode", void 0);
    return GetTaggedImagesResponse;
}(SpeakeasyBase));
export { GetTaggedImagesResponse };
