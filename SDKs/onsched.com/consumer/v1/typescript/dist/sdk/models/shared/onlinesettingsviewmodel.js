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
var OnlineSettingsViewModel = /** @class */ (function (_super) {
    __extends(OnlineSettingsViewModel, _super);
    function OnlineSettingsViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityForm" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "availabilityForm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookAheadUnit" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "bookAheadUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookAheadValue" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "bookAheadValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookInAdvance" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "bookInAdvance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookWithAccount" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "bookWithAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingConfirmationMessage" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "bookingConfirmationMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingMessage" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "bookingMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingPolicy" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "bookingPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingTimerMins" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "bookingTimerMins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessId" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "businessId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyId" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerBookingsPerDay" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "customerBookingsPerDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerVerification" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "customerVerification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultService" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "defaultService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultToCustomerTimezone" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "defaultToCustomerTimezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableAuthorization" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "disableAuthorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableWorldTimezones" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "enableWorldTimezones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyMembersEnabled" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "familyMembersEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAvailable" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "firstAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formFlow" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "formFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideBreadCrumbNav" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "hideBreadCrumbNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideContinueBooking" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "hideContinueBooking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideLocationNav" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "hideLocationNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideNavBar" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "hideNavBar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideServiceGroupsNav" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "hideServiceGroupsNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hideServicesNav" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "hideServicesNav", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lateCancelAction" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "lateCancelAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lateCancelHours" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "lateCancelHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lateRescheduleAction" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "lateRescheduleAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lateRescheduleHours" }),
        __metadata("design:type", Number)
    ], OnlineSettingsViewModel.prototype, "lateRescheduleHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveMode" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "liveMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "objectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceAnyLabel" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "resourceAnyLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceLabel" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "resourceLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSelection" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "resourceSelection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnToAvailability" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "returnToAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnToService" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "returnToService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceLabel" }),
        __metadata("design:type", String)
    ], OnlineSettingsViewModel.prototype, "serviceLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showBusinessLogo" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "showBusinessLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showOnSchedLogo" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "showOnSchedLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showServiceGroups" }),
        __metadata("design:type", Boolean)
    ], OnlineSettingsViewModel.prototype, "showServiceGroups", void 0);
    return OnlineSettingsViewModel;
}(SpeakeasyBase));
export { OnlineSettingsViewModel };
