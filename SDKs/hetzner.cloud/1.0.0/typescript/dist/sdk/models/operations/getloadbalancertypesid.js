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
var GetLoadBalancerTypesIdPathParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesIdPathParams, _super);
    function GetLoadBalancerTypesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesIdPathParams.prototype, "id", void 0);
    return GetLoadBalancerTypesIdPathParams;
}(SpeakeasyBase));
export { GetLoadBalancerTypesIdPathParams };
// GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly
/**
 * Hourly costs for a Resource in this Location
**/
var GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly, _super);
    function GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly.prototype, "net", void 0);
    return GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly;
}(SpeakeasyBase));
export { GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly };
// GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly
/**
 * Monthly costs for a Resource in this Location
**/
var GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly, _super);
    function GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly.prototype, "net", void 0);
    return GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly };
var GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices, _super);
    function GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceHourly)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePricesPriceMonthly)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices.prototype, "priceMonthly", void 0);
    return GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices;
}(SpeakeasyBase));
export { GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices };
var GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType, _super);
    function GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_assigned_certificates" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "maxAssignedCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_connections" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_services" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "maxServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_targets" }),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "maxTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: GetLoadBalancerTypesId200ApplicationJsonLoadBalancerTypePrices }),
        __metadata("design:type", Array)
    ], GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType.prototype, "prices", void 0);
    return GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType;
}(SpeakeasyBase));
export { GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType };
var GetLoadBalancerTypesId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesId200ApplicationJson, _super);
    function GetLoadBalancerTypesId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_type" }),
        __metadata("design:type", GetLoadBalancerTypesId200ApplicationJsonLoadBalancerType)
    ], GetLoadBalancerTypesId200ApplicationJson.prototype, "loadBalancerType", void 0);
    return GetLoadBalancerTypesId200ApplicationJson;
}(SpeakeasyBase));
export { GetLoadBalancerTypesId200ApplicationJson };
var GetLoadBalancerTypesIdRequest = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesIdRequest, _super);
    function GetLoadBalancerTypesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancerTypesIdPathParams)
    ], GetLoadBalancerTypesIdRequest.prototype, "pathParams", void 0);
    return GetLoadBalancerTypesIdRequest;
}(SpeakeasyBase));
export { GetLoadBalancerTypesIdRequest };
var GetLoadBalancerTypesIdResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancerTypesIdResponse, _super);
    function GetLoadBalancerTypesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLoadBalancerTypesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancerTypesId200ApplicationJson)
    ], GetLoadBalancerTypesIdResponse.prototype, "getLoadBalancerTypesId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLoadBalancerTypesIdResponse.prototype, "statusCode", void 0);
    return GetLoadBalancerTypesIdResponse;
}(SpeakeasyBase));
export { GetLoadBalancerTypesIdResponse };
