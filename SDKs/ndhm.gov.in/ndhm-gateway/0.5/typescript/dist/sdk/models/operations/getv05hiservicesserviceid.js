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
import * as shared from "../shared";
var GetV05HiServicesServiceIdPathParams = /** @class */ (function (_super) {
    __extends(GetV05HiServicesServiceIdPathParams, _super);
    function GetV05HiServicesServiceIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=service-id" }),
        __metadata("design:type", String)
    ], GetV05HiServicesServiceIdPathParams.prototype, "serviceId", void 0);
    return GetV05HiServicesServiceIdPathParams;
}(SpeakeasyBase));
export { GetV05HiServicesServiceIdPathParams };
var GetV05HiServicesServiceIdHeaders = /** @class */ (function (_super) {
    __extends(GetV05HiServicesServiceIdHeaders, _super);
    function GetV05HiServicesServiceIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], GetV05HiServicesServiceIdHeaders.prototype, "authorization", void 0);
    return GetV05HiServicesServiceIdHeaders;
}(SpeakeasyBase));
export { GetV05HiServicesServiceIdHeaders };
var GetV05HiServicesServiceIdRequest = /** @class */ (function (_super) {
    __extends(GetV05HiServicesServiceIdRequest, _super);
    function GetV05HiServicesServiceIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV05HiServicesServiceIdPathParams)
    ], GetV05HiServicesServiceIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV05HiServicesServiceIdHeaders)
    ], GetV05HiServicesServiceIdRequest.prototype, "headers", void 0);
    return GetV05HiServicesServiceIdRequest;
}(SpeakeasyBase));
export { GetV05HiServicesServiceIdRequest };
var GetV05HiServicesServiceIdResponse = /** @class */ (function (_super) {
    __extends(GetV05HiServicesServiceIdResponse, _super);
    function GetV05HiServicesServiceIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetV05HiServicesServiceIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV05HiServicesServiceIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetV05HiServicesServiceIdResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceProfileResponse)
    ], GetV05HiServicesServiceIdResponse.prototype, "serviceProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV05HiServicesServiceIdResponse.prototype, "statusCode", void 0);
    return GetV05HiServicesServiceIdResponse;
}(SpeakeasyBase));
export { GetV05HiServicesServiceIdResponse };
