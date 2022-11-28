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
var UpdateNetworkCellularGatewayDhcpPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayDhcpPathParams, _super);
    function UpdateNetworkCellularGatewayDhcpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayDhcpPathParams.prototype, "networkId", void 0);
    return UpdateNetworkCellularGatewayDhcpPathParams;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayDhcpPathParams };
var UpdateNetworkCellularGatewayDhcpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayDhcpRequestBody, _super);
    function UpdateNetworkCellularGatewayDhcpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpLeaseTime" }),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayDhcpRequestBody.prototype, "dhcpLeaseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsCustomNameservers" }),
        __metadata("design:type", Array)
    ], UpdateNetworkCellularGatewayDhcpRequestBody.prototype, "dnsCustomNameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsNameservers" }),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayDhcpRequestBody.prototype, "dnsNameservers", void 0);
    return UpdateNetworkCellularGatewayDhcpRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayDhcpRequestBody };
var UpdateNetworkCellularGatewayDhcpRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayDhcpRequest, _super);
    function UpdateNetworkCellularGatewayDhcpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkCellularGatewayDhcpPathParams)
    ], UpdateNetworkCellularGatewayDhcpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkCellularGatewayDhcpRequestBody)
    ], UpdateNetworkCellularGatewayDhcpRequest.prototype, "request", void 0);
    return UpdateNetworkCellularGatewayDhcpRequest;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayDhcpRequest };
var UpdateNetworkCellularGatewayDhcpResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkCellularGatewayDhcpResponse, _super);
    function UpdateNetworkCellularGatewayDhcpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkCellularGatewayDhcpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkCellularGatewayDhcpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkCellularGatewayDhcpResponse.prototype, "updateNetworkCellularGatewayDhcp200ApplicationJsonObject", void 0);
    return UpdateNetworkCellularGatewayDhcpResponse;
}(SpeakeasyBase));
export { UpdateNetworkCellularGatewayDhcpResponse };
