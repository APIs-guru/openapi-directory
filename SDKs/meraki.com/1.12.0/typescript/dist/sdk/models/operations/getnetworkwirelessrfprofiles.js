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
var GetNetworkWirelessRfProfilesPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessRfProfilesPathParams, _super);
    function GetNetworkWirelessRfProfilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessRfProfilesPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessRfProfilesPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessRfProfilesPathParams };
var GetNetworkWirelessRfProfilesQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessRfProfilesQueryParams, _super);
    function GetNetworkWirelessRfProfilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTemplateProfiles" }),
        __metadata("design:type", Boolean)
    ], GetNetworkWirelessRfProfilesQueryParams.prototype, "includeTemplateProfiles", void 0);
    return GetNetworkWirelessRfProfilesQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessRfProfilesQueryParams };
var GetNetworkWirelessRfProfilesRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessRfProfilesRequest, _super);
    function GetNetworkWirelessRfProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessRfProfilesPathParams)
    ], GetNetworkWirelessRfProfilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessRfProfilesQueryParams)
    ], GetNetworkWirelessRfProfilesRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessRfProfilesRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessRfProfilesRequest };
var GetNetworkWirelessRfProfilesResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessRfProfilesResponse, _super);
    function GetNetworkWirelessRfProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessRfProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessRfProfilesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessRfProfilesResponse.prototype, "getNetworkWirelessRfProfiles200ApplicationJsonObject", void 0);
    return GetNetworkWirelessRfProfilesResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessRfProfilesResponse };
