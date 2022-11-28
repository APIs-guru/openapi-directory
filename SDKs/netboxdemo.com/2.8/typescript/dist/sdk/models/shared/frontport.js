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
import { FrontPortRearPort } from "./frontportrearport";
export var FrontPortTypeLabelEnum;
(function (FrontPortTypeLabelEnum) {
    FrontPortTypeLabelEnum["EightP8C"] = "8P8C";
    FrontPortTypeLabelEnum["OneHundredAndTenPunch"] = "110 Punch";
    FrontPortTypeLabelEnum["Bnc"] = "BNC";
    FrontPortTypeLabelEnum["Mrj21"] = "MRJ21";
    FrontPortTypeLabelEnum["Fc"] = "FC";
    FrontPortTypeLabelEnum["Lc"] = "LC";
    FrontPortTypeLabelEnum["LcApc"] = "LC/APC";
    FrontPortTypeLabelEnum["Lsh"] = "LSH";
    FrontPortTypeLabelEnum["LshApc"] = "LSH/APC";
    FrontPortTypeLabelEnum["Mpo"] = "MPO";
    FrontPortTypeLabelEnum["Mtrj"] = "MTRJ";
    FrontPortTypeLabelEnum["Sc"] = "SC";
    FrontPortTypeLabelEnum["ScApc"] = "SC/APC";
    FrontPortTypeLabelEnum["St"] = "ST";
})(FrontPortTypeLabelEnum || (FrontPortTypeLabelEnum = {}));
export var FrontPortTypeValueEnum;
(function (FrontPortTypeValueEnum) {
    FrontPortTypeValueEnum["Eightp8c"] = "8p8c";
    FrontPortTypeValueEnum["OneHundredAndTenPunch"] = "110-punch";
    FrontPortTypeValueEnum["Bnc"] = "bnc";
    FrontPortTypeValueEnum["Mrj21"] = "mrj21";
    FrontPortTypeValueEnum["Fc"] = "fc";
    FrontPortTypeValueEnum["Lc"] = "lc";
    FrontPortTypeValueEnum["LcApc"] = "lc-apc";
    FrontPortTypeValueEnum["Lsh"] = "lsh";
    FrontPortTypeValueEnum["LshApc"] = "lsh-apc";
    FrontPortTypeValueEnum["Mpo"] = "mpo";
    FrontPortTypeValueEnum["Mtrj"] = "mtrj";
    FrontPortTypeValueEnum["Sc"] = "sc";
    FrontPortTypeValueEnum["ScApc"] = "sc-apc";
    FrontPortTypeValueEnum["St"] = "st";
})(FrontPortTypeValueEnum || (FrontPortTypeValueEnum = {}));
var FrontPortType = /** @class */ (function (_super) {
    __extends(FrontPortType, _super);
    function FrontPortType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], FrontPortType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], FrontPortType.prototype, "value", void 0);
    return FrontPortType;
}(SpeakeasyBase));
export { FrontPortType };
var FrontPort = /** @class */ (function (_super) {
    __extends(FrontPort, _super);
    function FrontPort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCable)
    ], FrontPort.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], FrontPort.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", NestedDevice)
    ], FrontPort.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FrontPort.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FrontPort.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rear_port" }),
        __metadata("design:type", FrontPortRearPort)
    ], FrontPort.prototype, "rearPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rear_port_position" }),
        __metadata("design:type", Number)
    ], FrontPort.prototype, "rearPortPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], FrontPort.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", FrontPortType)
    ], FrontPort.prototype, "type", void 0);
    return FrontPort;
}(SpeakeasyBase));
export { FrontPort };
