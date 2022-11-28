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
var PostCrmV3ExtensionsCardsAppIdCreatePathParams = /** @class */ (function (_super) {
    __extends(PostCrmV3ExtensionsCardsAppIdCreatePathParams, _super);
    function PostCrmV3ExtensionsCardsAppIdCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PostCrmV3ExtensionsCardsAppIdCreatePathParams.prototype, "appId", void 0);
    return PostCrmV3ExtensionsCardsAppIdCreatePathParams;
}(SpeakeasyBase));
export { PostCrmV3ExtensionsCardsAppIdCreatePathParams };
var PostCrmV3ExtensionsCardsAppIdCreateSecurity = /** @class */ (function (_super) {
    __extends(PostCrmV3ExtensionsCardsAppIdCreateSecurity, _super);
    function PostCrmV3ExtensionsCardsAppIdCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PostCrmV3ExtensionsCardsAppIdCreateSecurity.prototype, "developerHapikey", void 0);
    return PostCrmV3ExtensionsCardsAppIdCreateSecurity;
}(SpeakeasyBase));
export { PostCrmV3ExtensionsCardsAppIdCreateSecurity };
var PostCrmV3ExtensionsCardsAppIdCreateRequest = /** @class */ (function (_super) {
    __extends(PostCrmV3ExtensionsCardsAppIdCreateRequest, _super);
    function PostCrmV3ExtensionsCardsAppIdCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCrmV3ExtensionsCardsAppIdCreatePathParams)
    ], PostCrmV3ExtensionsCardsAppIdCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CardCreateRequest)
    ], PostCrmV3ExtensionsCardsAppIdCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCrmV3ExtensionsCardsAppIdCreateSecurity)
    ], PostCrmV3ExtensionsCardsAppIdCreateRequest.prototype, "security", void 0);
    return PostCrmV3ExtensionsCardsAppIdCreateRequest;
}(SpeakeasyBase));
export { PostCrmV3ExtensionsCardsAppIdCreateRequest };
var PostCrmV3ExtensionsCardsAppIdCreateResponse = /** @class */ (function (_super) {
    __extends(PostCrmV3ExtensionsCardsAppIdCreateResponse, _super);
    function PostCrmV3ExtensionsCardsAppIdCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostCrmV3ExtensionsCardsAppIdCreateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CardResponse)
    ], PostCrmV3ExtensionsCardsAppIdCreateResponse.prototype, "cardResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCrmV3ExtensionsCardsAppIdCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCrmV3ExtensionsCardsAppIdCreateResponse.prototype, "statusCode", void 0);
    return PostCrmV3ExtensionsCardsAppIdCreateResponse;
}(SpeakeasyBase));
export { PostCrmV3ExtensionsCardsAppIdCreateResponse };
