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
var GetDeviceLossAndLatencyHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceLossAndLatencyHistoryPathParams, _super);
    function GetDeviceLossAndLatencyHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GetDeviceLossAndLatencyHistoryPathParams.prototype, "serial", void 0);
    return GetDeviceLossAndLatencyHistoryPathParams;
}(SpeakeasyBase));
export { GetDeviceLossAndLatencyHistoryPathParams };
export var GetDeviceLossAndLatencyHistoryUplinkEnum;
(function (GetDeviceLossAndLatencyHistoryUplinkEnum) {
    GetDeviceLossAndLatencyHistoryUplinkEnum["Wan1"] = "wan1";
    GetDeviceLossAndLatencyHistoryUplinkEnum["Wan2"] = "wan2";
    GetDeviceLossAndLatencyHistoryUplinkEnum["Cellular"] = "cellular";
})(GetDeviceLossAndLatencyHistoryUplinkEnum || (GetDeviceLossAndLatencyHistoryUplinkEnum = {}));
var GetDeviceLossAndLatencyHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceLossAndLatencyHistoryQueryParams, _super);
    function GetDeviceLossAndLatencyHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" }),
        __metadata("design:type", String)
    ], GetDeviceLossAndLatencyHistoryQueryParams.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetDeviceLossAndLatencyHistoryQueryParams.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetDeviceLossAndLatencyHistoryQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetDeviceLossAndLatencyHistoryQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetDeviceLossAndLatencyHistoryQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uplink" }),
        __metadata("design:type", String)
    ], GetDeviceLossAndLatencyHistoryQueryParams.prototype, "uplink", void 0);
    return GetDeviceLossAndLatencyHistoryQueryParams;
}(SpeakeasyBase));
export { GetDeviceLossAndLatencyHistoryQueryParams };
var GetDeviceLossAndLatencyHistoryRequest = /** @class */ (function (_super) {
    __extends(GetDeviceLossAndLatencyHistoryRequest, _super);
    function GetDeviceLossAndLatencyHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceLossAndLatencyHistoryPathParams)
    ], GetDeviceLossAndLatencyHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceLossAndLatencyHistoryQueryParams)
    ], GetDeviceLossAndLatencyHistoryRequest.prototype, "queryParams", void 0);
    return GetDeviceLossAndLatencyHistoryRequest;
}(SpeakeasyBase));
export { GetDeviceLossAndLatencyHistoryRequest };
var GetDeviceLossAndLatencyHistoryResponse = /** @class */ (function (_super) {
    __extends(GetDeviceLossAndLatencyHistoryResponse, _super);
    function GetDeviceLossAndLatencyHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeviceLossAndLatencyHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeviceLossAndLatencyHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDeviceLossAndLatencyHistoryResponse.prototype, "getDeviceLossAndLatencyHistory200ApplicationJsonObject", void 0);
    return GetDeviceLossAndLatencyHistoryResponse;
}(SpeakeasyBase));
export { GetDeviceLossAndLatencyHistoryResponse };
