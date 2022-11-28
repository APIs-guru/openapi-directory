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
// VpnGatewayInfo
/**
 * For display only. Metadata associated with a Compute Engine VPN gateway.
**/
var VpnGatewayInfo = /** @class */ (function (_super) {
    __extends(VpnGatewayInfo, _super);
    function VpnGatewayInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], VpnGatewayInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], VpnGatewayInfo.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkUri" }),
        __metadata("design:type", String)
    ], VpnGatewayInfo.prototype, "networkUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], VpnGatewayInfo.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], VpnGatewayInfo.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpnTunnelUri" }),
        __metadata("design:type", String)
    ], VpnGatewayInfo.prototype, "vpnTunnelUri", void 0);
    return VpnGatewayInfo;
}(SpeakeasyBase));
export { VpnGatewayInfo };
