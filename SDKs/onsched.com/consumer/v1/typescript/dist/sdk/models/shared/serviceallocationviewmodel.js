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
import { RepeatViewModel } from "./repeatviewmodel";
var ServiceAllocationViewModel = /** @class */ (function (_super) {
    __extends(ServiceAllocationViewModel, _super);
    function ServiceAllocationViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingCount" }),
        __metadata("design:type", Number)
    ], ServiceAllocationViewModel.prototype, "bookingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingLimit" }),
        __metadata("design:type", Number)
    ], ServiceAllocationViewModel.prototype, "bookingLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endDate" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Number)
    ], ServiceAllocationViewModel.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "objectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeat" }),
        __metadata("design:type", RepeatViewModel)
    ], ServiceAllocationViewModel.prototype, "repeat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeats" }),
        __metadata("design:type", Boolean)
    ], ServiceAllocationViewModel.prototype, "repeats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceDescription" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "resourceDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceImageUrl" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "resourceImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDescription" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "serviceDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDuration" }),
        __metadata("design:type", Number)
    ], ServiceAllocationViewModel.prototype, "serviceDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceId" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceImageUrl" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "serviceImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Number)
    ], ServiceAllocationViewModel.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneName" }),
        __metadata("design:type", String)
    ], ServiceAllocationViewModel.prototype, "timezoneName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneOffset" }),
        __metadata("design:type", Number)
    ], ServiceAllocationViewModel.prototype, "timezoneOffset", void 0);
    return ServiceAllocationViewModel;
}(SpeakeasyBase));
export { ServiceAllocationViewModel };
