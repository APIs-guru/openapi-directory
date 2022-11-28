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
var DfareportingAdvertiserLandingPagesGetPathParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesGetPathParams, _super);
    function DfareportingAdvertiserLandingPagesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetPathParams.prototype, "profileId", void 0);
    return DfareportingAdvertiserLandingPagesGetPathParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesGetPathParams };
var DfareportingAdvertiserLandingPagesGetQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesGetQueryParams, _super);
    function DfareportingAdvertiserLandingPagesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingAdvertiserLandingPagesGetQueryParams;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesGetQueryParams };
var DfareportingAdvertiserLandingPagesGetSecurity = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesGetSecurity, _super);
    function DfareportingAdvertiserLandingPagesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingAdvertiserLandingPagesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingAdvertiserLandingPagesGetSecurity.prototype, "oauth2c", void 0);
    return DfareportingAdvertiserLandingPagesGetSecurity;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesGetSecurity };
var DfareportingAdvertiserLandingPagesGetRequest = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesGetRequest, _super);
    function DfareportingAdvertiserLandingPagesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesGetPathParams)
    ], DfareportingAdvertiserLandingPagesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesGetQueryParams)
    ], DfareportingAdvertiserLandingPagesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingAdvertiserLandingPagesGetSecurity)
    ], DfareportingAdvertiserLandingPagesGetRequest.prototype, "security", void 0);
    return DfareportingAdvertiserLandingPagesGetRequest;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesGetRequest };
var DfareportingAdvertiserLandingPagesGetResponse = /** @class */ (function (_super) {
    __extends(DfareportingAdvertiserLandingPagesGetResponse, _super);
    function DfareportingAdvertiserLandingPagesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingAdvertiserLandingPagesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LandingPage)
    ], DfareportingAdvertiserLandingPagesGetResponse.prototype, "landingPage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingAdvertiserLandingPagesGetResponse.prototype, "statusCode", void 0);
    return DfareportingAdvertiserLandingPagesGetResponse;
}(SpeakeasyBase));
export { DfareportingAdvertiserLandingPagesGetResponse };
