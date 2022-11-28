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
var GetRealmAuthenticationConfigDescriptionProviderIdPathParams = /** @class */ (function (_super) {
    __extends(GetRealmAuthenticationConfigDescriptionProviderIdPathParams, _super);
    function GetRealmAuthenticationConfigDescriptionProviderIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=providerId" }),
        __metadata("design:type", String)
    ], GetRealmAuthenticationConfigDescriptionProviderIdPathParams.prototype, "providerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmAuthenticationConfigDescriptionProviderIdPathParams.prototype, "realm", void 0);
    return GetRealmAuthenticationConfigDescriptionProviderIdPathParams;
}(SpeakeasyBase));
export { GetRealmAuthenticationConfigDescriptionProviderIdPathParams };
var GetRealmAuthenticationConfigDescriptionProviderIdRequest = /** @class */ (function (_super) {
    __extends(GetRealmAuthenticationConfigDescriptionProviderIdRequest, _super);
    function GetRealmAuthenticationConfigDescriptionProviderIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmAuthenticationConfigDescriptionProviderIdPathParams)
    ], GetRealmAuthenticationConfigDescriptionProviderIdRequest.prototype, "pathParams", void 0);
    return GetRealmAuthenticationConfigDescriptionProviderIdRequest;
}(SpeakeasyBase));
export { GetRealmAuthenticationConfigDescriptionProviderIdRequest };
var GetRealmAuthenticationConfigDescriptionProviderIdResponse = /** @class */ (function (_super) {
    __extends(GetRealmAuthenticationConfigDescriptionProviderIdResponse, _super);
    function GetRealmAuthenticationConfigDescriptionProviderIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticatorConfigInfoRepresentation)
    ], GetRealmAuthenticationConfigDescriptionProviderIdResponse.prototype, "authenticatorConfigInfoRepresentation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmAuthenticationConfigDescriptionProviderIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmAuthenticationConfigDescriptionProviderIdResponse.prototype, "statusCode", void 0);
    return GetRealmAuthenticationConfigDescriptionProviderIdResponse;
}(SpeakeasyBase));
export { GetRealmAuthenticationConfigDescriptionProviderIdResponse };
