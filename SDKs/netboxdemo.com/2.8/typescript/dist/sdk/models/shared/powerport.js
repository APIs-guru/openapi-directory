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
export var PowerPortConnectionStatusLabelEnum;
(function (PowerPortConnectionStatusLabelEnum) {
    PowerPortConnectionStatusLabelEnum["NotConnected"] = "Not Connected";
    PowerPortConnectionStatusLabelEnum["Connected"] = "Connected";
})(PowerPortConnectionStatusLabelEnum || (PowerPortConnectionStatusLabelEnum = {}));
var PowerPortConnectionStatus = /** @class */ (function (_super) {
    __extends(PowerPortConnectionStatus, _super);
    function PowerPortConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerPortConnectionStatus.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], PowerPortConnectionStatus.prototype, "value", void 0);
    return PowerPortConnectionStatus;
}(SpeakeasyBase));
export { PowerPortConnectionStatus };
export var PowerPortTypeLabelEnum;
(function (PowerPortTypeLabelEnum) {
    PowerPortTypeLabelEnum["C6"] = "C6";
    PowerPortTypeLabelEnum["C8"] = "C8";
    PowerPortTypeLabelEnum["C14"] = "C14";
    PowerPortTypeLabelEnum["C16"] = "C16";
    PowerPortTypeLabelEnum["C20"] = "C20";
    PowerPortTypeLabelEnum["PPlusNPlusE4H"] = "P+N+E 4H";
    PowerPortTypeLabelEnum["PPlusNPlusE6H"] = "P+N+E 6H";
    PowerPortTypeLabelEnum["PPlusNPlusE9H"] = "P+N+E 9H";
    PowerPortTypeLabelEnum["TwoPPlusE4H"] = "2P+E 4H";
    PowerPortTypeLabelEnum["TwoPPlusE6H"] = "2P+E 6H";
    PowerPortTypeLabelEnum["TwoPPlusE9H"] = "2P+E 9H";
    PowerPortTypeLabelEnum["ThreePPlusE4H"] = "3P+E 4H";
    PowerPortTypeLabelEnum["ThreePPlusE6H"] = "3P+E 6H";
    PowerPortTypeLabelEnum["ThreePPlusE9H"] = "3P+E 9H";
    PowerPortTypeLabelEnum["ThreePPlusNPlusE4H"] = "3P+N+E 4H";
    PowerPortTypeLabelEnum["ThreePPlusNPlusE6H"] = "3P+N+E 6H";
    PowerPortTypeLabelEnum["ThreePPlusNPlusE9H"] = "3P+N+E 9H";
    PowerPortTypeLabelEnum["Nema115P"] = "NEMA 1-15P";
    PowerPortTypeLabelEnum["Nema515P"] = "NEMA 5-15P";
    PowerPortTypeLabelEnum["Nema520P"] = "NEMA 5-20P";
    PowerPortTypeLabelEnum["Nema530P"] = "NEMA 5-30P";
    PowerPortTypeLabelEnum["Nema550P"] = "NEMA 5-50P";
    PowerPortTypeLabelEnum["Nema615P"] = "NEMA 6-15P";
    PowerPortTypeLabelEnum["Nema620P"] = "NEMA 6-20P";
    PowerPortTypeLabelEnum["Nema630P"] = "NEMA 6-30P";
    PowerPortTypeLabelEnum["Nema650P"] = "NEMA 6-50P";
    PowerPortTypeLabelEnum["Nema1030P"] = "NEMA 10-30P";
    PowerPortTypeLabelEnum["Nema1050P"] = "NEMA 10-50P";
    PowerPortTypeLabelEnum["Nema1420P"] = "NEMA 14-20P";
    PowerPortTypeLabelEnum["Nema1430P"] = "NEMA 14-30P";
    PowerPortTypeLabelEnum["Nema1450P"] = "NEMA 14-50P";
    PowerPortTypeLabelEnum["Nema1460P"] = "NEMA 14-60P";
    PowerPortTypeLabelEnum["NemaL115P"] = "NEMA L1-15P";
    PowerPortTypeLabelEnum["NemaL515P"] = "NEMA L5-15P";
    PowerPortTypeLabelEnum["NemaL520P"] = "NEMA L5-20P";
    PowerPortTypeLabelEnum["NemaL530P"] = "NEMA L5-30P";
    PowerPortTypeLabelEnum["NemaL550P"] = "NEMA L5-50P";
    PowerPortTypeLabelEnum["NemaL615P"] = "NEMA L6-15P";
    PowerPortTypeLabelEnum["NemaL620P"] = "NEMA L6-20P";
    PowerPortTypeLabelEnum["NemaL630P"] = "NEMA L6-30P";
    PowerPortTypeLabelEnum["NemaL650P"] = "NEMA L6-50P";
    PowerPortTypeLabelEnum["NemaL1030P"] = "NEMA L10-30P";
    PowerPortTypeLabelEnum["NemaL1420P"] = "NEMA L14-20P";
    PowerPortTypeLabelEnum["NemaL1430P"] = "NEMA L14-30P";
    PowerPortTypeLabelEnum["NemaL1450P"] = "NEMA L14-50P";
    PowerPortTypeLabelEnum["NemaL1460P"] = "NEMA L14-60P";
    PowerPortTypeLabelEnum["NemaL2120P"] = "NEMA L21-20P";
    PowerPortTypeLabelEnum["NemaL2130P"] = "NEMA L21-30P";
    PowerPortTypeLabelEnum["Cs6361C"] = "CS6361C";
    PowerPortTypeLabelEnum["Cs6365C"] = "CS6365C";
    PowerPortTypeLabelEnum["Cs8165C"] = "CS8165C";
    PowerPortTypeLabelEnum["Cs8265C"] = "CS8265C";
    PowerPortTypeLabelEnum["Cs8365C"] = "CS8365C";
    PowerPortTypeLabelEnum["Cs8465C"] = "CS8465C";
    PowerPortTypeLabelEnum["ItaTypeECee75"] = "ITA Type E (CEE 7/5)";
    PowerPortTypeLabelEnum["ItaTypeFCee74"] = "ITA Type F (CEE 7/4)";
    PowerPortTypeLabelEnum["ItaTypeEFCee77"] = "ITA Type E/F (CEE 7/7)";
    PowerPortTypeLabelEnum["ItaTypeGBs1363"] = "ITA Type G (BS 1363)";
    PowerPortTypeLabelEnum["ItaTypeH"] = "ITA Type H";
    PowerPortTypeLabelEnum["ItaTypeI"] = "ITA Type I";
    PowerPortTypeLabelEnum["ItaTypeJ"] = "ITA Type J";
    PowerPortTypeLabelEnum["ItaTypeK"] = "ITA Type K";
    PowerPortTypeLabelEnum["ItaTypeLCei2350"] = "ITA Type L (CEI 23-50)";
    PowerPortTypeLabelEnum["ItaTypeMBs546"] = "ITA Type M (BS 546)";
    PowerPortTypeLabelEnum["ItaTypeN"] = "ITA Type N";
    PowerPortTypeLabelEnum["ItaTypeO"] = "ITA Type O";
})(PowerPortTypeLabelEnum || (PowerPortTypeLabelEnum = {}));
export var PowerPortTypeValueEnum;
(function (PowerPortTypeValueEnum) {
    PowerPortTypeValueEnum["Iec60320C6"] = "iec-60320-c6";
    PowerPortTypeValueEnum["Iec60320C8"] = "iec-60320-c8";
    PowerPortTypeValueEnum["Iec60320C14"] = "iec-60320-c14";
    PowerPortTypeValueEnum["Iec60320C16"] = "iec-60320-c16";
    PowerPortTypeValueEnum["Iec60320C20"] = "iec-60320-c20";
    PowerPortTypeValueEnum["Iec60309PNE4h"] = "iec-60309-p-n-e-4h";
    PowerPortTypeValueEnum["Iec60309PNE6h"] = "iec-60309-p-n-e-6h";
    PowerPortTypeValueEnum["Iec60309PNE9h"] = "iec-60309-p-n-e-9h";
    PowerPortTypeValueEnum["Iec603092pE4h"] = "iec-60309-2p-e-4h";
    PowerPortTypeValueEnum["Iec603092pE6h"] = "iec-60309-2p-e-6h";
    PowerPortTypeValueEnum["Iec603092pE9h"] = "iec-60309-2p-e-9h";
    PowerPortTypeValueEnum["Iec603093pE4h"] = "iec-60309-3p-e-4h";
    PowerPortTypeValueEnum["Iec603093pE6h"] = "iec-60309-3p-e-6h";
    PowerPortTypeValueEnum["Iec603093pE9h"] = "iec-60309-3p-e-9h";
    PowerPortTypeValueEnum["Iec603093pNE4h"] = "iec-60309-3p-n-e-4h";
    PowerPortTypeValueEnum["Iec603093pNE6h"] = "iec-60309-3p-n-e-6h";
    PowerPortTypeValueEnum["Iec603093pNE9h"] = "iec-60309-3p-n-e-9h";
    PowerPortTypeValueEnum["Nema115p"] = "nema-1-15p";
    PowerPortTypeValueEnum["Nema515p"] = "nema-5-15p";
    PowerPortTypeValueEnum["Nema520p"] = "nema-5-20p";
    PowerPortTypeValueEnum["Nema530p"] = "nema-5-30p";
    PowerPortTypeValueEnum["Nema550p"] = "nema-5-50p";
    PowerPortTypeValueEnum["Nema615p"] = "nema-6-15p";
    PowerPortTypeValueEnum["Nema620p"] = "nema-6-20p";
    PowerPortTypeValueEnum["Nema630p"] = "nema-6-30p";
    PowerPortTypeValueEnum["Nema650p"] = "nema-6-50p";
    PowerPortTypeValueEnum["Nema1030p"] = "nema-10-30p";
    PowerPortTypeValueEnum["Nema1050p"] = "nema-10-50p";
    PowerPortTypeValueEnum["Nema1420p"] = "nema-14-20p";
    PowerPortTypeValueEnum["Nema1430p"] = "nema-14-30p";
    PowerPortTypeValueEnum["Nema1450p"] = "nema-14-50p";
    PowerPortTypeValueEnum["Nema1460p"] = "nema-14-60p";
    PowerPortTypeValueEnum["NemaL115p"] = "nema-l1-15p";
    PowerPortTypeValueEnum["NemaL515p"] = "nema-l5-15p";
    PowerPortTypeValueEnum["NemaL520p"] = "nema-l5-20p";
    PowerPortTypeValueEnum["NemaL530p"] = "nema-l5-30p";
    PowerPortTypeValueEnum["NemaL550p"] = "nema-l5-50p";
    PowerPortTypeValueEnum["NemaL615p"] = "nema-l6-15p";
    PowerPortTypeValueEnum["NemaL620p"] = "nema-l6-20p";
    PowerPortTypeValueEnum["NemaL630p"] = "nema-l6-30p";
    PowerPortTypeValueEnum["NemaL650p"] = "nema-l6-50p";
    PowerPortTypeValueEnum["NemaL1030p"] = "nema-l10-30p";
    PowerPortTypeValueEnum["NemaL1420p"] = "nema-l14-20p";
    PowerPortTypeValueEnum["NemaL1430p"] = "nema-l14-30p";
    PowerPortTypeValueEnum["NemaL1450p"] = "nema-l14-50p";
    PowerPortTypeValueEnum["NemaL1460p"] = "nema-l14-60p";
    PowerPortTypeValueEnum["NemaL2120p"] = "nema-l21-20p";
    PowerPortTypeValueEnum["NemaL2130p"] = "nema-l21-30p";
    PowerPortTypeValueEnum["Cs6361c"] = "cs6361c";
    PowerPortTypeValueEnum["Cs6365c"] = "cs6365c";
    PowerPortTypeValueEnum["Cs8165c"] = "cs8165c";
    PowerPortTypeValueEnum["Cs8265c"] = "cs8265c";
    PowerPortTypeValueEnum["Cs8365c"] = "cs8365c";
    PowerPortTypeValueEnum["Cs8465c"] = "cs8465c";
    PowerPortTypeValueEnum["ItaE"] = "ita-e";
    PowerPortTypeValueEnum["ItaF"] = "ita-f";
    PowerPortTypeValueEnum["ItaEf"] = "ita-ef";
    PowerPortTypeValueEnum["ItaG"] = "ita-g";
    PowerPortTypeValueEnum["ItaH"] = "ita-h";
    PowerPortTypeValueEnum["ItaI"] = "ita-i";
    PowerPortTypeValueEnum["ItaJ"] = "ita-j";
    PowerPortTypeValueEnum["ItaK"] = "ita-k";
    PowerPortTypeValueEnum["ItaL"] = "ita-l";
    PowerPortTypeValueEnum["ItaM"] = "ita-m";
    PowerPortTypeValueEnum["ItaN"] = "ita-n";
    PowerPortTypeValueEnum["ItaO"] = "ita-o";
})(PowerPortTypeValueEnum || (PowerPortTypeValueEnum = {}));
var PowerPortType = /** @class */ (function (_super) {
    __extends(PowerPortType, _super);
    function PowerPortType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], PowerPortType.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PowerPortType.prototype, "value", void 0);
    return PowerPortType;
}(SpeakeasyBase));
export { PowerPortType };
var PowerPort = /** @class */ (function (_super) {
    __extends(PowerPort, _super);
    function PowerPort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocated_draw" }),
        __metadata("design:type", Number)
    ], PowerPort.prototype, "allocatedDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cable" }),
        __metadata("design:type", NestedCable)
    ], PowerPort.prototype, "cable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected_endpoint" }),
        __metadata("design:type", Map)
    ], PowerPort.prototype, "connectedEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connected_endpoint_type" }),
        __metadata("design:type", String)
    ], PowerPort.prototype, "connectedEndpointType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_status" }),
        __metadata("design:type", PowerPortConnectionStatus)
    ], PowerPort.prototype, "connectionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PowerPort.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", NestedDevice)
    ], PowerPort.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PowerPort.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximum_draw" }),
        __metadata("design:type", Number)
    ], PowerPort.prototype, "maximumDraw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PowerPort.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], PowerPort.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", PowerPortType)
    ], PowerPort.prototype, "type", void 0);
    return PowerPort;
}(SpeakeasyBase));
export { PowerPort };
