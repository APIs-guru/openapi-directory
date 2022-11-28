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
var GetDeviceSwitchPortsStatusesPacketsPathParams = /** @class */ (function (_super) {
    __extends(GetDeviceSwitchPortsStatusesPacketsPathParams, _super);
    function GetDeviceSwitchPortsStatusesPacketsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], GetDeviceSwitchPortsStatusesPacketsPathParams.prototype, "serial", void 0);
    return GetDeviceSwitchPortsStatusesPacketsPathParams;
}(SpeakeasyBase));
export { GetDeviceSwitchPortsStatusesPacketsPathParams };
var GetDeviceSwitchPortsStatusesPacketsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeviceSwitchPortsStatusesPacketsQueryParams, _super);
    function GetDeviceSwitchPortsStatusesPacketsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetDeviceSwitchPortsStatusesPacketsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetDeviceSwitchPortsStatusesPacketsQueryParams.prototype, "timespan", void 0);
    return GetDeviceSwitchPortsStatusesPacketsQueryParams;
}(SpeakeasyBase));
export { GetDeviceSwitchPortsStatusesPacketsQueryParams };
var GetDeviceSwitchPortsStatusesPacketsRequest = /** @class */ (function (_super) {
    __extends(GetDeviceSwitchPortsStatusesPacketsRequest, _super);
    function GetDeviceSwitchPortsStatusesPacketsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceSwitchPortsStatusesPacketsPathParams)
    ], GetDeviceSwitchPortsStatusesPacketsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDeviceSwitchPortsStatusesPacketsQueryParams)
    ], GetDeviceSwitchPortsStatusesPacketsRequest.prototype, "queryParams", void 0);
    return GetDeviceSwitchPortsStatusesPacketsRequest;
}(SpeakeasyBase));
export { GetDeviceSwitchPortsStatusesPacketsRequest };
var GetDeviceSwitchPortsStatusesPacketsResponse = /** @class */ (function (_super) {
    __extends(GetDeviceSwitchPortsStatusesPacketsResponse, _super);
    function GetDeviceSwitchPortsStatusesPacketsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDeviceSwitchPortsStatusesPacketsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDeviceSwitchPortsStatusesPacketsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetDeviceSwitchPortsStatusesPacketsResponse.prototype, "getDeviceSwitchPortsStatusesPackets200ApplicationJsonObject", void 0);
    return GetDeviceSwitchPortsStatusesPacketsResponse;
}(SpeakeasyBase));
export { GetDeviceSwitchPortsStatusesPacketsResponse };
