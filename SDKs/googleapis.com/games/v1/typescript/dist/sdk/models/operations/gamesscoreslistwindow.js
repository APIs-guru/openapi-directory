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
export var GamesScoresListWindowCollectionEnum;
(function (GamesScoresListWindowCollectionEnum) {
    GamesScoresListWindowCollectionEnum["ScoreCollectionUnspecified"] = "SCORE_COLLECTION_UNSPECIFIED";
    GamesScoresListWindowCollectionEnum["Public"] = "PUBLIC";
    GamesScoresListWindowCollectionEnum["Social"] = "SOCIAL";
    GamesScoresListWindowCollectionEnum["Friends"] = "FRIENDS";
})(GamesScoresListWindowCollectionEnum || (GamesScoresListWindowCollectionEnum = {}));
var GamesScoresListWindowPathParams = /** @class */ (function (_super) {
    __extends(GamesScoresListWindowPathParams, _super);
    function GamesScoresListWindowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowPathParams.prototype, "collection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=leaderboardId" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowPathParams.prototype, "leaderboardId", void 0);
    return GamesScoresListWindowPathParams;
}(SpeakeasyBase));
export { GamesScoresListWindowPathParams };
export var GamesScoresListWindowTimeSpanEnum;
(function (GamesScoresListWindowTimeSpanEnum) {
    GamesScoresListWindowTimeSpanEnum["ScoreTimeSpanUnspecified"] = "SCORE_TIME_SPAN_UNSPECIFIED";
    GamesScoresListWindowTimeSpanEnum["AllTime"] = "ALL_TIME";
    GamesScoresListWindowTimeSpanEnum["Weekly"] = "WEEKLY";
    GamesScoresListWindowTimeSpanEnum["Daily"] = "DAILY";
})(GamesScoresListWindowTimeSpanEnum || (GamesScoresListWindowTimeSpanEnum = {}));
var GamesScoresListWindowQueryParams = /** @class */ (function (_super) {
    __extends(GamesScoresListWindowQueryParams, _super);
    function GamesScoresListWindowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GamesScoresListWindowQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GamesScoresListWindowQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resultsAbove" }),
        __metadata("design:type", Number)
    ], GamesScoresListWindowQueryParams.prototype, "resultsAbove", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnTopIfAbsent" }),
        __metadata("design:type", Boolean)
    ], GamesScoresListWindowQueryParams.prototype, "returnTopIfAbsent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeSpan" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "timeSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GamesScoresListWindowQueryParams.prototype, "uploadProtocol", void 0);
    return GamesScoresListWindowQueryParams;
}(SpeakeasyBase));
export { GamesScoresListWindowQueryParams };
var GamesScoresListWindowSecurity = /** @class */ (function (_super) {
    __extends(GamesScoresListWindowSecurity, _super);
    function GamesScoresListWindowSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GamesScoresListWindowSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GamesScoresListWindowSecurity.prototype, "oauth2c", void 0);
    return GamesScoresListWindowSecurity;
}(SpeakeasyBase));
export { GamesScoresListWindowSecurity };
var GamesScoresListWindowRequest = /** @class */ (function (_super) {
    __extends(GamesScoresListWindowRequest, _super);
    function GamesScoresListWindowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresListWindowPathParams)
    ], GamesScoresListWindowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresListWindowQueryParams)
    ], GamesScoresListWindowRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GamesScoresListWindowSecurity)
    ], GamesScoresListWindowRequest.prototype, "security", void 0);
    return GamesScoresListWindowRequest;
}(SpeakeasyBase));
export { GamesScoresListWindowRequest };
var GamesScoresListWindowResponse = /** @class */ (function (_super) {
    __extends(GamesScoresListWindowResponse, _super);
    function GamesScoresListWindowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GamesScoresListWindowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaderboardScores)
    ], GamesScoresListWindowResponse.prototype, "leaderboardScores", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GamesScoresListWindowResponse.prototype, "statusCode", void 0);
    return GamesScoresListWindowResponse;
}(SpeakeasyBase));
export { GamesScoresListWindowResponse };
