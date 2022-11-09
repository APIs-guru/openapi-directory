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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GatewayConfigGatewayAuthMethodEnum;
(function (GatewayConfigGatewayAuthMethodEnum) {
    GatewayConfigGatewayAuthMethodEnum["GatewayAuthMethodUnspecified"] = "GATEWAY_AUTH_METHOD_UNSPECIFIED";
    GatewayConfigGatewayAuthMethodEnum["AssociationOnly"] = "ASSOCIATION_ONLY";
    GatewayConfigGatewayAuthMethodEnum["DeviceAuthTokenOnly"] = "DEVICE_AUTH_TOKEN_ONLY";
    GatewayConfigGatewayAuthMethodEnum["AssociationAndDeviceAuthToken"] = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN";
})(GatewayConfigGatewayAuthMethodEnum || (GatewayConfigGatewayAuthMethodEnum = {}));
export var GatewayConfigGatewayTypeEnum;
(function (GatewayConfigGatewayTypeEnum) {
    GatewayConfigGatewayTypeEnum["GatewayTypeUnspecified"] = "GATEWAY_TYPE_UNSPECIFIED";
    GatewayConfigGatewayTypeEnum["Gateway"] = "GATEWAY";
    GatewayConfigGatewayTypeEnum["NonGateway"] = "NON_GATEWAY";
})(GatewayConfigGatewayTypeEnum || (GatewayConfigGatewayTypeEnum = {}));
// GatewayConfig
/**
 * Gateway-related configuration and state.
**/
var GatewayConfig = /** @class */ (function (_super) {
    __extends(GatewayConfig, _super);
    function GatewayConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=gatewayAuthMethod" }),
        __metadata("design:type", String)
    ], GatewayConfig.prototype, "gatewayAuthMethod", void 0);
    __decorate([
        Metadata({ data: "json, name=gatewayType" }),
        __metadata("design:type", String)
    ], GatewayConfig.prototype, "gatewayType", void 0);
    __decorate([
        Metadata({ data: "json, name=lastAccessedGatewayId" }),
        __metadata("design:type", String)
    ], GatewayConfig.prototype, "lastAccessedGatewayId", void 0);
    __decorate([
        Metadata({ data: "json, name=lastAccessedGatewayTime" }),
        __metadata("design:type", String)
    ], GatewayConfig.prototype, "lastAccessedGatewayTime", void 0);
    return GatewayConfig;
}(SpeakeasyBase));
export { GatewayConfig };
