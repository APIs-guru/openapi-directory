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
var DisplayvideoGuaranteedOrdersGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersGetPathParams, _super);
    function DisplayvideoGuaranteedOrdersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guaranteedOrderId" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetPathParams.prototype, "guaranteedOrderId", void 0);
    return DisplayvideoGuaranteedOrdersGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersGetPathParams };
var DisplayvideoGuaranteedOrdersGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersGetQueryParams, _super);
    function DisplayvideoGuaranteedOrdersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partnerId" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoGuaranteedOrdersGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersGetQueryParams };
var DisplayvideoGuaranteedOrdersGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersGetSecurity, _super);
    function DisplayvideoGuaranteedOrdersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoGuaranteedOrdersGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoGuaranteedOrdersGetSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoGuaranteedOrdersGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersGetSecurity };
var DisplayvideoGuaranteedOrdersGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersGetRequest, _super);
    function DisplayvideoGuaranteedOrdersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGuaranteedOrdersGetPathParams)
    ], DisplayvideoGuaranteedOrdersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGuaranteedOrdersGetQueryParams)
    ], DisplayvideoGuaranteedOrdersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoGuaranteedOrdersGetSecurity)
    ], DisplayvideoGuaranteedOrdersGetRequest.prototype, "security", void 0);
    return DisplayvideoGuaranteedOrdersGetRequest;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersGetRequest };
var DisplayvideoGuaranteedOrdersGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoGuaranteedOrdersGetResponse, _super);
    function DisplayvideoGuaranteedOrdersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoGuaranteedOrdersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GuaranteedOrder)
    ], DisplayvideoGuaranteedOrdersGetResponse.prototype, "guaranteedOrder", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoGuaranteedOrdersGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoGuaranteedOrdersGetResponse;
}(SpeakeasyBase));
export { DisplayvideoGuaranteedOrdersGetResponse };
