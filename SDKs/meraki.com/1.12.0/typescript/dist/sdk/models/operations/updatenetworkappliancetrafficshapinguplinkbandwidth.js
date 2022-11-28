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
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams };
// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular
/**
 * The bandwidth settings for the 'cellular' uplink
**/
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular.prototype, "limitUp", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular };
// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1
/**
 * The bandwidth settings for the 'wan1' uplink
**/
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1.prototype, "limitUp", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 };
// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2
/**
 * The bandwidth settings for the 'wan2' uplink
**/
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2.prototype, "limitUp", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 };
// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits
/**
 * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
**/
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cellular" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits.prototype, "cellular", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wan1" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits.prototype, "wan1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wan2" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits.prototype, "wan2", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits };
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody.prototype, "bandwidthLimits", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody };
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest };
var UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse, _super);
    function UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse.prototype, "updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse };
