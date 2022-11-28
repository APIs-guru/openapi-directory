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
import { AddressInputModel } from "./addressinputmodel";
import { BusinessHoursInputModel } from "./businesshoursinputmodel";
import { BusinessDefaultsInputModel } from "./businessdefaultsinputmodel";
import { OnlineSettingsInputModel } from "./onlinesettingsinputmodel";
var LocationInputModel = /** @class */ (function (_super) {
    __extends(LocationInputModel, _super);
    function LocationInputModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", AddressInputModel)
    ], LocationInputModel.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminEmail" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "adminEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminName" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "adminName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessHours" }),
        __metadata("design:type", BusinessHoursInputModel)
    ], LocationInputModel.prototype, "businessHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaults" }),
        __metadata("design:type", BusinessDefaultsInputModel)
    ], LocationInputModel.prototype, "defaults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyId" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "friendlyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxCapacity" }),
        __metadata("design:type", Number)
    ], LocationInputModel.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxGroupSize" }),
        __metadata("design:type", Number)
    ], LocationInputModel.prototype, "maxGroupSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionId" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", OnlineSettingsInputModel)
    ], LocationInputModel.prototype, "settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneName" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "timezoneName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], LocationInputModel.prototype, "website", void 0);
    return LocationInputModel;
}(SpeakeasyBase));
export { LocationInputModel };
