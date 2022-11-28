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
var YoutubeWatermarksUnsetQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksUnsetQueryParams, _super);
    function YoutubeWatermarksUnsetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeWatermarksUnsetQueryParams;
}(SpeakeasyBase));
export { YoutubeWatermarksUnsetQueryParams };
var YoutubeWatermarksUnsetSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksUnsetSecurityOption1, _super);
    function YoutubeWatermarksUnsetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeWatermarksUnsetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeWatermarksUnsetSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeWatermarksUnsetSecurityOption1;
}(SpeakeasyBase));
export { YoutubeWatermarksUnsetSecurityOption1 };
var YoutubeWatermarksUnsetSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksUnsetSecurityOption2, _super);
    function YoutubeWatermarksUnsetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeWatermarksUnsetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeWatermarksUnsetSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeWatermarksUnsetSecurityOption2;
}(SpeakeasyBase));
export { YoutubeWatermarksUnsetSecurityOption2 };
var YoutubeWatermarksUnsetSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksUnsetSecurityOption3, _super);
    function YoutubeWatermarksUnsetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeWatermarksUnsetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeWatermarksUnsetSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeWatermarksUnsetSecurityOption3;
}(SpeakeasyBase));
export { YoutubeWatermarksUnsetSecurityOption3 };
var YoutubeWatermarksUnsetSecurity = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksUnsetSecurity, _super);
    function YoutubeWatermarksUnsetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeWatermarksUnsetSecurityOption1)
    ], YoutubeWatermarksUnsetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeWatermarksUnsetSecurityOption2)
    ], YoutubeWatermarksUnsetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeWatermarksUnsetSecurityOption3)
    ], YoutubeWatermarksUnsetSecurity.prototype, "option3", void 0);
    return YoutubeWatermarksUnsetSecurity;
}(SpeakeasyBase));
export { YoutubeWatermarksUnsetSecurity };
var YoutubeWatermarksUnsetRequest = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksUnsetRequest, _super);
    function YoutubeWatermarksUnsetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeWatermarksUnsetQueryParams)
    ], YoutubeWatermarksUnsetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeWatermarksUnsetSecurity)
    ], YoutubeWatermarksUnsetRequest.prototype, "security", void 0);
    return YoutubeWatermarksUnsetRequest;
}(SpeakeasyBase));
export { YoutubeWatermarksUnsetRequest };
var YoutubeWatermarksUnsetResponse = /** @class */ (function (_super) {
    __extends(YoutubeWatermarksUnsetResponse, _super);
    function YoutubeWatermarksUnsetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeWatermarksUnsetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeWatermarksUnsetResponse.prototype, "statusCode", void 0);
    return YoutubeWatermarksUnsetResponse;
}(SpeakeasyBase));
export { YoutubeWatermarksUnsetResponse };
