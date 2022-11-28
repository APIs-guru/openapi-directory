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
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ServiceFeesUpdateModel } from "./servicefeesupdatemodel";
import { ServiceOptionsUpdateModel } from "./serviceoptionsupdatemodel";
import { ServiceSettingsUpdateModel } from "./servicesettingsupdatemodel";
var ServiceUpdateModel = /** @class */ (function (_super) {
    __extends(ServiceUpdateModel, _super);
    function ServiceUpdateModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", AvailabilityInputModel)
    ], ServiceUpdateModel.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingInterval" }),
        __metadata("design:type", Number)
    ], ServiceUpdateModel.prototype, "bookingInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingLimit" }),
        __metadata("design:type", Number)
    ], ServiceUpdateModel.prototype, "bookingLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ServiceUpdateModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ServiceUpdateModel.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fees" }),
        __metadata("design:type", ServiceFeesUpdateModel)
    ], ServiceUpdateModel.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], ServiceUpdateModel.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxCapacity" }),
        __metadata("design:type", Number)
    ], ServiceUpdateModel.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxGroupSize" }),
        __metadata("design:type", Number)
    ], ServiceUpdateModel.prototype, "maxGroupSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaPageUrl" }),
        __metadata("design:type", String)
    ], ServiceUpdateModel.prototype, "mediaPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceUpdateModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", ServiceOptionsUpdateModel)
    ], ServiceUpdateModel.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ServiceUpdateModel.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceGroupId" }),
        __metadata("design:type", String)
    ], ServiceUpdateModel.prototype, "serviceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", ServiceSettingsUpdateModel)
    ], ServiceUpdateModel.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ServiceUpdateModel.prototype, "type", void 0);
    return ServiceUpdateModel;
}(SpeakeasyBase));
export { ServiceUpdateModel };
