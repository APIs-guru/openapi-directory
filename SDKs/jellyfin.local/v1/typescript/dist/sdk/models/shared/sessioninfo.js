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
import { SessionUserInfo } from "./sessionuserinfo";
import { ClientCapabilities } from "./clientcapabilities";
import { BaseItem } from "./baseitem";
import { BaseItemDto } from "./baseitemdto";
import { QueueItem } from "./queueitem";
import { PlayerStateInfo } from "./playerstateinfo";
import { TranscodingInfo } from "./transcodinginfo";
// SessionInfo
/**
 * Class SessionInfo.
**/
var SessionInfo = /** @class */ (function (_super) {
    __extends(SessionInfo, _super);
    function SessionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalUsers", elemType: SessionUserInfo }),
        __metadata("design:type", Array)
    ], SessionInfo.prototype, "additionalUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationVersion" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "applicationVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Capabilities" }),
        __metadata("design:type", ClientCapabilities)
    ], SessionInfo.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Client" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceId" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceName" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "deviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceType" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullNowPlayingItem" }),
        __metadata("design:type", BaseItem)
    ], SessionInfo.prototype, "fullNowPlayingItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasCustomDeviceName" }),
        __metadata("design:type", Boolean)
    ], SessionInfo.prototype, "hasCustomDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsActive" }),
        __metadata("design:type", Boolean)
    ], SessionInfo.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastActivityDate" }),
        __metadata("design:type", Date)
    ], SessionInfo.prototype, "lastActivityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastPlaybackCheckIn" }),
        __metadata("design:type", Date)
    ], SessionInfo.prototype, "lastPlaybackCheckIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NowPlayingItem" }),
        __metadata("design:type", BaseItemDto)
    ], SessionInfo.prototype, "nowPlayingItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NowPlayingQueue", elemType: QueueItem }),
        __metadata("design:type", Array)
    ], SessionInfo.prototype, "nowPlayingQueue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NowViewingItem" }),
        __metadata("design:type", BaseItemDto)
    ], SessionInfo.prototype, "nowViewingItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayState" }),
        __metadata("design:type", PlayerStateInfo)
    ], SessionInfo.prototype, "playState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlayableMediaTypes" }),
        __metadata("design:type", Array)
    ], SessionInfo.prototype, "playableMediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlaylistItemId" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "playlistItemId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteEndPoint" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "remoteEndPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerId" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "serverId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportedCommands" }),
        __metadata("design:type", Array)
    ], SessionInfo.prototype, "supportedCommands", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsMediaControl" }),
        __metadata("design:type", Boolean)
    ], SessionInfo.prototype, "supportsMediaControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupportsRemoteControl" }),
        __metadata("design:type", Boolean)
    ], SessionInfo.prototype, "supportsRemoteControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TranscodingInfo" }),
        __metadata("design:type", TranscodingInfo)
    ], SessionInfo.prototype, "transcodingInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserName" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserPrimaryImageTag" }),
        __metadata("design:type", String)
    ], SessionInfo.prototype, "userPrimaryImageTag", void 0);
    return SessionInfo;
}(SpeakeasyBase));
export { SessionInfo };
