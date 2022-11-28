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
var GetNetworkAppliancePortPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkAppliancePortPathParams, _super);
    function GetNetworkAppliancePortPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkAppliancePortPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" }),
        __metadata("design:type", String)
    ], GetNetworkAppliancePortPathParams.prototype, "portId", void 0);
    return GetNetworkAppliancePortPathParams;
}(SpeakeasyBase));
export { GetNetworkAppliancePortPathParams };
var GetNetworkAppliancePortRequest = /** @class */ (function (_super) {
    __extends(GetNetworkAppliancePortRequest, _super);
    function GetNetworkAppliancePortRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkAppliancePortPathParams)
    ], GetNetworkAppliancePortRequest.prototype, "pathParams", void 0);
    return GetNetworkAppliancePortRequest;
}(SpeakeasyBase));
export { GetNetworkAppliancePortRequest };
var GetNetworkAppliancePortResponse = /** @class */ (function (_super) {
    __extends(GetNetworkAppliancePortResponse, _super);
    function GetNetworkAppliancePortResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkAppliancePortResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkAppliancePortResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkAppliancePortResponse.prototype, "getNetworkAppliancePort200ApplicationJsonObject", void 0);
    return GetNetworkAppliancePortResponse;
}(SpeakeasyBase));
export { GetNetworkAppliancePortResponse };
