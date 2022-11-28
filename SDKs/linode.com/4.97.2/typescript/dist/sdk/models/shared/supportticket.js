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
// SupportTicketEntity
/**
 * The entity this Ticket was opened for.
 *
**/
var SupportTicketEntity = /** @class */ (function (_super) {
    __extends(SupportTicketEntity, _super);
    function SupportTicketEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SupportTicketEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], SupportTicketEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SupportTicketEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SupportTicketEntity.prototype, "url", void 0);
    return SupportTicketEntity;
}(SpeakeasyBase));
export { SupportTicketEntity };
export var SupportTicketStatusEnum;
(function (SupportTicketStatusEnum) {
    SupportTicketStatusEnum["Closed"] = "closed";
    SupportTicketStatusEnum["New"] = "new";
    SupportTicketStatusEnum["Open"] = "open";
})(SupportTicketStatusEnum || (SupportTicketStatusEnum = {}));
// SupportTicket
/**
 * A Support Ticket opened on your Account.
 *
**/
var SupportTicket = /** @class */ (function (_super) {
    __extends(SupportTicket, _super);
    function SupportTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments" }),
        __metadata("design:type", Array)
    ], SupportTicket.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closable" }),
        __metadata("design:type", Boolean)
    ], SupportTicket.prototype, "closable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=closed" }),
        __metadata("design:type", Date)
    ], SupportTicket.prototype, "closed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SupportTicket.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", SupportTicketEntity)
    ], SupportTicket.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], SupportTicket.prototype, "gravatarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SupportTicket.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opened" }),
        __metadata("design:type", Date)
    ], SupportTicket.prototype, "opened", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opened_by" }),
        __metadata("design:type", String)
    ], SupportTicket.prototype, "openedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SupportTicket.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], SupportTicket.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], SupportTicket.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], SupportTicket.prototype, "updatedBy", void 0);
    return SupportTicket;
}(SpeakeasyBase));
export { SupportTicket };
