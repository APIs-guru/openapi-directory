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
export var NetworkConfigConnectModeEnum;
(function (NetworkConfigConnectModeEnum) {
    NetworkConfigConnectModeEnum["ConnectModeUnspecified"] = "CONNECT_MODE_UNSPECIFIED";
    NetworkConfigConnectModeEnum["DirectPeering"] = "DIRECT_PEERING";
    NetworkConfigConnectModeEnum["PrivateServiceAccess"] = "PRIVATE_SERVICE_ACCESS";
})(NetworkConfigConnectModeEnum || (NetworkConfigConnectModeEnum = {}));
export var NetworkConfigModesEnum;
(function (NetworkConfigModesEnum) {
    NetworkConfigModesEnum["AddressModeUnspecified"] = "ADDRESS_MODE_UNSPECIFIED";
    NetworkConfigModesEnum["ModeIpv4"] = "MODE_IPV4";
})(NetworkConfigModesEnum || (NetworkConfigModesEnum = {}));
// NetworkConfig
/**
 * Network configuration for the instance.
**/
var NetworkConfig = /** @class */ (function (_super) {
    __extends(NetworkConfig, _super);
    function NetworkConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectMode" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "connectMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddresses" }),
        __metadata("design:type", Array)
    ], NetworkConfig.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modes" }),
        __metadata("design:type", Array)
    ], NetworkConfig.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRange" }),
        __metadata("design:type", String)
    ], NetworkConfig.prototype, "reservedIpRange", void 0);
    return NetworkConfig;
}(SpeakeasyBase));
export { NetworkConfig };
// NetworkConfigInput
/**
 * Network configuration for the instance.
**/
var NetworkConfigInput = /** @class */ (function (_super) {
    __extends(NetworkConfigInput, _super);
    function NetworkConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectMode" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "connectMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=modes" }),
        __metadata("design:type", Array)
    ], NetworkConfigInput.prototype, "modes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRange" }),
        __metadata("design:type", String)
    ], NetworkConfigInput.prototype, "reservedIpRange", void 0);
    return NetworkConfigInput;
}(SpeakeasyBase));
export { NetworkConfigInput };
