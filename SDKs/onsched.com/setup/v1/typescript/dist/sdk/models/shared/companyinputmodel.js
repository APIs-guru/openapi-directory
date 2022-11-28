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
var CompanyInputModel = /** @class */ (function (_super) {
    __extends(CompanyInputModel, _super);
    function CompanyInputModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine1" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "addressLine1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addressLine2" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "addressLine2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingWebhookUrl" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "bookingWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerWebhookUrl" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "customerWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableEmailAndSmsNotifications" }),
        __metadata("design:type", Boolean)
    ], CompanyInputModel.prototype, "disableEmailAndSmsNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationFromEmailAddress" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "notificationFromEmailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationFromName" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "notificationFromName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postalCode" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationEmail" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "registrationEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reminderWebhookUrl" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "reminderWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceWebhookUrl" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "resourceWebhookUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneName" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "timezoneName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookSignatureHash" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "webhookSignatureHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], CompanyInputModel.prototype, "website", void 0);
    return CompanyInputModel;
}(SpeakeasyBase));
export { CompanyInputModel };
