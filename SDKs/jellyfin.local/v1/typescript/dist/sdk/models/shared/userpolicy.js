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
import { AccessSchedule } from "./accessschedule";
import { SyncPlayUserAccessTypeEnum } from "./syncplayuseraccesstypeenum";
import { AccessScheduleInput } from "./accessschedule";
var UserPolicy = /** @class */ (function (_super) {
    __extends(UserPolicy, _super);
    function UserPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessSchedules", elemType: AccessSchedule }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "accessSchedules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthenticationProviderId" }),
        __metadata("design:type", String)
    ], UserPolicy.prototype, "authenticationProviderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockUnratedItems" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "blockUnratedItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockedChannels" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "blockedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockedMediaFolders" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "blockedMediaFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockedTags" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "blockedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAllChannels" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableAllChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAllDevices" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableAllDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAllFolders" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableAllFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAudioPlaybackTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableAudioPlaybackTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableContentDeletion" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableContentDeletion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableContentDeletionFromFolders" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "enableContentDeletionFromFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableContentDownloading" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableContentDownloading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableLiveTvAccess" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableLiveTvAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableLiveTvManagement" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableLiveTvManagement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMediaConversion" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableMediaConversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMediaPlayback" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableMediaPlayback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePlaybackRemuxing" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enablePlaybackRemuxing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePublicSharing" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enablePublicSharing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableRemoteAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRemoteControlOfOtherUsers" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableRemoteControlOfOtherUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSharedDeviceControl" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableSharedDeviceControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSyncTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableSyncTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableUserPreferenceAccess" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableUserPreferenceAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableVideoPlaybackTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "enableVideoPlaybackTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledChannels" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "enabledChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledDevices" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "enabledDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledFolders" }),
        __metadata("design:type", Array)
    ], UserPolicy.prototype, "enabledFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForceRemoteSourceTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "forceRemoteSourceTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvalidLoginAttemptCount" }),
        __metadata("design:type", Number)
    ], UserPolicy.prototype, "invalidLoginAttemptCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAdministrator" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "isAdministrator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsDisabled" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "isDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsHidden" }),
        __metadata("design:type", Boolean)
    ], UserPolicy.prototype, "isHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoginAttemptsBeforeLockout" }),
        __metadata("design:type", Number)
    ], UserPolicy.prototype, "loginAttemptsBeforeLockout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxActiveSessions" }),
        __metadata("design:type", Number)
    ], UserPolicy.prototype, "maxActiveSessions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxParentalRating" }),
        __metadata("design:type", Number)
    ], UserPolicy.prototype, "maxParentalRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PasswordResetProviderId" }),
        __metadata("design:type", String)
    ], UserPolicy.prototype, "passwordResetProviderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" }),
        __metadata("design:type", Number)
    ], UserPolicy.prototype, "remoteClientBitrateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SyncPlayAccess" }),
        __metadata("design:type", String)
    ], UserPolicy.prototype, "syncPlayAccess", void 0);
    return UserPolicy;
}(SpeakeasyBase));
export { UserPolicy };
var UserPolicyInput = /** @class */ (function (_super) {
    __extends(UserPolicyInput, _super);
    function UserPolicyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessSchedules", elemType: AccessScheduleInput }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "accessSchedules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthenticationProviderId" }),
        __metadata("design:type", String)
    ], UserPolicyInput.prototype, "authenticationProviderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockUnratedItems" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "blockUnratedItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockedChannels" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "blockedChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockedMediaFolders" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "blockedMediaFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockedTags" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "blockedTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAllChannels" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableAllChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAllDevices" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableAllDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAllFolders" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableAllFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableAudioPlaybackTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableAudioPlaybackTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableContentDeletion" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableContentDeletion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableContentDeletionFromFolders" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "enableContentDeletionFromFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableContentDownloading" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableContentDownloading", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableLiveTvAccess" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableLiveTvAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableLiveTvManagement" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableLiveTvManagement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMediaConversion" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableMediaConversion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableMediaPlayback" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableMediaPlayback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePlaybackRemuxing" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enablePlaybackRemuxing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePublicSharing" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enablePublicSharing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRemoteAccess" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableRemoteAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableRemoteControlOfOtherUsers" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableRemoteControlOfOtherUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSharedDeviceControl" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableSharedDeviceControl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableSyncTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableSyncTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableUserPreferenceAccess" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableUserPreferenceAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableVideoPlaybackTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "enableVideoPlaybackTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledChannels" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "enabledChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledDevices" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "enabledDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnabledFolders" }),
        __metadata("design:type", Array)
    ], UserPolicyInput.prototype, "enabledFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForceRemoteSourceTranscoding" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "forceRemoteSourceTranscoding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvalidLoginAttemptCount" }),
        __metadata("design:type", Number)
    ], UserPolicyInput.prototype, "invalidLoginAttemptCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAdministrator" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "isAdministrator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsDisabled" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "isDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsHidden" }),
        __metadata("design:type", Boolean)
    ], UserPolicyInput.prototype, "isHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoginAttemptsBeforeLockout" }),
        __metadata("design:type", Number)
    ], UserPolicyInput.prototype, "loginAttemptsBeforeLockout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxActiveSessions" }),
        __metadata("design:type", Number)
    ], UserPolicyInput.prototype, "maxActiveSessions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxParentalRating" }),
        __metadata("design:type", Number)
    ], UserPolicyInput.prototype, "maxParentalRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PasswordResetProviderId" }),
        __metadata("design:type", String)
    ], UserPolicyInput.prototype, "passwordResetProviderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemoteClientBitrateLimit" }),
        __metadata("design:type", Number)
    ], UserPolicyInput.prototype, "remoteClientBitrateLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SyncPlayAccess" }),
        __metadata("design:type", String)
    ], UserPolicyInput.prototype, "syncPlayAccess", void 0);
    return UserPolicyInput;
}(SpeakeasyBase));
export { UserPolicyInput };
