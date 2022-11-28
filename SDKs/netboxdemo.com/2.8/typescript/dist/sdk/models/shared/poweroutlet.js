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
import { NestedPowerPort } from "./nestedpowerport";
export var PowerOutletConnectionStatusLabelEnum;
(function (PowerOutletConnectionStatusLabelEnum) {
    PowerOutletConnectionStatusLabelEnum["NotConnected"] = "Not Connected";
    PowerOutletConnectionStatusLabelEnum["Connected"] = "Connected";
})(PowerOutletConnectionStatusLabelEnum || (PowerOutletConnectionStatusLabelEnum = {}));
var PowerOutletConnectionStatus = /** @class */ (function (_super) {
    __extends(PowerOutletConnectionStatus, _super);
    function PowerOutletConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerOutletConnectionStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], PowerOutletConnectionStatus.prototype, "value", void 0);
    return PowerOutletConnectionStatus;
}(SpeakeasyBase));
export { PowerOutletConnectionStatus };
export var PowerOutletFeedLegLabelEnum;
(function (PowerOutletFeedLegLabelEnum) {
    PowerOutletFeedLegLabelEnum["A"] = "A";
    PowerOutletFeedLegLabelEnum["B"] = "B";
    PowerOutletFeedLegLabelEnum["C"] = "C";
})(PowerOutletFeedLegLabelEnum || (PowerOutletFeedLegLabelEnum = {}));
export var PowerOutletFeedLegValueEnum;
(function (PowerOutletFeedLegValueEnum) {
    PowerOutletFeedLegValueEnum["A"] = "A";
    PowerOutletFeedLegValueEnum["B"] = "B";
    PowerOutletFeedLegValueEnum["C"] = "C";
})(PowerOutletFeedLegValueEnum || (PowerOutletFeedLegValueEnum = {}));
var PowerOutletFeedLeg = /** @class */ (function (_super) {
    __extends(PowerOutletFeedLeg, _super);
    function PowerOutletFeedLeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerOutletFeedLeg.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerOutletFeedLeg.prototype, "value", void 0);
    return PowerOutletFeedLeg;
}(SpeakeasyBase));
export { PowerOutletFeedLeg };
export var PowerOutletTypeLabelEnum;
(function (PowerOutletTypeLabelEnum) {
    PowerOutletTypeLabelEnum["C5"] = "C5";
    PowerOutletTypeLabelEnum["C7"] = "C7";
    PowerOutletTypeLabelEnum["C13"] = "C13";
    PowerOutletTypeLabelEnum["C15"] = "C15";
    PowerOutletTypeLabelEnum["C19"] = "C19";
    PowerOutletTypeLabelEnum["PPlusNPlusE4H"] = "P+N+E 4H";
    PowerOutletTypeLabelEnum["PPlusNPlusE6H"] = "P+N+E 6H";
    PowerOutletTypeLabelEnum["PPlusNPlusE9H"] = "P+N+E 9H";
    PowerOutletTypeLabelEnum["TwoPPlusE4H"] = "2P+E 4H";
    PowerOutletTypeLabelEnum["TwoPPlusE6H"] = "2P+E 6H";
    PowerOutletTypeLabelEnum["TwoPPlusE9H"] = "2P+E 9H";
    PowerOutletTypeLabelEnum["ThreePPlusE4H"] = "3P+E 4H";
    PowerOutletTypeLabelEnum["ThreePPlusE6H"] = "3P+E 6H";
    PowerOutletTypeLabelEnum["ThreePPlusE9H"] = "3P+E 9H";
    PowerOutletTypeLabelEnum["ThreePPlusNPlusE4H"] = "3P+N+E 4H";
    PowerOutletTypeLabelEnum["ThreePPlusNPlusE6H"] = "3P+N+E 6H";
    PowerOutletTypeLabelEnum["ThreePPlusNPlusE9H"] = "3P+N+E 9H";
    PowerOutletTypeLabelEnum["Nema115R"] = "NEMA 1-15R";
    PowerOutletTypeLabelEnum["Nema515R"] = "NEMA 5-15R";
    PowerOutletTypeLabelEnum["Nema520R"] = "NEMA 5-20R";
    PowerOutletTypeLabelEnum["Nema530R"] = "NEMA 5-30R";
    PowerOutletTypeLabelEnum["Nema550R"] = "NEMA 5-50R";
    PowerOutletTypeLabelEnum["Nema615R"] = "NEMA 6-15R";
    PowerOutletTypeLabelEnum["Nema620R"] = "NEMA 6-20R";
    PowerOutletTypeLabelEnum["Nema630R"] = "NEMA 6-30R";
    PowerOutletTypeLabelEnum["Nema650R"] = "NEMA 6-50R";
    PowerOutletTypeLabelEnum["Nema1030R"] = "NEMA 10-30R";
    PowerOutletTypeLabelEnum["Nema1050R"] = "NEMA 10-50R";
    PowerOutletTypeLabelEnum["Nema1420R"] = "NEMA 14-20R";
    PowerOutletTypeLabelEnum["Nema1430R"] = "NEMA 14-30R";
    PowerOutletTypeLabelEnum["Nema1450R"] = "NEMA 14-50R";
    PowerOutletTypeLabelEnum["Nema1460R"] = "NEMA 14-60R";
    PowerOutletTypeLabelEnum["NemaL115R"] = "NEMA L1-15R";
    PowerOutletTypeLabelEnum["NemaL515R"] = "NEMA L5-15R";
    PowerOutletTypeLabelEnum["NemaL520R"] = "NEMA L5-20R";
    PowerOutletTypeLabelEnum["NemaL530R"] = "NEMA L5-30R";
    PowerOutletTypeLabelEnum["NemaL550R"] = "NEMA L5-50R";
    PowerOutletTypeLabelEnum["NemaL615R"] = "NEMA L6-15R";
    PowerOutletTypeLabelEnum["NemaL620R"] = "NEMA L6-20R";
    PowerOutletTypeLabelEnum["NemaL630R"] = "NEMA L6-30R";
    PowerOutletTypeLabelEnum["NemaL650R"] = "NEMA L6-50R";
    PowerOutletTypeLabelEnum["NemaL1030R"] = "NEMA L10-30R";
    PowerOutletTypeLabelEnum["NemaL1420R"] = "NEMA L14-20R";
    PowerOutletTypeLabelEnum["NemaL1430R"] = "NEMA L14-30R";
    PowerOutletTypeLabelEnum["NemaL1450R"] = "NEMA L14-50R";
    PowerOutletTypeLabelEnum["NemaL1460R"] = "NEMA L14-60R";
    PowerOutletTypeLabelEnum["NemaL2120R"] = "NEMA L21-20R";
    PowerOutletTypeLabelEnum["NemaL2130R"] = "NEMA L21-30R";
    PowerOutletTypeLabelEnum["Cs6360C"] = "CS6360C";
    PowerOutletTypeLabelEnum["Cs6364C"] = "CS6364C";
    PowerOutletTypeLabelEnum["Cs8164C"] = "CS8164C";
    PowerOutletTypeLabelEnum["Cs8264C"] = "CS8264C";
    PowerOutletTypeLabelEnum["Cs8364C"] = "CS8364C";
    PowerOutletTypeLabelEnum["Cs8464C"] = "CS8464C";
    PowerOutletTypeLabelEnum["ItaTypeECee75"] = "ITA Type E (CEE7/5)";
    PowerOutletTypeLabelEnum["ItaTypeFCee73"] = "ITA Type F (CEE7/3)";
    PowerOutletTypeLabelEnum["ItaTypeGBs1363"] = "ITA Type G (BS 1363)";
    PowerOutletTypeLabelEnum["ItaTypeH"] = "ITA Type H";
    PowerOutletTypeLabelEnum["ItaTypeI"] = "ITA Type I";
    PowerOutletTypeLabelEnum["ItaTypeJ"] = "ITA Type J";
    PowerOutletTypeLabelEnum["ItaTypeK"] = "ITA Type K";
    PowerOutletTypeLabelEnum["ItaTypeLCei2350"] = "ITA Type L (CEI 23-50)";
    PowerOutletTypeLabelEnum["ItaTypeMBs546"] = "ITA Type M (BS 546)";
    PowerOutletTypeLabelEnum["ItaTypeN"] = "ITA Type N";
    PowerOutletTypeLabelEnum["ItaTypeO"] = "ITA Type O";
    PowerOutletTypeLabelEnum["HdotCx"] = "HDOT Cx";
})(PowerOutletTypeLabelEnum || (PowerOutletTypeLabelEnum = {}));
export var PowerOutletTypeValueEnum;
(function (PowerOutletTypeValueEnum) {
    PowerOutletTypeValueEnum["Iec60320C5"] = "iec-60320-c5";
    PowerOutletTypeValueEnum["Iec60320C7"] = "iec-60320-c7";
    PowerOutletTypeValueEnum["Iec60320C13"] = "iec-60320-c13";
    PowerOutletTypeValueEnum["Iec60320C15"] = "iec-60320-c15";
    PowerOutletTypeValueEnum["Iec60320C19"] = "iec-60320-c19";
    PowerOutletTypeValueEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    PowerOutletTypeValueEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    PowerOutletTypeValueEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    PowerOutletTypeValueEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    PowerOutletTypeValueEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    PowerOutletTypeValueEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    PowerOutletTypeValueEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    PowerOutletTypeValueEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    PowerOutletTypeValueEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    PowerOutletTypeValueEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    PowerOutletTypeValueEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    PowerOutletTypeValueEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    PowerOutletTypeValueEnum["Nema115r"] = "nema-1-15r";
    PowerOutletTypeValueEnum["Nema515r"] = "nema-5-15r";
    PowerOutletTypeValueEnum["Nema520r"] = "nema-5-20r";
    PowerOutletTypeValueEnum["Nema530r"] = "nema-5-30r";
    PowerOutletTypeValueEnum["Nema550r"] = "nema-5-50r";
    PowerOutletTypeValueEnum["Nema615r"] = "nema-6-15r";
    PowerOutletTypeValueEnum["Nema620r"] = "nema-6-20r";
    PowerOutletTypeValueEnum["Nema630r"] = "nema-6-30r";
    PowerOutletTypeValueEnum["Nema650r"] = "nema-6-50r";
    PowerOutletTypeValueEnum["Nema1030r"] = "nema-10-30r";
    PowerOutletTypeValueEnum["Nema1050r"] = "nema-10-50r";
    PowerOutletTypeValueEnum["Nema1420r"] = "nema-14-20r";
    PowerOutletTypeValueEnum["Nema1430r"] = "nema-14-30r";
    PowerOutletTypeValueEnum["Nema1450r"] = "nema-14-50r";
    PowerOutletTypeValueEnum["Nema1460r"] = "nema-14-60r";
    PowerOutletTypeValueEnum["NemaL115r"] = "nema-l1-15r";
    PowerOutletTypeValueEnum["NemaL515r"] = "nema-l5-15r";
    PowerOutletTypeValueEnum["NemaL520r"] = "nema-l5-20r";
    PowerOutletTypeValueEnum["NemaL530r"] = "nema-l5-30r";
    PowerOutletTypeValueEnum["NemaL550r"] = "nema-l5-50r";
    PowerOutletTypeValueEnum["NemaL615r"] = "nema-l6-15r";
    PowerOutletTypeValueEnum["NemaL620r"] = "nema-l6-20r";
    PowerOutletTypeValueEnum["NemaL630r"] = "nema-l6-30r";
    PowerOutletTypeValueEnum["NemaL650r"] = "nema-l6-50r";
    PowerOutletTypeValueEnum["NemaL1030r"] = "nema-l10-30r";
    PowerOutletTypeValueEnum["NemaL1420r"] = "nema-l14-20r";
    PowerOutletTypeValueEnum["NemaL1430r"] = "nema-l14-30r";
    PowerOutletTypeValueEnum["NemaL1450r"] = "nema-l14-50r";
    PowerOutletTypeValueEnum["NemaL1460r"] = "nema-l14-60r";
    PowerOutletTypeValueEnum["NemaL2120r"] = "nema-l21-20r";
    PowerOutletTypeValueEnum["NemaL2130r"] = "nema-l21-30r";
    PowerOutletTypeValueEnum["Cs6360C"] = "CS6360C";
    PowerOutletTypeValueEnum["Cs6364C"] = "CS6364C";
    PowerOutletTypeValueEnum["Cs8164C"] = "CS8164C";
    PowerOutletTypeValueEnum["Cs8264C"] = "CS8264C";
    PowerOutletTypeValueEnum["Cs8364C"] = "CS8364C";
    PowerOutletTypeValueEnum["Cs8464C"] = "CS8464C";
    PowerOutletTypeValueEnum["ItaE"] = "ita-e";
    PowerOutletTypeValueEnum["ItaF"] = "ita-f";
    PowerOutletTypeValueEnum["ItaG"] = "ita-g";
    PowerOutletTypeValueEnum["ItaH"] = "ita-h";
    PowerOutletTypeValueEnum["ItaI"] = "ita-i";
    PowerOutletTypeValueEnum["ItaJ"] = "ita-j";
    PowerOutletTypeValueEnum["ItaK"] = "ita-k";
    PowerOutletTypeValueEnum["ItaL"] = "ita-l";
    PowerOutletTypeValueEnum["ItaM"] = "ita-m";
    PowerOutletTypeValueEnum["ItaN"] = "ita-n";
    PowerOutletTypeValueEnum["ItaO"] = "ita-o";
    PowerOutletTypeValueEnum["HdotCx"] = "hdot-cx";
})(PowerOutletTypeValueEnum || (PowerOutletTypeValueEnum = {}));
var PowerOutletType = /** @class */ (function (_super) {
    __extends(PowerOutletType, _super);
    function PowerOutletType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerOutletType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerOutletType.prototype, "value", void 0);
    return PowerOutletType;
}(SpeakeasyBase));
export { PowerOutletType };
var PowerOutlet = /** @class */ (function (_super) {
    __extends(PowerOutlet, _super);
    function PowerOutlet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCable)
    ], PowerOutlet.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected_endpoint" }),
        __metadata("design:type", Map)
    ], PowerOutlet.prototype, "connectedEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected_endpoint_type" }),
        __metadata("design:type", String)
    ], PowerOutlet.prototype, "connectedEndpointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_status" }),
        __metadata("design:type", PowerOutletConnectionStatus)
    ], PowerOutlet.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PowerOutlet.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", NestedDevice)
    ], PowerOutlet.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feed_leg" }),
        __metadata("design:type", PowerOutletFeedLeg)
    ], PowerOutlet.prototype, "feedLeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PowerOutlet.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PowerOutlet.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=power_port" }),
        __metadata("design:type", NestedPowerPort)
    ], PowerOutlet.prototype, "powerPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], PowerOutlet.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", PowerOutletType)
    ], PowerOutlet.prototype, "type", void 0);
    return PowerOutlet;
}(SpeakeasyBase));
export { PowerOutlet };
