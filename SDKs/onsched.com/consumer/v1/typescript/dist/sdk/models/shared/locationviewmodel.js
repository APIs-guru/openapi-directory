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
var LocationViewModel = /** @class */ (function (_super) {
    __extends(LocationViewModel, _super);
    function LocationViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminEmail" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "adminEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminName" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "adminName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyId" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyId" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "friendlyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageUrl" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], LocationViewModel.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], LocationViewModel.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxCapacity" }),
        __metadata("design:type", Number)
    ], LocationViewModel.prototype, "maxCapacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxGroupSize" }),
        __metadata("design:type", Number)
    ], LocationViewModel.prototype, "maxGroupSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "objectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryBusiness" }),
        __metadata("design:type", Boolean)
    ], LocationViewModel.prototype, "primaryBusiness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryCalendarId" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "primaryCalendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionId" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneIana" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "timezoneIana", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneId" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "timezoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezoneOffset" }),
        __metadata("design:type", Number)
    ], LocationViewModel.prototype, "timezoneOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], LocationViewModel.prototype, "website", void 0);
    return LocationViewModel;
}(SpeakeasyBase));
export { LocationViewModel };
