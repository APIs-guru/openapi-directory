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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PostWebhooksV3AppIdSubscriptionsCreatePathParams = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsCreatePathParams, _super);
    function PostWebhooksV3AppIdSubscriptionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PostWebhooksV3AppIdSubscriptionsCreatePathParams.prototype, "appId", void 0);
    return PostWebhooksV3AppIdSubscriptionsCreatePathParams;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsCreatePathParams };
var PostWebhooksV3AppIdSubscriptionsCreateSecurity = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsCreateSecurity, _super);
    function PostWebhooksV3AppIdSubscriptionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PostWebhooksV3AppIdSubscriptionsCreateSecurity.prototype, "developerHapikey", void 0);
    return PostWebhooksV3AppIdSubscriptionsCreateSecurity;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsCreateSecurity };
var PostWebhooksV3AppIdSubscriptionsCreateRequest = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsCreateRequest, _super);
    function PostWebhooksV3AppIdSubscriptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostWebhooksV3AppIdSubscriptionsCreatePathParams)
    ], PostWebhooksV3AppIdSubscriptionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionCreateRequest)
    ], PostWebhooksV3AppIdSubscriptionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostWebhooksV3AppIdSubscriptionsCreateSecurity)
    ], PostWebhooksV3AppIdSubscriptionsCreateRequest.prototype, "security", void 0);
    return PostWebhooksV3AppIdSubscriptionsCreateRequest;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsCreateRequest };
var PostWebhooksV3AppIdSubscriptionsCreateResponse = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsCreateResponse, _super);
    function PostWebhooksV3AppIdSubscriptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostWebhooksV3AppIdSubscriptionsCreateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostWebhooksV3AppIdSubscriptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostWebhooksV3AppIdSubscriptionsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SubscriptionResponse)
    ], PostWebhooksV3AppIdSubscriptionsCreateResponse.prototype, "subscriptionResponse", void 0);
    return PostWebhooksV3AppIdSubscriptionsCreateResponse;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsCreateResponse };
