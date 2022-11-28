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
var PlaycustomappAccountsCustomAppsCreatePathParams = /** @class */ (function (_super) {
    __extends(PlaycustomappAccountsCustomAppsCreatePathParams, _super);
    function PlaycustomappAccountsCustomAppsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreatePathParams.prototype, "account", void 0);
    return PlaycustomappAccountsCustomAppsCreatePathParams;
}(SpeakeasyBase));
export { PlaycustomappAccountsCustomAppsCreatePathParams };
var PlaycustomappAccountsCustomAppsCreateQueryParams = /** @class */ (function (_super) {
    __extends(PlaycustomappAccountsCustomAppsCreateQueryParams, _super);
    function PlaycustomappAccountsCustomAppsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PlaycustomappAccountsCustomAppsCreateQueryParams;
}(SpeakeasyBase));
export { PlaycustomappAccountsCustomAppsCreateQueryParams };
var PlaycustomappAccountsCustomAppsCreateSecurity = /** @class */ (function (_super) {
    __extends(PlaycustomappAccountsCustomAppsCreateSecurity, _super);
    function PlaycustomappAccountsCustomAppsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlaycustomappAccountsCustomAppsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlaycustomappAccountsCustomAppsCreateSecurity.prototype, "oauth2c", void 0);
    return PlaycustomappAccountsCustomAppsCreateSecurity;
}(SpeakeasyBase));
export { PlaycustomappAccountsCustomAppsCreateSecurity };
var PlaycustomappAccountsCustomAppsCreateRequest = /** @class */ (function (_super) {
    __extends(PlaycustomappAccountsCustomAppsCreateRequest, _super);
    function PlaycustomappAccountsCustomAppsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaycustomappAccountsCustomAppsCreatePathParams)
    ], PlaycustomappAccountsCustomAppsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaycustomappAccountsCustomAppsCreateQueryParams)
    ], PlaycustomappAccountsCustomAppsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], PlaycustomappAccountsCustomAppsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaycustomappAccountsCustomAppsCreateSecurity)
    ], PlaycustomappAccountsCustomAppsCreateRequest.prototype, "security", void 0);
    return PlaycustomappAccountsCustomAppsCreateRequest;
}(SpeakeasyBase));
export { PlaycustomappAccountsCustomAppsCreateRequest };
var PlaycustomappAccountsCustomAppsCreateResponse = /** @class */ (function (_super) {
    __extends(PlaycustomappAccountsCustomAppsCreateResponse, _super);
    function PlaycustomappAccountsCustomAppsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaycustomappAccountsCustomAppsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomApp)
    ], PlaycustomappAccountsCustomAppsCreateResponse.prototype, "customApp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaycustomappAccountsCustomAppsCreateResponse.prototype, "statusCode", void 0);
    return PlaycustomappAccountsCustomAppsCreateResponse;
}(SpeakeasyBase));
export { PlaycustomappAccountsCustomAppsCreateResponse };
