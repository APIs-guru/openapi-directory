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
export var EndpointBidProtocolEnum;
(function (EndpointBidProtocolEnum) {
    EndpointBidProtocolEnum["BidProtocolUnspecified"] = "BID_PROTOCOL_UNSPECIFIED";
    EndpointBidProtocolEnum["GoogleRtb"] = "GOOGLE_RTB";
    EndpointBidProtocolEnum["OpenrtbJson"] = "OPENRTB_JSON";
    EndpointBidProtocolEnum["OpenrtbProtobuf"] = "OPENRTB_PROTOBUF";
    EndpointBidProtocolEnum["Openrtb22"] = "OPENRTB_2_2";
    EndpointBidProtocolEnum["Openrtb23"] = "OPENRTB_2_3";
    EndpointBidProtocolEnum["OpenrtbProtobuf23"] = "OPENRTB_PROTOBUF_2_3";
    EndpointBidProtocolEnum["Openrtb24"] = "OPENRTB_2_4";
    EndpointBidProtocolEnum["OpenrtbProtobuf24"] = "OPENRTB_PROTOBUF_2_4";
    EndpointBidProtocolEnum["Openrtb25"] = "OPENRTB_2_5";
    EndpointBidProtocolEnum["OpenrtbProtobuf25"] = "OPENRTB_PROTOBUF_2_5";
})(EndpointBidProtocolEnum || (EndpointBidProtocolEnum = {}));
export var EndpointTradingLocationEnum;
(function (EndpointTradingLocationEnum) {
    EndpointTradingLocationEnum["TradingLocationUnspecified"] = "TRADING_LOCATION_UNSPECIFIED";
    EndpointTradingLocationEnum["UsWest"] = "US_WEST";
    EndpointTradingLocationEnum["UsEast"] = "US_EAST";
    EndpointTradingLocationEnum["Europe"] = "EUROPE";
    EndpointTradingLocationEnum["Asia"] = "ASIA";
})(EndpointTradingLocationEnum || (EndpointTradingLocationEnum = {}));
// Endpoint
/**
 * Bidder endpoint that receives bid requests.
**/
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    function Endpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bidProtocol" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "bidProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumQps" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "maximumQps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tradingLocation" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "tradingLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "url", void 0);
    return Endpoint;
}(SpeakeasyBase));
export { Endpoint };
