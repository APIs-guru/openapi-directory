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
var UpdateNetworkApplianceVpnBgpPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnBgpPathParams, _super);
    function UpdateNetworkApplianceVpnBgpPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnBgpPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceVpnBgpPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnBgpPathParams };
var UpdateNetworkApplianceVpnBgpRequestBodyNeighbors = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnBgpRequestBodyNeighbors, _super);
    function UpdateNetworkApplianceVpnBgpRequestBodyNeighbors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowTransit" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceVpnBgpRequestBodyNeighbors.prototype, "allowTransit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebgpHoldTimer" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnBgpRequestBodyNeighbors.prototype, "ebgpHoldTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ebgpMultihop" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnBgpRequestBodyNeighbors.prototype, "ebgpMultihop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnBgpRequestBodyNeighbors.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receiveLimit" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnBgpRequestBodyNeighbors.prototype, "receiveLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteAsNumber" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnBgpRequestBodyNeighbors.prototype, "remoteAsNumber", void 0);
    return UpdateNetworkApplianceVpnBgpRequestBodyNeighbors;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnBgpRequestBodyNeighbors };
var UpdateNetworkApplianceVpnBgpRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnBgpRequestBody, _super);
    function UpdateNetworkApplianceVpnBgpRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asNumber" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnBgpRequestBody.prototype, "asNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceVpnBgpRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ibgpHoldTimer" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnBgpRequestBody.prototype, "ibgpHoldTimer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=neighbors", elemType: UpdateNetworkApplianceVpnBgpRequestBodyNeighbors }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceVpnBgpRequestBody.prototype, "neighbors", void 0);
    return UpdateNetworkApplianceVpnBgpRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnBgpRequestBody };
var UpdateNetworkApplianceVpnBgpRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnBgpRequest, _super);
    function UpdateNetworkApplianceVpnBgpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceVpnBgpPathParams)
    ], UpdateNetworkApplianceVpnBgpRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceVpnBgpRequestBody)
    ], UpdateNetworkApplianceVpnBgpRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceVpnBgpRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnBgpRequest };
var UpdateNetworkApplianceVpnBgpResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceVpnBgpResponse, _super);
    function UpdateNetworkApplianceVpnBgpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceVpnBgpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceVpnBgpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceVpnBgpResponse.prototype, "updateNetworkApplianceVpnBgp200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceVpnBgpResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceVpnBgpResponse };
