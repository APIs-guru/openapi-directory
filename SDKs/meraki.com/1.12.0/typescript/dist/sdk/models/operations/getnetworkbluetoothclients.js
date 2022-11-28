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
var GetNetworkBluetoothClientsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkBluetoothClientsPathParams, _super);
    function GetNetworkBluetoothClientsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkBluetoothClientsPathParams.prototype, "networkId", void 0);
    return GetNetworkBluetoothClientsPathParams;
}(SpeakeasyBase));
export { GetNetworkBluetoothClientsPathParams };
var GetNetworkBluetoothClientsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkBluetoothClientsQueryParams, _super);
    function GetNetworkBluetoothClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkBluetoothClientsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeConnectivityHistory" }),
        __metadata("design:type", Boolean)
    ], GetNetworkBluetoothClientsQueryParams.prototype, "includeConnectivityHistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkBluetoothClientsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkBluetoothClientsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkBluetoothClientsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkBluetoothClientsQueryParams.prototype, "timespan", void 0);
    return GetNetworkBluetoothClientsQueryParams;
}(SpeakeasyBase));
export { GetNetworkBluetoothClientsQueryParams };
var GetNetworkBluetoothClientsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkBluetoothClientsRequest, _super);
    function GetNetworkBluetoothClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkBluetoothClientsPathParams)
    ], GetNetworkBluetoothClientsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkBluetoothClientsQueryParams)
    ], GetNetworkBluetoothClientsRequest.prototype, "queryParams", void 0);
    return GetNetworkBluetoothClientsRequest;
}(SpeakeasyBase));
export { GetNetworkBluetoothClientsRequest };
var GetNetworkBluetoothClientsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkBluetoothClientsResponse, _super);
    function GetNetworkBluetoothClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkBluetoothClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkBluetoothClientsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkBluetoothClientsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkBluetoothClientsResponse.prototype, "getNetworkBluetoothClients200ApplicationJsonObject", void 0);
    return GetNetworkBluetoothClientsResponse;
}(SpeakeasyBase));
export { GetNetworkBluetoothClientsResponse };
