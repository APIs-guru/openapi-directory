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
var PlayintegrityDecodeIntegrityTokenPathParams = /** @class */ (function (_super) {
    __extends(PlayintegrityDecodeIntegrityTokenPathParams, _super);
    function PlayintegrityDecodeIntegrityTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenPathParams.prototype, "packageName", void 0);
    return PlayintegrityDecodeIntegrityTokenPathParams;
}(SpeakeasyBase));
export { PlayintegrityDecodeIntegrityTokenPathParams };
var PlayintegrityDecodeIntegrityTokenQueryParams = /** @class */ (function (_super) {
    __extends(PlayintegrityDecodeIntegrityTokenQueryParams, _super);
    function PlayintegrityDecodeIntegrityTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenQueryParams.prototype, "uploadProtocol", void 0);
    return PlayintegrityDecodeIntegrityTokenQueryParams;
}(SpeakeasyBase));
export { PlayintegrityDecodeIntegrityTokenQueryParams };
var PlayintegrityDecodeIntegrityTokenSecurity = /** @class */ (function (_super) {
    __extends(PlayintegrityDecodeIntegrityTokenSecurity, _super);
    function PlayintegrityDecodeIntegrityTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PlayintegrityDecodeIntegrityTokenSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PlayintegrityDecodeIntegrityTokenSecurity.prototype, "oauth2c", void 0);
    return PlayintegrityDecodeIntegrityTokenSecurity;
}(SpeakeasyBase));
export { PlayintegrityDecodeIntegrityTokenSecurity };
var PlayintegrityDecodeIntegrityTokenRequest = /** @class */ (function (_super) {
    __extends(PlayintegrityDecodeIntegrityTokenRequest, _super);
    function PlayintegrityDecodeIntegrityTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayintegrityDecodeIntegrityTokenPathParams)
    ], PlayintegrityDecodeIntegrityTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayintegrityDecodeIntegrityTokenQueryParams)
    ], PlayintegrityDecodeIntegrityTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DecodeIntegrityTokenRequest)
    ], PlayintegrityDecodeIntegrityTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlayintegrityDecodeIntegrityTokenSecurity)
    ], PlayintegrityDecodeIntegrityTokenRequest.prototype, "security", void 0);
    return PlayintegrityDecodeIntegrityTokenRequest;
}(SpeakeasyBase));
export { PlayintegrityDecodeIntegrityTokenRequest };
var PlayintegrityDecodeIntegrityTokenResponse = /** @class */ (function (_super) {
    __extends(PlayintegrityDecodeIntegrityTokenResponse, _super);
    function PlayintegrityDecodeIntegrityTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlayintegrityDecodeIntegrityTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DecodeIntegrityTokenResponse)
    ], PlayintegrityDecodeIntegrityTokenResponse.prototype, "decodeIntegrityTokenResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlayintegrityDecodeIntegrityTokenResponse.prototype, "statusCode", void 0);
    return PlayintegrityDecodeIntegrityTokenResponse;
}(SpeakeasyBase));
export { PlayintegrityDecodeIntegrityTokenResponse };
