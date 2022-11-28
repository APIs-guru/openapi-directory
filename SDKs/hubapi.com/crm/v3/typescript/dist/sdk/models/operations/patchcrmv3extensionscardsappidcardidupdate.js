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
var PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams = /** @class */ (function (_super) {
    __extends(PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams, _super);
    function PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" }),
        __metadata("design:type", String)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams.prototype, "cardId", void 0);
    return PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams;
}(SpeakeasyBase));
export { PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams };
var PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity = /** @class */ (function (_super) {
    __extends(PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity, _super);
    function PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity.prototype, "developerHapikey", void 0);
    return PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity;
}(SpeakeasyBase));
export { PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity };
var PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest = /** @class */ (function (_super) {
    __extends(PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest, _super);
    function PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CardPatchRequest)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest.prototype, "security", void 0);
    return PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest;
}(SpeakeasyBase));
export { PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest };
var PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse = /** @class */ (function (_super) {
    __extends(PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse, _super);
    function PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CardResponse)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse.prototype, "cardResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse.prototype, "statusCode", void 0);
    return PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse;
}(SpeakeasyBase));
export { PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse };
