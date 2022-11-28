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
var YoutubeVideoAbuseReportReasonsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideoAbuseReportReasonsListQueryParams, _super);
    function YoutubeVideoAbuseReportReasonsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeVideoAbuseReportReasonsListQueryParams;
}(SpeakeasyBase));
export { YoutubeVideoAbuseReportReasonsListQueryParams };
var YoutubeVideoAbuseReportReasonsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideoAbuseReportReasonsListSecurityOption1, _super);
    function YoutubeVideoAbuseReportReasonsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideoAbuseReportReasonsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideoAbuseReportReasonsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideoAbuseReportReasonsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeVideoAbuseReportReasonsListSecurityOption1 };
var YoutubeVideoAbuseReportReasonsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideoAbuseReportReasonsListSecurityOption2, _super);
    function YoutubeVideoAbuseReportReasonsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideoAbuseReportReasonsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideoAbuseReportReasonsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideoAbuseReportReasonsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeVideoAbuseReportReasonsListSecurityOption2 };
var YoutubeVideoAbuseReportReasonsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideoAbuseReportReasonsListSecurityOption3, _super);
    function YoutubeVideoAbuseReportReasonsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideoAbuseReportReasonsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideoAbuseReportReasonsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideoAbuseReportReasonsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeVideoAbuseReportReasonsListSecurityOption3 };
var YoutubeVideoAbuseReportReasonsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideoAbuseReportReasonsListSecurity, _super);
    function YoutubeVideoAbuseReportReasonsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideoAbuseReportReasonsListSecurityOption1)
    ], YoutubeVideoAbuseReportReasonsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideoAbuseReportReasonsListSecurityOption2)
    ], YoutubeVideoAbuseReportReasonsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideoAbuseReportReasonsListSecurityOption3)
    ], YoutubeVideoAbuseReportReasonsListSecurity.prototype, "option3", void 0);
    return YoutubeVideoAbuseReportReasonsListSecurity;
}(SpeakeasyBase));
export { YoutubeVideoAbuseReportReasonsListSecurity };
var YoutubeVideoAbuseReportReasonsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideoAbuseReportReasonsListRequest, _super);
    function YoutubeVideoAbuseReportReasonsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideoAbuseReportReasonsListQueryParams)
    ], YoutubeVideoAbuseReportReasonsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideoAbuseReportReasonsListSecurity)
    ], YoutubeVideoAbuseReportReasonsListRequest.prototype, "security", void 0);
    return YoutubeVideoAbuseReportReasonsListRequest;
}(SpeakeasyBase));
export { YoutubeVideoAbuseReportReasonsListRequest };
var YoutubeVideoAbuseReportReasonsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideoAbuseReportReasonsListResponse, _super);
    function YoutubeVideoAbuseReportReasonsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeVideoAbuseReportReasonsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeVideoAbuseReportReasonsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoAbuseReportReasonListResponse)
    ], YoutubeVideoAbuseReportReasonsListResponse.prototype, "videoAbuseReportReasonListResponse", void 0);
    return YoutubeVideoAbuseReportReasonsListResponse;
}(SpeakeasyBase));
export { YoutubeVideoAbuseReportReasonsListResponse };
