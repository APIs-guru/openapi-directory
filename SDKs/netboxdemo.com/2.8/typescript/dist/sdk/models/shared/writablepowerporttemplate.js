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
export var WritablePowerPortTemplateTypeEnum;
(function (WritablePowerPortTemplateTypeEnum) {
    WritablePowerPortTemplateTypeEnum["Iec60320C6"] = "iec-60320-c6";
    WritablePowerPortTemplateTypeEnum["Iec60320C8"] = "iec-60320-c8";
    WritablePowerPortTemplateTypeEnum["Iec60320C14"] = "iec-60320-c14";
    WritablePowerPortTemplateTypeEnum["Iec60320C16"] = "iec-60320-c16";
    WritablePowerPortTemplateTypeEnum["Iec60320C20"] = "iec-60320-c20";
    WritablePowerPortTemplateTypeEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    WritablePowerPortTemplateTypeEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    WritablePowerPortTemplateTypeEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    WritablePowerPortTemplateTypeEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    WritablePowerPortTemplateTypeEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    WritablePowerPortTemplateTypeEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    WritablePowerPortTemplateTypeEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    WritablePowerPortTemplateTypeEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    WritablePowerPortTemplateTypeEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    WritablePowerPortTemplateTypeEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    WritablePowerPortTemplateTypeEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    WritablePowerPortTemplateTypeEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    WritablePowerPortTemplateTypeEnum["Nema115p"] = "nema-1-15p";
    WritablePowerPortTemplateTypeEnum["Nema515p"] = "nema-5-15p";
    WritablePowerPortTemplateTypeEnum["Nema520p"] = "nema-5-20p";
    WritablePowerPortTemplateTypeEnum["Nema530p"] = "nema-5-30p";
    WritablePowerPortTemplateTypeEnum["Nema550p"] = "nema-5-50p";
    WritablePowerPortTemplateTypeEnum["Nema615p"] = "nema-6-15p";
    WritablePowerPortTemplateTypeEnum["Nema620p"] = "nema-6-20p";
    WritablePowerPortTemplateTypeEnum["Nema630p"] = "nema-6-30p";
    WritablePowerPortTemplateTypeEnum["Nema650p"] = "nema-6-50p";
    WritablePowerPortTemplateTypeEnum["Nema1030p"] = "nema-10-30p";
    WritablePowerPortTemplateTypeEnum["Nema1050p"] = "nema-10-50p";
    WritablePowerPortTemplateTypeEnum["Nema1420p"] = "nema-14-20p";
    WritablePowerPortTemplateTypeEnum["Nema1430p"] = "nema-14-30p";
    WritablePowerPortTemplateTypeEnum["Nema1450p"] = "nema-14-50p";
    WritablePowerPortTemplateTypeEnum["Nema1460p"] = "nema-14-60p";
    WritablePowerPortTemplateTypeEnum["NemaL115p"] = "nema-l1-15p";
    WritablePowerPortTemplateTypeEnum["NemaL515p"] = "nema-l5-15p";
    WritablePowerPortTemplateTypeEnum["NemaL520p"] = "nema-l5-20p";
    WritablePowerPortTemplateTypeEnum["NemaL530p"] = "nema-l5-30p";
    WritablePowerPortTemplateTypeEnum["NemaL550p"] = "nema-l5-50p";
    WritablePowerPortTemplateTypeEnum["NemaL615p"] = "nema-l6-15p";
    WritablePowerPortTemplateTypeEnum["NemaL620p"] = "nema-l6-20p";
    WritablePowerPortTemplateTypeEnum["NemaL630p"] = "nema-l6-30p";
    WritablePowerPortTemplateTypeEnum["NemaL650p"] = "nema-l6-50p";
    WritablePowerPortTemplateTypeEnum["NemaL1030p"] = "nema-l10-30p";
    WritablePowerPortTemplateTypeEnum["NemaL1420p"] = "nema-l14-20p";
    WritablePowerPortTemplateTypeEnum["NemaL1430p"] = "nema-l14-30p";
    WritablePowerPortTemplateTypeEnum["NemaL1450p"] = "nema-l14-50p";
    WritablePowerPortTemplateTypeEnum["NemaL1460p"] = "nema-l14-60p";
    WritablePowerPortTemplateTypeEnum["NemaL2120p"] = "nema-l21-20p";
    WritablePowerPortTemplateTypeEnum["NemaL2130p"] = "nema-l21-30p";
    WritablePowerPortTemplateTypeEnum["Cs6361c"] = "cs6361c";
    WritablePowerPortTemplateTypeEnum["Cs6365c"] = "cs6365c";
    WritablePowerPortTemplateTypeEnum["Cs8165c"] = "cs8165c";
    WritablePowerPortTemplateTypeEnum["Cs8265c"] = "cs8265c";
    WritablePowerPortTemplateTypeEnum["Cs8365c"] = "cs8365c";
    WritablePowerPortTemplateTypeEnum["Cs8465c"] = "cs8465c";
    WritablePowerPortTemplateTypeEnum["ItaE"] = "ita-e";
    WritablePowerPortTemplateTypeEnum["ItaF"] = "ita-f";
    WritablePowerPortTemplateTypeEnum["ItaEf"] = "ita-ef";
    WritablePowerPortTemplateTypeEnum["ItaG"] = "ita-g";
    WritablePowerPortTemplateTypeEnum["ItaH"] = "ita-h";
    WritablePowerPortTemplateTypeEnum["ItaI"] = "ita-i";
    WritablePowerPortTemplateTypeEnum["ItaJ"] = "ita-j";
    WritablePowerPortTemplateTypeEnum["ItaK"] = "ita-k";
    WritablePowerPortTemplateTypeEnum["ItaL"] = "ita-l";
    WritablePowerPortTemplateTypeEnum["ItaM"] = "ita-m";
    WritablePowerPortTemplateTypeEnum["ItaN"] = "ita-n";
    WritablePowerPortTemplateTypeEnum["ItaO"] = "ita-o";
})(WritablePowerPortTemplateTypeEnum || (WritablePowerPortTemplateTypeEnum = {}));
var WritablePowerPortTemplateInput = /** @class */ (function (_super) {
    __extends(WritablePowerPortTemplateInput, _super);
    function WritablePowerPortTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocated_draw" }),
        __metadata("design:type", Number)
    ], WritablePowerPortTemplateInput.prototype, "allocatedDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", Number)
    ], WritablePowerPortTemplateInput.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum_draw" }),
        __metadata("design:type", Number)
    ], WritablePowerPortTemplateInput.prototype, "maximumDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritablePowerPortTemplateInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritablePowerPortTemplateInput.prototype, "type", void 0);
    return WritablePowerPortTemplateInput;
}(SpeakeasyBase));
export { WritablePowerPortTemplateInput };
