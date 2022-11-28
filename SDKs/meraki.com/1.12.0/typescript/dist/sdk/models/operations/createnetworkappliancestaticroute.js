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
var CreateNetworkApplianceStaticRoutePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceStaticRoutePathParams, _super);
    function CreateNetworkApplianceStaticRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkApplianceStaticRoutePathParams.prototype, "networkId", void 0);
    return CreateNetworkApplianceStaticRoutePathParams;
}(SpeakeasyBase));
export { CreateNetworkApplianceStaticRoutePathParams };
var CreateNetworkApplianceStaticRouteRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceStaticRouteRequestBody, _super);
    function CreateNetworkApplianceStaticRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayIp" }),
        __metadata("design:type", String)
    ], CreateNetworkApplianceStaticRouteRequestBody.prototype, "gatewayIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkApplianceStaticRouteRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], CreateNetworkApplianceStaticRouteRequestBody.prototype, "subnet", void 0);
    return CreateNetworkApplianceStaticRouteRequestBody;
}(SpeakeasyBase));
export { CreateNetworkApplianceStaticRouteRequestBody };
var CreateNetworkApplianceStaticRouteRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceStaticRouteRequest, _super);
    function CreateNetworkApplianceStaticRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkApplianceStaticRoutePathParams)
    ], CreateNetworkApplianceStaticRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkApplianceStaticRouteRequestBody)
    ], CreateNetworkApplianceStaticRouteRequest.prototype, "request", void 0);
    return CreateNetworkApplianceStaticRouteRequest;
}(SpeakeasyBase));
export { CreateNetworkApplianceStaticRouteRequest };
var CreateNetworkApplianceStaticRouteResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkApplianceStaticRouteResponse, _super);
    function CreateNetworkApplianceStaticRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkApplianceStaticRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkApplianceStaticRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkApplianceStaticRouteResponse.prototype, "createNetworkApplianceStaticRoute201ApplicationJsonObject", void 0);
    return CreateNetworkApplianceStaticRouteResponse;
}(SpeakeasyBase));
export { CreateNetworkApplianceStaticRouteResponse };
