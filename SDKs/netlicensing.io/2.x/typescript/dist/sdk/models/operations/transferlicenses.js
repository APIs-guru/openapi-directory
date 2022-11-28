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
var TransferLicensesPathParams = /** @class */ (function (_super) {
    __extends(TransferLicensesPathParams, _super);
    function TransferLicensesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=licenseeNumber" }),
        __metadata("design:type", String)
    ], TransferLicensesPathParams.prototype, "licenseeNumber", void 0);
    return TransferLicensesPathParams;
}(SpeakeasyBase));
export { TransferLicensesPathParams };
var TransferLicensesRequestBody = /** @class */ (function (_super) {
    __extends(TransferLicensesRequestBody, _super);
    function TransferLicensesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=sourceLicenseeNumber;" }),
        __metadata("design:type", String)
    ], TransferLicensesRequestBody.prototype, "sourceLicenseeNumber", void 0);
    return TransferLicensesRequestBody;
}(SpeakeasyBase));
export { TransferLicensesRequestBody };
var TransferLicensesSecurity = /** @class */ (function (_super) {
    __extends(TransferLicensesSecurity, _super);
    function TransferLicensesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], TransferLicensesSecurity.prototype, "basicAuth", void 0);
    return TransferLicensesSecurity;
}(SpeakeasyBase));
export { TransferLicensesSecurity };
var TransferLicensesRequest = /** @class */ (function (_super) {
    __extends(TransferLicensesRequest, _super);
    function TransferLicensesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferLicensesPathParams)
    ], TransferLicensesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", TransferLicensesRequestBody)
    ], TransferLicensesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TransferLicensesSecurity)
    ], TransferLicensesRequest.prototype, "security", void 0);
    return TransferLicensesRequest;
}(SpeakeasyBase));
export { TransferLicensesRequest };
var TransferLicensesResponse = /** @class */ (function (_super) {
    __extends(TransferLicensesResponse, _super);
    function TransferLicensesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], TransferLicensesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TransferLicensesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TransferLicensesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TransferLicensesResponse.prototype, "netlicensing", void 0);
    return TransferLicensesResponse;
}(SpeakeasyBase));
export { TransferLicensesResponse };
