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
var CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams, _super);
    function CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams.prototype, "networkId", void 0);
    return CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
}(SpeakeasyBase));
export { CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams };
var CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody, _super);
    function CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxJitter" }),
        __metadata("design:type", Number)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "maxJitter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLatency" }),
        __metadata("design:type", Number)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "maxLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxLossPercentage" }),
        __metadata("design:type", Number)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "maxLossPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody.prototype, "name", void 0);
    return CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}(SpeakeasyBase));
export { CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody };
var CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, _super);
    function CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest.prototype, "request", void 0);
    return CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest;
}(SpeakeasyBase));
export { CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest };
var CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse, _super);
    function CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse.prototype, "createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJsonObject", void 0);
    return CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse;
}(SpeakeasyBase));
export { CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse };
