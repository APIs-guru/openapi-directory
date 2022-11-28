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
export var RearPortTemplateTypeLabelEnum;
(function (RearPortTemplateTypeLabelEnum) {
    RearPortTemplateTypeLabelEnum["EightP8C"] = "8P8C";
    RearPortTemplateTypeLabelEnum["OneHundredAndTenPunch"] = "110 Punch";
    RearPortTemplateTypeLabelEnum["Bnc"] = "BNC";
    RearPortTemplateTypeLabelEnum["Mrj21"] = "MRJ21";
    RearPortTemplateTypeLabelEnum["Fc"] = "FC";
    RearPortTemplateTypeLabelEnum["Lc"] = "LC";
    RearPortTemplateTypeLabelEnum["LcApc"] = "LC/APC";
    RearPortTemplateTypeLabelEnum["Lsh"] = "LSH";
    RearPortTemplateTypeLabelEnum["LshApc"] = "LSH/APC";
    RearPortTemplateTypeLabelEnum["Mpo"] = "MPO";
    RearPortTemplateTypeLabelEnum["Mtrj"] = "MTRJ";
    RearPortTemplateTypeLabelEnum["Sc"] = "SC";
    RearPortTemplateTypeLabelEnum["ScApc"] = "SC/APC";
    RearPortTemplateTypeLabelEnum["St"] = "ST";
})(RearPortTemplateTypeLabelEnum || (RearPortTemplateTypeLabelEnum = {}));
export var RearPortTemplateTypeValueEnum;
(function (RearPortTemplateTypeValueEnum) {
    RearPortTemplateTypeValueEnum["Eightp8c"] = "8p8c";
    RearPortTemplateTypeValueEnum["OneHundredAndTenPunch"] = "110-punch";
    RearPortTemplateTypeValueEnum["Bnc"] = "bnc";
    RearPortTemplateTypeValueEnum["Mrj21"] = "mrj21";
    RearPortTemplateTypeValueEnum["Fc"] = "fc";
    RearPortTemplateTypeValueEnum["Lc"] = "lc";
    RearPortTemplateTypeValueEnum["LcApc"] = "lc-apc";
    RearPortTemplateTypeValueEnum["Lsh"] = "lsh";
    RearPortTemplateTypeValueEnum["LshApc"] = "lsh-apc";
    RearPortTemplateTypeValueEnum["Mpo"] = "mpo";
    RearPortTemplateTypeValueEnum["Mtrj"] = "mtrj";
    RearPortTemplateTypeValueEnum["Sc"] = "sc";
    RearPortTemplateTypeValueEnum["ScApc"] = "sc-apc";
    RearPortTemplateTypeValueEnum["St"] = "st";
})(RearPortTemplateTypeValueEnum || (RearPortTemplateTypeValueEnum = {}));
var RearPortTemplateType = /** @class */ (function (_super) {
    __extends(RearPortTemplateType, _super);
    function RearPortTemplateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], RearPortTemplateType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], RearPortTemplateType.prototype, "value", void 0);
    return RearPortTemplateType;
}(SpeakeasyBase));
export { RearPortTemplateType };
var RearPortTemplate = /** @class */ (function (_super) {
    __extends(RearPortTemplate, _super);
    function RearPortTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", NestedDeviceType)
    ], RearPortTemplate.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RearPortTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RearPortTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positions" }),
        __metadata("design:type", Number)
    ], RearPortTemplate.prototype, "positions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", RearPortTemplateType)
    ], RearPortTemplate.prototype, "type", void 0);
    return RearPortTemplate;
}(SpeakeasyBase));
export { RearPortTemplate };
