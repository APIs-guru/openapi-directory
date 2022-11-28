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
var GetLoadBalancersIdMetricsPathParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdMetricsPathParams, _super);
    function GetLoadBalancersIdMetricsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdMetricsPathParams.prototype, "id", void 0);
    return GetLoadBalancersIdMetricsPathParams;
}(SpeakeasyBase));
export { GetLoadBalancersIdMetricsPathParams };
export var GetLoadBalancersIdMetricsTypeEnum;
(function (GetLoadBalancersIdMetricsTypeEnum) {
    GetLoadBalancersIdMetricsTypeEnum["OpenConnections"] = "open_connections";
    GetLoadBalancersIdMetricsTypeEnum["ConnectionsPerSecond"] = "connections_per_second";
    GetLoadBalancersIdMetricsTypeEnum["RequestsPerSecond"] = "requests_per_second";
    GetLoadBalancersIdMetricsTypeEnum["Bandwidth"] = "bandwidth";
})(GetLoadBalancersIdMetricsTypeEnum || (GetLoadBalancersIdMetricsTypeEnum = {}));
var GetLoadBalancersIdMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdMetricsQueryParams, _super);
    function GetLoadBalancersIdMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdMetricsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=step" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdMetricsQueryParams.prototype, "step", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdMetricsQueryParams.prototype, "type", void 0);
    return GetLoadBalancersIdMetricsQueryParams;
}(SpeakeasyBase));
export { GetLoadBalancersIdMetricsQueryParams };
var GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries, _super);
    function GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries.prototype, "values", void 0);
    return GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries;
}(SpeakeasyBase));
export { GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries };
var GetLoadBalancersIdMetrics200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdMetrics200ApplicationJsonMetrics, _super);
    function GetLoadBalancersIdMetrics200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdMetrics200ApplicationJsonMetrics.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], GetLoadBalancersIdMetrics200ApplicationJsonMetrics.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=step" }),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdMetrics200ApplicationJsonMetrics.prototype, "step", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_series", elemType: GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries }),
        __metadata("design:type", Map)
    ], GetLoadBalancersIdMetrics200ApplicationJsonMetrics.prototype, "timeSeries", void 0);
    return GetLoadBalancersIdMetrics200ApplicationJsonMetrics;
}(SpeakeasyBase));
export { GetLoadBalancersIdMetrics200ApplicationJsonMetrics };
var GetLoadBalancersIdMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdMetrics200ApplicationJson, _super);
    function GetLoadBalancersIdMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", GetLoadBalancersIdMetrics200ApplicationJsonMetrics)
    ], GetLoadBalancersIdMetrics200ApplicationJson.prototype, "metrics", void 0);
    return GetLoadBalancersIdMetrics200ApplicationJson;
}(SpeakeasyBase));
export { GetLoadBalancersIdMetrics200ApplicationJson };
var GetLoadBalancersIdMetricsRequest = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdMetricsRequest, _super);
    function GetLoadBalancersIdMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersIdMetricsPathParams)
    ], GetLoadBalancersIdMetricsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersIdMetricsQueryParams)
    ], GetLoadBalancersIdMetricsRequest.prototype, "queryParams", void 0);
    return GetLoadBalancersIdMetricsRequest;
}(SpeakeasyBase));
export { GetLoadBalancersIdMetricsRequest };
var GetLoadBalancersIdMetricsResponse = /** @class */ (function (_super) {
    __extends(GetLoadBalancersIdMetricsResponse, _super);
    function GetLoadBalancersIdMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLoadBalancersIdMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLoadBalancersIdMetrics200ApplicationJson)
    ], GetLoadBalancersIdMetricsResponse.prototype, "getLoadBalancersIdMetrics200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLoadBalancersIdMetricsResponse.prototype, "statusCode", void 0);
    return GetLoadBalancersIdMetricsResponse;
}(SpeakeasyBase));
export { GetLoadBalancersIdMetricsResponse };
