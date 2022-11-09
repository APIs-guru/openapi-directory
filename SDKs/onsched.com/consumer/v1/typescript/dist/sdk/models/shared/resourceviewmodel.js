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
var ResourceViewModel = /** @class */ (function (_super) {
    __extends(ResourceViewModel, _super);
    function ResourceViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bioLink" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "bioLink", void 0);
    __decorate([
        Metadata({ data: "json, name=bookingNotification" }),
        __metadata("design:type", Number)
    ], ResourceViewModel.prototype, "bookingNotification", void 0);
    __decorate([
        Metadata({ data: "json, name=calendarAvailability" }),
        __metadata("design:type", Number)
    ], ResourceViewModel.prototype, "calendarAvailability", void 0);
    __decorate([
        Metadata({ data: "json, name=deletedStatus" }),
        __metadata("design:type", Boolean)
    ], ResourceViewModel.prototype, "deletedStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=deletedTime" }),
        __metadata("design:type", Date)
    ], ResourceViewModel.prototype, "deletedTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", Date)
    ], ResourceViewModel.prototype, "effectiveDate", void 0);
    __decorate([
        Metadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "gender", void 0);
    __decorate([
        Metadata({ data: "json, name=googleCalendarId" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "googleCalendarId", void 0);
    __decorate([
        Metadata({ data: "json, name=groupId" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "groupId", void 0);
    __decorate([
        Metadata({ data: "json, name=hourly" }),
        __metadata("design:type", Number)
    ], ResourceViewModel.prototype, "hourly", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=ignoreBusinessHours" }),
        __metadata("design:type", Boolean)
    ], ResourceViewModel.prototype, "ignoreBusinessHours", void 0);
    __decorate([
        Metadata({ data: "json, name=imageUrl" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "imageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "locationId", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=notificationType" }),
        __metadata("design:type", Number)
    ], ResourceViewModel.prototype, "notificationType", void 0);
    __decorate([
        Metadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "objectName", void 0);
    __decorate([
        Metadata({ data: "json, name=outlookCalendarId" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "outlookCalendarId", void 0);
    __decorate([
        Metadata({ data: "json, name=skypeName" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "skypeName", void 0);
    __decorate([
        Metadata({ data: "json, name=sortKey" }),
        __metadata("design:type", Number)
    ], ResourceViewModel.prototype, "sortKey", void 0);
    __decorate([
        Metadata({ data: "json, name=timezoneIana" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "timezoneIana", void 0);
    __decorate([
        Metadata({ data: "json, name=timezoneId" }),
        __metadata("design:type", String)
    ], ResourceViewModel.prototype, "timezoneId", void 0);
    __decorate([
        Metadata({ data: "json, name=timezoneOffset" }),
        __metadata("design:type", Number)
    ], ResourceViewModel.prototype, "timezoneOffset", void 0);
    return ResourceViewModel;
}(SpeakeasyBase));
export { ResourceViewModel };
