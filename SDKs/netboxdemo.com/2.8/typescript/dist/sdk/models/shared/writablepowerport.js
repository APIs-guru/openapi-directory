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
export var WritablePowerPortTypeEnum;
(function (WritablePowerPortTypeEnum) {
    WritablePowerPortTypeEnum["Iec60320C6"] = "iec-60320-c6";
    WritablePowerPortTypeEnum["Iec60320C8"] = "iec-60320-c8";
    WritablePowerPortTypeEnum["Iec60320C14"] = "iec-60320-c14";
    WritablePowerPortTypeEnum["Iec60320C16"] = "iec-60320-c16";
    WritablePowerPortTypeEnum["Iec60320C20"] = "iec-60320-c20";
    WritablePowerPortTypeEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    WritablePowerPortTypeEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    WritablePowerPortTypeEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    WritablePowerPortTypeEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    WritablePowerPortTypeEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    WritablePowerPortTypeEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    WritablePowerPortTypeEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    WritablePowerPortTypeEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    WritablePowerPortTypeEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    WritablePowerPortTypeEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    WritablePowerPortTypeEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    WritablePowerPortTypeEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    WritablePowerPortTypeEnum["Nema115p"] = "nema-1-15p";
    WritablePowerPortTypeEnum["Nema515p"] = "nema-5-15p";
    WritablePowerPortTypeEnum["Nema520p"] = "nema-5-20p";
    WritablePowerPortTypeEnum["Nema530p"] = "nema-5-30p";
    WritablePowerPortTypeEnum["Nema550p"] = "nema-5-50p";
    WritablePowerPortTypeEnum["Nema615p"] = "nema-6-15p";
    WritablePowerPortTypeEnum["Nema620p"] = "nema-6-20p";
    WritablePowerPortTypeEnum["Nema630p"] = "nema-6-30p";
    WritablePowerPortTypeEnum["Nema650p"] = "nema-6-50p";
    WritablePowerPortTypeEnum["Nema1030p"] = "nema-10-30p";
    WritablePowerPortTypeEnum["Nema1050p"] = "nema-10-50p";
    WritablePowerPortTypeEnum["Nema1420p"] = "nema-14-20p";
    WritablePowerPortTypeEnum["Nema1430p"] = "nema-14-30p";
    WritablePowerPortTypeEnum["Nema1450p"] = "nema-14-50p";
    WritablePowerPortTypeEnum["Nema1460p"] = "nema-14-60p";
    WritablePowerPortTypeEnum["NemaL115p"] = "nema-l1-15p";
    WritablePowerPortTypeEnum["NemaL515p"] = "nema-l5-15p";
    WritablePowerPortTypeEnum["NemaL520p"] = "nema-l5-20p";
    WritablePowerPortTypeEnum["NemaL530p"] = "nema-l5-30p";
    WritablePowerPortTypeEnum["NemaL550p"] = "nema-l5-50p";
    WritablePowerPortTypeEnum["NemaL615p"] = "nema-l6-15p";
    WritablePowerPortTypeEnum["NemaL620p"] = "nema-l6-20p";
    WritablePowerPortTypeEnum["NemaL630p"] = "nema-l6-30p";
    WritablePowerPortTypeEnum["NemaL650p"] = "nema-l6-50p";
    WritablePowerPortTypeEnum["NemaL1030p"] = "nema-l10-30p";
    WritablePowerPortTypeEnum["NemaL1420p"] = "nema-l14-20p";
    WritablePowerPortTypeEnum["NemaL1430p"] = "nema-l14-30p";
    WritablePowerPortTypeEnum["NemaL1450p"] = "nema-l14-50p";
    WritablePowerPortTypeEnum["NemaL1460p"] = "nema-l14-60p";
    WritablePowerPortTypeEnum["NemaL2120p"] = "nema-l21-20p";
    WritablePowerPortTypeEnum["NemaL2130p"] = "nema-l21-30p";
    WritablePowerPortTypeEnum["Cs6361c"] = "cs6361c";
    WritablePowerPortTypeEnum["Cs6365c"] = "cs6365c";
    WritablePowerPortTypeEnum["Cs8165c"] = "cs8165c";
    WritablePowerPortTypeEnum["Cs8265c"] = "cs8265c";
    WritablePowerPortTypeEnum["Cs8365c"] = "cs8365c";
    WritablePowerPortTypeEnum["Cs8465c"] = "cs8465c";
    WritablePowerPortTypeEnum["ItaE"] = "ita-e";
    WritablePowerPortTypeEnum["ItaF"] = "ita-f";
    WritablePowerPortTypeEnum["ItaEf"] = "ita-ef";
    WritablePowerPortTypeEnum["ItaG"] = "ita-g";
    WritablePowerPortTypeEnum["ItaH"] = "ita-h";
    WritablePowerPortTypeEnum["ItaI"] = "ita-i";
    WritablePowerPortTypeEnum["ItaJ"] = "ita-j";
    WritablePowerPortTypeEnum["ItaK"] = "ita-k";
    WritablePowerPortTypeEnum["ItaL"] = "ita-l";
    WritablePowerPortTypeEnum["ItaM"] = "ita-m";
    WritablePowerPortTypeEnum["ItaN"] = "ita-n";
    WritablePowerPortTypeEnum["ItaO"] = "ita-o";
})(WritablePowerPortTypeEnum || (WritablePowerPortTypeEnum = {}));
var WritablePowerPortInput = /** @class */ (function (_super) {
    __extends(WritablePowerPortInput, _super);
    function WritablePowerPortInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocated_draw" }),
        __metadata("design:type", Number)
    ], WritablePowerPortInput.prototype, "allocatedDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCableInput)
    ], WritablePowerPortInput.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_status" }),
        __metadata("design:type", Boolean)
    ], WritablePowerPortInput.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WritablePowerPortInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", Number)
    ], WritablePowerPortInput.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum_draw" }),
        __metadata("design:type", Number)
    ], WritablePowerPortInput.prototype, "maximumDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritablePowerPortInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritablePowerPortInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritablePowerPortInput.prototype, "type", void 0);
    return WritablePowerPortInput;
}(SpeakeasyBase));
export { WritablePowerPortInput };
