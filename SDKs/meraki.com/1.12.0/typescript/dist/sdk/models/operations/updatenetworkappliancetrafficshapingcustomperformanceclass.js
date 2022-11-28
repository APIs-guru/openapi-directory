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
var UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams, _super);
    function UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customPerformanceClassId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams.prototype, "customPerformanceClassId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams };
var UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody, _super);
    function UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxJitter" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "maxJitter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLatency" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "maxLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLossPercentage" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "maxLossPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "name", void 0);
    return UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody };
var UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, _super);
    function UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest };
var UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse, _super);
    function UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse.prototype, "updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse };
