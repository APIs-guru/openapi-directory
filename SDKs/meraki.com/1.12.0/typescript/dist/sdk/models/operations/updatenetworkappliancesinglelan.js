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
var UpdateNetworkApplianceSingleLanPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSingleLanPathParams, _super);
    function UpdateNetworkApplianceSingleLanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSingleLanPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceSingleLanPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSingleLanPathParams };
var UpdateNetworkApplianceSingleLanRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSingleLanRequestBody, _super);
    function UpdateNetworkApplianceSingleLanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applianceIp" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSingleLanRequestBody.prototype, "applianceIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subnet" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSingleLanRequestBody.prototype, "subnet", void 0);
    return UpdateNetworkApplianceSingleLanRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSingleLanRequestBody };
var UpdateNetworkApplianceSingleLanRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSingleLanRequest, _super);
    function UpdateNetworkApplianceSingleLanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceSingleLanPathParams)
    ], UpdateNetworkApplianceSingleLanRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceSingleLanRequestBody)
    ], UpdateNetworkApplianceSingleLanRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceSingleLanRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSingleLanRequest };
var UpdateNetworkApplianceSingleLanResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSingleLanResponse, _super);
    function UpdateNetworkApplianceSingleLanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSingleLanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceSingleLanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceSingleLanResponse.prototype, "updateNetworkApplianceSingleLan200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceSingleLanResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSingleLanResponse };
