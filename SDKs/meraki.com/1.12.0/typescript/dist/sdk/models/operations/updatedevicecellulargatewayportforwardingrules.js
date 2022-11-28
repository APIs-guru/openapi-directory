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
var UpdateDeviceCellularGatewayPortForwardingRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayPortForwardingRulesPathParams, _super);
    function UpdateDeviceCellularGatewayPortForwardingRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesPathParams.prototype, "serial", void 0);
    return UpdateDeviceCellularGatewayPortForwardingRulesPathParams;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayPortForwardingRulesPathParams };
var UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules, _super);
    function UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedIps" }),
        __metadata("design:type", Array)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lanIp" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules.prototype, "lanIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localPort" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules.prototype, "localPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicPort" }),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules.prototype, "publicPort", void 0);
    return UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules };
var UpdateDeviceCellularGatewayPortForwardingRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayPortForwardingRulesRequestBody, _super);
    function UpdateDeviceCellularGatewayPortForwardingRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequestBody.prototype, "rules", void 0);
    return UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayPortForwardingRulesRequestBody };
var UpdateDeviceCellularGatewayPortForwardingRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayPortForwardingRulesRequest, _super);
    function UpdateDeviceCellularGatewayPortForwardingRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceCellularGatewayPortForwardingRulesPathParams)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceCellularGatewayPortForwardingRulesRequestBody)
    ], UpdateDeviceCellularGatewayPortForwardingRulesRequest.prototype, "request", void 0);
    return UpdateDeviceCellularGatewayPortForwardingRulesRequest;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayPortForwardingRulesRequest };
var UpdateDeviceCellularGatewayPortForwardingRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceCellularGatewayPortForwardingRulesResponse, _super);
    function UpdateDeviceCellularGatewayPortForwardingRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceCellularGatewayPortForwardingRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceCellularGatewayPortForwardingRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceCellularGatewayPortForwardingRulesResponse.prototype, "updateDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject", void 0);
    return UpdateDeviceCellularGatewayPortForwardingRulesResponse;
}(SpeakeasyBase));
export { UpdateDeviceCellularGatewayPortForwardingRulesResponse };
