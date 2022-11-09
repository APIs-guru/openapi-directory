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
var PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams = /** @class */ (function (_super) {
    __extends(PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams, _super);
    function PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams.prototype, "appId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", Number)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams.prototype, "subscriptionId", void 0);
    return PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams;
}(SpeakeasyBase));
export { PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams };
var PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity = /** @class */ (function (_super) {
    __extends(PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity, _super);
    function PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity.prototype, "developerHapikey", void 0);
    return PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity;
}(SpeakeasyBase));
export { PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity };
var PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest = /** @class */ (function (_super) {
    __extends(PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest, _super);
    function PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SubscriptionPatchRequest)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest.prototype, "security", void 0);
    return PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest;
}(SpeakeasyBase));
export { PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest };
var PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse = /** @class */ (function (_super) {
    __extends(PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse, _super);
    function PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SubscriptionResponse)
    ], PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse.prototype, "subscriptionResponse", void 0);
    return PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse;
}(SpeakeasyBase));
export { PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse };
