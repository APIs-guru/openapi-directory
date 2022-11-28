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
export var GetLoadBalancersSortEnum;
(function (GetLoadBalancersSortEnum) {
    GetLoadBalancersSortEnum["Id"] = "id";
    GetLoadBalancersSortEnum["IdAsc"] = "id:asc";
    GetLoadBalancersSortEnum["IdDesc"] = "id:desc";
    GetLoadBalancersSortEnum["Name"] = "name";
    GetLoadBalancersSortEnum["NameAsc"] = "name:asc";
    GetLoadBalancersSortEnum["NameDesc"] = "name:desc";
    GetLoadBalancersSortEnum["Created"] = "created";
    GetLoadBalancersSortEnum["CreatedAsc"] = "created:asc";
    GetLoadBalancersSortEnum["CreatedDesc"] = "created:desc";
})(GetLoadBalancersSortEnum || (GetLoadBalancersSortEnum = {}));
var GetLoadBalancersQueryParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancersQueryParams, _super);
    function GetLoadBalancersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetLoadBalancersQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancersQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetLoadBalancersQueryParams.prototype, "sort", void 0);
    return GetLoadBalancersQueryParams;
}(SpeakeasyBase));
export { GetLoadBalancersQueryParams };
export var GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum;
(function (GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum) {
    GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum["RoundRobin"] = "round_robin";
    GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum["LeastConnections"] = "least_connections";
})(GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum || (GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithmTypeEnum = {}));
// GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm
/**
 * Algorithm of the Load Balancer
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm.prototype, "type", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm };
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly
/**
 * Hourly costs for a Resource in this Location
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly.prototype, "net", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly };
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly
/**
 * Monthly costs for a Resource in this Location
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly.prototype, "net", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly };
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceHourly)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePricesPriceMonthly)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices.prototype, "priceMonthly", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices };
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_assigned_certificates" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "maxAssignedCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_connections" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_services" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "maxServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_targets" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "maxTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTypePrices }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType.prototype, "prices", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType };
var GetLoadBalancers200ApplicationJsonLoadBalancersLocation = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLocation, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLocation.prototype, "networkZone", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLocation;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLocation };
var GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet.prototype, "network", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet };
// GetLoadBalancers200ApplicationJsonLoadBalancersProtection
/**
 * Protection configuration for the Resource
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersProtection = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersProtection, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersProtection.prototype, "delete", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersProtection;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersProtection };
// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4
/**
 * IP address (v4)
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4.prototype, "ip", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4 };
// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6
/**
 * IP address (v6)
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6.prototype, "ip", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6 };
// GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet
/**
 * Public network information
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv4)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersPublicNetIpv6)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet.prototype, "ipv6", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet };
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/**
 * Additional configuration for protocol http
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_codes" }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "statusCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "tls", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp };
export var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
(function (GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum) {
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Tcp"] = "tcp";
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Http"] = "http";
})(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum || (GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = {}));
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck
/**
 * Service health check
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheckHttp)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "timeout", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck };
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp
/**
 * Configuration option for protocols http and https
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_lifetime" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp.prototype, "cookieLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp.prototype, "cookieName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_http" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp.prototype, "redirectHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp.prototype, "stickySessions", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp };
export var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum;
(function (GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum) {
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum["Tcp"] = "tcp";
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum["Http"] = "http";
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum["Https"] = "https";
})(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum || (GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceProtocolEnum = {}));
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService.prototype, "destinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_check" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceLoadBalancerServiceHealthCheck)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerServiceHttp)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyprotocol" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService.prototype, "proxyprotocol", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService };
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus.prototype, "status", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus };
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp.prototype, "ip", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp };
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector
/**
 * Label selector and a list of selected targets
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector.prototype, "selector", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector };
// GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer
/**
 * Server where the traffic should be routed through
**/
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer.prototype, "id", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer };
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus.prototype, "status", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus };
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer.prototype, "id", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer };
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsHealthStatus }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargetsServer)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets.prototype, "usePrivateIp", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets };
export var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum;
(function (GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum) {
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum["Server"] = "server";
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum["LabelSelector"] = "label_selector";
    GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum["Ip"] = "ip";
})(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum || (GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTypeEnum = {}));
var GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetHealthStatus }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetIp)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLabelSelector)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetLoadBalancerTargetServer)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTargetTargets }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget.prototype, "usePrivateIp", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget };
var GetLoadBalancers200ApplicationJsonLoadBalancers = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonLoadBalancers, _super);
    function GetLoadBalancers200ApplicationJsonLoadBalancers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersAlgorithm)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_type" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerType)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "loadBalancerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersLocation)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersPrivateNet }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersProtection)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonLoadBalancersPublicNet)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerService }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: GetLoadBalancers200ApplicationJsonLoadBalancersLoadBalancerTarget }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJsonLoadBalancers.prototype, "targets", void 0);
    return GetLoadBalancers200ApplicationJsonLoadBalancers;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonLoadBalancers };
var GetLoadBalancers200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonMetaPagination, _super);
    function GetLoadBalancers200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetLoadBalancers200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetLoadBalancers200ApplicationJsonMetaPagination;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonMetaPagination };
var GetLoadBalancers200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJsonMeta, _super);
    function GetLoadBalancers200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonMetaPagination)
    ], GetLoadBalancers200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetLoadBalancers200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJsonMeta };
var GetLoadBalancers200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLoadBalancers200ApplicationJson, _super);
    function GetLoadBalancers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancers", elemType: GetLoadBalancers200ApplicationJsonLoadBalancers }),
        __metadata("design:type", Array)
    ], GetLoadBalancers200ApplicationJson.prototype, "loadBalancers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetLoadBalancers200ApplicationJsonMeta)
    ], GetLoadBalancers200ApplicationJson.prototype, "meta", void 0);
    return GetLoadBalancers200ApplicationJson;
}(SpeakeasyBase));
export { GetLoadBalancers200ApplicationJson };
var GetLoadBalancersRequest = /** @class */ (function (_super) {
    __extends(GetLoadBalancersRequest, _super);
    function GetLoadBalancersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersQueryParams)
    ], GetLoadBalancersRequest.prototype, "queryParams", void 0);
    return GetLoadBalancersRequest;
}(SpeakeasyBase));
export { GetLoadBalancersRequest };
var GetLoadBalancersResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancersResponse, _super);
    function GetLoadBalancersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLoadBalancersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancers200ApplicationJson)
    ], GetLoadBalancersResponse.prototype, "getLoadBalancers200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLoadBalancersResponse.prototype, "statusCode", void 0);
    return GetLoadBalancersResponse;
}(SpeakeasyBase));
export { GetLoadBalancersResponse };
