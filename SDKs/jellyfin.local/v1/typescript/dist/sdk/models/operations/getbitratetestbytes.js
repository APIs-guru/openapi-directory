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
var GetBitrateTestBytesQueryParams = /** @class */ (function (_super) {
    __extends(GetBitrateTestBytesQueryParams, _super);
    function GetBitrateTestBytesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], GetBitrateTestBytesQueryParams.prototype, "size", void 0);
    return GetBitrateTestBytesQueryParams;
}(SpeakeasyBase));
export { GetBitrateTestBytesQueryParams };
var GetBitrateTestBytesSecurity = /** @class */ (function (_super) {
    __extends(GetBitrateTestBytesSecurity, _super);
    function GetBitrateTestBytesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetBitrateTestBytesSecurity.prototype, "customAuthentication", void 0);
    return GetBitrateTestBytesSecurity;
}(SpeakeasyBase));
export { GetBitrateTestBytesSecurity };
var GetBitrateTestBytesRequest = /** @class */ (function (_super) {
    __extends(GetBitrateTestBytesRequest, _super);
    function GetBitrateTestBytesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBitrateTestBytesQueryParams)
    ], GetBitrateTestBytesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBitrateTestBytesSecurity)
    ], GetBitrateTestBytesRequest.prototype, "security", void 0);
    return GetBitrateTestBytesRequest;
}(SpeakeasyBase));
export { GetBitrateTestBytesRequest };
var GetBitrateTestBytesResponse = /** @class */ (function (_super) {
    __extends(GetBitrateTestBytesResponse, _super);
    function GetBitrateTestBytesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBitrateTestBytesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBitrateTestBytesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetBitrateTestBytesResponse.prototype, "getBitrateTestBytes200ApplicationOctetStreamBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetBitrateTestBytesResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBitrateTestBytesResponse.prototype, "statusCode", void 0);
    return GetBitrateTestBytesResponse;
}(SpeakeasyBase));
export { GetBitrateTestBytesResponse };
