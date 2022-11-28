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
var GetRealmAuthenticationPerClientConfigDescriptionPathParams = /** @class */ (function (_super) {
    __extends(GetRealmAuthenticationPerClientConfigDescriptionPathParams, _super);
    function GetRealmAuthenticationPerClientConfigDescriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" }),
        __metadata("design:type", String)
    ], GetRealmAuthenticationPerClientConfigDescriptionPathParams.prototype, "realm", void 0);
    return GetRealmAuthenticationPerClientConfigDescriptionPathParams;
}(SpeakeasyBase));
export { GetRealmAuthenticationPerClientConfigDescriptionPathParams };
var GetRealmAuthenticationPerClientConfigDescriptionRequest = /** @class */ (function (_super) {
    __extends(GetRealmAuthenticationPerClientConfigDescriptionRequest, _super);
    function GetRealmAuthenticationPerClientConfigDescriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRealmAuthenticationPerClientConfigDescriptionPathParams)
    ], GetRealmAuthenticationPerClientConfigDescriptionRequest.prototype, "pathParams", void 0);
    return GetRealmAuthenticationPerClientConfigDescriptionRequest;
}(SpeakeasyBase));
export { GetRealmAuthenticationPerClientConfigDescriptionRequest };
var GetRealmAuthenticationPerClientConfigDescriptionResponse = /** @class */ (function (_super) {
    __extends(GetRealmAuthenticationPerClientConfigDescriptionResponse, _super);
    function GetRealmAuthenticationPerClientConfigDescriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRealmAuthenticationPerClientConfigDescriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetRealmAuthenticationPerClientConfigDescriptionResponse.prototype, "getRealmAuthenticationPerClientConfigDescription2XxApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRealmAuthenticationPerClientConfigDescriptionResponse.prototype, "statusCode", void 0);
    return GetRealmAuthenticationPerClientConfigDescriptionResponse;
}(SpeakeasyBase));
export { GetRealmAuthenticationPerClientConfigDescriptionResponse };
