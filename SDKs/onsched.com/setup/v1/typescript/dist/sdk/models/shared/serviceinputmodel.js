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
import { ServiceFeesInputModel } from "./servicefeesinputmodel";
import { ServiceOptionsInputModel } from "./serviceoptionsinputmodel";
import { ServiceSettingsInputModel } from "./servicesettingsinputmodel";
var ServiceInputModel = /** @class */ (function (_super) {
    __extends(ServiceInputModel, _super);
    function ServiceInputModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", AvailabilityInputModel)
    ], ServiceInputModel.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingInterval" }),
        __metadata("design:type", Number)
    ], ServiceInputModel.prototype, "bookingInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingLimit" }),
        __metadata("design:type", Number)
    ], ServiceInputModel.prototype, "bookingLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ServiceInputModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], ServiceInputModel.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fees" }),
        __metadata("design:type", ServiceFeesInputModel)
    ], ServiceInputModel.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], ServiceInputModel.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxCapacity" }),
        __metadata("design:type", Number)
    ], ServiceInputModel.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxGroupSize" }),
        __metadata("design:type", Number)
    ], ServiceInputModel.prototype, "maxGroupSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaPageUrl" }),
        __metadata("design:type", String)
    ], ServiceInputModel.prototype, "mediaPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceInputModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options" }),
        __metadata("design:type", ServiceOptionsInputModel)
    ], ServiceInputModel.prototype, "options", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ServiceInputModel.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceGroupId" }),
        __metadata("design:type", String)
    ], ServiceInputModel.prototype, "serviceGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", ServiceSettingsInputModel)
    ], ServiceInputModel.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ServiceInputModel.prototype, "type", void 0);
    return ServiceInputModel;
}(SpeakeasyBase));
export { ServiceInputModel };
