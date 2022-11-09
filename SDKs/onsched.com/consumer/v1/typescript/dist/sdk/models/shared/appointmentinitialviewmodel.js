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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AppointmentInitialViewModel = /** @class */ (function (_super) {
    __extends(AppointmentInitialViewModel, _super);
    function AppointmentInitialViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=auditTrail", elemType: shared.AppointmentAuditViewModel }),
        __metadata("design:type", Array)
    ], AppointmentInitialViewModel.prototype, "auditTrail", void 0);
    __decorate([
        Metadata({ data: "json, name=bookedBy" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "bookedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=businessName" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "businessName", void 0);
    __decorate([
        Metadata({ data: "json, name=calendarId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "calendarId", void 0);
    __decorate([
        Metadata({ data: "json, name=confirmationNumber" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "confirmationNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=confirmed" }),
        __metadata("design:type", Boolean)
    ], AppointmentInitialViewModel.prototype, "confirmed", void 0);
    __decorate([
        Metadata({ data: "json, name=createDate" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "createDate", void 0);
    __decorate([
        Metadata({ data: "json, name=customFields", elemType: shared.CustomFieldViewModel }),
        __metadata("design:type", Map)
    ], AppointmentInitialViewModel.prototype, "customFields", void 0);
    __decorate([
        Metadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "json, name=customerMessage" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "customerMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=customers", elemType: shared.AppointmentCustomerViewModel }),
        __metadata("design:type", Array)
    ], AppointmentInitialViewModel.prototype, "customers", void 0);
    __decorate([
        Metadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "json, name=dateInternational" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "dateInternational", void 0);
    __decorate([
        Metadata({ data: "json, name=downloadIcsUrl" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "downloadIcsUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], AppointmentInitialViewModel.prototype, "duration", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=emailConfirmationSent" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "emailConfirmationSent", void 0);
    __decorate([
        Metadata({ data: "json, name=emailReminderSent" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "emailReminderSent", void 0);
    __decorate([
        Metadata({ data: "json, name=endDateTime" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "endDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=firstname" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "firstname", void 0);
    __decorate([
        Metadata({ data: "json, name=groupSize" }),
        __metadata("design:type", Number)
    ], AppointmentInitialViewModel.prototype, "groupSize", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "ipAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=lastModifiedBy" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "lastModifiedBy", void 0);
    __decorate([
        Metadata({ data: "json, name=lastModifiedOn" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "lastModifiedOn", void 0);
    __decorate([
        Metadata({ data: "json, name=lastname" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "lastname", void 0);
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "location", void 0);
    __decorate([
        Metadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "longitude", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "notes", void 0);
    __decorate([
        Metadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "objectName", void 0);
    __decorate([
        Metadata({ data: "json, name=onlineBooking" }),
        __metadata("design:type", Boolean)
    ], AppointmentInitialViewModel.prototype, "onlineBooking", void 0);
    __decorate([
        Metadata({ data: "json, name=paymentStatus" }),
        __metadata("design:type", Number)
    ], AppointmentInitialViewModel.prototype, "paymentStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "phone", void 0);
    __decorate([
        Metadata({ data: "json, name=phoneExt" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "phoneExt", void 0);
    __decorate([
        Metadata({ data: "json, name=phoneType" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "phoneType", void 0);
    __decorate([
        Metadata({ data: "json, name=rescheduledId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "rescheduledId", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceGroupId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "resourceGroupId", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceGroupName" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "resourceGroupName", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "resourceId", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceImageUrl" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "resourceImageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "resourceName", void 0);
    __decorate([
        Metadata({ data: "json, name=resources", elemType: shared.AppointmentResourceViewModel }),
        __metadata("design:type", Array)
    ], AppointmentInitialViewModel.prototype, "resources", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceAllocationId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "serviceAllocationId", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceImageUrl" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "serviceImageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "serviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=smsConfirmationSent" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "smsConfirmationSent", void 0);
    __decorate([
        Metadata({ data: "json, name=smsReminderSent" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "smsReminderSent", void 0);
    __decorate([
        Metadata({ data: "json, name=startDateTime" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "startDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=stripeChargeId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "stripeChargeId", void 0);
    __decorate([
        Metadata({ data: "json, name=stripeRefundId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "stripeRefundId", void 0);
    __decorate([
        Metadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], AppointmentInitialViewModel.prototype, "time", void 0);
    __decorate([
        Metadata({ data: "json, name=timezone" }),
        __metadata("design:type", Number)
    ], AppointmentInitialViewModel.prototype, "timezone", void 0);
    __decorate([
        Metadata({ data: "json, name=timezoneIana" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "timezoneIana", void 0);
    __decorate([
        Metadata({ data: "json, name=timezoneId" }),
        __metadata("design:type", String)
    ], AppointmentInitialViewModel.prototype, "timezoneId", void 0);
    return AppointmentInitialViewModel;
}(SpeakeasyBase));
export { AppointmentInitialViewModel };
