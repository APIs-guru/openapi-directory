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
var GetNamedConfigurationPathParams = /** @class */ (function (_super) {
    __extends(GetNamedConfigurationPathParams, _super);
    function GetNamedConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], GetNamedConfigurationPathParams.prototype, "key", void 0);
    return GetNamedConfigurationPathParams;
}(SpeakeasyBase));
export { GetNamedConfigurationPathParams };
var GetNamedConfigurationSecurity = /** @class */ (function (_super) {
    __extends(GetNamedConfigurationSecurity, _super);
    function GetNamedConfigurationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetNamedConfigurationSecurity.prototype, "customAuthentication", void 0);
    return GetNamedConfigurationSecurity;
}(SpeakeasyBase));
export { GetNamedConfigurationSecurity };
var GetNamedConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetNamedConfigurationRequest, _super);
    function GetNamedConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNamedConfigurationPathParams)
    ], GetNamedConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNamedConfigurationSecurity)
    ], GetNamedConfigurationRequest.prototype, "security", void 0);
    return GetNamedConfigurationRequest;
}(SpeakeasyBase));
export { GetNamedConfigurationRequest };
var GetNamedConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetNamedConfigurationResponse, _super);
    function GetNamedConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNamedConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetNamedConfigurationResponse.prototype, "getNamedConfiguration200ApplicationJsonBinaryString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNamedConfigurationResponse.prototype, "statusCode", void 0);
    return GetNamedConfigurationResponse;
}(SpeakeasyBase));
export { GetNamedConfigurationResponse };
