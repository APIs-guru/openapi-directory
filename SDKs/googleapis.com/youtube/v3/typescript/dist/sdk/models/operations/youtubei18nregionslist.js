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
var YoutubeI18nRegionsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListQueryParams, _super);
    function YoutubeI18nRegionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeI18nRegionsListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeI18nRegionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeI18nRegionsListQueryParams;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListQueryParams };
var YoutubeI18nRegionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListSecurityOption1, _super);
    function YoutubeI18nRegionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nRegionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nRegionsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeI18nRegionsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListSecurityOption1 };
var YoutubeI18nRegionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListSecurityOption2, _super);
    function YoutubeI18nRegionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nRegionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nRegionsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeI18nRegionsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListSecurityOption2 };
var YoutubeI18nRegionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListSecurityOption3, _super);
    function YoutubeI18nRegionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nRegionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nRegionsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeI18nRegionsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListSecurityOption3 };
var YoutubeI18nRegionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListSecurityOption4, _super);
    function YoutubeI18nRegionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeI18nRegionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeI18nRegionsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeI18nRegionsListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListSecurityOption4 };
var YoutubeI18nRegionsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListSecurity, _super);
    function YoutubeI18nRegionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nRegionsListSecurityOption1)
    ], YoutubeI18nRegionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nRegionsListSecurityOption2)
    ], YoutubeI18nRegionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nRegionsListSecurityOption3)
    ], YoutubeI18nRegionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeI18nRegionsListSecurityOption4)
    ], YoutubeI18nRegionsListSecurity.prototype, "option4", void 0);
    return YoutubeI18nRegionsListSecurity;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListSecurity };
var YoutubeI18nRegionsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListRequest, _super);
    function YoutubeI18nRegionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeI18nRegionsListQueryParams)
    ], YoutubeI18nRegionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeI18nRegionsListSecurity)
    ], YoutubeI18nRegionsListRequest.prototype, "security", void 0);
    return YoutubeI18nRegionsListRequest;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListRequest };
var YoutubeI18nRegionsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeI18nRegionsListResponse, _super);
    function YoutubeI18nRegionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeI18nRegionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.I18nRegionListResponse)
    ], YoutubeI18nRegionsListResponse.prototype, "i18nRegionListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeI18nRegionsListResponse.prototype, "statusCode", void 0);
    return YoutubeI18nRegionsListResponse;
}(SpeakeasyBase));
export { YoutubeI18nRegionsListResponse };
