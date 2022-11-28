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
var UpdateNetworkApplianceStaticRoutePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceStaticRoutePathParams, _super);
    function UpdateNetworkApplianceStaticRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRoutePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRoutePathParams.prototype, "staticRouteId", void 0);
    return UpdateNetworkApplianceStaticRoutePathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceStaticRoutePathParams };
var UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges, _super);
    function UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges.prototype, "start", void 0);
    return UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges;
}(SpeakeasyBase));
export { UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges };
var UpdateNetworkApplianceStaticRouteRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceStaticRouteRequestBody, _super);
    function UpdateNetworkApplianceStaticRouteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceStaticRouteRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fixedIpAssignments" }),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceStaticRouteRequestBody.prototype, "fixedIpAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRouteRequestBody.prototype, "gatewayIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRouteRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceStaticRouteRequestBody.prototype, "reservedIpRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRouteRequestBody.prototype, "subnet", void 0);
    return UpdateNetworkApplianceStaticRouteRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceStaticRouteRequestBody };
var UpdateNetworkApplianceStaticRouteRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceStaticRouteRequest, _super);
    function UpdateNetworkApplianceStaticRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceStaticRoutePathParams)
    ], UpdateNetworkApplianceStaticRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceStaticRouteRequestBody)
    ], UpdateNetworkApplianceStaticRouteRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceStaticRouteRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceStaticRouteRequest };
var UpdateNetworkApplianceStaticRouteResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceStaticRouteResponse, _super);
    function UpdateNetworkApplianceStaticRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceStaticRouteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceStaticRouteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceStaticRouteResponse.prototype, "updateNetworkApplianceStaticRoute200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceStaticRouteResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceStaticRouteResponse };
