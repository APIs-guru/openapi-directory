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
var PhoneCodeGeoPathParams = /** @class */ (function (_super) {
    __extends(PhoneCodeGeoPathParams, _super);
    function PhoneCodeGeoPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" }),
        __metadata("design:type", String)
    ], PhoneCodeGeoPathParams.prototype, "countryIso2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" }),
        __metadata("design:type", String)
    ], PhoneCodeGeoPathParams.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" }),
        __metadata("design:type", String)
    ], PhoneCodeGeoPathParams.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=phoneNumber" }),
        __metadata("design:type", String)
    ], PhoneCodeGeoPathParams.prototype, "phoneNumber", void 0);
    return PhoneCodeGeoPathParams;
}(SpeakeasyBase));
export { PhoneCodeGeoPathParams };
var PhoneCodeGeoSecurity = /** @class */ (function (_super) {
    __extends(PhoneCodeGeoSecurity, _super);
    function PhoneCodeGeoSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PhoneCodeGeoSecurity.prototype, "apiKey", void 0);
    return PhoneCodeGeoSecurity;
}(SpeakeasyBase));
export { PhoneCodeGeoSecurity };
var PhoneCodeGeoRequest = /** @class */ (function (_super) {
    __extends(PhoneCodeGeoRequest, _super);
    function PhoneCodeGeoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PhoneCodeGeoPathParams)
    ], PhoneCodeGeoRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PhoneCodeGeoSecurity)
    ], PhoneCodeGeoRequest.prototype, "security", void 0);
    return PhoneCodeGeoRequest;
}(SpeakeasyBase));
export { PhoneCodeGeoRequest };
var PhoneCodeGeoResponse = /** @class */ (function (_super) {
    __extends(PhoneCodeGeoResponse, _super);
    function PhoneCodeGeoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PhoneCodeGeoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirstLastNamePhoneCodedOut)
    ], PhoneCodeGeoResponse.prototype, "firstLastNamePhoneCodedOut", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PhoneCodeGeoResponse.prototype, "statusCode", void 0);
    return PhoneCodeGeoResponse;
}(SpeakeasyBase));
export { PhoneCodeGeoResponse };
