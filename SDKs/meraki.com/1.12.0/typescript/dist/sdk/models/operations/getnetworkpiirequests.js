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
var GetNetworkPiiRequestsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkPiiRequestsPathParams, _super);
    function GetNetworkPiiRequestsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkPiiRequestsPathParams.prototype, "networkId", void 0);
    return GetNetworkPiiRequestsPathParams;
}(SpeakeasyBase));
export { GetNetworkPiiRequestsPathParams };
var GetNetworkPiiRequestsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkPiiRequestsRequest, _super);
    function GetNetworkPiiRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkPiiRequestsPathParams)
    ], GetNetworkPiiRequestsRequest.prototype, "pathParams", void 0);
    return GetNetworkPiiRequestsRequest;
}(SpeakeasyBase));
export { GetNetworkPiiRequestsRequest };
var GetNetworkPiiRequestsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkPiiRequestsResponse, _super);
    function GetNetworkPiiRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkPiiRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkPiiRequestsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkPiiRequestsResponse.prototype, "getNetworkPiiRequests200ApplicationJsonObject", void 0);
    return GetNetworkPiiRequestsResponse;
}(SpeakeasyBase));
export { GetNetworkPiiRequestsResponse };
