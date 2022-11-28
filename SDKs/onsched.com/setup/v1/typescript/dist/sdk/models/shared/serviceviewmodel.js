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
var ServiceViewModel = /** @class */ (function (_super) {
    __extends(ServiceViewModel, _super);
    function ServiceViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookAheadUnit" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "bookAheadUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookAheadValue" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "bookAheadValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookInAdvance" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "bookInAdvance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingInterval" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "bookingInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingLimit" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "bookingLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendarId" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendarResourceGroupId" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "calendarResourceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationFeeAmount" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "cancellationFeeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cancellationFeeTaxable" }),
        __metadata("design:type", Boolean)
    ], ServiceViewModel.prototype, "cancellationFeeTaxable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyId" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consumerPadding" }),
        __metadata("design:type", Boolean)
    ], ServiceViewModel.prototype, "consumerPadding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyBookingLimitCount" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "dailyBookingLimitCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyBookingLimitMinutes" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "dailyBookingLimitMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultService" }),
        __metadata("design:type", Boolean)
    ], ServiceViewModel.prototype, "defaultService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationInterval" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "durationInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationMax" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "durationMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationMin" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "durationMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationSelect" }),
        __metadata("design:type", Boolean)
    ], ServiceViewModel.prototype, "durationSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeAmount" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeTaxable" }),
        __metadata("design:type", Boolean)
    ], ServiceViewModel.prototype, "feeTaxable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUrl" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxBookingLimit" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "maxBookingLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxCapacity" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxGroupSize" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "maxGroupSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxResourceBookingLimit" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "maxResourceBookingLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaPageUrl" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "mediaPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonRefundable" }),
        __metadata("design:type", Boolean)
    ], ServiceViewModel.prototype, "nonRefundable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "objectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=padding" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "padding", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roundRobin" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "roundRobin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceGroupId" }),
        __metadata("design:type", Number)
    ], ServiceViewModel.prototype, "serviceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceGroupName" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "serviceGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=showOnline" }),
        __metadata("design:type", Boolean)
    ], ServiceViewModel.prototype, "showOnline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ServiceViewModel.prototype, "type", void 0);
    return ServiceViewModel;
}(SpeakeasyBase));
export { ServiceViewModel };
