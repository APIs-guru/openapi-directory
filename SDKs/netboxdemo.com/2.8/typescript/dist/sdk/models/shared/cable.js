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
export var CableLengthUnitLabelEnum;
(function (CableLengthUnitLabelEnum) {
    CableLengthUnitLabelEnum["Meters"] = "Meters";
    CableLengthUnitLabelEnum["Centimeters"] = "Centimeters";
    CableLengthUnitLabelEnum["Feet"] = "Feet";
    CableLengthUnitLabelEnum["Inches"] = "Inches";
})(CableLengthUnitLabelEnum || (CableLengthUnitLabelEnum = {}));
export var CableLengthUnitValueEnum;
(function (CableLengthUnitValueEnum) {
    CableLengthUnitValueEnum["M"] = "m";
    CableLengthUnitValueEnum["Cm"] = "cm";
    CableLengthUnitValueEnum["Ft"] = "ft";
    CableLengthUnitValueEnum["In"] = "in";
})(CableLengthUnitValueEnum || (CableLengthUnitValueEnum = {}));
var CableLengthUnit = /** @class */ (function (_super) {
    __extends(CableLengthUnit, _super);
    function CableLengthUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CableLengthUnit.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CableLengthUnit.prototype, "value", void 0);
    return CableLengthUnit;
}(SpeakeasyBase));
export { CableLengthUnit };
export var CableStatusLabelEnum;
(function (CableStatusLabelEnum) {
    CableStatusLabelEnum["Connected"] = "Connected";
    CableStatusLabelEnum["Planned"] = "Planned";
    CableStatusLabelEnum["Decommissioning"] = "Decommissioning";
})(CableStatusLabelEnum || (CableStatusLabelEnum = {}));
export var CableStatusValueEnum;
(function (CableStatusValueEnum) {
    CableStatusValueEnum["Connected"] = "connected";
    CableStatusValueEnum["Planned"] = "planned";
    CableStatusValueEnum["Decommissioning"] = "decommissioning";
})(CableStatusValueEnum || (CableStatusValueEnum = {}));
var CableStatus = /** @class */ (function (_super) {
    __extends(CableStatus, _super);
    function CableStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CableStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CableStatus.prototype, "value", void 0);
    return CableStatus;
}(SpeakeasyBase));
export { CableStatus };
export var CableTypeEnum;
(function (CableTypeEnum) {
    CableTypeEnum["Cat3"] = "cat3";
    CableTypeEnum["Cat5"] = "cat5";
    CableTypeEnum["Cat5e"] = "cat5e";
    CableTypeEnum["Cat6"] = "cat6";
    CableTypeEnum["Cat6a"] = "cat6a";
    CableTypeEnum["Cat7"] = "cat7";
    CableTypeEnum["DacActive"] = "dac-active";
    CableTypeEnum["DacPassive"] = "dac-passive";
    CableTypeEnum["Mrj21Trunk"] = "mrj21-trunk";
    CableTypeEnum["Coaxial"] = "coaxial";
    CableTypeEnum["Mmf"] = "mmf";
    CableTypeEnum["MmfOm1"] = "mmf-om1";
    CableTypeEnum["MmfOm2"] = "mmf-om2";
    CableTypeEnum["MmfOm3"] = "mmf-om3";
    CableTypeEnum["MmfOm4"] = "mmf-om4";
    CableTypeEnum["Smf"] = "smf";
    CableTypeEnum["SmfOs1"] = "smf-os1";
    CableTypeEnum["SmfOs2"] = "smf-os2";
    CableTypeEnum["Aoc"] = "aoc";
    CableTypeEnum["Power"] = "power";
})(CableTypeEnum || (CableTypeEnum = {}));
var Cable = /** @class */ (function (_super) {
    __extends(Cable, _super);
    function Cable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], Cable.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Cable.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Cable.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], Cable.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length_unit" }),
        __metadata("design:type", CableLengthUnit)
    ], Cable.prototype, "lengthUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", CableStatus)
    ], Cable.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_a" }),
        __metadata("design:type", Map)
    ], Cable.prototype, "terminationA", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_a_id" }),
        __metadata("design:type", Number)
    ], Cable.prototype, "terminationAId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_a_type" }),
        __metadata("design:type", String)
    ], Cable.prototype, "terminationAType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_b" }),
        __metadata("design:type", Map)
    ], Cable.prototype, "terminationB", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_b_id" }),
        __metadata("design:type", Number)
    ], Cable.prototype, "terminationBId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_b_type" }),
        __metadata("design:type", String)
    ], Cable.prototype, "terminationBType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Cable.prototype, "type", void 0);
    return Cable;
}(SpeakeasyBase));
export { Cable };
