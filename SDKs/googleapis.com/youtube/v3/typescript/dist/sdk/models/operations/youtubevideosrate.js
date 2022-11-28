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
export var YoutubeVideosRateRatingEnum;
(function (YoutubeVideosRateRatingEnum) {
    YoutubeVideosRateRatingEnum["None"] = "none";
    YoutubeVideosRateRatingEnum["Like"] = "like";
    YoutubeVideosRateRatingEnum["Dislike"] = "dislike";
})(YoutubeVideosRateRatingEnum || (YoutubeVideosRateRatingEnum = {}));
var YoutubeVideosRateQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeVideosRateQueryParams, _super);
    function YoutubeVideosRateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeVideosRateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeVideosRateQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeVideosRateQueryParams;
}(SpeakeasyBase));
export { YoutubeVideosRateQueryParams };
var YoutubeVideosRateSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeVideosRateSecurityOption1, _super);
    function YoutubeVideosRateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosRateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosRateSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeVideosRateSecurityOption1;
}(SpeakeasyBase));
export { YoutubeVideosRateSecurityOption1 };
var YoutubeVideosRateSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeVideosRateSecurityOption2, _super);
    function YoutubeVideosRateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosRateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosRateSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeVideosRateSecurityOption2;
}(SpeakeasyBase));
export { YoutubeVideosRateSecurityOption2 };
var YoutubeVideosRateSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeVideosRateSecurityOption3, _super);
    function YoutubeVideosRateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeVideosRateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeVideosRateSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeVideosRateSecurityOption3;
}(SpeakeasyBase));
export { YoutubeVideosRateSecurityOption3 };
var YoutubeVideosRateSecurity = /** @class */ (function (_super) {
    __extends(YoutubeVideosRateSecurity, _super);
    function YoutubeVideosRateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosRateSecurityOption1)
    ], YoutubeVideosRateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosRateSecurityOption2)
    ], YoutubeVideosRateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeVideosRateSecurityOption3)
    ], YoutubeVideosRateSecurity.prototype, "option3", void 0);
    return YoutubeVideosRateSecurity;
}(SpeakeasyBase));
export { YoutubeVideosRateSecurity };
var YoutubeVideosRateRequest = /** @class */ (function (_super) {
    __extends(YoutubeVideosRateRequest, _super);
    function YoutubeVideosRateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosRateQueryParams)
    ], YoutubeVideosRateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeVideosRateSecurity)
    ], YoutubeVideosRateRequest.prototype, "security", void 0);
    return YoutubeVideosRateRequest;
}(SpeakeasyBase));
export { YoutubeVideosRateRequest };
var YoutubeVideosRateResponse = /** @class */ (function (_super) {
    __extends(YoutubeVideosRateResponse, _super);
    function YoutubeVideosRateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeVideosRateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeVideosRateResponse.prototype, "statusCode", void 0);
    return YoutubeVideosRateResponse;
}(SpeakeasyBase));
export { YoutubeVideosRateResponse };
