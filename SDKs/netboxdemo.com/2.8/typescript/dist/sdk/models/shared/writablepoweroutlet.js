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
export var WritablePowerOutletFeedLegEnum;
(function (WritablePowerOutletFeedLegEnum) {
    WritablePowerOutletFeedLegEnum["A"] = "A";
    WritablePowerOutletFeedLegEnum["B"] = "B";
    WritablePowerOutletFeedLegEnum["C"] = "C";
})(WritablePowerOutletFeedLegEnum || (WritablePowerOutletFeedLegEnum = {}));
export var WritablePowerOutletTypeEnum;
(function (WritablePowerOutletTypeEnum) {
    WritablePowerOutletTypeEnum["Iec60320C5"] = "iec-60320-c5";
    WritablePowerOutletTypeEnum["Iec60320C7"] = "iec-60320-c7";
    WritablePowerOutletTypeEnum["Iec60320C13"] = "iec-60320-c13";
    WritablePowerOutletTypeEnum["Iec60320C15"] = "iec-60320-c15";
    WritablePowerOutletTypeEnum["Iec60320C19"] = "iec-60320-c19";
    WritablePowerOutletTypeEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    WritablePowerOutletTypeEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    WritablePowerOutletTypeEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    WritablePowerOutletTypeEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    WritablePowerOutletTypeEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    WritablePowerOutletTypeEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    WritablePowerOutletTypeEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    WritablePowerOutletTypeEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    WritablePowerOutletTypeEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    WritablePowerOutletTypeEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    WritablePowerOutletTypeEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    WritablePowerOutletTypeEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    WritablePowerOutletTypeEnum["Nema115r"] = "nema-1-15r";
    WritablePowerOutletTypeEnum["Nema515r"] = "nema-5-15r";
    WritablePowerOutletTypeEnum["Nema520r"] = "nema-5-20r";
    WritablePowerOutletTypeEnum["Nema530r"] = "nema-5-30r";
    WritablePowerOutletTypeEnum["Nema550r"] = "nema-5-50r";
    WritablePowerOutletTypeEnum["Nema615r"] = "nema-6-15r";
    WritablePowerOutletTypeEnum["Nema620r"] = "nema-6-20r";
    WritablePowerOutletTypeEnum["Nema630r"] = "nema-6-30r";
    WritablePowerOutletTypeEnum["Nema650r"] = "nema-6-50r";
    WritablePowerOutletTypeEnum["Nema1030r"] = "nema-10-30r";
    WritablePowerOutletTypeEnum["Nema1050r"] = "nema-10-50r";
    WritablePowerOutletTypeEnum["Nema1420r"] = "nema-14-20r";
    WritablePowerOutletTypeEnum["Nema1430r"] = "nema-14-30r";
    WritablePowerOutletTypeEnum["Nema1450r"] = "nema-14-50r";
    WritablePowerOutletTypeEnum["Nema1460r"] = "nema-14-60r";
    WritablePowerOutletTypeEnum["NemaL115r"] = "nema-l1-15r";
    WritablePowerOutletTypeEnum["NemaL515r"] = "nema-l5-15r";
    WritablePowerOutletTypeEnum["NemaL520r"] = "nema-l5-20r";
    WritablePowerOutletTypeEnum["NemaL530r"] = "nema-l5-30r";
    WritablePowerOutletTypeEnum["NemaL550r"] = "nema-l5-50r";
    WritablePowerOutletTypeEnum["NemaL615r"] = "nema-l6-15r";
    WritablePowerOutletTypeEnum["NemaL620r"] = "nema-l6-20r";
    WritablePowerOutletTypeEnum["NemaL630r"] = "nema-l6-30r";
    WritablePowerOutletTypeEnum["NemaL650r"] = "nema-l6-50r";
    WritablePowerOutletTypeEnum["NemaL1030r"] = "nema-l10-30r";
    WritablePowerOutletTypeEnum["NemaL1420r"] = "nema-l14-20r";
    WritablePowerOutletTypeEnum["NemaL1430r"] = "nema-l14-30r";
    WritablePowerOutletTypeEnum["NemaL1450r"] = "nema-l14-50r";
    WritablePowerOutletTypeEnum["NemaL1460r"] = "nema-l14-60r";
    WritablePowerOutletTypeEnum["NemaL2120r"] = "nema-l21-20r";
    WritablePowerOutletTypeEnum["NemaL2130r"] = "nema-l21-30r";
    WritablePowerOutletTypeEnum["Cs6360C"] = "CS6360C";
    WritablePowerOutletTypeEnum["Cs6364C"] = "CS6364C";
    WritablePowerOutletTypeEnum["Cs8164C"] = "CS8164C";
    WritablePowerOutletTypeEnum["Cs8264C"] = "CS8264C";
    WritablePowerOutletTypeEnum["Cs8364C"] = "CS8364C";
    WritablePowerOutletTypeEnum["Cs8464C"] = "CS8464C";
    WritablePowerOutletTypeEnum["ItaE"] = "ita-e";
    WritablePowerOutletTypeEnum["ItaF"] = "ita-f";
    WritablePowerOutletTypeEnum["ItaG"] = "ita-g";
    WritablePowerOutletTypeEnum["ItaH"] = "ita-h";
    WritablePowerOutletTypeEnum["ItaI"] = "ita-i";
    WritablePowerOutletTypeEnum["ItaJ"] = "ita-j";
    WritablePowerOutletTypeEnum["ItaK"] = "ita-k";
    WritablePowerOutletTypeEnum["ItaL"] = "ita-l";
    WritablePowerOutletTypeEnum["ItaM"] = "ita-m";
    WritablePowerOutletTypeEnum["ItaN"] = "ita-n";
    WritablePowerOutletTypeEnum["ItaO"] = "ita-o";
    WritablePowerOutletTypeEnum["HdotCx"] = "hdot-cx";
})(WritablePowerOutletTypeEnum || (WritablePowerOutletTypeEnum = {}));
var WritablePowerOutletInput = /** @class */ (function (_super) {
    __extends(WritablePowerOutletInput, _super);
    function WritablePowerOutletInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCableInput)
    ], WritablePowerOutletInput.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_status" }),
        __metadata("design:type", Boolean)
    ], WritablePowerOutletInput.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WritablePowerOutletInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", Number)
    ], WritablePowerOutletInput.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed_leg" }),
        __metadata("design:type", String)
    ], WritablePowerOutletInput.prototype, "feedLeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], WritablePowerOutletInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power_port" }),
        __metadata("design:type", Number)
    ], WritablePowerOutletInput.prototype, "powerPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritablePowerOutletInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], WritablePowerOutletInput.prototype, "type", void 0);
    return WritablePowerOutletInput;
}(SpeakeasyBase));
export { WritablePowerOutletInput };
