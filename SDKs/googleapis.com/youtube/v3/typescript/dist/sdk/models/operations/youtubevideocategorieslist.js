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
var YoutubeVideoCategoriesListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListQueryParams, _super);
    function YoutubeVideoCategoriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", Array)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionCode" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "regionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeVideoCategoriesListQueryParams;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListQueryParams };
var YoutubeVideoCategoriesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListSecurityOption1, _super);
    function YoutubeVideoCategoriesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideoCategoriesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideoCategoriesListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideoCategoriesListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListSecurityOption1 };
var YoutubeVideoCategoriesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListSecurityOption2, _super);
    function YoutubeVideoCategoriesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideoCategoriesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideoCategoriesListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideoCategoriesListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListSecurityOption2 };
var YoutubeVideoCategoriesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListSecurityOption3, _super);
    function YoutubeVideoCategoriesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideoCategoriesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideoCategoriesListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideoCategoriesListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListSecurityOption3 };
var YoutubeVideoCategoriesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListSecurityOption4, _super);
    function YoutubeVideoCategoriesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideoCategoriesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideoCategoriesListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeVideoCategoriesListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListSecurityOption4 };
var YoutubeVideoCategoriesListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListSecurity, _super);
    function YoutubeVideoCategoriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideoCategoriesListSecurityOption1)
    ], YoutubeVideoCategoriesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideoCategoriesListSecurityOption2)
    ], YoutubeVideoCategoriesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideoCategoriesListSecurityOption3)
    ], YoutubeVideoCategoriesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideoCategoriesListSecurityOption4)
    ], YoutubeVideoCategoriesListSecurity.prototype, "option4", void 0);
    return YoutubeVideoCategoriesListSecurity;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListSecurity };
var YoutubeVideoCategoriesListRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListRequest, _super);
    function YoutubeVideoCategoriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideoCategoriesListQueryParams)
    ], YoutubeVideoCategoriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideoCategoriesListSecurity)
    ], YoutubeVideoCategoriesListRequest.prototype, "security", void 0);
    return YoutubeVideoCategoriesListRequest;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListRequest };
var YoutubeVideoCategoriesListResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideoCategoriesListResponse, _super);
    function YoutubeVideoCategoriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeVideoCategoriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeVideoCategoriesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VideoCategoryListResponse)
    ], YoutubeVideoCategoriesListResponse.prototype, "videoCategoryListResponse", void 0);
    return YoutubeVideoCategoriesListResponse;
}(SpeakeasyBase));
export { YoutubeVideoCategoriesListResponse };
