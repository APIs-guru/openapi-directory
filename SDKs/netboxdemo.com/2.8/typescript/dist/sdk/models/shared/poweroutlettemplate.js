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
import { NestedPowerPortTemplate } from "./nestedpowerporttemplate";
export var PowerOutletTemplateFeedLegLabelEnum;
(function (PowerOutletTemplateFeedLegLabelEnum) {
    PowerOutletTemplateFeedLegLabelEnum["A"] = "A";
    PowerOutletTemplateFeedLegLabelEnum["B"] = "B";
    PowerOutletTemplateFeedLegLabelEnum["C"] = "C";
})(PowerOutletTemplateFeedLegLabelEnum || (PowerOutletTemplateFeedLegLabelEnum = {}));
export var PowerOutletTemplateFeedLegValueEnum;
(function (PowerOutletTemplateFeedLegValueEnum) {
    PowerOutletTemplateFeedLegValueEnum["A"] = "A";
    PowerOutletTemplateFeedLegValueEnum["B"] = "B";
    PowerOutletTemplateFeedLegValueEnum["C"] = "C";
})(PowerOutletTemplateFeedLegValueEnum || (PowerOutletTemplateFeedLegValueEnum = {}));
var PowerOutletTemplateFeedLeg = /** @class */ (function (_super) {
    __extends(PowerOutletTemplateFeedLeg, _super);
    function PowerOutletTemplateFeedLeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerOutletTemplateFeedLeg.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerOutletTemplateFeedLeg.prototype, "value", void 0);
    return PowerOutletTemplateFeedLeg;
}(SpeakeasyBase));
export { PowerOutletTemplateFeedLeg };
export var PowerOutletTemplateTypeLabelEnum;
(function (PowerOutletTemplateTypeLabelEnum) {
    PowerOutletTemplateTypeLabelEnum["C5"] = "C5";
    PowerOutletTemplateTypeLabelEnum["C7"] = "C7";
    PowerOutletTemplateTypeLabelEnum["C13"] = "C13";
    PowerOutletTemplateTypeLabelEnum["C15"] = "C15";
    PowerOutletTemplateTypeLabelEnum["C19"] = "C19";
    PowerOutletTemplateTypeLabelEnum["PPlusNPlusE4H"] = "P+N+E 4H";
    PowerOutletTemplateTypeLabelEnum["PPlusNPlusE6H"] = "P+N+E 6H";
    PowerOutletTemplateTypeLabelEnum["PPlusNPlusE9H"] = "P+N+E 9H";
    PowerOutletTemplateTypeLabelEnum["TwoPPlusE4H"] = "2P+E 4H";
    PowerOutletTemplateTypeLabelEnum["TwoPPlusE6H"] = "2P+E 6H";
    PowerOutletTemplateTypeLabelEnum["TwoPPlusE9H"] = "2P+E 9H";
    PowerOutletTemplateTypeLabelEnum["ThreePPlusE4H"] = "3P+E 4H";
    PowerOutletTemplateTypeLabelEnum["ThreePPlusE6H"] = "3P+E 6H";
    PowerOutletTemplateTypeLabelEnum["ThreePPlusE9H"] = "3P+E 9H";
    PowerOutletTemplateTypeLabelEnum["ThreePPlusNPlusE4H"] = "3P+N+E 4H";
    PowerOutletTemplateTypeLabelEnum["ThreePPlusNPlusE6H"] = "3P+N+E 6H";
    PowerOutletTemplateTypeLabelEnum["ThreePPlusNPlusE9H"] = "3P+N+E 9H";
    PowerOutletTemplateTypeLabelEnum["Nema115R"] = "NEMA 1-15R";
    PowerOutletTemplateTypeLabelEnum["Nema515R"] = "NEMA 5-15R";
    PowerOutletTemplateTypeLabelEnum["Nema520R"] = "NEMA 5-20R";
    PowerOutletTemplateTypeLabelEnum["Nema530R"] = "NEMA 5-30R";
    PowerOutletTemplateTypeLabelEnum["Nema550R"] = "NEMA 5-50R";
    PowerOutletTemplateTypeLabelEnum["Nema615R"] = "NEMA 6-15R";
    PowerOutletTemplateTypeLabelEnum["Nema620R"] = "NEMA 6-20R";
    PowerOutletTemplateTypeLabelEnum["Nema630R"] = "NEMA 6-30R";
    PowerOutletTemplateTypeLabelEnum["Nema650R"] = "NEMA 6-50R";
    PowerOutletTemplateTypeLabelEnum["Nema1030R"] = "NEMA 10-30R";
    PowerOutletTemplateTypeLabelEnum["Nema1050R"] = "NEMA 10-50R";
    PowerOutletTemplateTypeLabelEnum["Nema1420R"] = "NEMA 14-20R";
    PowerOutletTemplateTypeLabelEnum["Nema1430R"] = "NEMA 14-30R";
    PowerOutletTemplateTypeLabelEnum["Nema1450R"] = "NEMA 14-50R";
    PowerOutletTemplateTypeLabelEnum["Nema1460R"] = "NEMA 14-60R";
    PowerOutletTemplateTypeLabelEnum["NemaL115R"] = "NEMA L1-15R";
    PowerOutletTemplateTypeLabelEnum["NemaL515R"] = "NEMA L5-15R";
    PowerOutletTemplateTypeLabelEnum["NemaL520R"] = "NEMA L5-20R";
    PowerOutletTemplateTypeLabelEnum["NemaL530R"] = "NEMA L5-30R";
    PowerOutletTemplateTypeLabelEnum["NemaL550R"] = "NEMA L5-50R";
    PowerOutletTemplateTypeLabelEnum["NemaL615R"] = "NEMA L6-15R";
    PowerOutletTemplateTypeLabelEnum["NemaL620R"] = "NEMA L6-20R";
    PowerOutletTemplateTypeLabelEnum["NemaL630R"] = "NEMA L6-30R";
    PowerOutletTemplateTypeLabelEnum["NemaL650R"] = "NEMA L6-50R";
    PowerOutletTemplateTypeLabelEnum["NemaL1030R"] = "NEMA L10-30R";
    PowerOutletTemplateTypeLabelEnum["NemaL1420R"] = "NEMA L14-20R";
    PowerOutletTemplateTypeLabelEnum["NemaL1430R"] = "NEMA L14-30R";
    PowerOutletTemplateTypeLabelEnum["NemaL1450R"] = "NEMA L14-50R";
    PowerOutletTemplateTypeLabelEnum["NemaL1460R"] = "NEMA L14-60R";
    PowerOutletTemplateTypeLabelEnum["NemaL2120R"] = "NEMA L21-20R";
    PowerOutletTemplateTypeLabelEnum["NemaL2130R"] = "NEMA L21-30R";
    PowerOutletTemplateTypeLabelEnum["Cs6360C"] = "CS6360C";
    PowerOutletTemplateTypeLabelEnum["Cs6364C"] = "CS6364C";
    PowerOutletTemplateTypeLabelEnum["Cs8164C"] = "CS8164C";
    PowerOutletTemplateTypeLabelEnum["Cs8264C"] = "CS8264C";
    PowerOutletTemplateTypeLabelEnum["Cs8364C"] = "CS8364C";
    PowerOutletTemplateTypeLabelEnum["Cs8464C"] = "CS8464C";
    PowerOutletTemplateTypeLabelEnum["ItaTypeECee75"] = "ITA Type E (CEE7/5)";
    PowerOutletTemplateTypeLabelEnum["ItaTypeFCee73"] = "ITA Type F (CEE7/3)";
    PowerOutletTemplateTypeLabelEnum["ItaTypeGBs1363"] = "ITA Type G (BS 1363)";
    PowerOutletTemplateTypeLabelEnum["ItaTypeH"] = "ITA Type H";
    PowerOutletTemplateTypeLabelEnum["ItaTypeI"] = "ITA Type I";
    PowerOutletTemplateTypeLabelEnum["ItaTypeJ"] = "ITA Type J";
    PowerOutletTemplateTypeLabelEnum["ItaTypeK"] = "ITA Type K";
    PowerOutletTemplateTypeLabelEnum["ItaTypeLCei2350"] = "ITA Type L (CEI 23-50)";
    PowerOutletTemplateTypeLabelEnum["ItaTypeMBs546"] = "ITA Type M (BS 546)";
    PowerOutletTemplateTypeLabelEnum["ItaTypeN"] = "ITA Type N";
    PowerOutletTemplateTypeLabelEnum["ItaTypeO"] = "ITA Type O";
    PowerOutletTemplateTypeLabelEnum["HdotCx"] = "HDOT Cx";
})(PowerOutletTemplateTypeLabelEnum || (PowerOutletTemplateTypeLabelEnum = {}));
export var PowerOutletTemplateTypeValueEnum;
(function (PowerOutletTemplateTypeValueEnum) {
    PowerOutletTemplateTypeValueEnum["Iec60320C5"] = "iec-60320-c5";
    PowerOutletTemplateTypeValueEnum["Iec60320C7"] = "iec-60320-c7";
    PowerOutletTemplateTypeValueEnum["Iec60320C13"] = "iec-60320-c13";
    PowerOutletTemplateTypeValueEnum["Iec60320C15"] = "iec-60320-c15";
    PowerOutletTemplateTypeValueEnum["Iec60320C19"] = "iec-60320-c19";
    PowerOutletTemplateTypeValueEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    PowerOutletTemplateTypeValueEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    PowerOutletTemplateTypeValueEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    PowerOutletTemplateTypeValueEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    PowerOutletTemplateTypeValueEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    PowerOutletTemplateTypeValueEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    PowerOutletTemplateTypeValueEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    PowerOutletTemplateTypeValueEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    PowerOutletTemplateTypeValueEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    PowerOutletTemplateTypeValueEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    PowerOutletTemplateTypeValueEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    PowerOutletTemplateTypeValueEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    PowerOutletTemplateTypeValueEnum["Nema115r"] = "nema-1-15r";
    PowerOutletTemplateTypeValueEnum["Nema515r"] = "nema-5-15r";
    PowerOutletTemplateTypeValueEnum["Nema520r"] = "nema-5-20r";
    PowerOutletTemplateTypeValueEnum["Nema530r"] = "nema-5-30r";
    PowerOutletTemplateTypeValueEnum["Nema550r"] = "nema-5-50r";
    PowerOutletTemplateTypeValueEnum["Nema615r"] = "nema-6-15r";
    PowerOutletTemplateTypeValueEnum["Nema620r"] = "nema-6-20r";
    PowerOutletTemplateTypeValueEnum["Nema630r"] = "nema-6-30r";
    PowerOutletTemplateTypeValueEnum["Nema650r"] = "nema-6-50r";
    PowerOutletTemplateTypeValueEnum["Nema1030r"] = "nema-10-30r";
    PowerOutletTemplateTypeValueEnum["Nema1050r"] = "nema-10-50r";
    PowerOutletTemplateTypeValueEnum["Nema1420r"] = "nema-14-20r";
    PowerOutletTemplateTypeValueEnum["Nema1430r"] = "nema-14-30r";
    PowerOutletTemplateTypeValueEnum["Nema1450r"] = "nema-14-50r";
    PowerOutletTemplateTypeValueEnum["Nema1460r"] = "nema-14-60r";
    PowerOutletTemplateTypeValueEnum["NemaL115r"] = "nema-l1-15r";
    PowerOutletTemplateTypeValueEnum["NemaL515r"] = "nema-l5-15r";
    PowerOutletTemplateTypeValueEnum["NemaL520r"] = "nema-l5-20r";
    PowerOutletTemplateTypeValueEnum["NemaL530r"] = "nema-l5-30r";
    PowerOutletTemplateTypeValueEnum["NemaL550r"] = "nema-l5-50r";
    PowerOutletTemplateTypeValueEnum["NemaL615r"] = "nema-l6-15r";
    PowerOutletTemplateTypeValueEnum["NemaL620r"] = "nema-l6-20r";
    PowerOutletTemplateTypeValueEnum["NemaL630r"] = "nema-l6-30r";
    PowerOutletTemplateTypeValueEnum["NemaL650r"] = "nema-l6-50r";
    PowerOutletTemplateTypeValueEnum["NemaL1030r"] = "nema-l10-30r";
    PowerOutletTemplateTypeValueEnum["NemaL1420r"] = "nema-l14-20r";
    PowerOutletTemplateTypeValueEnum["NemaL1430r"] = "nema-l14-30r";
    PowerOutletTemplateTypeValueEnum["NemaL1450r"] = "nema-l14-50r";
    PowerOutletTemplateTypeValueEnum["NemaL1460r"] = "nema-l14-60r";
    PowerOutletTemplateTypeValueEnum["NemaL2120r"] = "nema-l21-20r";
    PowerOutletTemplateTypeValueEnum["NemaL2130r"] = "nema-l21-30r";
    PowerOutletTemplateTypeValueEnum["Cs6360C"] = "CS6360C";
    PowerOutletTemplateTypeValueEnum["Cs6364C"] = "CS6364C";
    PowerOutletTemplateTypeValueEnum["Cs8164C"] = "CS8164C";
    PowerOutletTemplateTypeValueEnum["Cs8264C"] = "CS8264C";
    PowerOutletTemplateTypeValueEnum["Cs8364C"] = "CS8364C";
    PowerOutletTemplateTypeValueEnum["Cs8464C"] = "CS8464C";
    PowerOutletTemplateTypeValueEnum["ItaE"] = "ita-e";
    PowerOutletTemplateTypeValueEnum["ItaF"] = "ita-f";
    PowerOutletTemplateTypeValueEnum["ItaG"] = "ita-g";
    PowerOutletTemplateTypeValueEnum["ItaH"] = "ita-h";
    PowerOutletTemplateTypeValueEnum["ItaI"] = "ita-i";
    PowerOutletTemplateTypeValueEnum["ItaJ"] = "ita-j";
    PowerOutletTemplateTypeValueEnum["ItaK"] = "ita-k";
    PowerOutletTemplateTypeValueEnum["ItaL"] = "ita-l";
    PowerOutletTemplateTypeValueEnum["ItaM"] = "ita-m";
    PowerOutletTemplateTypeValueEnum["ItaN"] = "ita-n";
    PowerOutletTemplateTypeValueEnum["ItaO"] = "ita-o";
    PowerOutletTemplateTypeValueEnum["HdotCx"] = "hdot-cx";
})(PowerOutletTemplateTypeValueEnum || (PowerOutletTemplateTypeValueEnum = {}));
var PowerOutletTemplateType = /** @class */ (function (_super) {
    __extends(PowerOutletTemplateType, _super);
    function PowerOutletTemplateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerOutletTemplateType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerOutletTemplateType.prototype, "value", void 0);
    return PowerOutletTemplateType;
}(SpeakeasyBase));
export { PowerOutletTemplateType };
var PowerOutletTemplate = /** @class */ (function (_super) {
    __extends(PowerOutletTemplate, _super);
    function PowerOutletTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device_type" }),
        __metadata("design:type", NestedDeviceType)
    ], PowerOutletTemplate.prototype, "deviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed_leg" }),
        __metadata("design:type", PowerOutletTemplateFeedLeg)
    ], PowerOutletTemplate.prototype, "feedLeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PowerOutletTemplate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PowerOutletTemplate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power_port" }),
        __metadata("design:type", NestedPowerPortTemplate)
    ], PowerOutletTemplate.prototype, "powerPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", PowerOutletTemplateType)
    ], PowerOutletTemplate.prototype, "type", void 0);
    return PowerOutletTemplate;
}(SpeakeasyBase));
export { PowerOutletTemplate };
