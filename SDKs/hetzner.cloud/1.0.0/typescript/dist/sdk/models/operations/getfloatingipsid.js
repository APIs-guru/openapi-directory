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
var GetFloatingIpsIdPathParams = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdPathParams, _super);
    function GetFloatingIpsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdPathParams.prototype, "id", void 0);
    return GetFloatingIpsIdPathParams;
}(SpeakeasyBase));
export { GetFloatingIpsIdPathParams };
var GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr = /** @class */ (function (_super) {
    __extends(GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr, _super);
    function GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr.prototype, "ip", void 0);
    return GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr;
}(SpeakeasyBase));
export { GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr };
// GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
var GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation = /** @class */ (function (_super) {
    __extends(GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation, _super);
    function GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "networkZone", void 0);
    return GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;
}(SpeakeasyBase));
export { GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation };
// GetFloatingIpsId200ApplicationJsonFloatingIpProtection
/**
 * Protection configuration for the Resource
**/
var GetFloatingIpsId200ApplicationJsonFloatingIpProtection = /** @class */ (function (_super) {
    __extends(GetFloatingIpsId200ApplicationJsonFloatingIpProtection, _super);
    function GetFloatingIpsId200ApplicationJsonFloatingIpProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetFloatingIpsId200ApplicationJsonFloatingIpProtection.prototype, "delete", void 0);
    return GetFloatingIpsId200ApplicationJsonFloatingIpProtection;
}(SpeakeasyBase));
export { GetFloatingIpsId200ApplicationJsonFloatingIpProtection };
export var GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
(function (GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum) {
    GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum["Ipv4"] = "ipv4";
    GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum["Ipv6"] = "ipv6";
})(GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum || (GetFloatingIpsId200ApplicationJsonFloatingIpTypeEnum = {}));
var GetFloatingIpsId200ApplicationJsonFloatingIp = /** @class */ (function (_super) {
    __extends(GetFloatingIpsId200ApplicationJsonFloatingIp, _super);
    function GetFloatingIpsId200ApplicationJsonFloatingIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetFloatingIpsId200ApplicationJsonFloatingIpDnsPtr }),
        __metadata("design:type", Array)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_location" }),
        __metadata("design:type", GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "homeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetFloatingIpsId200ApplicationJsonFloatingIpProtection)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFloatingIpsId200ApplicationJsonFloatingIp.prototype, "type", void 0);
    return GetFloatingIpsId200ApplicationJsonFloatingIp;
}(SpeakeasyBase));
export { GetFloatingIpsId200ApplicationJsonFloatingIp };
var GetFloatingIpsId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFloatingIpsId200ApplicationJson, _super);
    function GetFloatingIpsId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ip" }),
        __metadata("design:type", GetFloatingIpsId200ApplicationJsonFloatingIp)
    ], GetFloatingIpsId200ApplicationJson.prototype, "floatingIp", void 0);
    return GetFloatingIpsId200ApplicationJson;
}(SpeakeasyBase));
export { GetFloatingIpsId200ApplicationJson };
var GetFloatingIpsIdRequest = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdRequest, _super);
    function GetFloatingIpsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsIdPathParams)
    ], GetFloatingIpsIdRequest.prototype, "pathParams", void 0);
    return GetFloatingIpsIdRequest;
}(SpeakeasyBase));
export { GetFloatingIpsIdRequest };
var GetFloatingIpsIdResponse = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdResponse, _super);
    function GetFloatingIpsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFloatingIpsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsId200ApplicationJson)
    ], GetFloatingIpsIdResponse.prototype, "getFloatingIpsId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdResponse.prototype, "statusCode", void 0);
    return GetFloatingIpsIdResponse;
}(SpeakeasyBase));
export { GetFloatingIpsIdResponse };
