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
var GetOrganizationDevicesUplinksLossAndLatencyPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesUplinksLossAndLatencyPathParams, _super);
    function GetOrganizationDevicesUplinksLossAndLatencyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesUplinksLossAndLatencyPathParams.prototype, "organizationId", void 0);
    return GetOrganizationDevicesUplinksLossAndLatencyPathParams;
}(SpeakeasyBase));
export { GetOrganizationDevicesUplinksLossAndLatencyPathParams };
export var GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
(function (GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum) {
    GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum["Wan1"] = "wan1";
    GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum["Wan2"] = "wan2";
    GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum["Cellular"] = "cellular";
})(GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum || (GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum = {}));
var GetOrganizationDevicesUplinksLossAndLatencyQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesUplinksLossAndLatencyQueryParams, _super);
    function GetOrganizationDevicesUplinksLossAndLatencyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesUplinksLossAndLatencyQueryParams.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesUplinksLossAndLatencyQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesUplinksLossAndLatencyQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetOrganizationDevicesUplinksLossAndLatencyQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uplink" }),
        __metadata("design:type", String)
    ], GetOrganizationDevicesUplinksLossAndLatencyQueryParams.prototype, "uplink", void 0);
    return GetOrganizationDevicesUplinksLossAndLatencyQueryParams;
}(SpeakeasyBase));
export { GetOrganizationDevicesUplinksLossAndLatencyQueryParams };
var GetOrganizationDevicesUplinksLossAndLatencyRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesUplinksLossAndLatencyRequest, _super);
    function GetOrganizationDevicesUplinksLossAndLatencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationDevicesUplinksLossAndLatencyPathParams)
    ], GetOrganizationDevicesUplinksLossAndLatencyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationDevicesUplinksLossAndLatencyQueryParams)
    ], GetOrganizationDevicesUplinksLossAndLatencyRequest.prototype, "queryParams", void 0);
    return GetOrganizationDevicesUplinksLossAndLatencyRequest;
}(SpeakeasyBase));
export { GetOrganizationDevicesUplinksLossAndLatencyRequest };
var GetOrganizationDevicesUplinksLossAndLatencyResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationDevicesUplinksLossAndLatencyResponse, _super);
    function GetOrganizationDevicesUplinksLossAndLatencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationDevicesUplinksLossAndLatencyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationDevicesUplinksLossAndLatencyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationDevicesUplinksLossAndLatencyResponse.prototype, "getOrganizationDevicesUplinksLossAndLatency200ApplicationJsonObject", void 0);
    return GetOrganizationDevicesUplinksLossAndLatencyResponse;
}(SpeakeasyBase));
export { GetOrganizationDevicesUplinksLossAndLatencyResponse };
