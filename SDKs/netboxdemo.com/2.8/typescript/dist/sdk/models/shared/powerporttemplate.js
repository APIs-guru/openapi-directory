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
export var PowerPortTemplateTypeLabelEnum;
(function (PowerPortTemplateTypeLabelEnum) {
    PowerPortTemplateTypeLabelEnum["C6"] = "C6";
    PowerPortTemplateTypeLabelEnum["C8"] = "C8";
    PowerPortTemplateTypeLabelEnum["C14"] = "C14";
    PowerPortTemplateTypeLabelEnum["C16"] = "C16";
    PowerPortTemplateTypeLabelEnum["C20"] = "C20";
    PowerPortTemplateTypeLabelEnum["PPlusNPlusE4H"] = "P+N+E 4H";
    PowerPortTemplateTypeLabelEnum["PPlusNPlusE6H"] = "P+N+E 6H";
    PowerPortTemplateTypeLabelEnum["PPlusNPlusE9H"] = "P+N+E 9H";
    PowerPortTemplateTypeLabelEnum["TwoPPlusE4H"] = "2P+E 4H";
    PowerPortTemplateTypeLabelEnum["TwoPPlusE6H"] = "2P+E 6H";
    PowerPortTemplateTypeLabelEnum["TwoPPlusE9H"] = "2P+E 9H";
    PowerPortTemplateTypeLabelEnum["ThreePPlusE4H"] = "3P+E 4H";
    PowerPortTemplateTypeLabelEnum["ThreePPlusE6H"] = "3P+E 6H";
    PowerPortTemplateTypeLabelEnum["ThreePPlusE9H"] = "3P+E 9H";
    PowerPortTemplateTypeLabelEnum["ThreePPlusNPlusE4H"] = "3P+N+E 4H";
    PowerPortTemplateTypeLabelEnum["ThreePPlusNPlusE6H"] = "3P+N+E 6H";
    PowerPortTemplateTypeLabelEnum["ThreePPlusNPlusE9H"] = "3P+N+E 9H";
    PowerPortTemplateTypeLabelEnum["Nema115P"] = "NEMA 1-15P";
    PowerPortTemplateTypeLabelEnum["Nema515P"] = "NEMA 5-15P";
    PowerPortTemplateTypeLabelEnum["Nema520P"] = "NEMA 5-20P";
    PowerPortTemplateTypeLabelEnum["Nema530P"] = "NEMA 5-30P";
    PowerPortTemplateTypeLabelEnum["Nema550P"] = "NEMA 5-50P";
    PowerPortTemplateTypeLabelEnum["Nema615P"] = "NEMA 6-15P";
    PowerPortTemplateTypeLabelEnum["Nema620P"] = "NEMA 6-20P";
    PowerPortTemplateTypeLabelEnum["Nema630P"] = "NEMA 6-30P";
    PowerPortTemplateTypeLabelEnum["Nema650P"] = "NEMA 6-50P";
    PowerPortTemplateTypeLabelEnum["Nema1030P"] = "NEMA 10-30P";
    PowerPortTemplateTypeLabelEnum["Nema1050P"] = "NEMA 10-50P";
    PowerPortTemplateTypeLabelEnum["Nema1420P"] = "NEMA 14-20P";
    PowerPortTemplateTypeLabelEnum["Nema1430P"] = "NEMA 14-30P";
    PowerPortTemplateTypeLabelEnum["Nema1450P"] = "NEMA 14-50P";
    PowerPortTemplateTypeLabelEnum["Nema1460P"] = "NEMA 14-60P";
    PowerPortTemplateTypeLabelEnum["NemaL115P"] = "NEMA L1-15P";
    PowerPortTemplateTypeLabelEnum["NemaL515P"] = "NEMA L5-15P";
    PowerPortTemplateTypeLabelEnum["NemaL520P"] = "NEMA L5-20P";
    PowerPortTemplateTypeLabelEnum["NemaL530P"] = "NEMA L5-30P";
    PowerPortTemplateTypeLabelEnum["NemaL550P"] = "NEMA L5-50P";
    PowerPortTemplateTypeLabelEnum["NemaL615P"] = "NEMA L6-15P";
    PowerPortTemplateTypeLabelEnum["NemaL620P"] = "NEMA L6-20P";
    PowerPortTemplateTypeLabelEnum["NemaL630P"] = "NEMA L6-30P";
    PowerPortTemplateTypeLabelEnum["NemaL650P"] = "NEMA L6-50P";
    PowerPortTemplateTypeLabelEnum["NemaL1030P"] = "NEMA L10-30P";
    PowerPortTemplateTypeLabelEnum["NemaL1420P"] = "NEMA L14-20P";
    PowerPortTemplateTypeLabelEnum["NemaL1430P"] = "NEMA L14-30P";
    PowerPortTemplateTypeLabelEnum["NemaL1450P"] = "NEMA L14-50P";
    PowerPortTemplateTypeLabelEnum["NemaL1460P"] = "NEMA L14-60P";
    PowerPortTemplateTypeLabelEnum["NemaL2120P"] = "NEMA L21-20P";
    PowerPortTemplateTypeLabelEnum["NemaL2130P"] = "NEMA L21-30P";
    PowerPortTemplateTypeLabelEnum["Cs6361C"] = "CS6361C";
    PowerPortTemplateTypeLabelEnum["Cs6365C"] = "CS6365C";
    PowerPortTemplateTypeLabelEnum["Cs8165C"] = "CS8165C";
    PowerPortTemplateTypeLabelEnum["Cs8265C"] = "CS8265C";
    PowerPortTemplateTypeLabelEnum["Cs8365C"] = "CS8365C";
    PowerPortTemplateTypeLabelEnum["Cs8465C"] = "CS8465C";
    PowerPortTemplateTypeLabelEnum["ItaTypeECee75"] = "ITA Type E (CEE 7/5)";
    PowerPortTemplateTypeLabelEnum["ItaTypeFCee74"] = "ITA Type F (CEE 7/4)";
    PowerPortTemplateTypeLabelEnum["ItaTypeEFCee77"] = "ITA Type E/F (CEE 7/7)";
    PowerPortTemplateTypeLabelEnum["ItaTypeGBs1363"] = "ITA Type G (BS 1363)";
    PowerPortTemplateTypeLabelEnum["ItaTypeH"] = "ITA Type H";
    PowerPortTemplateTypeLabelEnum["ItaTypeI"] = "ITA Type I";
    PowerPortTemplateTypeLabelEnum["ItaTypeJ"] = "ITA Type J";
    PowerPortTemplateTypeLabelEnum["ItaTypeK"] = "ITA Type K";
    PowerPortTemplateTypeLabelEnum["ItaTypeLCei2350"] = "ITA Type L (CEI 23-50)";
    PowerPortTemplateTypeLabelEnum["ItaTypeMBs546"] = "ITA Type M (BS 546)";
    PowerPortTemplateTypeLabelEnum["ItaTypeN"] = "ITA Type N";
    PowerPortTemplateTypeLabelEnum["ItaTypeO"] = "ITA Type O";
})(PowerPortTemplateTypeLabelEnum || (PowerPortTemplateTypeLabelEnum = {}));
export var PowerPortTemplateTypeValueEnum;
(function (PowerPortTemplateTypeValueEnum) {
    PowerPortTemplateTypeValueEnum["Iec60320C6"] = "iec-60320-c6";
    PowerPortTemplateTypeValueEnum["Iec60320C8"] = "iec-60320-c8";
    PowerPortTemplateTypeValueEnum["Iec60320C14"] = "iec-60320-c14";
    PowerPortTemplateTypeValueEnum["Iec60320C16"] = "iec-60320-c16";
    PowerPortTemplateTypeValueEnum["Iec60320C20"] = "iec-60320-c20";
    PowerPortTemplateTypeValueEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    PowerPortTemplateTypeValueEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    PowerPortTemplateTypeValueEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    PowerPortTemplateTypeValueEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    PowerPortTemplateTypeValueEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    PowerPortTemplateTypeValueEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    PowerPortTemplateTypeValueEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    PowerPortTemplateTypeValueEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    PowerPortTemplateTypeValueEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    PowerPortTemplateTypeValueEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    PowerPortTemplateTypeValueEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    PowerPortTemplateTypeValueEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    PowerPortTemplateTypeValueEnum["Nema115p"] = "nema-1-15p";
    PowerPortTemplateTypeValueEnum["Nema515p"] = "nema-5-15p";
    PowerPortTemplateTypeValueEnum["Nema520p"] = "nema-5-20p";
    PowerPortTemplateTypeValueEnum["Nema530p"] = "nema-5-30p";
    PowerPortTemplateTypeValueEnum["Nema550p"] = "nema-5-50p";
    PowerPortTemplateTypeValueEnum["Nema615p"] = "nema-6-15p";
    PowerPortTemplateTypeValueEnum["Nema620p"] = "nema-6-20p";
    PowerPortTemplateTypeValueEnum["Nema630p"] = "nema-6-30p";
    PowerPortTemplateTypeValueEnum["Nema650p"] = "nema-6-50p";
    PowerPortTemplateTypeValueEnum["Nema1030p"] = "nema-10-30p";
    PowerPortTemplateTypeValueEnum["Nema1050p"] = "nema-10-50p";
    PowerPortTemplateTypeValueEnum["Nema1420p"] = "nema-14-20p";
    PowerPortTemplateTypeValueEnum["Nema1430p"] = "nema-14-30p";
    PowerPortTemplateTypeValueEnum["Nema1450p"] = "nema-14-50p";
    PowerPortTemplateTypeValueEnum["Nema1460p"] = "nema-14-60p";
    PowerPortTemplateTypeValueEnum["NemaL115p"] = "nema-l1-15p";
    PowerPortTemplateTypeValueEnum["NemaL515p"] = "nema-l5-15p";
    PowerPortTemplateTypeValueEnum["NemaL520p"] = "nema-l5-20p";
    PowerPortTemplateTypeValueEnum["NemaL530p"] = "nema-l5-30p";
    PowerPortTemplateTypeValueEnum["NemaL550p"] = "nema-l5-50p";
    PowerPortTemplateTypeValueEnum["NemaL615p"] = "nema-l6-15p";
    PowerPortTemplateTypeValueEnum["NemaL620p"] = "nema-l6-20p";
    PowerPortTemplateTypeValueEnum["NemaL630p"] = "nema-l6-30p";
    PowerPortTemplateTypeValueEnum["NemaL650p"] = "nema-l6-50p";
    PowerPortTemplateTypeValueEnum["NemaL1030p"] = "nema-l10-30p";
    PowerPortTemplateTypeValueEnum["NemaL1420p"] = "nema-l14-20p";
    PowerPortTemplateTypeValueEnum["NemaL1430p"] = "nema-l14-30p";
    PowerPortTemplateTypeValueEnum["NemaL1450p"] = "nema-l14-50p";
    PowerPortTemplateTypeValueEnum["NemaL1460p"] = "nema-l14-60p";
    PowerPortTemplateTypeValueEnum["NemaL2120p"] = "nema-l21-20p";
    PowerPortTemplateTypeValueEnum["NemaL2130p"] = "nema-l21-30p";
    PowerPortTemplateTypeValueEnum["Cs6361c"] = "cs6361c";
    PowerPortTemplateTypeValueEnum["Cs6365c"] = "cs6365c";
    PowerPortTemplateTypeValueEnum["Cs8165c"] = "cs8165c";
    PowerPortTemplateTypeValueEnum["Cs8265c"] = "cs8265c";
    PowerPortTemplateTypeValueEnum["Cs8365c"] = "cs8365c";
    PowerPortTemplateTypeValueEnum["Cs8465c"] = "cs8465c";
    PowerPortTemplateTypeValueEnum["ItaE"] = "ita-e";
    PowerPortTemplateTypeValueEnum["ItaF"] = "ita-f";
    PowerPortTemplateTypeValueEnum["ItaEf"] = "ita-ef";
    PowerPortTemplateTypeValueEnum["ItaG"] = "ita-g";
    PowerPortTemplateTypeValueEnum["ItaH"] = "ita-h";
    PowerPortTemplateTypeValueEnum["ItaI"] = "ita-i";
    PowerPortTemplateTypeValueEnum["ItaJ"] = "ita-j";
    PowerPortTemplateTypeValueEnum["ItaK"] = "ita-k";
    PowerPortTemplateTypeValueEnum["ItaL"] = "ita-l";
    PowerPortTemplateTypeValueEnum["ItaM"] = "ita-m";
    PowerPortTemplateTypeValueEnum["ItaN"] = "ita-n";
    PowerPortTemplateTypeValueEnum["ItaO"] = "ita-o";
})(PowerPortTemplateTypeValueEnum || (PowerPortTemplateTypeValueEnum = {}));
var PowerPortTemplateType = /** @class */ (function (_super) {
    __extends(PowerPortTemplateType, _super);
    function PowerPortTemplateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerPortTemplateType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerPortTemplateType.prototype, "value", void 0);
    return PowerPortTemplateType;
}(SpeakeasyBase));
export { PowerPortTemplateType };
var PowerPortTemplate = /** @class */ (function (_super) {
    __extends(PowerPortTemplate, _super);
    function PowerPortTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocated_draw" }),
        __metadata("design:type", Number)
    ], PowerPortTemplate.prototype, "allocatedDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", NestedDeviceType)
    ], PowerPortTemplate.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PowerPortTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum_draw" }),
        __metadata("design:type", Number)
    ], PowerPortTemplate.prototype, "maximumDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PowerPortTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", PowerPortTemplateType)
    ], PowerPortTemplate.prototype, "type", void 0);
    return PowerPortTemplate;
}(SpeakeasyBase));
export { PowerPortTemplate };
