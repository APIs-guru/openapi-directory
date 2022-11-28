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
var PutFloatingIpsIdPathParams = /** @class */ (function (_super) {
    __extends(PutFloatingIpsIdPathParams, _super);
    function PutFloatingIpsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutFloatingIpsIdPathParams.prototype, "id", void 0);
    return PutFloatingIpsIdPathParams;
}(SpeakeasyBase));
export { PutFloatingIpsIdPathParams };
var PutFloatingIpsIdUpdateFloatingIpRequest = /** @class */ (function (_super) {
    __extends(PutFloatingIpsIdUpdateFloatingIpRequest, _super);
    function PutFloatingIpsIdUpdateFloatingIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutFloatingIpsIdUpdateFloatingIpRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutFloatingIpsIdUpdateFloatingIpRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutFloatingIpsIdUpdateFloatingIpRequest.prototype, "name", void 0);
    return PutFloatingIpsIdUpdateFloatingIpRequest;
}(SpeakeasyBase));
export { PutFloatingIpsIdUpdateFloatingIpRequest };
var PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr = /** @class */ (function (_super) {
    __extends(PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr, _super);
    function PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr.prototype, "ip", void 0);
    return PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr;
}(SpeakeasyBase));
export { PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr };
// PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
var PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation = /** @class */ (function (_super) {
    __extends(PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation, _super);
    function PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation.prototype, "networkZone", void 0);
    return PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation;
}(SpeakeasyBase));
export { PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation };
// PutFloatingIpsId200ApplicationJsonFloatingIpProtection
/**
 * Protection configuration for the Resource
**/
var PutFloatingIpsId200ApplicationJsonFloatingIpProtection = /** @class */ (function (_super) {
    __extends(PutFloatingIpsId200ApplicationJsonFloatingIpProtection, _super);
    function PutFloatingIpsId200ApplicationJsonFloatingIpProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PutFloatingIpsId200ApplicationJsonFloatingIpProtection.prototype, "delete", void 0);
    return PutFloatingIpsId200ApplicationJsonFloatingIpProtection;
}(SpeakeasyBase));
export { PutFloatingIpsId200ApplicationJsonFloatingIpProtection };
export var PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum;
(function (PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum) {
    PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum["Ipv4"] = "ipv4";
    PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum["Ipv6"] = "ipv6";
})(PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum || (PutFloatingIpsId200ApplicationJsonFloatingIpTypeEnum = {}));
var PutFloatingIpsId200ApplicationJsonFloatingIp = /** @class */ (function (_super) {
    __extends(PutFloatingIpsId200ApplicationJsonFloatingIp, _super);
    function PutFloatingIpsId200ApplicationJsonFloatingIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: PutFloatingIpsId200ApplicationJsonFloatingIpDnsPtr }),
        __metadata("design:type", Array)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_location" }),
        __metadata("design:type", PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "homeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PutFloatingIpsId200ApplicationJsonFloatingIpProtection)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutFloatingIpsId200ApplicationJsonFloatingIp.prototype, "type", void 0);
    return PutFloatingIpsId200ApplicationJsonFloatingIp;
}(SpeakeasyBase));
export { PutFloatingIpsId200ApplicationJsonFloatingIp };
var PutFloatingIpsId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutFloatingIpsId200ApplicationJson, _super);
    function PutFloatingIpsId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ip" }),
        __metadata("design:type", PutFloatingIpsId200ApplicationJsonFloatingIp)
    ], PutFloatingIpsId200ApplicationJson.prototype, "floatingIp", void 0);
    return PutFloatingIpsId200ApplicationJson;
}(SpeakeasyBase));
export { PutFloatingIpsId200ApplicationJson };
var PutFloatingIpsIdRequest = /** @class */ (function (_super) {
    __extends(PutFloatingIpsIdRequest, _super);
    function PutFloatingIpsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFloatingIpsIdPathParams)
    ], PutFloatingIpsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutFloatingIpsIdUpdateFloatingIpRequest)
    ], PutFloatingIpsIdRequest.prototype, "request", void 0);
    return PutFloatingIpsIdRequest;
}(SpeakeasyBase));
export { PutFloatingIpsIdRequest };
var PutFloatingIpsIdResponse = /** @class */ (function (_super) {
    __extends(PutFloatingIpsIdResponse, _super);
    function PutFloatingIpsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutFloatingIpsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutFloatingIpsId200ApplicationJson)
    ], PutFloatingIpsIdResponse.prototype, "putFloatingIpsId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutFloatingIpsIdResponse.prototype, "statusCode", void 0);
    return PutFloatingIpsIdResponse;
}(SpeakeasyBase));
export { PutFloatingIpsIdResponse };
