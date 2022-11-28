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
import { NestedCable } from "./nestedcable";
import { NestedDevice } from "./nesteddevice";
export var RearPortTypeLabelEnum;
(function (RearPortTypeLabelEnum) {
    RearPortTypeLabelEnum["EightP8C"] = "8P8C";
    RearPortTypeLabelEnum["OneHundredAndTenPunch"] = "110 Punch";
    RearPortTypeLabelEnum["Bnc"] = "BNC";
    RearPortTypeLabelEnum["Mrj21"] = "MRJ21";
    RearPortTypeLabelEnum["Fc"] = "FC";
    RearPortTypeLabelEnum["Lc"] = "LC";
    RearPortTypeLabelEnum["LcApc"] = "LC/APC";
    RearPortTypeLabelEnum["Lsh"] = "LSH";
    RearPortTypeLabelEnum["LshApc"] = "LSH/APC";
    RearPortTypeLabelEnum["Mpo"] = "MPO";
    RearPortTypeLabelEnum["Mtrj"] = "MTRJ";
    RearPortTypeLabelEnum["Sc"] = "SC";
    RearPortTypeLabelEnum["ScApc"] = "SC/APC";
    RearPortTypeLabelEnum["St"] = "ST";
})(RearPortTypeLabelEnum || (RearPortTypeLabelEnum = {}));
export var RearPortTypeValueEnum;
(function (RearPortTypeValueEnum) {
    RearPortTypeValueEnum["Eightp8c"] = "8p8c";
    RearPortTypeValueEnum["OneHundredAndTenPunch"] = "110-punch";
    RearPortTypeValueEnum["Bnc"] = "bnc";
    RearPortTypeValueEnum["Mrj21"] = "mrj21";
    RearPortTypeValueEnum["Fc"] = "fc";
    RearPortTypeValueEnum["Lc"] = "lc";
    RearPortTypeValueEnum["LcApc"] = "lc-apc";
    RearPortTypeValueEnum["Lsh"] = "lsh";
    RearPortTypeValueEnum["LshApc"] = "lsh-apc";
    RearPortTypeValueEnum["Mpo"] = "mpo";
    RearPortTypeValueEnum["Mtrj"] = "mtrj";
    RearPortTypeValueEnum["Sc"] = "sc";
    RearPortTypeValueEnum["ScApc"] = "sc-apc";
    RearPortTypeValueEnum["St"] = "st";
})(RearPortTypeValueEnum || (RearPortTypeValueEnum = {}));
var RearPortType = /** @class */ (function (_super) {
    __extends(RearPortType, _super);
    function RearPortType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], RearPortType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], RearPortType.prototype, "value", void 0);
    return RearPortType;
}(SpeakeasyBase));
export { RearPortType };
var RearPort = /** @class */ (function (_super) {
    __extends(RearPort, _super);
    function RearPort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCable)
    ], RearPort.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RearPort.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", NestedDevice)
    ], RearPort.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], RearPort.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RearPort.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positions" }),
        __metadata("design:type", Number)
    ], RearPort.prototype, "positions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], RearPort.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", RearPortType)
    ], RearPort.prototype, "type", void 0);
    return RearPort;
}(SpeakeasyBase));
export { RearPort };
