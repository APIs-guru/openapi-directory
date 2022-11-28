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
export var WritablePowerOutletTemplateFeedLegEnum;
(function (WritablePowerOutletTemplateFeedLegEnum) {
    WritablePowerOutletTemplateFeedLegEnum["A"] = "A";
    WritablePowerOutletTemplateFeedLegEnum["B"] = "B";
    WritablePowerOutletTemplateFeedLegEnum["C"] = "C";
})(WritablePowerOutletTemplateFeedLegEnum || (WritablePowerOutletTemplateFeedLegEnum = {}));
export var WritablePowerOutletTemplateTypeEnum;
(function (WritablePowerOutletTemplateTypeEnum) {
    WritablePowerOutletTemplateTypeEnum["Iec60320C5"] = "iec-60320-c5";
    WritablePowerOutletTemplateTypeEnum["Iec60320C7"] = "iec-60320-c7";
    WritablePowerOutletTemplateTypeEnum["Iec60320C13"] = "iec-60320-c13";
    WritablePowerOutletTemplateTypeEnum["Iec60320C15"] = "iec-60320-c15";
    WritablePowerOutletTemplateTypeEnum["Iec60320C19"] = "iec-60320-c19";
    WritablePowerOutletTemplateTypeEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    WritablePowerOutletTemplateTypeEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    WritablePowerOutletTemplateTypeEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    WritablePowerOutletTemplateTypeEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    WritablePowerOutletTemplateTypeEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    WritablePowerOutletTemplateTypeEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    WritablePowerOutletTemplateTypeEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    WritablePowerOutletTemplateTypeEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    WritablePowerOutletTemplateTypeEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    WritablePowerOutletTemplateTypeEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    WritablePowerOutletTemplateTypeEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    WritablePowerOutletTemplateTypeEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    WritablePowerOutletTemplateTypeEnum["Nema115r"] = "nema-1-15r";
    WritablePowerOutletTemplateTypeEnum["Nema515r"] = "nema-5-15r";
    WritablePowerOutletTemplateTypeEnum["Nema520r"] = "nema-5-20r";
    WritablePowerOutletTemplateTypeEnum["Nema530r"] = "nema-5-30r";
    WritablePowerOutletTemplateTypeEnum["Nema550r"] = "nema-5-50r";
    WritablePowerOutletTemplateTypeEnum["Nema615r"] = "nema-6-15r";
    WritablePowerOutletTemplateTypeEnum["Nema620r"] = "nema-6-20r";
    WritablePowerOutletTemplateTypeEnum["Nema630r"] = "nema-6-30r";
    WritablePowerOutletTemplateTypeEnum["Nema650r"] = "nema-6-50r";
    WritablePowerOutletTemplateTypeEnum["Nema1030r"] = "nema-10-30r";
    WritablePowerOutletTemplateTypeEnum["Nema1050r"] = "nema-10-50r";
    WritablePowerOutletTemplateTypeEnum["Nema1420r"] = "nema-14-20r";
    WritablePowerOutletTemplateTypeEnum["Nema1430r"] = "nema-14-30r";
    WritablePowerOutletTemplateTypeEnum["Nema1450r"] = "nema-14-50r";
    WritablePowerOutletTemplateTypeEnum["Nema1460r"] = "nema-14-60r";
    WritablePowerOutletTemplateTypeEnum["NemaL115r"] = "nema-l1-15r";
    WritablePowerOutletTemplateTypeEnum["NemaL515r"] = "nema-l5-15r";
    WritablePowerOutletTemplateTypeEnum["NemaL520r"] = "nema-l5-20r";
    WritablePowerOutletTemplateTypeEnum["NemaL530r"] = "nema-l5-30r";
    WritablePowerOutletTemplateTypeEnum["NemaL550r"] = "nema-l5-50r";
    WritablePowerOutletTemplateTypeEnum["NemaL615r"] = "nema-l6-15r";
    WritablePowerOutletTemplateTypeEnum["NemaL620r"] = "nema-l6-20r";
    WritablePowerOutletTemplateTypeEnum["NemaL630r"] = "nema-l6-30r";
    WritablePowerOutletTemplateTypeEnum["NemaL650r"] = "nema-l6-50r";
    WritablePowerOutletTemplateTypeEnum["NemaL1030r"] = "nema-l10-30r";
    WritablePowerOutletTemplateTypeEnum["NemaL1420r"] = "nema-l14-20r";
    WritablePowerOutletTemplateTypeEnum["NemaL1430r"] = "nema-l14-30r";
    WritablePowerOutletTemplateTypeEnum["NemaL1450r"] = "nema-l14-50r";
    WritablePowerOutletTemplateTypeEnum["NemaL1460r"] = "nema-l14-60r";
    WritablePowerOutletTemplateTypeEnum["NemaL2120r"] = "nema-l21-20r";
    WritablePowerOutletTemplateTypeEnum["NemaL2130r"] = "nema-l21-30r";
    WritablePowerOutletTemplateTypeEnum["Cs6360C"] = "CS6360C";
    WritablePowerOutletTemplateTypeEnum["Cs6364C"] = "CS6364C";
    WritablePowerOutletTemplateTypeEnum["Cs8164C"] = "CS8164C";
    WritablePowerOutletTemplateTypeEnum["Cs8264C"] = "CS8264C";
    WritablePowerOutletTemplateTypeEnum["Cs8364C"] = "CS8364C";
    WritablePowerOutletTemplateTypeEnum["Cs8464C"] = "CS8464C";
    WritablePowerOutletTemplateTypeEnum["ItaE"] = "ita-e";
    WritablePowerOutletTemplateTypeEnum["ItaF"] = "ita-f";
    WritablePowerOutletTemplateTypeEnum["ItaG"] = "ita-g";
    WritablePowerOutletTemplateTypeEnum["ItaH"] = "ita-h";
    WritablePowerOutletTemplateTypeEnum["ItaI"] = "ita-i";
    WritablePowerOutletTemplateTypeEnum["ItaJ"] = "ita-j";
    WritablePowerOutletTemplateTypeEnum["ItaK"] = "ita-k";
    WritablePowerOutletTemplateTypeEnum["ItaL"] = "ita-l";
    WritablePowerOutletTemplateTypeEnum["ItaM"] = "ita-m";
    WritablePowerOutletTemplateTypeEnum["ItaN"] = "ita-n";
    WritablePowerOutletTemplateTypeEnum["ItaO"] = "ita-o";
    WritablePowerOutletTemplateTypeEnum["HdotCx"] = "hdot-cx";
})(WritablePowerOutletTemplateTypeEnum || (WritablePowerOutletTemplateTypeEnum = {}));
var WritablePowerOutletTemplateInput = /** @class */ (function (_super) {
    __extends(WritablePowerOutletTemplateInput, _super);
    function WritablePowerOutletTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", Number)
    ], WritablePowerOutletTemplateInput.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed_leg" }),
        __metadata("design:type", String)
    ], WritablePowerOutletTemplateInput.prototype, "feedLeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritablePowerOutletTemplateInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power_port" }),
        __metadata("design:type", Number)
    ], WritablePowerOutletTemplateInput.prototype, "powerPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritablePowerOutletTemplateInput.prototype, "type", void 0);
    return WritablePowerOutletTemplateInput;
}(SpeakeasyBase));
export { WritablePowerOutletTemplateInput };
