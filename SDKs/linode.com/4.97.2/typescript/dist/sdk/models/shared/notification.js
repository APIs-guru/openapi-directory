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
// NotificationEntity
/**
 * Detailed information about the Notification.
**/
var NotificationEntity = /** @class */ (function (_super) {
    __extends(NotificationEntity, _super);
    function NotificationEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], NotificationEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], NotificationEntity.prototype, "url", void 0);
    return NotificationEntity;
}(SpeakeasyBase));
export { NotificationEntity };
export var NotificationSeverityEnum;
(function (NotificationSeverityEnum) {
    NotificationSeverityEnum["Minor"] = "minor";
    NotificationSeverityEnum["Major"] = "major";
    NotificationSeverityEnum["Critical"] = "critical";
})(NotificationSeverityEnum || (NotificationSeverityEnum = {}));
export var NotificationTypeEnum;
(function (NotificationTypeEnum) {
    NotificationTypeEnum["MigrationScheduled"] = "migration_scheduled";
    NotificationTypeEnum["MigrationImminent"] = "migration_imminent";
    NotificationTypeEnum["MigrationPending"] = "migration_pending";
    NotificationTypeEnum["RebootScheduled"] = "reboot_scheduled";
    NotificationTypeEnum["Outage"] = "outage";
    NotificationTypeEnum["PaymentDue"] = "payment_due";
    NotificationTypeEnum["TicketImportant"] = "ticket_important";
    NotificationTypeEnum["TicketAbuse"] = "ticket_abuse";
    NotificationTypeEnum["Notice"] = "notice";
    NotificationTypeEnum["Maintenance"] = "maintenance";
    NotificationTypeEnum["Promotion"] = "promotion";
})(NotificationTypeEnum || (NotificationTypeEnum = {}));
// Notification
/**
 * An important, often time-sensitive item related to your Account.
 *
**/
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
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", NotificationEntity)
    ], Notification.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Notification.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Notification.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Notification.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Notification.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=until" }),
        __metadata("design:type", Date)
    ], Notification.prototype, "until", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=when" }),
        __metadata("design:type", Date)
    ], Notification.prototype, "when", void 0);
    return Notification;
}(SpeakeasyBase));
export { Notification };
