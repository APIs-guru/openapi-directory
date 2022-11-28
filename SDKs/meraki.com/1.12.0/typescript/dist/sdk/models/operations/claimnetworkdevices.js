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
var ClaimNetworkDevicesPathParams = /** @class */ (function (_super) {
    __extends(ClaimNetworkDevicesPathParams, _super);
    function ClaimNetworkDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], ClaimNetworkDevicesPathParams.prototype, "networkId", void 0);
    return ClaimNetworkDevicesPathParams;
}(SpeakeasyBase));
export { ClaimNetworkDevicesPathParams };
var ClaimNetworkDevicesRequestBody = /** @class */ (function (_super) {
    __extends(ClaimNetworkDevicesRequestBody, _super);
    function ClaimNetworkDevicesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serials" }),
        __metadata("design:type", Array)
    ], ClaimNetworkDevicesRequestBody.prototype, "serials", void 0);
    return ClaimNetworkDevicesRequestBody;
}(SpeakeasyBase));
export { ClaimNetworkDevicesRequestBody };
var ClaimNetworkDevicesRequest = /** @class */ (function (_super) {
    __extends(ClaimNetworkDevicesRequest, _super);
    function ClaimNetworkDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClaimNetworkDevicesPathParams)
    ], ClaimNetworkDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ClaimNetworkDevicesRequestBody)
    ], ClaimNetworkDevicesRequest.prototype, "request", void 0);
    return ClaimNetworkDevicesRequest;
}(SpeakeasyBase));
export { ClaimNetworkDevicesRequest };
var ClaimNetworkDevicesResponse = /** @class */ (function (_super) {
    __extends(ClaimNetworkDevicesResponse, _super);
    function ClaimNetworkDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClaimNetworkDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClaimNetworkDevicesResponse.prototype, "statusCode", void 0);
    return ClaimNetworkDevicesResponse;
}(SpeakeasyBase));
export { ClaimNetworkDevicesResponse };
