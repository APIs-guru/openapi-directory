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
var GetNetworksIdPathParams = /** @class */ (function (_super) {
    __extends(GetNetworksIdPathParams, _super);
    function GetNetworksIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksIdPathParams.prototype, "id", void 0);
    return GetNetworksIdPathParams;
}(SpeakeasyBase));
export { GetNetworksIdPathParams };
// GetNetworksId200ApplicationJsonNetworkProtection
/**
 * Protection configuration for the Network
**/
var GetNetworksId200ApplicationJsonNetworkProtection = /** @class */ (function (_super) {
    __extends(GetNetworksId200ApplicationJsonNetworkProtection, _super);
    function GetNetworksId200ApplicationJsonNetworkProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetNetworksId200ApplicationJsonNetworkProtection.prototype, "delete", void 0);
    return GetNetworksId200ApplicationJsonNetworkProtection;
}(SpeakeasyBase));
export { GetNetworksId200ApplicationJsonNetworkProtection };
var GetNetworksId200ApplicationJsonNetworkRoutes = /** @class */ (function (_super) {
    __extends(GetNetworksId200ApplicationJsonNetworkRoutes, _super);
    function GetNetworksId200ApplicationJsonNetworkRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetworkRoutes.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetworkRoutes.prototype, "gateway", void 0);
    return GetNetworksId200ApplicationJsonNetworkRoutes;
}(SpeakeasyBase));
export { GetNetworksId200ApplicationJsonNetworkRoutes };
export var GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum;
(function (GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum) {
    GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum["Cloud"] = "cloud";
    GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum["Server"] = "server";
    GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum["Vswitch"] = "vswitch";
})(GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum || (GetNetworksId200ApplicationJsonNetworkSubnetsTypeEnum = {}));
var GetNetworksId200ApplicationJsonNetworkSubnets = /** @class */ (function (_super) {
    __extends(GetNetworksId200ApplicationJsonNetworkSubnets, _super);
    function GetNetworksId200ApplicationJsonNetworkSubnets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetworkSubnets.prototype, "gateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetworkSubnets.prototype, "ipRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetworkSubnets.prototype, "networkZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetworkSubnets.prototype, "type", void 0);
    return GetNetworksId200ApplicationJsonNetworkSubnets;
}(SpeakeasyBase));
export { GetNetworksId200ApplicationJsonNetworkSubnets };
var GetNetworksId200ApplicationJsonNetwork = /** @class */ (function (_super) {
    __extends(GetNetworksId200ApplicationJsonNetwork, _super);
    function GetNetworksId200ApplicationJsonNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_range" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "ipRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancers" }),
        __metadata("design:type", Array)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetNetworksId200ApplicationJsonNetworkProtection)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routes", elemType: GetNetworksId200ApplicationJsonNetworkRoutes }),
        __metadata("design:type", Array)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnets", elemType: GetNetworksId200ApplicationJsonNetworkSubnets }),
        __metadata("design:type", Array)
    ], GetNetworksId200ApplicationJsonNetwork.prototype, "subnets", void 0);
    return GetNetworksId200ApplicationJsonNetwork;
}(SpeakeasyBase));
export { GetNetworksId200ApplicationJsonNetwork };
var GetNetworksId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetNetworksId200ApplicationJson, _super);
    function GetNetworksId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", GetNetworksId200ApplicationJsonNetwork)
    ], GetNetworksId200ApplicationJson.prototype, "network", void 0);
    return GetNetworksId200ApplicationJson;
}(SpeakeasyBase));
export { GetNetworksId200ApplicationJson };
var GetNetworksIdRequest = /** @class */ (function (_super) {
    __extends(GetNetworksIdRequest, _super);
    function GetNetworksIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworksIdPathParams)
    ], GetNetworksIdRequest.prototype, "pathParams", void 0);
    return GetNetworksIdRequest;
}(SpeakeasyBase));
export { GetNetworksIdRequest };
var GetNetworksIdResponse = /** @class */ (function (_super) {
    __extends(GetNetworksIdResponse, _super);
    function GetNetworksIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworksIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworksId200ApplicationJson)
    ], GetNetworksIdResponse.prototype, "getNetworksId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworksIdResponse.prototype, "statusCode", void 0);
    return GetNetworksIdResponse;
}(SpeakeasyBase));
export { GetNetworksIdResponse };
