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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostcodeTypeEnum } from "./postcodetypeenum";
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=administrative_county" }),
        __metadata("design:type", String)
    ], Address.prototype, "administrativeCounty", void 0);
    __decorate([
        Metadata({ data: "json, name=building_name" }),
        __metadata("design:type", String)
    ], Address.prototype, "buildingName", void 0);
    __decorate([
        Metadata({ data: "json, name=building_number" }),
        __metadata("design:type", String)
    ], Address.prototype, "buildingNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Address.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], Address.prototype, "county", void 0);
    __decorate([
        Metadata({ data: "json, name=delivery_point_suffix" }),
        __metadata("design:type", String)
    ], Address.prototype, "deliveryPointSuffix", void 0);
    __decorate([
        Metadata({ data: "json, name=department_name" }),
        __metadata("design:type", String)
    ], Address.prototype, "departmentName", void 0);
    __decorate([
        Metadata({ data: "json, name=dependent_locality" }),
        __metadata("design:type", String)
    ], Address.prototype, "dependentLocality", void 0);
    __decorate([
        Metadata({ data: "json, name=dependent_thoroughfare" }),
        __metadata("design:type", String)
    ], Address.prototype, "dependentThoroughfare", void 0);
    __decorate([
        Metadata({ data: "json, name=district" }),
        __metadata("design:type", String)
    ], Address.prototype, "district", void 0);
    __decorate([
        Metadata({ data: "json, name=double_dependent_locality" }),
        __metadata("design:type", String)
    ], Address.prototype, "doubleDependentLocality", void 0);
    __decorate([
        Metadata({ data: "json, name=eastings" }),
        __metadata("design:type", Number)
    ], Address.prototype, "eastings", void 0);
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], Address.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=line_1" }),
        __metadata("design:type", String)
    ], Address.prototype, "line1", void 0);
    __decorate([
        Metadata({ data: "json, name=line_2" }),
        __metadata("design:type", String)
    ], Address.prototype, "line2", void 0);
    __decorate([
        Metadata({ data: "json, name=line_3" }),
        __metadata("design:type", String)
    ], Address.prototype, "line3", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], Address.prototype, "longitude", void 0);
    __decorate([
        Metadata({ data: "json, name=northings" }),
        __metadata("design:type", Number)
    ], Address.prototype, "northings", void 0);
    __decorate([
        Metadata({ data: "json, name=organisation_name" }),
        __metadata("design:type", String)
    ], Address.prototype, "organisationName", void 0);
    __decorate([
        Metadata({ data: "json, name=po_box" }),
        __metadata("design:type", String)
    ], Address.prototype, "poBox", void 0);
    __decorate([
        Metadata({ data: "json, name=post_town" }),
        __metadata("design:type", String)
    ], Address.prototype, "postTown", void 0);
    __decorate([
        Metadata({ data: "json, name=postal_county" }),
        __metadata("design:type", String)
    ], Address.prototype, "postalCounty", void 0);
    __decorate([
        Metadata({ data: "json, name=postcode" }),
        __metadata("design:type", String)
    ], Address.prototype, "postcode", void 0);
    __decorate([
        Metadata({ data: "json, name=postcode_inward" }),
        __metadata("design:type", String)
    ], Address.prototype, "postcodeInward", void 0);
    __decorate([
        Metadata({ data: "json, name=postcode_outward" }),
        __metadata("design:type", String)
    ], Address.prototype, "postcodeOutward", void 0);
    __decorate([
        Metadata({ data: "json, name=postcode_type" }),
        __metadata("design:type", String)
    ], Address.prototype, "postcodeType", void 0);
    __decorate([
        Metadata({ data: "json, name=premise" }),
        __metadata("design:type", String)
    ], Address.prototype, "premise", void 0);
    __decorate([
        Metadata({ data: "json, name=su_organisation_indicator" }),
        __metadata("design:type", String)
    ], Address.prototype, "suOrganisationIndicator", void 0);
    __decorate([
        Metadata({ data: "json, name=sub_building_name" }),
        __metadata("design:type", String)
    ], Address.prototype, "subBuildingName", void 0);
    __decorate([
        Metadata({ data: "json, name=thoroughfare" }),
        __metadata("design:type", String)
    ], Address.prototype, "thoroughfare", void 0);
    __decorate([
        Metadata({ data: "json, name=traditional_county" }),
        __metadata("design:type", String)
    ], Address.prototype, "traditionalCounty", void 0);
    __decorate([
        Metadata({ data: "json, name=udprn" }),
        __metadata("design:type", Number)
    ], Address.prototype, "udprn", void 0);
    __decorate([
        Metadata({ data: "json, name=umprn" }),
        __metadata("design:type", String)
    ], Address.prototype, "umprn", void 0);
    __decorate([
        Metadata({ data: "json, name=ward" }),
        __metadata("design:type", String)
    ], Address.prototype, "ward", void 0);
    return Address;
}(SpeakeasyBase));
export { Address };
