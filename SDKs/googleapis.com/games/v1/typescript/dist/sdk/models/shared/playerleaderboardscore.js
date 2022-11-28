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
import { LeaderboardScoreRank } from "./leaderboardscorerank";
export var PlayerLeaderboardScoreTimeSpanEnum;
(function (PlayerLeaderboardScoreTimeSpanEnum) {
    PlayerLeaderboardScoreTimeSpanEnum["ScoreTimeSpanUnspecified"] = "SCORE_TIME_SPAN_UNSPECIFIED";
    PlayerLeaderboardScoreTimeSpanEnum["AllTime"] = "ALL_TIME";
    PlayerLeaderboardScoreTimeSpanEnum["Weekly"] = "WEEKLY";
    PlayerLeaderboardScoreTimeSpanEnum["Daily"] = "DAILY";
})(PlayerLeaderboardScoreTimeSpanEnum || (PlayerLeaderboardScoreTimeSpanEnum = {}));
// PlayerLeaderboardScore
/**
 * A player leaderboard score object.
**/
var PlayerLeaderboardScore = /** @class */ (function (_super) {
    __extends(PlayerLeaderboardScore, _super);
    function PlayerLeaderboardScore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendsRank" }),
        __metadata("design:type", LeaderboardScoreRank)
    ], PlayerLeaderboardScore.prototype, "friendsRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PlayerLeaderboardScore.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leaderboard_id" }),
        __metadata("design:type", String)
    ], PlayerLeaderboardScore.prototype, "leaderboardId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicRank" }),
        __metadata("design:type", LeaderboardScoreRank)
    ], PlayerLeaderboardScore.prototype, "publicRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoreString" }),
        __metadata("design:type", String)
    ], PlayerLeaderboardScore.prototype, "scoreString", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoreTag" }),
        __metadata("design:type", String)
    ], PlayerLeaderboardScore.prototype, "scoreTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoreValue" }),
        __metadata("design:type", String)
    ], PlayerLeaderboardScore.prototype, "scoreValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socialRank" }),
        __metadata("design:type", LeaderboardScoreRank)
    ], PlayerLeaderboardScore.prototype, "socialRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeSpan" }),
        __metadata("design:type", String)
    ], PlayerLeaderboardScore.prototype, "timeSpan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=writeTimestamp" }),
        __metadata("design:type", String)
    ], PlayerLeaderboardScore.prototype, "writeTimestamp", void 0);
    return PlayerLeaderboardScore;
}(SpeakeasyBase));
export { PlayerLeaderboardScore };
