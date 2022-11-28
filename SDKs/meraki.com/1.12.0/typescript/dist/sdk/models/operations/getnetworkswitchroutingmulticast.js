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
var GetNetworkSwitchRoutingMulticastPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSwitchRoutingMulticastPathParams, _super);
    function GetNetworkSwitchRoutingMulticastPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSwitchRoutingMulticastPathParams.prototype, "networkId", void 0);
    return GetNetworkSwitchRoutingMulticastPathParams;
}(SpeakeasyBase));
export { GetNetworkSwitchRoutingMulticastPathParams };
var GetNetworkSwitchRoutingMulticastRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSwitchRoutingMulticastRequest, _super);
    function GetNetworkSwitchRoutingMulticastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSwitchRoutingMulticastPathParams)
    ], GetNetworkSwitchRoutingMulticastRequest.prototype, "pathParams", void 0);
    return GetNetworkSwitchRoutingMulticastRequest;
}(SpeakeasyBase));
export { GetNetworkSwitchRoutingMulticastRequest };
var GetNetworkSwitchRoutingMulticastResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSwitchRoutingMulticastResponse, _super);
    function GetNetworkSwitchRoutingMulticastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSwitchRoutingMulticastResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSwitchRoutingMulticastResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSwitchRoutingMulticastResponse.prototype, "getNetworkSwitchRoutingMulticast200ApplicationJsonObject", void 0);
    return GetNetworkSwitchRoutingMulticastResponse;
}(SpeakeasyBase));
export { GetNetworkSwitchRoutingMulticastResponse };
