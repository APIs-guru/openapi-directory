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
var DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams = /** @class */ (function (_super) {
    __extends(DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams, _super);
    function DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", Number)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams.prototype, "subscriptionId", void 0);
    return DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams;
}(SpeakeasyBase));
export { DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams };
var DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity = /** @class */ (function (_super) {
    __extends(DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity, _super);
    function DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity.prototype, "developerHapikey", void 0);
    return DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity;
}(SpeakeasyBase));
export { DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity };
var DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest = /** @class */ (function (_super) {
    __extends(DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest, _super);
    function DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest.prototype, "security", void 0);
    return DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest;
}(SpeakeasyBase));
export { DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest };
var DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse = /** @class */ (function (_super) {
    __extends(DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse, _super);
    function DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse.prototype, "statusCode", void 0);
    return DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse;
}(SpeakeasyBase));
export { DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse };
