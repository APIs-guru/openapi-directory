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
var GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams, _super);
    function GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" }),
        __metadata("design:type", String)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams.prototype, "cardId", void 0);
    return GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams;
}(SpeakeasyBase));
export { GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams };
var GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity, _super);
    function GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity.prototype, "developerHapikey", void 0);
    return GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity;
}(SpeakeasyBase));
export { GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity };
var GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest = /** @class */ (function (_super) {
    __extends(GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest, _super);
    function GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest.prototype, "security", void 0);
    return GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest;
}(SpeakeasyBase));
export { GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest };
var GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse = /** @class */ (function (_super) {
    __extends(GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse, _super);
    function GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CardResponse)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse.prototype, "cardResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse.prototype, "statusCode", void 0);
    return GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse;
}(SpeakeasyBase));
export { GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse };
