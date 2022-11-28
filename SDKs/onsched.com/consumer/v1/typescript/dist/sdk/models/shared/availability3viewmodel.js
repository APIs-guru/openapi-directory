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
var Availability3ViewModel = /** @class */ (function (_super) {
    __extends(Availability3ViewModel, _super);
    function Availability3ViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessName" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "businessName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstAvailableDate" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "firstAvailableDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectName" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "objectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceDescription" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "resourceDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceIds" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "resourceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDescription" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "serviceDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDuration" }),
        __metadata("design:type", Number)
    ], Availability3ViewModel.prototype, "serviceDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceId" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], Availability3ViewModel.prototype, "serviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tzRequested" }),
        __metadata("design:type", Number)
    ], Availability3ViewModel.prototype, "tzRequested", void 0);
    return Availability3ViewModel;
}(SpeakeasyBase));
export { Availability3ViewModel };
