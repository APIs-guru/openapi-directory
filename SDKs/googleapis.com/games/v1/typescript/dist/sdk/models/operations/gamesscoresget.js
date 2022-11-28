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
export var GamesScoresGetTimeSpanEnum;
(function (GamesScoresGetTimeSpanEnum) {
    GamesScoresGetTimeSpanEnum["ScoreTimeSpanUnspecified"] = "SCORE_TIME_SPAN_UNSPECIFIED";
    GamesScoresGetTimeSpanEnum["All"] = "ALL";
    GamesScoresGetTimeSpanEnum["AllTime"] = "ALL_TIME";
    GamesScoresGetTimeSpanEnum["Weekly"] = "WEEKLY";
    GamesScoresGetTimeSpanEnum["Daily"] = "DAILY";
})(GamesScoresGetTimeSpanEnum || (GamesScoresGetTimeSpanEnum = {}));
var GamesScoresGetPathParams = /** @class */ (function (_super) {
    __extends(GamesScoresGetPathParams, _super);
    function GamesScoresGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" }),
        __metadata("design:type", String)
    ], GamesScoresGetPathParams.prototype, "leaderboardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerId" }),
        __metadata("design:type", String)
    ], GamesScoresGetPathParams.prototype, "playerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=timeSpan" }),
        __metadata("design:type", String)
    ], GamesScoresGetPathParams.prototype, "timeSpan", void 0);
    return GamesScoresGetPathParams;
}(SpeakeasyBase));
export { GamesScoresGetPathParams };
export var GamesScoresGetIncludeRankTypeEnum;
(function (GamesScoresGetIncludeRankTypeEnum) {
    GamesScoresGetIncludeRankTypeEnum["IncludeRankTypeUnspecified"] = "INCLUDE_RANK_TYPE_UNSPECIFIED";
    GamesScoresGetIncludeRankTypeEnum["All"] = "ALL";
    GamesScoresGetIncludeRankTypeEnum["Public"] = "PUBLIC";
    GamesScoresGetIncludeRankTypeEnum["Social"] = "SOCIAL";
    GamesScoresGetIncludeRankTypeEnum["Friends"] = "FRIENDS";
})(GamesScoresGetIncludeRankTypeEnum || (GamesScoresGetIncludeRankTypeEnum = {}));
var GamesScoresGetQueryParams = /** @class */ (function (_super) {
    __extends(GamesScoresGetQueryParams, _super);
    function GamesScoresGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRankType" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "includeRankType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GamesScoresGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesScoresGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesScoresGetQueryParams.prototype, "uploadProtocol", void 0);
    return GamesScoresGetQueryParams;
}(SpeakeasyBase));
export { GamesScoresGetQueryParams };
var GamesScoresGetSecurity = /** @class */ (function (_super) {
    __extends(GamesScoresGetSecurity, _super);
    function GamesScoresGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesScoresGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesScoresGetSecurity.prototype, "oauth2c", void 0);
    return GamesScoresGetSecurity;
}(SpeakeasyBase));
export { GamesScoresGetSecurity };
var GamesScoresGetRequest = /** @class */ (function (_super) {
    __extends(GamesScoresGetRequest, _super);
    function GamesScoresGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresGetPathParams)
    ], GamesScoresGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresGetQueryParams)
    ], GamesScoresGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresGetSecurity)
    ], GamesScoresGetRequest.prototype, "security", void 0);
    return GamesScoresGetRequest;
}(SpeakeasyBase));
export { GamesScoresGetRequest };
var GamesScoresGetResponse = /** @class */ (function (_super) {
    __extends(GamesScoresGetResponse, _super);
    function GamesScoresGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesScoresGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlayerLeaderboardScoreListResponse)
    ], GamesScoresGetResponse.prototype, "playerLeaderboardScoreListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesScoresGetResponse.prototype, "statusCode", void 0);
    return GamesScoresGetResponse;
}(SpeakeasyBase));
export { GamesScoresGetResponse };
