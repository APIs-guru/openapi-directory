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
import { NestedDeviceType } from "./nesteddevicetype";
import { NestedRearPortTemplate } from "./nestedrearporttemplate";
export var FrontPortTemplateTypeLabelEnum;
(function (FrontPortTemplateTypeLabelEnum) {
    FrontPortTemplateTypeLabelEnum["EightP8C"] = "8P8C";
    FrontPortTemplateTypeLabelEnum["OneHundredAndTenPunch"] = "110 Punch";
    FrontPortTemplateTypeLabelEnum["Bnc"] = "BNC";
    FrontPortTemplateTypeLabelEnum["Mrj21"] = "MRJ21";
    FrontPortTemplateTypeLabelEnum["Fc"] = "FC";
    FrontPortTemplateTypeLabelEnum["Lc"] = "LC";
    FrontPortTemplateTypeLabelEnum["LcApc"] = "LC/APC";
    FrontPortTemplateTypeLabelEnum["Lsh"] = "LSH";
    FrontPortTemplateTypeLabelEnum["LshApc"] = "LSH/APC";
    FrontPortTemplateTypeLabelEnum["Mpo"] = "MPO";
    FrontPortTemplateTypeLabelEnum["Mtrj"] = "MTRJ";
    FrontPortTemplateTypeLabelEnum["Sc"] = "SC";
    FrontPortTemplateTypeLabelEnum["ScApc"] = "SC/APC";
    FrontPortTemplateTypeLabelEnum["St"] = "ST";
})(FrontPortTemplateTypeLabelEnum || (FrontPortTemplateTypeLabelEnum = {}));
export var FrontPortTemplateTypeValueEnum;
(function (FrontPortTemplateTypeValueEnum) {
    FrontPortTemplateTypeValueEnum["Eightp8c"] = "8p8c";
    FrontPortTemplateTypeValueEnum["OneHundredAndTenPunch"] = "110-punch";
    FrontPortTemplateTypeValueEnum["Bnc"] = "bnc";
    FrontPortTemplateTypeValueEnum["Mrj21"] = "mrj21";
    FrontPortTemplateTypeValueEnum["Fc"] = "fc";
    FrontPortTemplateTypeValueEnum["Lc"] = "lc";
    FrontPortTemplateTypeValueEnum["LcApc"] = "lc-apc";
    FrontPortTemplateTypeValueEnum["Lsh"] = "lsh";
    FrontPortTemplateTypeValueEnum["LshApc"] = "lsh-apc";
    FrontPortTemplateTypeValueEnum["Mpo"] = "mpo";
    FrontPortTemplateTypeValueEnum["Mtrj"] = "mtrj";
    FrontPortTemplateTypeValueEnum["Sc"] = "sc";
    FrontPortTemplateTypeValueEnum["ScApc"] = "sc-apc";
    FrontPortTemplateTypeValueEnum["St"] = "st";
})(FrontPortTemplateTypeValueEnum || (FrontPortTemplateTypeValueEnum = {}));
var FrontPortTemplateType = /** @class */ (function (_super) {
    __extends(FrontPortTemplateType, _super);
    function FrontPortTemplateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], FrontPortTemplateType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], FrontPortTemplateType.prototype, "value", void 0);
    return FrontPortTemplateType;
}(SpeakeasyBase));
export { FrontPortTemplateType };
var FrontPortTemplate = /** @class */ (function (_super) {
    __extends(FrontPortTemplate, _super);
    function FrontPortTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", NestedDeviceType)
    ], FrontPortTemplate.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FrontPortTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FrontPortTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rear_port" }),
        __metadata("design:type", NestedRearPortTemplate)
    ], FrontPortTemplate.prototype, "rearPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rear_port_position" }),
        __metadata("design:type", Number)
    ], FrontPortTemplate.prototype, "rearPortPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", FrontPortTemplateType)
    ], FrontPortTemplate.prototype, "type", void 0);
    return FrontPortTemplate;
}(SpeakeasyBase));
export { FrontPortTemplate };
