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
var DfareportingAdvertiserLandingPagesPatchPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesPatchPathParams, _super);
    function DfareportingAdvertiserLandingPagesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchPathParams.prototype, "profileId", void 0);
    return DfareportingAdvertiserLandingPagesPatchPathParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesPatchPathParams };
var DfareportingAdvertiserLandingPagesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesPatchQueryParams, _super);
    function DfareportingAdvertiserLandingPagesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdvertiserLandingPagesPatchQueryParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesPatchQueryParams };
var DfareportingAdvertiserLandingPagesPatchSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesPatchSecurity, _super);
    function DfareportingAdvertiserLandingPagesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdvertiserLandingPagesPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdvertiserLandingPagesPatchSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdvertiserLandingPagesPatchSecurity;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesPatchSecurity };
var DfareportingAdvertiserLandingPagesPatchRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesPatchRequest, _super);
    function DfareportingAdvertiserLandingPagesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesPatchPathParams)
    ], DfareportingAdvertiserLandingPagesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesPatchQueryParams)
    ], DfareportingAdvertiserLandingPagesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LandingPage)
    ], DfareportingAdvertiserLandingPagesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesPatchSecurity)
    ], DfareportingAdvertiserLandingPagesPatchRequest.prototype, "security", void 0);
    return DfareportingAdvertiserLandingPagesPatchRequest;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesPatchRequest };
var DfareportingAdvertiserLandingPagesPatchResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesPatchResponse, _super);
    function DfareportingAdvertiserLandingPagesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LandingPage)
    ], DfareportingAdvertiserLandingPagesPatchResponse.prototype, "landingPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdvertiserLandingPagesPatchResponse.prototype, "statusCode", void 0);
    return DfareportingAdvertiserLandingPagesPatchResponse;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesPatchResponse };
