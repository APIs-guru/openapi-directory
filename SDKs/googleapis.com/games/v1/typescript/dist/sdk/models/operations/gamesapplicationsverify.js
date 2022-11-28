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
var GamesApplicationsVerifyPathParams = /** @class */ (function (_super) {
    __extends(GamesApplicationsVerifyPathParams, _super);
    function GamesApplicationsVerifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyPathParams.prototype, "applicationId", void 0);
    return GamesApplicationsVerifyPathParams;
}(SpeakeasyBase));
export { GamesApplicationsVerifyPathParams };
var GamesApplicationsVerifyQueryParams = /** @class */ (function (_super) {
    __extends(GamesApplicationsVerifyQueryParams, _super);
    function GamesApplicationsVerifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesApplicationsVerifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyQueryParams.prototype, "uploadProtocol", void 0);
    return GamesApplicationsVerifyQueryParams;
}(SpeakeasyBase));
export { GamesApplicationsVerifyQueryParams };
var GamesApplicationsVerifySecurity = /** @class */ (function (_super) {
    __extends(GamesApplicationsVerifySecurity, _super);
    function GamesApplicationsVerifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesApplicationsVerifySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesApplicationsVerifySecurity.prototype, "oauth2c", void 0);
    return GamesApplicationsVerifySecurity;
}(SpeakeasyBase));
export { GamesApplicationsVerifySecurity };
var GamesApplicationsVerifyRequest = /** @class */ (function (_super) {
    __extends(GamesApplicationsVerifyRequest, _super);
    function GamesApplicationsVerifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesApplicationsVerifyPathParams)
    ], GamesApplicationsVerifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesApplicationsVerifyQueryParams)
    ], GamesApplicationsVerifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesApplicationsVerifySecurity)
    ], GamesApplicationsVerifyRequest.prototype, "security", void 0);
    return GamesApplicationsVerifyRequest;
}(SpeakeasyBase));
export { GamesApplicationsVerifyRequest };
var GamesApplicationsVerifyResponse = /** @class */ (function (_super) {
    __extends(GamesApplicationsVerifyResponse, _super);
    function GamesApplicationsVerifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApplicationVerifyResponse)
    ], GamesApplicationsVerifyResponse.prototype, "applicationVerifyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesApplicationsVerifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesApplicationsVerifyResponse.prototype, "statusCode", void 0);
    return GamesApplicationsVerifyResponse;
}(SpeakeasyBase));
export { GamesApplicationsVerifyResponse };
