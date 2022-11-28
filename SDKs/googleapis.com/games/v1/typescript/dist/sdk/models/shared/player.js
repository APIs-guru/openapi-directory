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
import { PlayerExperienceInfo } from "./playerexperienceinfo";
import { ProfileSettings } from "./profilesettings";
export var PlayerFriendStatusEnum;
(function (PlayerFriendStatusEnum) {
    PlayerFriendStatusEnum["FriendStatusUnspecified"] = "FRIEND_STATUS_UNSPECIFIED";
    PlayerFriendStatusEnum["NoRelationship"] = "NO_RELATIONSHIP";
    PlayerFriendStatusEnum["Friend"] = "FRIEND";
})(PlayerFriendStatusEnum || (PlayerFriendStatusEnum = {}));
// PlayerName
/**
 * A representation of the individual components of the name.
**/
var PlayerName = /** @class */ (function (_super) {
    __extends(PlayerName, _super);
    function PlayerName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], PlayerName.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], PlayerName.prototype, "givenName", void 0);
    return PlayerName;
}(SpeakeasyBase));
export { PlayerName };
// Player
/**
 * A Player resource.
**/
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatarImageUrl" }),
        __metadata("design:type", String)
    ], Player.prototype, "avatarImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerUrlLandscape" }),
        __metadata("design:type", String)
    ], Player.prototype, "bannerUrlLandscape", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bannerUrlPortrait" }),
        __metadata("design:type", String)
    ], Player.prototype, "bannerUrlPortrait", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Player.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experienceInfo" }),
        __metadata("design:type", PlayerExperienceInfo)
    ], Player.prototype, "experienceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendStatus" }),
        __metadata("design:type", String)
    ], Player.prototype, "friendStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gamePlayerId" }),
        __metadata("design:type", String)
    ], Player.prototype, "gamePlayerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Player.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", PlayerName)
    ], Player.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalPlayerId" }),
        __metadata("design:type", String)
    ], Player.prototype, "originalPlayerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playerId" }),
        __metadata("design:type", String)
    ], Player.prototype, "playerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileSettings" }),
        __metadata("design:type", ProfileSettings)
    ], Player.prototype, "profileSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Player.prototype, "title", void 0);
    return Player;
}(SpeakeasyBase));
export { Player };
