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
import { LightSettings } from "./lightsettings";
export var AndroidNotificationNotificationPriorityEnum;
(function (AndroidNotificationNotificationPriorityEnum) {
    AndroidNotificationNotificationPriorityEnum["PriorityUnspecified"] = "PRIORITY_UNSPECIFIED";
    AndroidNotificationNotificationPriorityEnum["PriorityMin"] = "PRIORITY_MIN";
    AndroidNotificationNotificationPriorityEnum["PriorityLow"] = "PRIORITY_LOW";
    AndroidNotificationNotificationPriorityEnum["PriorityDefault"] = "PRIORITY_DEFAULT";
    AndroidNotificationNotificationPriorityEnum["PriorityHigh"] = "PRIORITY_HIGH";
    AndroidNotificationNotificationPriorityEnum["PriorityMax"] = "PRIORITY_MAX";
})(AndroidNotificationNotificationPriorityEnum || (AndroidNotificationNotificationPriorityEnum = {}));
export var AndroidNotificationVisibilityEnum;
(function (AndroidNotificationVisibilityEnum) {
    AndroidNotificationVisibilityEnum["VisibilityUnspecified"] = "VISIBILITY_UNSPECIFIED";
    AndroidNotificationVisibilityEnum["Private"] = "PRIVATE";
    AndroidNotificationVisibilityEnum["Public"] = "PUBLIC";
    AndroidNotificationVisibilityEnum["Secret"] = "SECRET";
})(AndroidNotificationVisibilityEnum || (AndroidNotificationVisibilityEnum = {}));
// AndroidNotification
/**
 * Notification to send to android devices.
**/
var AndroidNotification = /** @class */ (function (_super) {
    __extends(AndroidNotification, _super);
    function AndroidNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyLocArgs" }),
        __metadata("design:type", Array)
    ], AndroidNotification.prototype, "bodyLocArgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bodyLocKey" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "bodyLocKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bypassProxyNotification" }),
        __metadata("design:type", Boolean)
    ], AndroidNotification.prototype, "bypassProxyNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickAction" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "clickAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLightSettings" }),
        __metadata("design:type", Boolean)
    ], AndroidNotification.prototype, "defaultLightSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSound" }),
        __metadata("design:type", Boolean)
    ], AndroidNotification.prototype, "defaultSound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultVibrateTimings" }),
        __metadata("design:type", Boolean)
    ], AndroidNotification.prototype, "defaultVibrateTimings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lightSettings" }),
        __metadata("design:type", LightSettings)
    ], AndroidNotification.prototype, "lightSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localOnly" }),
        __metadata("design:type", Boolean)
    ], AndroidNotification.prototype, "localOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationCount" }),
        __metadata("design:type", Number)
    ], AndroidNotification.prototype, "notificationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationPriority" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "notificationPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sound" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "sound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky" }),
        __metadata("design:type", Boolean)
    ], AndroidNotification.prototype, "sticky", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticker" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "ticker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=titleLocArgs" }),
        __metadata("design:type", Array)
    ], AndroidNotification.prototype, "titleLocArgs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=titleLocKey" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "titleLocKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vibrateTimings" }),
        __metadata("design:type", Array)
    ], AndroidNotification.prototype, "vibrateTimings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], AndroidNotification.prototype, "visibility", void 0);
    return AndroidNotification;
}(SpeakeasyBase));
export { AndroidNotification };
