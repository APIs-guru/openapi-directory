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
var GamesManagementAchievementsResetForAllPlayersPathParams = /** @class */ (function (_super) {
    __extends(GamesManagementAchievementsResetForAllPlayersPathParams, _super);
    function GamesManagementAchievementsResetForAllPlayersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=achievementId" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersPathParams.prototype, "achievementId", void 0);
    return GamesManagementAchievementsResetForAllPlayersPathParams;
}(SpeakeasyBase));
export { GamesManagementAchievementsResetForAllPlayersPathParams };
var GamesManagementAchievementsResetForAllPlayersQueryParams = /** @class */ (function (_super) {
    __extends(GamesManagementAchievementsResetForAllPlayersQueryParams, _super);
    function GamesManagementAchievementsResetForAllPlayersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersQueryParams.prototype, "uploadProtocol", void 0);
    return GamesManagementAchievementsResetForAllPlayersQueryParams;
}(SpeakeasyBase));
export { GamesManagementAchievementsResetForAllPlayersQueryParams };
var GamesManagementAchievementsResetForAllPlayersSecurity = /** @class */ (function (_super) {
    __extends(GamesManagementAchievementsResetForAllPlayersSecurity, _super);
    function GamesManagementAchievementsResetForAllPlayersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesManagementAchievementsResetForAllPlayersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesManagementAchievementsResetForAllPlayersSecurity.prototype, "oauth2c", void 0);
    return GamesManagementAchievementsResetForAllPlayersSecurity;
}(SpeakeasyBase));
export { GamesManagementAchievementsResetForAllPlayersSecurity };
var GamesManagementAchievementsResetForAllPlayersRequest = /** @class */ (function (_super) {
    __extends(GamesManagementAchievementsResetForAllPlayersRequest, _super);
    function GamesManagementAchievementsResetForAllPlayersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementAchievementsResetForAllPlayersPathParams)
    ], GamesManagementAchievementsResetForAllPlayersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementAchievementsResetForAllPlayersQueryParams)
    ], GamesManagementAchievementsResetForAllPlayersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementAchievementsResetForAllPlayersSecurity)
    ], GamesManagementAchievementsResetForAllPlayersRequest.prototype, "security", void 0);
    return GamesManagementAchievementsResetForAllPlayersRequest;
}(SpeakeasyBase));
export { GamesManagementAchievementsResetForAllPlayersRequest };
var GamesManagementAchievementsResetForAllPlayersResponse = /** @class */ (function (_super) {
    __extends(GamesManagementAchievementsResetForAllPlayersResponse, _super);
    function GamesManagementAchievementsResetForAllPlayersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesManagementAchievementsResetForAllPlayersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesManagementAchievementsResetForAllPlayersResponse.prototype, "statusCode", void 0);
    return GamesManagementAchievementsResetForAllPlayersResponse;
}(SpeakeasyBase));
export { GamesManagementAchievementsResetForAllPlayersResponse };
