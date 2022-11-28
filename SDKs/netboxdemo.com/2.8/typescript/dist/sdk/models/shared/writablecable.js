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
export var WritableCableLengthUnitEnum;
(function (WritableCableLengthUnitEnum) {
    WritableCableLengthUnitEnum["M"] = "m";
    WritableCableLengthUnitEnum["Cm"] = "cm";
    WritableCableLengthUnitEnum["Ft"] = "ft";
    WritableCableLengthUnitEnum["In"] = "in";
})(WritableCableLengthUnitEnum || (WritableCableLengthUnitEnum = {}));
export var WritableCableStatusEnum;
(function (WritableCableStatusEnum) {
    WritableCableStatusEnum["Connected"] = "connected";
    WritableCableStatusEnum["Planned"] = "planned";
    WritableCableStatusEnum["Decommissioning"] = "decommissioning";
})(WritableCableStatusEnum || (WritableCableStatusEnum = {}));
export var WritableCableTypeEnum;
(function (WritableCableTypeEnum) {
    WritableCableTypeEnum["Cat3"] = "cat3";
    WritableCableTypeEnum["Cat5"] = "cat5";
    WritableCableTypeEnum["Cat5e"] = "cat5e";
    WritableCableTypeEnum["Cat6"] = "cat6";
    WritableCableTypeEnum["Cat6a"] = "cat6a";
    WritableCableTypeEnum["Cat7"] = "cat7";
    WritableCableTypeEnum["DacActive"] = "dac-active";
    WritableCableTypeEnum["DacPassive"] = "dac-passive";
    WritableCableTypeEnum["Mrj21Trunk"] = "mrj21-trunk";
    WritableCableTypeEnum["Coaxial"] = "coaxial";
    WritableCableTypeEnum["Mmf"] = "mmf";
    WritableCableTypeEnum["MmfOm1"] = "mmf-om1";
    WritableCableTypeEnum["MmfOm2"] = "mmf-om2";
    WritableCableTypeEnum["MmfOm3"] = "mmf-om3";
    WritableCableTypeEnum["MmfOm4"] = "mmf-om4";
    WritableCableTypeEnum["Smf"] = "smf";
    WritableCableTypeEnum["SmfOs1"] = "smf-os1";
    WritableCableTypeEnum["SmfOs2"] = "smf-os2";
    WritableCableTypeEnum["Aoc"] = "aoc";
    WritableCableTypeEnum["Power"] = "power";
})(WritableCableTypeEnum || (WritableCableTypeEnum = {}));
var WritableCableInput = /** @class */ (function (_super) {
    __extends(WritableCableInput, _super);
    function WritableCableInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], WritableCableInput.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], WritableCableInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length" }),
        __metadata("design:type", Number)
    ], WritableCableInput.prototype, "length", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=length_unit" }),
        __metadata("design:type", String)
    ], WritableCableInput.prototype, "lengthUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WritableCableInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_a_id" }),
        __metadata("design:type", Number)
    ], WritableCableInput.prototype, "terminationAId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_a_type" }),
        __metadata("design:type", String)
    ], WritableCableInput.prototype, "terminationAType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_b_id" }),
        __metadata("design:type", Number)
    ], WritableCableInput.prototype, "terminationBId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termination_b_type" }),
        __metadata("design:type", String)
    ], WritableCableInput.prototype, "terminationBType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritableCableInput.prototype, "type", void 0);
    return WritableCableInput;
}(SpeakeasyBase));
export { WritableCableInput };
