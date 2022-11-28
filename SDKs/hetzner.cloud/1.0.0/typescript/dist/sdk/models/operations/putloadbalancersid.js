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
var PutLoadBalancersIdPathParams = /** @class */ (function (_super) {
    __extends(PutLoadBalancersIdPathParams, _super);
    function PutLoadBalancersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersIdPathParams.prototype, "id", void 0);
    return PutLoadBalancersIdPathParams;
}(SpeakeasyBase));
export { PutLoadBalancersIdPathParams };
var PutLoadBalancersIdRequestBody = /** @class */ (function (_super) {
    __extends(PutLoadBalancersIdRequestBody, _super);
    function PutLoadBalancersIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutLoadBalancersIdRequestBody.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutLoadBalancersIdRequestBody.prototype, "name", void 0);
    return PutLoadBalancersIdRequestBody;
}(SpeakeasyBase));
export { PutLoadBalancersIdRequestBody };
export var PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum;
(function (PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum) {
    PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum["RoundRobin"] = "round_robin";
    PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum["LeastConnections"] = "least_connections";
})(PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum || (PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithmTypeEnum = {}));
// PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm
/**
 * Algorithm of the Load Balancer
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm.prototype, "type", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm };
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/**
 * Hourly costs for a Resource in this Location
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly.prototype, "net", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly };
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/**
 * Monthly costs for a Resource in this Location
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly.prototype, "net", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly };
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "priceMonthly", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices };
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_assigned_certificates" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxAssignedCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_connections" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_services" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_targets" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTypePrices }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType.prototype, "prices", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType };
var PutLoadBalancersId200ApplicationJsonLoadBalancerLocation = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLocation, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLocation.prototype, "networkZone", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLocation;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLocation };
var PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet.prototype, "network", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet };
// PutLoadBalancersId200ApplicationJsonLoadBalancerProtection
/**
 * Protection configuration for the Resource
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerProtection = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerProtection, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerProtection.prototype, "delete", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerProtection;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerProtection };
// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4
/**
 * IP address (v4)
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4.prototype, "ip", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4 };
// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6
/**
 * IP address (v6)
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6.prototype, "ip", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6 };
// PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet
/**
 * Public network information
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv4)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNetIpv6)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet.prototype, "ipv6", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet };
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/**
 * Additional configuration for protocol http
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_codes" }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "statusCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "tls", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp };
export var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
(function (PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum) {
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Tcp"] = "tcp";
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Http"] = "http";
})(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum || (PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = {}));
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/**
 * Service health check
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "timeout", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck };
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/**
 * Configuration option for protocols http and https
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_lifetime" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "cookieLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "cookieName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_http" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "redirectHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "stickySessions", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp };
export var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;
(function (PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum) {
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Tcp"] = "tcp";
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Http"] = "http";
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Https"] = "https";
})(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum || (PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum = {}));
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_port" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "destinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_check" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerServiceHttp)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyprotocol" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService.prototype, "proxyprotocol", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService };
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus.prototype, "status", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus };
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp.prototype, "ip", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp };
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/**
 * Label selector and a list of selected targets
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector.prototype, "selector", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector };
// PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/**
 * Server where the traffic should be routed through
**/
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer.prototype, "id", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer };
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus.prototype, "status", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus };
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer.prototype, "id", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer };
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "usePrivateIp", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets };
export var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;
(function (PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum) {
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["Server"] = "server";
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["LabelSelector"] = "label_selector";
    PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["Ip"] = "ip";
})(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum || (PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum = {}));
var PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetIp)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTargetTargets }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "usePrivateIp", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget };
var PutLoadBalancersId200ApplicationJsonLoadBalancer = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJsonLoadBalancer, _super);
    function PutLoadBalancersId200ApplicationJsonLoadBalancer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerAlgorithm)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_type" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerType)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "loadBalancerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerLocation)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerPrivateNet }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerProtection)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancerPublicNet)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerService }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: PutLoadBalancersId200ApplicationJsonLoadBalancerLoadBalancerTarget }),
        __metadata("design:type", Array)
    ], PutLoadBalancersId200ApplicationJsonLoadBalancer.prototype, "targets", void 0);
    return PutLoadBalancersId200ApplicationJsonLoadBalancer;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJsonLoadBalancer };
var PutLoadBalancersId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutLoadBalancersId200ApplicationJson, _super);
    function PutLoadBalancersId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer" }),
        __metadata("design:type", PutLoadBalancersId200ApplicationJsonLoadBalancer)
    ], PutLoadBalancersId200ApplicationJson.prototype, "loadBalancer", void 0);
    return PutLoadBalancersId200ApplicationJson;
}(SpeakeasyBase));
export { PutLoadBalancersId200ApplicationJson };
var PutLoadBalancersIdRequest = /** @class */ (function (_super) {
    __extends(PutLoadBalancersIdRequest, _super);
    function PutLoadBalancersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutLoadBalancersIdPathParams)
    ], PutLoadBalancersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutLoadBalancersIdRequestBody)
    ], PutLoadBalancersIdRequest.prototype, "request", void 0);
    return PutLoadBalancersIdRequest;
}(SpeakeasyBase));
export { PutLoadBalancersIdRequest };
var PutLoadBalancersIdResponse = /** @class */ (function (_super) {
    __extends(PutLoadBalancersIdResponse, _super);
    function PutLoadBalancersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutLoadBalancersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutLoadBalancersId200ApplicationJson)
    ], PutLoadBalancersIdResponse.prototype, "putLoadBalancersId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutLoadBalancersIdResponse.prototype, "statusCode", void 0);
    return PutLoadBalancersIdResponse;
}(SpeakeasyBase));
export { PutLoadBalancersIdResponse };
