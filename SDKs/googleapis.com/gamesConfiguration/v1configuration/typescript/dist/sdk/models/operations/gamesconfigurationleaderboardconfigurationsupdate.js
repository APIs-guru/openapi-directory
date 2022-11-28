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
var GamesConfigurationLeaderboardConfigurationsUpdatePathParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsUpdatePathParams, _super);
    function GamesConfigurationLeaderboardConfigurationsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdatePathParams.prototype, "leaderboardId", void 0);
    return GamesConfigurationLeaderboardConfigurationsUpdatePathParams;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsUpdatePathParams };
var GamesConfigurationLeaderboardConfigurationsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsUpdateQueryParams, _super);
    function GamesConfigurationLeaderboardConfigurationsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return GamesConfigurationLeaderboardConfigurationsUpdateQueryParams;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsUpdateQueryParams };
var GamesConfigurationLeaderboardConfigurationsUpdateSecurity = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsUpdateSecurity, _super);
    function GamesConfigurationLeaderboardConfigurationsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesConfigurationLeaderboardConfigurationsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesConfigurationLeaderboardConfigurationsUpdateSecurity.prototype, "oauth2c", void 0);
    return GamesConfigurationLeaderboardConfigurationsUpdateSecurity;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsUpdateSecurity };
var GamesConfigurationLeaderboardConfigurationsUpdateRequest = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsUpdateRequest, _super);
    function GamesConfigurationLeaderboardConfigurationsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationLeaderboardConfigurationsUpdatePathParams)
    ], GamesConfigurationLeaderboardConfigurationsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationLeaderboardConfigurationsUpdateQueryParams)
    ], GamesConfigurationLeaderboardConfigurationsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LeaderboardConfiguration)
    ], GamesConfigurationLeaderboardConfigurationsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesConfigurationLeaderboardConfigurationsUpdateSecurity)
    ], GamesConfigurationLeaderboardConfigurationsUpdateRequest.prototype, "security", void 0);
    return GamesConfigurationLeaderboardConfigurationsUpdateRequest;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsUpdateRequest };
var GamesConfigurationLeaderboardConfigurationsUpdateResponse = /** @class */ (function (_super) {
    __extends(GamesConfigurationLeaderboardConfigurationsUpdateResponse, _super);
    function GamesConfigurationLeaderboardConfigurationsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesConfigurationLeaderboardConfigurationsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaderboardConfiguration)
    ], GamesConfigurationLeaderboardConfigurationsUpdateResponse.prototype, "leaderboardConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesConfigurationLeaderboardConfigurationsUpdateResponse.prototype, "statusCode", void 0);
    return GamesConfigurationLeaderboardConfigurationsUpdateResponse;
}(SpeakeasyBase));
export { GamesConfigurationLeaderboardConfigurationsUpdateResponse };
