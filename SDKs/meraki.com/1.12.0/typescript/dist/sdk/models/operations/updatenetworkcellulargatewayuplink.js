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
var UpdateNetworkCellularGatewayUplinkPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayUplinkPathParams, _super);
    function UpdateNetworkCellularGatewayUplinkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayUplinkPathParams.prototype, "networkId", void 0);
    return UpdateNetworkCellularGatewayUplinkPathParams;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayUplinkPathParams };
// UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits
/**
 * The bandwidth settings for the 'cellular' uplink
**/
var UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits, _super);
    function UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits.prototype, "limitUp", void 0);
    return UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits };
var UpdateNetworkCellularGatewayUplinkRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayUplinkRequestBody, _super);
    function UpdateNetworkCellularGatewayUplinkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits)
    ], UpdateNetworkCellularGatewayUplinkRequestBody.prototype, "bandwidthLimits", void 0);
    return UpdateNetworkCellularGatewayUplinkRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayUplinkRequestBody };
var UpdateNetworkCellularGatewayUplinkRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayUplinkRequest, _super);
    function UpdateNetworkCellularGatewayUplinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkCellularGatewayUplinkPathParams)
    ], UpdateNetworkCellularGatewayUplinkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkCellularGatewayUplinkRequestBody)
    ], UpdateNetworkCellularGatewayUplinkRequest.prototype, "request", void 0);
    return UpdateNetworkCellularGatewayUplinkRequest;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayUplinkRequest };
var UpdateNetworkCellularGatewayUplinkResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayUplinkResponse, _super);
    function UpdateNetworkCellularGatewayUplinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayUplinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkCellularGatewayUplinkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkCellularGatewayUplinkResponse.prototype, "updateNetworkCellularGatewayUplink200ApplicationJsonObject", void 0);
    return UpdateNetworkCellularGatewayUplinkResponse;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayUplinkResponse };
