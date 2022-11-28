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
var GetNetworkPiiSmOwnersForKeyPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkPiiSmOwnersForKeyPathParams, _super);
    function GetNetworkPiiSmOwnersForKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyPathParams.prototype, "networkId", void 0);
    return GetNetworkPiiSmOwnersForKeyPathParams;
}(SpeakeasyBase));
export { GetNetworkPiiSmOwnersForKeyPathParams };
var GetNetworkPiiSmOwnersForKeyQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkPiiSmOwnersForKeyQueryParams, _super);
    function GetNetworkPiiSmOwnersForKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bluetoothMac" }),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyQueryParams.prototype, "bluetoothMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyQueryParams.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imei" }),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyQueryParams.prototype, "imei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mac" }),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyQueryParams.prototype, "mac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" }),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyQueryParams.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyQueryParams.prototype, "username", void 0);
    return GetNetworkPiiSmOwnersForKeyQueryParams;
}(SpeakeasyBase));
export { GetNetworkPiiSmOwnersForKeyQueryParams };
var GetNetworkPiiSmOwnersForKeyRequest = /** @class */ (function (_super) {
    __extends(GetNetworkPiiSmOwnersForKeyRequest, _super);
    function GetNetworkPiiSmOwnersForKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkPiiSmOwnersForKeyPathParams)
    ], GetNetworkPiiSmOwnersForKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkPiiSmOwnersForKeyQueryParams)
    ], GetNetworkPiiSmOwnersForKeyRequest.prototype, "queryParams", void 0);
    return GetNetworkPiiSmOwnersForKeyRequest;
}(SpeakeasyBase));
export { GetNetworkPiiSmOwnersForKeyRequest };
var GetNetworkPiiSmOwnersForKeyResponse = /** @class */ (function (_super) {
    __extends(GetNetworkPiiSmOwnersForKeyResponse, _super);
    function GetNetworkPiiSmOwnersForKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkPiiSmOwnersForKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkPiiSmOwnersForKeyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkPiiSmOwnersForKeyResponse.prototype, "getNetworkPiiSmOwnersForKey200ApplicationJsonObject", void 0);
    return GetNetworkPiiSmOwnersForKeyResponse;
}(SpeakeasyBase));
export { GetNetworkPiiSmOwnersForKeyResponse };
