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
var PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams, _super);
    function PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams.prototype, "appId", void 0);
    return PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams };
var PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity, _super);
    function PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity.prototype, "developerHapikey", void 0);
    return PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity };
var PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest, _super);
    function PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchPathParams)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputSubscriptionBatchUpdateRequest)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest.prototype, "security", void 0);
    return PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest };
var PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse = /** @class */ (function (_super) {
    __extends(PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse, _super);
    function PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchResponseSubscriptionResponse)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse.prototype, "batchResponseSubscriptionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchResponseSubscriptionResponseWithErrors)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse.prototype, "batchResponseSubscriptionResponseWithErrors", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse.prototype, "statusCode", void 0);
    return PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse;
}(SpeakeasyBase));
export { PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse };
