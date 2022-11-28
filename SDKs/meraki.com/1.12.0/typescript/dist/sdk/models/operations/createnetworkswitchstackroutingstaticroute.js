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
var CreateNetworkSwitchStackRoutingStaticRoutePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingStaticRoutePathParams, _super);
    function CreateNetworkSwitchStackRoutingStaticRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingStaticRoutePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingStaticRoutePathParams.prototype, "switchStackId", void 0);
    return CreateNetworkSwitchStackRoutingStaticRoutePathParams;
}(SpeakeasyBase));
export { CreateNetworkSwitchStackRoutingStaticRoutePathParams };
var CreateNetworkSwitchStackRoutingStaticRouteRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingStaticRouteRequestBody, _super);
    function CreateNetworkSwitchStackRoutingStaticRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiseViaOspfEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "advertiseViaOspfEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextHopIp" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "nextHopIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferOverOspfRoutesEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "preferOverOspfRoutesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingStaticRouteRequestBody.prototype, "subnet", void 0);
    return CreateNetworkSwitchStackRoutingStaticRouteRequestBody;
}(SpeakeasyBase));
export { CreateNetworkSwitchStackRoutingStaticRouteRequestBody };
var CreateNetworkSwitchStackRoutingStaticRouteRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingStaticRouteRequest, _super);
    function CreateNetworkSwitchStackRoutingStaticRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkSwitchStackRoutingStaticRoutePathParams)
    ], CreateNetworkSwitchStackRoutingStaticRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkSwitchStackRoutingStaticRouteRequestBody)
    ], CreateNetworkSwitchStackRoutingStaticRouteRequest.prototype, "request", void 0);
    return CreateNetworkSwitchStackRoutingStaticRouteRequest;
}(SpeakeasyBase));
export { CreateNetworkSwitchStackRoutingStaticRouteRequest };
var CreateNetworkSwitchStackRoutingStaticRouteResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchStackRoutingStaticRouteResponse, _super);
    function CreateNetworkSwitchStackRoutingStaticRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkSwitchStackRoutingStaticRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchStackRoutingStaticRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkSwitchStackRoutingStaticRouteResponse.prototype, "createNetworkSwitchStackRoutingStaticRoute201ApplicationJsonObject", void 0);
    return CreateNetworkSwitchStackRoutingStaticRouteResponse;
}(SpeakeasyBase));
export { CreateNetworkSwitchStackRoutingStaticRouteResponse };
