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
var UpdateNetworkSwitchStackRoutingStaticRoutePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingStaticRoutePathParams, _super);
    function UpdateNetworkSwitchStackRoutingStaticRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingStaticRoutePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingStaticRoutePathParams.prototype, "staticRouteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingStaticRoutePathParams.prototype, "switchStackId", void 0);
    return UpdateNetworkSwitchStackRoutingStaticRoutePathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingStaticRoutePathParams };
var UpdateNetworkSwitchStackRoutingStaticRouteRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingStaticRouteRequestBody, _super);
    function UpdateNetworkSwitchStackRoutingStaticRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiseViaOspfEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "advertiseViaOspfEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextHopIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "nextHopIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferOverOspfRoutesEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "preferOverOspfRoutesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "subnet", void 0);
    return UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingStaticRouteRequestBody };
var UpdateNetworkSwitchStackRoutingStaticRouteRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingStaticRouteRequest, _super);
    function UpdateNetworkSwitchStackRoutingStaticRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchStackRoutingStaticRoutePathParams)
    ], UpdateNetworkSwitchStackRoutingStaticRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchStackRoutingStaticRouteRequestBody)
    ], UpdateNetworkSwitchStackRoutingStaticRouteRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchStackRoutingStaticRouteRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingStaticRouteRequest };
var UpdateNetworkSwitchStackRoutingStaticRouteResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchStackRoutingStaticRouteResponse, _super);
    function UpdateNetworkSwitchStackRoutingStaticRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchStackRoutingStaticRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchStackRoutingStaticRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchStackRoutingStaticRouteResponse.prototype, "updateNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchStackRoutingStaticRouteResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchStackRoutingStaticRouteResponse };
