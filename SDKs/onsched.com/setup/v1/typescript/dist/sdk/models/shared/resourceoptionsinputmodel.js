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
// ResourceOptionsInputModel
/**
 * Options for the new resource
**/
var ResourceOptionsInputModel = /** @class */ (function (_super) {
    __extends(ResourceOptionsInputModel, _super);
    function ResourceOptionsInputModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bioLink" }),
        __metadata("design:type", String)
    ], ResourceOptionsInputModel.prototype, "bioLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingNotification" }),
        __metadata("design:type", Number)
    ], ResourceOptionsInputModel.prototype, "bookingNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendarAvailability" }),
        __metadata("design:type", Number)
    ], ResourceOptionsInputModel.prototype, "calendarAvailability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayColor" }),
        __metadata("design:type", String)
    ], ResourceOptionsInputModel.prototype, "displayColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveDate" }),
        __metadata("design:type", Date)
    ], ResourceOptionsInputModel.prototype, "effectiveDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], ResourceOptionsInputModel.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleCalendarId" }),
        __metadata("design:type", String)
    ], ResourceOptionsInputModel.prototype, "googleCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hourly" }),
        __metadata("design:type", Number)
    ], ResourceOptionsInputModel.prototype, "hourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreBusinessHours" }),
        __metadata("design:type", Boolean)
    ], ResourceOptionsInputModel.prototype, "ignoreBusinessHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationType" }),
        __metadata("design:type", Number)
    ], ResourceOptionsInputModel.prototype, "notificationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outlookCalendarId" }),
        __metadata("design:type", String)
    ], ResourceOptionsInputModel.prototype, "outlookCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortKey" }),
        __metadata("design:type", Number)
    ], ResourceOptionsInputModel.prototype, "sortKey", void 0);
    return ResourceOptionsInputModel;
}(SpeakeasyBase));
export { ResourceOptionsInputModel };
