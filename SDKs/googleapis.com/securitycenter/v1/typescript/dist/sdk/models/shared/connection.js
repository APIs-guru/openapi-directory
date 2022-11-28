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
export var ConnectionProtocolEnum;
(function (ConnectionProtocolEnum) {
    ConnectionProtocolEnum["ProtocolUnspecified"] = "PROTOCOL_UNSPECIFIED";
    ConnectionProtocolEnum["Icmp"] = "ICMP";
    ConnectionProtocolEnum["Tcp"] = "TCP";
    ConnectionProtocolEnum["Udp"] = "UDP";
    ConnectionProtocolEnum["Gre"] = "GRE";
    ConnectionProtocolEnum["Esp"] = "ESP";
})(ConnectionProtocolEnum || (ConnectionProtocolEnum = {}));
// Connection
/**
 * Contains information about the IP connection associated with the finding.
**/
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationIp" }),
        __metadata("design:type", String)
    ], Connection.prototype, "destinationIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destinationPort" }),
        __metadata("design:type", Number)
    ], Connection.prototype, "destinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], Connection.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceIp" }),
        __metadata("design:type", String)
    ], Connection.prototype, "sourceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourcePort" }),
        __metadata("design:type", Number)
    ], Connection.prototype, "sourcePort", void 0);
    return Connection;
}(SpeakeasyBase));
export { Connection };
