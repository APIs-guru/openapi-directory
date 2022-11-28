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
var CreateDeviceSwitchRoutingStaticRoutePathParams = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingStaticRoutePathParams, _super);
    function CreateDeviceSwitchRoutingStaticRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingStaticRoutePathParams.prototype, "serial", void 0);
    return CreateDeviceSwitchRoutingStaticRoutePathParams;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingStaticRoutePathParams };
var CreateDeviceSwitchRoutingStaticRouteRequestBody = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingStaticRouteRequestBody, _super);
    function CreateDeviceSwitchRoutingStaticRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiseViaOspfEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateDeviceSwitchRoutingStaticRouteRequestBody.prototype, "advertiseViaOspfEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingStaticRouteRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextHopIp" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingStaticRouteRequestBody.prototype, "nextHopIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferOverOspfRoutesEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateDeviceSwitchRoutingStaticRouteRequestBody.prototype, "preferOverOspfRoutesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingStaticRouteRequestBody.prototype, "subnet", void 0);
    return CreateDeviceSwitchRoutingStaticRouteRequestBody;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingStaticRouteRequestBody };
var CreateDeviceSwitchRoutingStaticRouteRequest = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingStaticRouteRequest, _super);
    function CreateDeviceSwitchRoutingStaticRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDeviceSwitchRoutingStaticRoutePathParams)
    ], CreateDeviceSwitchRoutingStaticRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDeviceSwitchRoutingStaticRouteRequestBody)
    ], CreateDeviceSwitchRoutingStaticRouteRequest.prototype, "request", void 0);
    return CreateDeviceSwitchRoutingStaticRouteRequest;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingStaticRouteRequest };
var CreateDeviceSwitchRoutingStaticRouteResponse = /** @class */ (function (_super) {
    __extends(CreateDeviceSwitchRoutingStaticRouteResponse, _super);
    function CreateDeviceSwitchRoutingStaticRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDeviceSwitchRoutingStaticRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDeviceSwitchRoutingStaticRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateDeviceSwitchRoutingStaticRouteResponse.prototype, "createDeviceSwitchRoutingStaticRoute201ApplicationJsonObject", void 0);
    return CreateDeviceSwitchRoutingStaticRouteResponse;
}(SpeakeasyBase));
export { CreateDeviceSwitchRoutingStaticRouteResponse };
