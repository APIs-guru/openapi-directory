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
export var LiveBroadcastStatusLifeCycleStatusEnum;
(function (LiveBroadcastStatusLifeCycleStatusEnum) {
    LiveBroadcastStatusLifeCycleStatusEnum["LifeCycleStatusUnspecified"] = "lifeCycleStatusUnspecified";
    LiveBroadcastStatusLifeCycleStatusEnum["Created"] = "created";
    LiveBroadcastStatusLifeCycleStatusEnum["Ready"] = "ready";
    LiveBroadcastStatusLifeCycleStatusEnum["Testing"] = "testing";
    LiveBroadcastStatusLifeCycleStatusEnum["Live"] = "live";
    LiveBroadcastStatusLifeCycleStatusEnum["Complete"] = "complete";
    LiveBroadcastStatusLifeCycleStatusEnum["Revoked"] = "revoked";
    LiveBroadcastStatusLifeCycleStatusEnum["TestStarting"] = "testStarting";
    LiveBroadcastStatusLifeCycleStatusEnum["LiveStarting"] = "liveStarting";
})(LiveBroadcastStatusLifeCycleStatusEnum || (LiveBroadcastStatusLifeCycleStatusEnum = {}));
export var LiveBroadcastStatusLiveBroadcastPriorityEnum;
(function (LiveBroadcastStatusLiveBroadcastPriorityEnum) {
    LiveBroadcastStatusLiveBroadcastPriorityEnum["LiveBroadcastPriorityUnspecified"] = "liveBroadcastPriorityUnspecified";
    LiveBroadcastStatusLiveBroadcastPriorityEnum["Low"] = "low";
    LiveBroadcastStatusLiveBroadcastPriorityEnum["Normal"] = "normal";
    LiveBroadcastStatusLiveBroadcastPriorityEnum["High"] = "high";
})(LiveBroadcastStatusLiveBroadcastPriorityEnum || (LiveBroadcastStatusLiveBroadcastPriorityEnum = {}));
export var LiveBroadcastStatusPrivacyStatusEnum;
(function (LiveBroadcastStatusPrivacyStatusEnum) {
    LiveBroadcastStatusPrivacyStatusEnum["Public"] = "public";
    LiveBroadcastStatusPrivacyStatusEnum["Unlisted"] = "unlisted";
    LiveBroadcastStatusPrivacyStatusEnum["Private"] = "private";
})(LiveBroadcastStatusPrivacyStatusEnum || (LiveBroadcastStatusPrivacyStatusEnum = {}));
export var LiveBroadcastStatusRecordingStatusEnum;
(function (LiveBroadcastStatusRecordingStatusEnum) {
    LiveBroadcastStatusRecordingStatusEnum["LiveBroadcastRecordingStatusUnspecified"] = "liveBroadcastRecordingStatusUnspecified";
    LiveBroadcastStatusRecordingStatusEnum["NotRecording"] = "notRecording";
    LiveBroadcastStatusRecordingStatusEnum["Recording"] = "recording";
    LiveBroadcastStatusRecordingStatusEnum["Recorded"] = "recorded";
})(LiveBroadcastStatusRecordingStatusEnum || (LiveBroadcastStatusRecordingStatusEnum = {}));
// LiveBroadcastStatus
/**
 * Live broadcast state.
**/
var LiveBroadcastStatus = /** @class */ (function (_super) {
    __extends(LiveBroadcastStatus, _super);
    function LiveBroadcastStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifeCycleStatus" }),
        __metadata("design:type", String)
    ], LiveBroadcastStatus.prototype, "lifeCycleStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveBroadcastPriority" }),
        __metadata("design:type", String)
    ], LiveBroadcastStatus.prototype, "liveBroadcastPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=madeForKids" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastStatus.prototype, "madeForKids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacyStatus" }),
        __metadata("design:type", String)
    ], LiveBroadcastStatus.prototype, "privacyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordingStatus" }),
        __metadata("design:type", String)
    ], LiveBroadcastStatus.prototype, "recordingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfDeclaredMadeForKids" }),
        __metadata("design:type", Boolean)
    ], LiveBroadcastStatus.prototype, "selfDeclaredMadeForKids", void 0);
    return LiveBroadcastStatus;
}(SpeakeasyBase));
export { LiveBroadcastStatus };
