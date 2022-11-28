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
var GamesConfigurationAchievementConfigurationsListPathParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsListPathParams, _super);
    function GamesConfigurationAchievementConfigurationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationId" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListPathParams.prototype, "applicationId", void 0);
    return GamesConfigurationAchievementConfigurationsListPathParams;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsListPathParams };
var GamesConfigurationAchievementConfigurationsListQueryParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsListQueryParams, _super);
    function GamesConfigurationAchievementConfigurationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListQueryParams.prototype, "uploadProtocol", void 0);
    return GamesConfigurationAchievementConfigurationsListQueryParams;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsListQueryParams };
var GamesConfigurationAchievementConfigurationsListSecurity = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsListSecurity, _super);
    function GamesConfigurationAchievementConfigurationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesConfigurationAchievementConfigurationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesConfigurationAchievementConfigurationsListSecurity.prototype, "oauth2c", void 0);
    return GamesConfigurationAchievementConfigurationsListSecurity;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsListSecurity };
var GamesConfigurationAchievementConfigurationsListRequest = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsListRequest, _super);
    function GamesConfigurationAchievementConfigurationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsListPathParams)
    ], GamesConfigurationAchievementConfigurationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsListQueryParams)
    ], GamesConfigurationAchievementConfigurationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationAchievementConfigurationsListSecurity)
    ], GamesConfigurationAchievementConfigurationsListRequest.prototype, "security", void 0);
    return GamesConfigurationAchievementConfigurationsListRequest;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsListRequest };
var GamesConfigurationAchievementConfigurationsListResponse = /** @class */ (function (_super) {
    __extends(GamesConfigurationAchievementConfigurationsListResponse, _super);
    function GamesConfigurationAchievementConfigurationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AchievementConfigurationListResponse)
    ], GamesConfigurationAchievementConfigurationsListResponse.prototype, "achievementConfigurationListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesConfigurationAchievementConfigurationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesConfigurationAchievementConfigurationsListResponse.prototype, "statusCode", void 0);
    return GamesConfigurationAchievementConfigurationsListResponse;
}(SpeakeasyBase));
export { GamesConfigurationAchievementConfigurationsListResponse };
