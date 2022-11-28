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
var GamesManagementScoresResetForAllPlayersPathParams = /** @class */ (function (_super) {
    __extends(GamesManagementScoresResetForAllPlayersPathParams, _super);
    function GamesManagementScoresResetForAllPlayersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersPathParams.prototype, "leaderboardId", void 0);
    return GamesManagementScoresResetForAllPlayersPathParams;
}(SpeakeasyBase));
export { GamesManagementScoresResetForAllPlayersPathParams };
var GamesManagementScoresResetForAllPlayersQueryParams = /** @class */ (function (_super) {
    __extends(GamesManagementScoresResetForAllPlayersQueryParams, _super);
    function GamesManagementScoresResetForAllPlayersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersQueryParams.prototype, "uploadProtocol", void 0);
    return GamesManagementScoresResetForAllPlayersQueryParams;
}(SpeakeasyBase));
export { GamesManagementScoresResetForAllPlayersQueryParams };
var GamesManagementScoresResetForAllPlayersSecurity = /** @class */ (function (_super) {
    __extends(GamesManagementScoresResetForAllPlayersSecurity, _super);
    function GamesManagementScoresResetForAllPlayersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesManagementScoresResetForAllPlayersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesManagementScoresResetForAllPlayersSecurity.prototype, "oauth2c", void 0);
    return GamesManagementScoresResetForAllPlayersSecurity;
}(SpeakeasyBase));
export { GamesManagementScoresResetForAllPlayersSecurity };
var GamesManagementScoresResetForAllPlayersRequest = /** @class */ (function (_super) {
    __extends(GamesManagementScoresResetForAllPlayersRequest, _super);
    function GamesManagementScoresResetForAllPlayersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementScoresResetForAllPlayersPathParams)
    ], GamesManagementScoresResetForAllPlayersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementScoresResetForAllPlayersQueryParams)
    ], GamesManagementScoresResetForAllPlayersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesManagementScoresResetForAllPlayersSecurity)
    ], GamesManagementScoresResetForAllPlayersRequest.prototype, "security", void 0);
    return GamesManagementScoresResetForAllPlayersRequest;
}(SpeakeasyBase));
export { GamesManagementScoresResetForAllPlayersRequest };
var GamesManagementScoresResetForAllPlayersResponse = /** @class */ (function (_super) {
    __extends(GamesManagementScoresResetForAllPlayersResponse, _super);
    function GamesManagementScoresResetForAllPlayersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesManagementScoresResetForAllPlayersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesManagementScoresResetForAllPlayersResponse.prototype, "statusCode", void 0);
    return GamesManagementScoresResetForAllPlayersResponse;
}(SpeakeasyBase));
export { GamesManagementScoresResetForAllPlayersResponse };
