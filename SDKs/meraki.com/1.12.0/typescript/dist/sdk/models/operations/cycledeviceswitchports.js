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
var CycleDeviceSwitchPortsPathParams = /** @class */ (function (_super) {
    __extends(CycleDeviceSwitchPortsPathParams, _super);
    function CycleDeviceSwitchPortsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], CycleDeviceSwitchPortsPathParams.prototype, "serial", void 0);
    return CycleDeviceSwitchPortsPathParams;
}(SpeakeasyBase));
export { CycleDeviceSwitchPortsPathParams };
var CycleDeviceSwitchPortsRequestBody = /** @class */ (function (_super) {
    __extends(CycleDeviceSwitchPortsRequestBody, _super);
    function CycleDeviceSwitchPortsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ports" }),
        __metadata("design:type", Array)
    ], CycleDeviceSwitchPortsRequestBody.prototype, "ports", void 0);
    return CycleDeviceSwitchPortsRequestBody;
}(SpeakeasyBase));
export { CycleDeviceSwitchPortsRequestBody };
var CycleDeviceSwitchPortsRequest = /** @class */ (function (_super) {
    __extends(CycleDeviceSwitchPortsRequest, _super);
    function CycleDeviceSwitchPortsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CycleDeviceSwitchPortsPathParams)
    ], CycleDeviceSwitchPortsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CycleDeviceSwitchPortsRequestBody)
    ], CycleDeviceSwitchPortsRequest.prototype, "request", void 0);
    return CycleDeviceSwitchPortsRequest;
}(SpeakeasyBase));
export { CycleDeviceSwitchPortsRequest };
var CycleDeviceSwitchPortsResponse = /** @class */ (function (_super) {
    __extends(CycleDeviceSwitchPortsResponse, _super);
    function CycleDeviceSwitchPortsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CycleDeviceSwitchPortsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CycleDeviceSwitchPortsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CycleDeviceSwitchPortsResponse.prototype, "cycleDeviceSwitchPorts200ApplicationJsonObject", void 0);
    return CycleDeviceSwitchPortsResponse;
}(SpeakeasyBase));
export { CycleDeviceSwitchPortsResponse };
