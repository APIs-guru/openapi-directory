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
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], Notification.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crmExperimentIds" }),
        __metadata("design:type", Array)
    ], Notification.prototype, "crmExperimentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doc_id" }),
        __metadata("design:type", String)
    ], Notification.prototype, "docId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=doc_type" }),
        __metadata("design:type", String)
    ], Notification.prototype, "docType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dont_show_notification" }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "dontShowNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconUrl" }),
        __metadata("design:type", String)
    ], Notification.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_document_mature" }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "isDocumentMature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Notification.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationGroup" }),
        __metadata("design:type", String)
    ], Notification.prototype, "notificationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_type" }),
        __metadata("design:type", String)
    ], Notification.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pcampaign_id" }),
        __metadata("design:type", String)
    ], Notification.prototype, "pcampaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], Notification.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_notification_settings_action" }),
        __metadata("design:type", Boolean)
    ], Notification.prototype, "showNotificationSettingsAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetUrl" }),
        __metadata("design:type", String)
    ], Notification.prototype, "targetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeToExpireMs" }),
        __metadata("design:type", String)
    ], Notification.prototype, "timeToExpireMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Notification.prototype, "title", void 0);
    return Notification;
}(SpeakeasyBase));
export { Notification };
