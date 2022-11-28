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
var YoutubeAbuseReportsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertQueryParams, _super);
    function YoutubeAbuseReportsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAbuseReportsInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeAbuseReportsInsertQueryParams };
var YoutubeAbuseReportsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertSecurityOption1, _super);
    function YoutubeAbuseReportsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAbuseReportsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAbuseReportsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAbuseReportsInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeAbuseReportsInsertSecurityOption1 };
var YoutubeAbuseReportsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertSecurityOption2, _super);
    function YoutubeAbuseReportsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAbuseReportsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAbuseReportsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAbuseReportsInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeAbuseReportsInsertSecurityOption2 };
var YoutubeAbuseReportsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertSecurity, _super);
    function YoutubeAbuseReportsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAbuseReportsInsertSecurityOption1)
    ], YoutubeAbuseReportsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAbuseReportsInsertSecurityOption2)
    ], YoutubeAbuseReportsInsertSecurity.prototype, "option2", void 0);
    return YoutubeAbuseReportsInsertSecurity;
}(SpeakeasyBase));
export { YoutubeAbuseReportsInsertSecurity };
var YoutubeAbuseReportsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertRequest, _super);
    function YoutubeAbuseReportsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAbuseReportsInsertQueryParams)
    ], YoutubeAbuseReportsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AbuseReport)
    ], YoutubeAbuseReportsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAbuseReportsInsertSecurity)
    ], YoutubeAbuseReportsInsertRequest.prototype, "security", void 0);
    return YoutubeAbuseReportsInsertRequest;
}(SpeakeasyBase));
export { YoutubeAbuseReportsInsertRequest };
var YoutubeAbuseReportsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeAbuseReportsInsertResponse, _super);
    function YoutubeAbuseReportsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AbuseReport)
    ], YoutubeAbuseReportsInsertResponse.prototype, "abuseReport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeAbuseReportsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeAbuseReportsInsertResponse.prototype, "statusCode", void 0);
    return YoutubeAbuseReportsInsertResponse;
}(SpeakeasyBase));
export { YoutubeAbuseReportsInsertResponse };
