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
import { NestedCableInput } from "./nestedcable";
export var WritableRearPortTypeEnum;
(function (WritableRearPortTypeEnum) {
    WritableRearPortTypeEnum["Eightp8c"] = "8p8c";
    WritableRearPortTypeEnum["OneHundredAndTenPunch"] = "110-punch";
    WritableRearPortTypeEnum["Bnc"] = "bnc";
    WritableRearPortTypeEnum["Mrj21"] = "mrj21";
    WritableRearPortTypeEnum["Fc"] = "fc";
    WritableRearPortTypeEnum["Lc"] = "lc";
    WritableRearPortTypeEnum["LcApc"] = "lc-apc";
    WritableRearPortTypeEnum["Lsh"] = "lsh";
    WritableRearPortTypeEnum["LshApc"] = "lsh-apc";
    WritableRearPortTypeEnum["Mpo"] = "mpo";
    WritableRearPortTypeEnum["Mtrj"] = "mtrj";
    WritableRearPortTypeEnum["Sc"] = "sc";
    WritableRearPortTypeEnum["ScApc"] = "sc-apc";
    WritableRearPortTypeEnum["St"] = "st";
})(WritableRearPortTypeEnum || (WritableRearPortTypeEnum = {}));
var WritableRearPortInput = /** @class */ (function (_super) {
    __extends(WritableRearPortInput, _super);
    function WritableRearPortInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCableInput)
    ], WritableRearPortInput.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WritableRearPortInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", Number)
    ], WritableRearPortInput.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritableRearPortInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=positions" }),
        __metadata("design:type", Number)
    ], WritableRearPortInput.prototype, "positions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritableRearPortInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritableRearPortInput.prototype, "type", void 0);
    return WritableRearPortInput;
}(SpeakeasyBase));
export { WritableRearPortInput };
