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
export var GetFloatingIpsSortEnum;
(function (GetFloatingIpsSortEnum) {
    GetFloatingIpsSortEnum["Id"] = "id";
    GetFloatingIpsSortEnum["IdAsc"] = "id:asc";
    GetFloatingIpsSortEnum["IdDesc"] = "id:desc";
    GetFloatingIpsSortEnum["Created"] = "created";
    GetFloatingIpsSortEnum["CreatedAsc"] = "created:asc";
    GetFloatingIpsSortEnum["CreatedDesc"] = "created:desc";
})(GetFloatingIpsSortEnum || (GetFloatingIpsSortEnum = {}));
var GetFloatingIpsQueryParams = /** @class */ (function (_super) {
    __extends(GetFloatingIpsQueryParams, _super);
    function GetFloatingIpsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label_selector" }),
        __metadata("design:type", String)
    ], GetFloatingIpsQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetFloatingIpsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetFloatingIpsQueryParams.prototype, "sort", void 0);
    return GetFloatingIpsQueryParams;
}(SpeakeasyBase));
export { GetFloatingIpsQueryParams };
var GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr = /** @class */ (function (_super) {
    __extends(GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr, _super);
    function GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr.prototype, "ip", void 0);
    return GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr;
}(SpeakeasyBase));
export { GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr };
// GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation
/**
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
var GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation = /** @class */ (function (_super) {
    __extends(GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation, _super);
    function GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation.prototype, "networkZone", void 0);
    return GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation;
}(SpeakeasyBase));
export { GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation };
// GetFloatingIps200ApplicationJsonFloatingIpsProtection
/**
 * Protection configuration for the Resource
**/
var GetFloatingIps200ApplicationJsonFloatingIpsProtection = /** @class */ (function (_super) {
    __extends(GetFloatingIps200ApplicationJsonFloatingIpsProtection, _super);
    function GetFloatingIps200ApplicationJsonFloatingIpsProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetFloatingIps200ApplicationJsonFloatingIpsProtection.prototype, "delete", void 0);
    return GetFloatingIps200ApplicationJsonFloatingIpsProtection;
}(SpeakeasyBase));
export { GetFloatingIps200ApplicationJsonFloatingIpsProtection };
export var GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum;
(function (GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum) {
    GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum["Ipv4"] = "ipv4";
    GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum["Ipv6"] = "ipv6";
})(GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum || (GetFloatingIps200ApplicationJsonFloatingIpsTypeEnum = {}));
var GetFloatingIps200ApplicationJsonFloatingIps = /** @class */ (function (_super) {
    __extends(GetFloatingIps200ApplicationJsonFloatingIps, _super);
    function GetFloatingIps200ApplicationJsonFloatingIps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blocked" }),
        __metadata("design:type", Boolean)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "blocked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr", elemType: GetFloatingIps200ApplicationJsonFloatingIpsDnsPtr }),
        __metadata("design:type", Array)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_location" }),
        __metadata("design:type", GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "homeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetFloatingIps200ApplicationJsonFloatingIpsProtection)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFloatingIps200ApplicationJsonFloatingIps.prototype, "type", void 0);
    return GetFloatingIps200ApplicationJsonFloatingIps;
}(SpeakeasyBase));
export { GetFloatingIps200ApplicationJsonFloatingIps };
var GetFloatingIps200ApplicationJsonMetaPagination = /** @class */ (function (_super) {
    __extends(GetFloatingIps200ApplicationJsonMetaPagination, _super);
    function GetFloatingIps200ApplicationJsonMetaPagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_page" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonMetaPagination.prototype, "lastPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonMetaPagination.prototype, "nextPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonMetaPagination.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=per_page" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonMetaPagination.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonMetaPagination.prototype, "previousPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_entries" }),
        __metadata("design:type", Number)
    ], GetFloatingIps200ApplicationJsonMetaPagination.prototype, "totalEntries", void 0);
    return GetFloatingIps200ApplicationJsonMetaPagination;
}(SpeakeasyBase));
export { GetFloatingIps200ApplicationJsonMetaPagination };
var GetFloatingIps200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetFloatingIps200ApplicationJsonMeta, _super);
    function GetFloatingIps200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pagination" }),
        __metadata("design:type", GetFloatingIps200ApplicationJsonMetaPagination)
    ], GetFloatingIps200ApplicationJsonMeta.prototype, "pagination", void 0);
    return GetFloatingIps200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetFloatingIps200ApplicationJsonMeta };
var GetFloatingIps200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFloatingIps200ApplicationJson, _super);
    function GetFloatingIps200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floating_ips", elemType: GetFloatingIps200ApplicationJsonFloatingIps }),
        __metadata("design:type", Array)
    ], GetFloatingIps200ApplicationJson.prototype, "floatingIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetFloatingIps200ApplicationJsonMeta)
    ], GetFloatingIps200ApplicationJson.prototype, "meta", void 0);
    return GetFloatingIps200ApplicationJson;
}(SpeakeasyBase));
export { GetFloatingIps200ApplicationJson };
var GetFloatingIpsRequest = /** @class */ (function (_super) {
    __extends(GetFloatingIpsRequest, _super);
    function GetFloatingIpsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsQueryParams)
    ], GetFloatingIpsRequest.prototype, "queryParams", void 0);
    return GetFloatingIpsRequest;
}(SpeakeasyBase));
export { GetFloatingIpsRequest };
var GetFloatingIpsResponse = /** @class */ (function (_super) {
    __extends(GetFloatingIpsResponse, _super);
    function GetFloatingIpsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFloatingIpsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIps200ApplicationJson)
    ], GetFloatingIpsResponse.prototype, "getFloatingIps200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFloatingIpsResponse.prototype, "statusCode", void 0);
    return GetFloatingIpsResponse;
}(SpeakeasyBase));
export { GetFloatingIpsResponse };
