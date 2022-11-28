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
import { LandlordMaintenanceCertificateModel } from "./landlordmaintenancecertificatemodel";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";
import { LandlordLettingsInspectionModel } from "./landlordlettingsinspectionmodel";
import { LandlordMaintenancePreferenceModel } from "./landlordmaintenancepreferencemodel";
// LandlordTenancyModel
/**
 * Landlord Tenancy Model.
**/
var LandlordTenancyModel = /** @class */ (function (_super) {
    __extends(LandlordTenancyModel, _super);
    function LandlordTenancyModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActualEndDate" }),
        __metadata("design:type", Date)
    ], LandlordTenancyModel.prototype, "actualEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Beds" }),
        __metadata("design:type", Number)
    ], LandlordTenancyModel.prototype, "beds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Bond" }),
        __metadata("design:type", Number)
    ], LandlordTenancyModel.prototype, "bond", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BranchID" }),
        __metadata("design:type", String)
    ], LandlordTenancyModel.prototype, "branchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Certificates", elemType: LandlordMaintenanceCertificateModel }),
        __metadata("design:type", Array)
    ], LandlordTenancyModel.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Documents", elemType: LettingsLandlordDocument }),
        __metadata("design:type", Array)
    ], LandlordTenancyModel.prototype, "documents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedDate" }),
        __metadata("design:type", Date)
    ], LandlordTenancyModel.prototype, "fixedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GlobalReference" }),
        __metadata("design:type", String)
    ], LandlordTenancyModel.prototype, "globalReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID" }),
        __metadata("design:type", String)
    ], LandlordTenancyModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Inspections", elemType: LandlordLettingsInspectionModel }),
        __metadata("design:type", Array)
    ], LandlordTenancyModel.prototype, "inspections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ManagedRent" }),
        __metadata("design:type", Boolean)
    ], LandlordTenancyModel.prototype, "managedRent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Preferences", elemType: LandlordMaintenancePreferenceModel }),
        __metadata("design:type", Array)
    ], LandlordTenancyModel.prototype, "preferences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousRentAmount" }),
        __metadata("design:type", Number)
    ], LandlordTenancyModel.prototype, "previousRentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PropertyAddress" }),
        __metadata("design:type", String)
    ], LandlordTenancyModel.prototype, "propertyAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rent" }),
        __metadata("design:type", String)
    ], LandlordTenancyModel.prototype, "rent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RentAmount" }),
        __metadata("design:type", Number)
    ], LandlordTenancyModel.prototype, "rentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", Date)
    ], LandlordTenancyModel.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TenancyProperty" }),
        __metadata("design:type", String)
    ], LandlordTenancyModel.prototype, "tenancyProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TenancyState" }),
        __metadata("design:type", String)
    ], LandlordTenancyModel.prototype, "tenancyState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tenants" }),
        __metadata("design:type", Array)
    ], LandlordTenancyModel.prototype, "tenants", void 0);
    return LandlordTenancyModel;
}(SpeakeasyBase));
export { LandlordTenancyModel };
