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
var GetLoadBalancersIdPathParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdPathParams, _super);
    function GetLoadBalancersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdPathParams.prototype, "id", void 0);
    return GetLoadBalancersIdPathParams;
}(SpeakeasyBase));
export { GetLoadBalancersIdPathParams };
export var GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
(function (GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum) {
    GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum["RoundRobin"] = "round_robin";
    GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum["LeastConnections"] = "least_connections";
})(GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum || (GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum = {}));
// GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
/**
 * Algorithm of the Load Balancer
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm.prototype, "type", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm };
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/**
 * Hourly costs for a Resource in this Location
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly.prototype, "net", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly };
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/**
 * Monthly costs for a Resource in this Location
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly.prototype, "net", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly };
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "priceMonthly", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices };
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_assigned_certificates" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxAssignedCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_connections" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_services" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_targets" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "prices", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType };
var GetLoadBalancersId200ApplicationJsonLoadBalancerLocation = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLocation, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "networkZone", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLocation;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLocation };
var GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet.prototype, "network", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet };
// GetLoadBalancersId200ApplicationJsonLoadBalancerProtection
/**
 * Protection configuration for the Resource
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerProtection = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerProtection, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerProtection.prototype, "delete", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerProtection;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerProtection };
// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4
/**
 * IP address (v4)
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4.prototype, "ip", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 };
// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6
/**
 * IP address (v6)
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6.prototype, "ip", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 };
// GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
/**
 * Public network information
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet.prototype, "ipv6", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet };
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/**
 * Additional configuration for protocol http
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_codes" }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "statusCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "tls", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp };
export var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
(function (GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum) {
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Tcp"] = "tcp";
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Http"] = "http";
})(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum || (GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = {}));
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/**
 * Service health check
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "timeout", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck };
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/**
 * Configuration option for protocols http and https
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_lifetime" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "cookieLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "cookieName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_http" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "redirectHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "stickySessions", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp };
export var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;
(function (GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum) {
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Tcp"] = "tcp";
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Http"] = "http";
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Https"] = "https";
})(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum || (GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum = {}));
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "destinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_check" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyprotocol" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "proxyprotocol", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService };
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus.prototype, "status", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus };
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp.prototype, "ip", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp };
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/**
 * Label selector and a list of selected targets
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector.prototype, "selector", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector };
// GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/**
 * Server where the traffic should be routed through
**/
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer.prototype, "id", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer };
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus.prototype, "status", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus };
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer.prototype, "id", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer };
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "usePrivateIp", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets };
export var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;
(function (GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum) {
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["Server"] = "server";
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["LabelSelector"] = "label_selector";
    GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["Ip"] = "ip";
})(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum || (GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum = {}));
var GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "usePrivateIp", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget };
var GetLoadBalancersId200ApplicationJsonLoadBalancer = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJsonLoadBalancer, _super);
    function GetLoadBalancersId200ApplicationJsonLoadBalancer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_type" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "loadBalancerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerLocation)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerProtection)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancerPublicNet)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget }),
        __metadata("design:type", Array)
    ], GetLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "targets", void 0);
    return GetLoadBalancersId200ApplicationJsonLoadBalancer;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJsonLoadBalancer };
var GetLoadBalancersId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLoadBalancersId200ApplicationJson, _super);
    function GetLoadBalancersId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer" }),
        __metadata("design:type", GetLoadBalancersId200ApplicationJsonLoadBalancer)
    ], GetLoadBalancersId200ApplicationJson.prototype, "loadBalancer", void 0);
    return GetLoadBalancersId200ApplicationJson;
}(SpeakeasyBase));
export { GetLoadBalancersId200ApplicationJson };
var GetLoadBalancersIdRequest = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdRequest, _super);
    function GetLoadBalancersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersIdPathParams)
    ], GetLoadBalancersIdRequest.prototype, "pathParams", void 0);
    return GetLoadBalancersIdRequest;
}(SpeakeasyBase));
export { GetLoadBalancersIdRequest };
var GetLoadBalancersIdResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdResponse, _super);
    function GetLoadBalancersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLoadBalancersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersId200ApplicationJson)
    ], GetLoadBalancersIdResponse.prototype, "getLoadBalancersId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdResponse.prototype, "statusCode", void 0);
    return GetLoadBalancersIdResponse;
}(SpeakeasyBase));
export { GetLoadBalancersIdResponse };
