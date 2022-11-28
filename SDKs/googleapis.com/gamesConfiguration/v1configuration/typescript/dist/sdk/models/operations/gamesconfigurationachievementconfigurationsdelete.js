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
var GamesConfigurationAchievementConfigurationsDeletePathParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsDeletePathParams, _super);
    function GamesConfigurationAchievementConfigurationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=achievementId" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeletePathParams.prototype, "achievementId", void 0);
    return GamesConfigurationAchievementConfigurationsDeletePathParams;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsDeletePathParams };
var GamesConfigurationAchievementConfigurationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsDeleteQueryParams, _super);
    function GamesConfigurationAchievementConfigurationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GamesConfigurationAchievementConfigurationsDeleteQueryParams;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsDeleteQueryParams };
var GamesConfigurationAchievementConfigurationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsDeleteSecurity, _super);
    function GamesConfigurationAchievementConfigurationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesConfigurationAchievementConfigurationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesConfigurationAchievementConfigurationsDeleteSecurity.prototype, "oauth2c", void 0);
    return GamesConfigurationAchievementConfigurationsDeleteSecurity;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsDeleteSecurity };
var GamesConfigurationAchievementConfigurationsDeleteRequest = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsDeleteRequest, _super);
    function GamesConfigurationAchievementConfigurationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsDeletePathParams)
    ], GamesConfigurationAchievementConfigurationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsDeleteQueryParams)
    ], GamesConfigurationAchievementConfigurationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsDeleteSecurity)
    ], GamesConfigurationAchievementConfigurationsDeleteRequest.prototype, "security", void 0);
    return GamesConfigurationAchievementConfigurationsDeleteRequest;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsDeleteRequest };
var GamesConfigurationAchievementConfigurationsDeleteResponse = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsDeleteResponse, _super);
    function GamesConfigurationAchievementConfigurationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesConfigurationAchievementConfigurationsDeleteResponse.prototype, "statusCode", void 0);
    return GamesConfigurationAchievementConfigurationsDeleteResponse;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsDeleteResponse };
