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
var UpdateNetworkAppliancePortPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkAppliancePortPathParams, _super);
    function UpdateNetworkAppliancePortPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkAppliancePortPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" }),
        __metadata("design:type", String)
    ], UpdateNetworkAppliancePortPathParams.prototype, "portId", void 0);
    return UpdateNetworkAppliancePortPathParams;
}(SpeakeasyBase));
export { UpdateNetworkAppliancePortPathParams };
var UpdateNetworkAppliancePortRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkAppliancePortRequestBody, _super);
    function UpdateNetworkAppliancePortRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicy" }),
        __metadata("design:type", String)
    ], UpdateNetworkAppliancePortRequestBody.prototype, "accessPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedVlans" }),
        __metadata("design:type", String)
    ], UpdateNetworkAppliancePortRequestBody.prototype, "allowedVlans", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dropUntaggedTraffic" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkAppliancePortRequestBody.prototype, "dropUntaggedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkAppliancePortRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkAppliancePortRequestBody.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], UpdateNetworkAppliancePortRequestBody.prototype, "vlan", void 0);
    return UpdateNetworkAppliancePortRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkAppliancePortRequestBody };
var UpdateNetworkAppliancePortRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkAppliancePortRequest, _super);
    function UpdateNetworkAppliancePortRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkAppliancePortPathParams)
    ], UpdateNetworkAppliancePortRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkAppliancePortRequestBody)
    ], UpdateNetworkAppliancePortRequest.prototype, "request", void 0);
    return UpdateNetworkAppliancePortRequest;
}(SpeakeasyBase));
export { UpdateNetworkAppliancePortRequest };
var UpdateNetworkAppliancePortResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkAppliancePortResponse, _super);
    function UpdateNetworkAppliancePortResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkAppliancePortResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkAppliancePortResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkAppliancePortResponse.prototype, "updateNetworkAppliancePort200ApplicationJsonObject", void 0);
    return UpdateNetworkAppliancePortResponse;
}(SpeakeasyBase));
export { UpdateNetworkAppliancePortResponse };
