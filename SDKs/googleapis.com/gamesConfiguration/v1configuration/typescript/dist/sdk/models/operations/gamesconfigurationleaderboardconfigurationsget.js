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
var GamesConfigurationLeaderboardConfigurationsGetPathParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsGetPathParams, _super);
    function GamesConfigurationLeaderboardConfigurationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetPathParams.prototype, "leaderboardId", void 0);
    return GamesConfigurationLeaderboardConfigurationsGetPathParams;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsGetPathParams };
var GamesConfigurationLeaderboardConfigurationsGetQueryParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsGetQueryParams, _super);
    function GamesConfigurationLeaderboardConfigurationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GamesConfigurationLeaderboardConfigurationsGetQueryParams;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsGetQueryParams };
var GamesConfigurationLeaderboardConfigurationsGetSecurity = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsGetSecurity, _super);
    function GamesConfigurationLeaderboardConfigurationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesConfigurationLeaderboardConfigurationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesConfigurationLeaderboardConfigurationsGetSecurity.prototype, "oauth2c", void 0);
    return GamesConfigurationLeaderboardConfigurationsGetSecurity;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsGetSecurity };
var GamesConfigurationLeaderboardConfigurationsGetRequest = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsGetRequest, _super);
    function GamesConfigurationLeaderboardConfigurationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationLeaderboardConfigurationsGetPathParams)
    ], GamesConfigurationLeaderboardConfigurationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationLeaderboardConfigurationsGetQueryParams)
    ], GamesConfigurationLeaderboardConfigurationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationLeaderboardConfigurationsGetSecurity)
    ], GamesConfigurationLeaderboardConfigurationsGetRequest.prototype, "security", void 0);
    return GamesConfigurationLeaderboardConfigurationsGetRequest;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsGetRequest };
var GamesConfigurationLeaderboardConfigurationsGetResponse = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsGetResponse, _super);
    function GamesConfigurationLeaderboardConfigurationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaderboardConfiguration)
    ], GamesConfigurationLeaderboardConfigurationsGetResponse.prototype, "leaderboardConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesConfigurationLeaderboardConfigurationsGetResponse.prototype, "statusCode", void 0);
    return GamesConfigurationLeaderboardConfigurationsGetResponse;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsGetResponse };
