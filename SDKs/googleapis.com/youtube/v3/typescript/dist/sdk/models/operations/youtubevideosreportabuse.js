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
var YoutubeVideosReportAbuseQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideosReportAbuseQueryParams, _super);
    function YoutubeVideosReportAbuseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeVideosReportAbuseQueryParams;
}(SpeakeasyBase));
export { YoutubeVideosReportAbuseQueryParams };
var YoutubeVideosReportAbuseSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideosReportAbuseSecurityOption1, _super);
    function YoutubeVideosReportAbuseSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosReportAbuseSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosReportAbuseSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideosReportAbuseSecurityOption1;
}(SpeakeasyBase));
export { YoutubeVideosReportAbuseSecurityOption1 };
var YoutubeVideosReportAbuseSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideosReportAbuseSecurityOption2, _super);
    function YoutubeVideosReportAbuseSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosReportAbuseSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosReportAbuseSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideosReportAbuseSecurityOption2;
}(SpeakeasyBase));
export { YoutubeVideosReportAbuseSecurityOption2 };
var YoutubeVideosReportAbuseSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideosReportAbuseSecurityOption3, _super);
    function YoutubeVideosReportAbuseSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosReportAbuseSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosReportAbuseSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideosReportAbuseSecurityOption3;
}(SpeakeasyBase));
export { YoutubeVideosReportAbuseSecurityOption3 };
var YoutubeVideosReportAbuseSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideosReportAbuseSecurity, _super);
    function YoutubeVideosReportAbuseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosReportAbuseSecurityOption1)
    ], YoutubeVideosReportAbuseSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosReportAbuseSecurityOption2)
    ], YoutubeVideosReportAbuseSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosReportAbuseSecurityOption3)
    ], YoutubeVideosReportAbuseSecurity.prototype, "option3", void 0);
    return YoutubeVideosReportAbuseSecurity;
}(SpeakeasyBase));
export { YoutubeVideosReportAbuseSecurity };
var YoutubeVideosReportAbuseRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideosReportAbuseRequest, _super);
    function YoutubeVideosReportAbuseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosReportAbuseQueryParams)
    ], YoutubeVideosReportAbuseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.VideoAbuseReport)
    ], YoutubeVideosReportAbuseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosReportAbuseSecurity)
    ], YoutubeVideosReportAbuseRequest.prototype, "security", void 0);
    return YoutubeVideosReportAbuseRequest;
}(SpeakeasyBase));
export { YoutubeVideosReportAbuseRequest };
var YoutubeVideosReportAbuseResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideosReportAbuseResponse, _super);
    function YoutubeVideosReportAbuseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeVideosReportAbuseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeVideosReportAbuseResponse.prototype, "statusCode", void 0);
    return YoutubeVideosReportAbuseResponse;
}(SpeakeasyBase));
export { YoutubeVideosReportAbuseResponse };
