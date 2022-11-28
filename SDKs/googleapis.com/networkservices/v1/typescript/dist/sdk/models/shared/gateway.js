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
export var GatewayTypeEnum;
(function (GatewayTypeEnum) {
    GatewayTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GatewayTypeEnum["OpenMesh"] = "OPEN_MESH";
    GatewayTypeEnum["SecureWebGateway"] = "SECURE_WEB_GATEWAY";
})(GatewayTypeEnum || (GatewayTypeEnum = {}));
// Gateway
/**
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
**/
var Gateway = /** @class */ (function (_super) {
    __extends(Gateway, _super);
    function Gateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Gateway.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ports" }),
        __metadata("design:type", Array)
    ], Gateway.prototype, "ports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "serverTlsPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Gateway.prototype, "updateTime", void 0);
    return Gateway;
}(SpeakeasyBase));
export { Gateway };
// GatewayInput
/**
 * Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway.
**/
var GatewayInput = /** @class */ (function (_super) {
    __extends(GatewayInput, _super);
    function GatewayInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GatewayInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GatewayInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GatewayInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ports" }),
        __metadata("design:type", Array)
    ], GatewayInput.prototype, "ports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GatewayInput.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" }),
        __metadata("design:type", String)
    ], GatewayInput.prototype, "serverTlsPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GatewayInput.prototype, "type", void 0);
    return GatewayInput;
}(SpeakeasyBase));
export { GatewayInput };
