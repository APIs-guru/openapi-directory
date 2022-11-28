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
export var GamesConfigurationImageConfigurationsUploadImageTypeEnum;
(function (GamesConfigurationImageConfigurationsUploadImageTypeEnum) {
    GamesConfigurationImageConfigurationsUploadImageTypeEnum["ImageTypeUnspecified"] = "IMAGE_TYPE_UNSPECIFIED";
    GamesConfigurationImageConfigurationsUploadImageTypeEnum["AchievementIcon"] = "ACHIEVEMENT_ICON";
    GamesConfigurationImageConfigurationsUploadImageTypeEnum["LeaderboardIcon"] = "LEADERBOARD_ICON";
})(GamesConfigurationImageConfigurationsUploadImageTypeEnum || (GamesConfigurationImageConfigurationsUploadImageTypeEnum = {}));
var GamesConfigurationImageConfigurationsUploadPathParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationImageConfigurationsUploadPathParams, _super);
    function GamesConfigurationImageConfigurationsUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadPathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resourceId" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadPathParams.prototype, "resourceId", void 0);
    return GamesConfigurationImageConfigurationsUploadPathParams;
}(SpeakeasyBase));
export { GamesConfigurationImageConfigurationsUploadPathParams };
var GamesConfigurationImageConfigurationsUploadQueryParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationImageConfigurationsUploadQueryParams, _super);
    function GamesConfigurationImageConfigurationsUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadQueryParams.prototype, "uploadProtocol", void 0);
    return GamesConfigurationImageConfigurationsUploadQueryParams;
}(SpeakeasyBase));
export { GamesConfigurationImageConfigurationsUploadQueryParams };
var GamesConfigurationImageConfigurationsUploadSecurity = /** @class */ (function (_super) {
    __extends(GamesConfigurationImageConfigurationsUploadSecurity, _super);
    function GamesConfigurationImageConfigurationsUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesConfigurationImageConfigurationsUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesConfigurationImageConfigurationsUploadSecurity.prototype, "oauth2c", void 0);
    return GamesConfigurationImageConfigurationsUploadSecurity;
}(SpeakeasyBase));
export { GamesConfigurationImageConfigurationsUploadSecurity };
var GamesConfigurationImageConfigurationsUploadRequest = /** @class */ (function (_super) {
    __extends(GamesConfigurationImageConfigurationsUploadRequest, _super);
    function GamesConfigurationImageConfigurationsUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationImageConfigurationsUploadPathParams)
    ], GamesConfigurationImageConfigurationsUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationImageConfigurationsUploadQueryParams)
    ], GamesConfigurationImageConfigurationsUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationImageConfigurationsUploadSecurity)
    ], GamesConfigurationImageConfigurationsUploadRequest.prototype, "security", void 0);
    return GamesConfigurationImageConfigurationsUploadRequest;
}(SpeakeasyBase));
export { GamesConfigurationImageConfigurationsUploadRequest };
var GamesConfigurationImageConfigurationsUploadResponse = /** @class */ (function (_super) {
    __extends(GamesConfigurationImageConfigurationsUploadResponse, _super);
    function GamesConfigurationImageConfigurationsUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesConfigurationImageConfigurationsUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImageConfiguration)
    ], GamesConfigurationImageConfigurationsUploadResponse.prototype, "imageConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesConfigurationImageConfigurationsUploadResponse.prototype, "statusCode", void 0);
    return GamesConfigurationImageConfigurationsUploadResponse;
}(SpeakeasyBase));
export { GamesConfigurationImageConfigurationsUploadResponse };
