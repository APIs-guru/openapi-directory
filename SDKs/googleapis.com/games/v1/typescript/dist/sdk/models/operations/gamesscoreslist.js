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
export var GamesScoresListCollectionEnum;
(function (GamesScoresListCollectionEnum) {
    GamesScoresListCollectionEnum["ScoreCollectionUnspecified"] = "SCORE_COLLECTION_UNSPECIFIED";
    GamesScoresListCollectionEnum["Public"] = "PUBLIC";
    GamesScoresListCollectionEnum["Social"] = "SOCIAL";
    GamesScoresListCollectionEnum["Friends"] = "FRIENDS";
})(GamesScoresListCollectionEnum || (GamesScoresListCollectionEnum = {}));
var GamesScoresListPathParams = /** @class */ (function (_super) {
    __extends(GamesScoresListPathParams, _super);
    function GamesScoresListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" }),
        __metadata("design:type", String)
    ], GamesScoresListPathParams.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" }),
        __metadata("design:type", String)
    ], GamesScoresListPathParams.prototype, "leaderboardId", void 0);
    return GamesScoresListPathParams;
}(SpeakeasyBase));
export { GamesScoresListPathParams };
export var GamesScoresListTimeSpanEnum;
(function (GamesScoresListTimeSpanEnum) {
    GamesScoresListTimeSpanEnum["ScoreTimeSpanUnspecified"] = "SCORE_TIME_SPAN_UNSPECIFIED";
    GamesScoresListTimeSpanEnum["AllTime"] = "ALL_TIME";
    GamesScoresListTimeSpanEnum["Weekly"] = "WEEKLY";
    GamesScoresListTimeSpanEnum["Daily"] = "DAILY";
})(GamesScoresListTimeSpanEnum || (GamesScoresListTimeSpanEnum = {}));
var GamesScoresListQueryParams = /** @class */ (function (_super) {
    __extends(GamesScoresListQueryParams, _super);
    function GamesScoresListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GamesScoresListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesScoresListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeSpan" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "timeSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesScoresListQueryParams.prototype, "uploadProtocol", void 0);
    return GamesScoresListQueryParams;
}(SpeakeasyBase));
export { GamesScoresListQueryParams };
var GamesScoresListSecurity = /** @class */ (function (_super) {
    __extends(GamesScoresListSecurity, _super);
    function GamesScoresListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesScoresListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesScoresListSecurity.prototype, "oauth2c", void 0);
    return GamesScoresListSecurity;
}(SpeakeasyBase));
export { GamesScoresListSecurity };
var GamesScoresListRequest = /** @class */ (function (_super) {
    __extends(GamesScoresListRequest, _super);
    function GamesScoresListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresListPathParams)
    ], GamesScoresListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresListQueryParams)
    ], GamesScoresListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresListSecurity)
    ], GamesScoresListRequest.prototype, "security", void 0);
    return GamesScoresListRequest;
}(SpeakeasyBase));
export { GamesScoresListRequest };
var GamesScoresListResponse = /** @class */ (function (_super) {
    __extends(GamesScoresListResponse, _super);
    function GamesScoresListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesScoresListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaderboardScores)
    ], GamesScoresListResponse.prototype, "leaderboardScores", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesScoresListResponse.prototype, "statusCode", void 0);
    return GamesScoresListResponse;
}(SpeakeasyBase));
export { GamesScoresListResponse };
