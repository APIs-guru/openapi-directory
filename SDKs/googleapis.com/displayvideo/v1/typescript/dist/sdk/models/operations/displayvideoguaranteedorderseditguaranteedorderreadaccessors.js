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
var DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams, _super);
    function DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guaranteedOrderId" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams.prototype, "guaranteedOrderId", void 0);
    return DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams };
var DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams, _super);
    function DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams };
var DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity, _super);
    function DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity };
var DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest, _super);
    function DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsPathParams)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsQueryParams)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EditGuaranteedOrderReadAccessorsRequest)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsSecurity)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest.prototype, "security", void 0);
    return DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest };
var DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse, _super);
    function DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EditGuaranteedOrderReadAccessorsResponse)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse.prototype, "editGuaranteedOrderReadAccessorsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse.prototype, "statusCode", void 0);
    return DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse };
