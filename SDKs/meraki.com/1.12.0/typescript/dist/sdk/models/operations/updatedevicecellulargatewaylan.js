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
var UpdateDeviceCellularGatewayLanPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayLanPathParams, _super);
    function UpdateDeviceCellularGatewayLanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanPathParams.prototype, "serial", void 0);
    return UpdateDeviceCellularGatewayLanPathParams;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayLanPathParams };
var UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments, _super);
    function UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments.prototype, "mac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments.prototype, "name", void 0);
    return UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments };
var UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges, _super);
    function UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges.prototype, "start", void 0);
    return UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges };
var UpdateDeviceCellularGatewayLanRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayLanRequestBody, _super);
    function UpdateDeviceCellularGatewayLanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedIpAssignments", elemType: UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments }),
        __metadata("design:type", Array)
    ], UpdateDeviceCellularGatewayLanRequestBody.prototype, "fixedIpAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges }),
        __metadata("design:type", Array)
    ], UpdateDeviceCellularGatewayLanRequestBody.prototype, "reservedIpRanges", void 0);
    return UpdateDeviceCellularGatewayLanRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayLanRequestBody };
var UpdateDeviceCellularGatewayLanRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayLanRequest, _super);
    function UpdateDeviceCellularGatewayLanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceCellularGatewayLanPathParams)
    ], UpdateDeviceCellularGatewayLanRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceCellularGatewayLanRequestBody)
    ], UpdateDeviceCellularGatewayLanRequest.prototype, "request", void 0);
    return UpdateDeviceCellularGatewayLanRequest;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayLanRequest };
var UpdateDeviceCellularGatewayLanResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayLanResponse, _super);
    function UpdateDeviceCellularGatewayLanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayLanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceCellularGatewayLanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceCellularGatewayLanResponse.prototype, "updateDeviceCellularGatewayLan200ApplicationJsonObject", void 0);
    return UpdateDeviceCellularGatewayLanResponse;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayLanResponse };
