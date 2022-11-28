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
var UpdateNetworkNetflowPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkNetflowPathParams, _super);
    function UpdateNetworkNetflowPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkNetflowPathParams.prototype, "networkId", void 0);
    return UpdateNetworkNetflowPathParams;
}(SpeakeasyBase));
export { UpdateNetworkNetflowPathParams };
var UpdateNetworkNetflowRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkNetflowRequestBody, _super);
    function UpdateNetworkNetflowRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectorIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkNetflowRequestBody.prototype, "collectorIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectorPort" }),
        __metadata("design:type", Number)
    ], UpdateNetworkNetflowRequestBody.prototype, "collectorPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etaDstPort" }),
        __metadata("design:type", Number)
    ], UpdateNetworkNetflowRequestBody.prototype, "etaDstPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etaEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkNetflowRequestBody.prototype, "etaEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkNetflowRequestBody.prototype, "reportingEnabled", void 0);
    return UpdateNetworkNetflowRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkNetflowRequestBody };
var UpdateNetworkNetflowRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkNetflowRequest, _super);
    function UpdateNetworkNetflowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkNetflowPathParams)
    ], UpdateNetworkNetflowRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkNetflowRequestBody)
    ], UpdateNetworkNetflowRequest.prototype, "request", void 0);
    return UpdateNetworkNetflowRequest;
}(SpeakeasyBase));
export { UpdateNetworkNetflowRequest };
var UpdateNetworkNetflowResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkNetflowResponse, _super);
    function UpdateNetworkNetflowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkNetflowResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkNetflowResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkNetflowResponse.prototype, "updateNetworkNetflow200ApplicationJsonObject", void 0);
    return UpdateNetworkNetflowResponse;
}(SpeakeasyBase));
export { UpdateNetworkNetflowResponse };
