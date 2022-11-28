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
var GetServersIdMetricsPathParams = /** @class */ (function (_super) {
    __extends(GetServersIdMetricsPathParams, _super);
    function GetServersIdMetricsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdMetricsPathParams.prototype, "id", void 0);
    return GetServersIdMetricsPathParams;
}(SpeakeasyBase));
export { GetServersIdMetricsPathParams };
export var GetServersIdMetricsTypeEnum;
(function (GetServersIdMetricsTypeEnum) {
    GetServersIdMetricsTypeEnum["Cpu"] = "cpu";
    GetServersIdMetricsTypeEnum["Disk"] = "disk";
    GetServersIdMetricsTypeEnum["Network"] = "network";
})(GetServersIdMetricsTypeEnum || (GetServersIdMetricsTypeEnum = {}));
var GetServersIdMetricsQueryParams = /** @class */ (function (_super) {
    __extends(GetServersIdMetricsQueryParams, _super);
    function GetServersIdMetricsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" }),
        __metadata("design:type", String)
    ], GetServersIdMetricsQueryParams.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetServersIdMetricsQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=step" }),
        __metadata("design:type", String)
    ], GetServersIdMetricsQueryParams.prototype, "step", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetServersIdMetricsQueryParams.prototype, "type", void 0);
    return GetServersIdMetricsQueryParams;
}(SpeakeasyBase));
export { GetServersIdMetricsQueryParams };
var GetServersIdMetrics200ApplicationJsonMetricsTimeSeries = /** @class */ (function (_super) {
    __extends(GetServersIdMetrics200ApplicationJsonMetricsTimeSeries, _super);
    function GetServersIdMetrics200ApplicationJsonMetricsTimeSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetServersIdMetrics200ApplicationJsonMetricsTimeSeries.prototype, "values", void 0);
    return GetServersIdMetrics200ApplicationJsonMetricsTimeSeries;
}(SpeakeasyBase));
export { GetServersIdMetrics200ApplicationJsonMetricsTimeSeries };
var GetServersIdMetrics200ApplicationJsonMetrics = /** @class */ (function (_super) {
    __extends(GetServersIdMetrics200ApplicationJsonMetrics, _super);
    function GetServersIdMetrics200ApplicationJsonMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], GetServersIdMetrics200ApplicationJsonMetrics.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], GetServersIdMetrics200ApplicationJsonMetrics.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=step" }),
        __metadata("design:type", Number)
    ], GetServersIdMetrics200ApplicationJsonMetrics.prototype, "step", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_series", elemType: GetServersIdMetrics200ApplicationJsonMetricsTimeSeries }),
        __metadata("design:type", Map)
    ], GetServersIdMetrics200ApplicationJsonMetrics.prototype, "timeSeries", void 0);
    return GetServersIdMetrics200ApplicationJsonMetrics;
}(SpeakeasyBase));
export { GetServersIdMetrics200ApplicationJsonMetrics };
var GetServersIdMetrics200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetServersIdMetrics200ApplicationJson, _super);
    function GetServersIdMetrics200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics" }),
        __metadata("design:type", GetServersIdMetrics200ApplicationJsonMetrics)
    ], GetServersIdMetrics200ApplicationJson.prototype, "metrics", void 0);
    return GetServersIdMetrics200ApplicationJson;
}(SpeakeasyBase));
export { GetServersIdMetrics200ApplicationJson };
var GetServersIdMetricsRequest = /** @class */ (function (_super) {
    __extends(GetServersIdMetricsRequest, _super);
    function GetServersIdMetricsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdMetricsPathParams)
    ], GetServersIdMetricsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdMetricsQueryParams)
    ], GetServersIdMetricsRequest.prototype, "queryParams", void 0);
    return GetServersIdMetricsRequest;
}(SpeakeasyBase));
export { GetServersIdMetricsRequest };
var GetServersIdMetricsResponse = /** @class */ (function (_super) {
    __extends(GetServersIdMetricsResponse, _super);
    function GetServersIdMetricsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServersIdMetricsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdMetrics200ApplicationJson)
    ], GetServersIdMetricsResponse.prototype, "getServersIdMetrics200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServersIdMetricsResponse.prototype, "statusCode", void 0);
    return GetServersIdMetricsResponse;
}(SpeakeasyBase));
export { GetServersIdMetricsResponse };
