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
// LandlordSummaryTenancyModel
/**
 * Landlord Summary - Landing Page.
**/
var LandlordSummaryTenancyModel = /** @class */ (function (_super) {
    __extends(LandlordSummaryTenancyModel, _super);
    function LandlordSummaryTenancyModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bond" }),
        __metadata("design:type", Number)
    ], LandlordSummaryTenancyModel.prototype, "bond", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchID" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "branchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlobalReference" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "globalReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaintenanceJobs" }),
        __metadata("design:type", Number)
    ], LandlordSummaryTenancyModel.prototype, "maintenanceJobs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManagedRent" }),
        __metadata("design:type", Boolean)
    ], LandlordSummaryTenancyModel.prototype, "managedRent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PropertyAddress" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "propertyAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rent" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "rent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RentArrears" }),
        __metadata("design:type", Number)
    ], LandlordSummaryTenancyModel.prototype, "rentArrears", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RentCollected" }),
        __metadata("design:type", Number)
    ], LandlordSummaryTenancyModel.prototype, "rentCollected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TenancyProperty" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "tenancyProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TenancyState" }),
        __metadata("design:type", String)
    ], LandlordSummaryTenancyModel.prototype, "tenancyState", void 0);
    return LandlordSummaryTenancyModel;
}(SpeakeasyBase));
export { LandlordSummaryTenancyModel };
