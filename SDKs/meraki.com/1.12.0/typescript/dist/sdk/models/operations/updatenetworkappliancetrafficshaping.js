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
var UpdateNetworkApplianceTrafficShapingPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingPathParams, _super);
    function UpdateNetworkApplianceTrafficShapingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceTrafficShapingPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingPathParams };
// UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits
/**
 * Global per-client bandwidth limit
**/
var UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits, _super);
    function UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits.prototype, "limitUp", void 0);
    return UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits };
var UpdateNetworkApplianceTrafficShapingRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRequestBody, _super);
    function UpdateNetworkApplianceTrafficShapingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=globalBandwidthLimits" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits)
    ], UpdateNetworkApplianceTrafficShapingRequestBody.prototype, "globalBandwidthLimits", void 0);
    return UpdateNetworkApplianceTrafficShapingRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRequestBody };
var UpdateNetworkApplianceTrafficShapingRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRequest, _super);
    function UpdateNetworkApplianceTrafficShapingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingPathParams)
    ], UpdateNetworkApplianceTrafficShapingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingRequestBody)
    ], UpdateNetworkApplianceTrafficShapingRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceTrafficShapingRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRequest };
var UpdateNetworkApplianceTrafficShapingResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingResponse, _super);
    function UpdateNetworkApplianceTrafficShapingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceTrafficShapingResponse.prototype, "updateNetworkApplianceTrafficShaping200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceTrafficShapingResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingResponse };
