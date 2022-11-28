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
var GetNetworkWirelessMeshStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessMeshStatusesPathParams, _super);
    function GetNetworkWirelessMeshStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessMeshStatusesPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessMeshStatusesPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessMeshStatusesPathParams };
var GetNetworkWirelessMeshStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessMeshStatusesQueryParams, _super);
    function GetNetworkWirelessMeshStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessMeshStatusesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessMeshStatusesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessMeshStatusesQueryParams.prototype, "startingAfter", void 0);
    return GetNetworkWirelessMeshStatusesQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessMeshStatusesQueryParams };
var GetNetworkWirelessMeshStatusesRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessMeshStatusesRequest, _super);
    function GetNetworkWirelessMeshStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessMeshStatusesPathParams)
    ], GetNetworkWirelessMeshStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessMeshStatusesQueryParams)
    ], GetNetworkWirelessMeshStatusesRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessMeshStatusesRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessMeshStatusesRequest };
var GetNetworkWirelessMeshStatusesResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessMeshStatusesResponse, _super);
    function GetNetworkWirelessMeshStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessMeshStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessMeshStatusesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessMeshStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessMeshStatusesResponse.prototype, "getNetworkWirelessMeshStatuses200ApplicationJsonObject", void 0);
    return GetNetworkWirelessMeshStatusesResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessMeshStatusesResponse };
