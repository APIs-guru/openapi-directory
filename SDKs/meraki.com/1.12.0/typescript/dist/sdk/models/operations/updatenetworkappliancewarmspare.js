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
var UpdateNetworkApplianceWarmSparePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceWarmSparePathParams, _super);
    function UpdateNetworkApplianceWarmSparePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceWarmSparePathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceWarmSparePathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceWarmSparePathParams };
var UpdateNetworkApplianceWarmSpareRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceWarmSpareRequestBody, _super);
    function UpdateNetworkApplianceWarmSpareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceWarmSpareRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spareSerial" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceWarmSpareRequestBody.prototype, "spareSerial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uplinkMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceWarmSpareRequestBody.prototype, "uplinkMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualIp1" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceWarmSpareRequestBody.prototype, "virtualIp1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualIp2" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceWarmSpareRequestBody.prototype, "virtualIp2", void 0);
    return UpdateNetworkApplianceWarmSpareRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceWarmSpareRequestBody };
var UpdateNetworkApplianceWarmSpareRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceWarmSpareRequest, _super);
    function UpdateNetworkApplianceWarmSpareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceWarmSparePathParams)
    ], UpdateNetworkApplianceWarmSpareRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceWarmSpareRequestBody)
    ], UpdateNetworkApplianceWarmSpareRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceWarmSpareRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceWarmSpareRequest };
var UpdateNetworkApplianceWarmSpareResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceWarmSpareResponse, _super);
    function UpdateNetworkApplianceWarmSpareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceWarmSpareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceWarmSpareResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceWarmSpareResponse.prototype, "updateNetworkApplianceWarmSpare200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceWarmSpareResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceWarmSpareResponse };
