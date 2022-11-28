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
var GetLoadBalancerTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesQueryParams, _super);
    function GetLoadBalancerTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesQueryParams.prototype, "name", void 0);
    return GetLoadBalancerTypesQueryParams;
}(SpeakeasyBase));
export { GetLoadBalancerTypesQueryParams };
// GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly
/**
 * Hourly costs for a Resource in this Location
**/
var GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly, _super);
    function GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly.prototype, "net", void 0);
    return GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly;
}(SpeakeasyBase));
export { GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly };
// GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly
/**
 * Monthly costs for a Resource in this Location
**/
var GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly, _super);
    function GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly.prototype, "net", void 0);
    return GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly;
}(SpeakeasyBase));
export { GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly };
var GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices, _super);
    function GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceHourly)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPricesPriceMonthly)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices.prototype, "priceMonthly", void 0);
    return GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices;
}(SpeakeasyBase));
export { GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices };
var GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes, _super);
    function GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_assigned_certificates" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "maxAssignedCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_connections" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_services" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "maxServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_targets" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "maxTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypesPrices }),
        __metadata("design:type", Array)
    ], GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes.prototype, "prices", void 0);
    return GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes;
}(SpeakeasyBase));
export { GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes };
var GetLoadBalancerTypes200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypes200ApplicationJson, _super);
    function GetLoadBalancerTypes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_types", elemType: GetLoadBalancerTypes200ApplicationJsonLoadBalancerTypes }),
        __metadata("design:type", Array)
    ], GetLoadBalancerTypes200ApplicationJson.prototype, "loadBalancerTypes", void 0);
    return GetLoadBalancerTypes200ApplicationJson;
}(SpeakeasyBase));
export { GetLoadBalancerTypes200ApplicationJson };
var GetLoadBalancerTypesRequest = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesRequest, _super);
    function GetLoadBalancerTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancerTypesQueryParams)
    ], GetLoadBalancerTypesRequest.prototype, "queryParams", void 0);
    return GetLoadBalancerTypesRequest;
}(SpeakeasyBase));
export { GetLoadBalancerTypesRequest };
var GetLoadBalancerTypesResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesResponse, _super);
    function GetLoadBalancerTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancerTypes200ApplicationJson)
    ], GetLoadBalancerTypesResponse.prototype, "getLoadBalancerTypes200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesResponse.prototype, "statusCode", void 0);
    return GetLoadBalancerTypesResponse;
}(SpeakeasyBase));
export { GetLoadBalancerTypesResponse };
