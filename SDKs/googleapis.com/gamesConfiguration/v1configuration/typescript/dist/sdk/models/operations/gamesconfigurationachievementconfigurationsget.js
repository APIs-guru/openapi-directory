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
var GamesConfigurationAchievementConfigurationsGetPathParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsGetPathParams, _super);
    function GamesConfigurationAchievementConfigurationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=achievementId" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetPathParams.prototype, "achievementId", void 0);
    return GamesConfigurationAchievementConfigurationsGetPathParams;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsGetPathParams };
var GamesConfigurationAchievementConfigurationsGetQueryParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsGetQueryParams, _super);
    function GamesConfigurationAchievementConfigurationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GamesConfigurationAchievementConfigurationsGetQueryParams;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsGetQueryParams };
var GamesConfigurationAchievementConfigurationsGetSecurity = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsGetSecurity, _super);
    function GamesConfigurationAchievementConfigurationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesConfigurationAchievementConfigurationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesConfigurationAchievementConfigurationsGetSecurity.prototype, "oauth2c", void 0);
    return GamesConfigurationAchievementConfigurationsGetSecurity;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsGetSecurity };
var GamesConfigurationAchievementConfigurationsGetRequest = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsGetRequest, _super);
    function GamesConfigurationAchievementConfigurationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsGetPathParams)
    ], GamesConfigurationAchievementConfigurationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsGetQueryParams)
    ], GamesConfigurationAchievementConfigurationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsGetSecurity)
    ], GamesConfigurationAchievementConfigurationsGetRequest.prototype, "security", void 0);
    return GamesConfigurationAchievementConfigurationsGetRequest;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsGetRequest };
var GamesConfigurationAchievementConfigurationsGetResponse = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsGetResponse, _super);
    function GamesConfigurationAchievementConfigurationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AchievementConfiguration)
    ], GamesConfigurationAchievementConfigurationsGetResponse.prototype, "achievementConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesConfigurationAchievementConfigurationsGetResponse.prototype, "statusCode", void 0);
    return GamesConfigurationAchievementConfigurationsGetResponse;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsGetResponse };
