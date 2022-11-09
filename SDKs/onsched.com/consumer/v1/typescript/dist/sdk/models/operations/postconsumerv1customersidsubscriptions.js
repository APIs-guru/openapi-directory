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
var PostConsumerV1CustomersIdSubscriptionsPathParams = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsPathParams, _super);
    function PostConsumerV1CustomersIdSubscriptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostConsumerV1CustomersIdSubscriptionsPathParams.prototype, "id", void 0);
    return PostConsumerV1CustomersIdSubscriptionsPathParams;
}(SpeakeasyBase));
export { PostConsumerV1CustomersIdSubscriptionsPathParams };
var PostConsumerV1CustomersIdSubscriptionsRequests = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsRequests, _super);
    function PostConsumerV1CustomersIdSubscriptionsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CustomerSubscriptionInputModel)
    ], PostConsumerV1CustomersIdSubscriptionsRequests.prototype, "customerSubscriptionInputModel3", void 0);
    return PostConsumerV1CustomersIdSubscriptionsRequests;
}(SpeakeasyBase));
export { PostConsumerV1CustomersIdSubscriptionsRequests };
var PostConsumerV1CustomersIdSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsRequest, _super);
    function PostConsumerV1CustomersIdSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostConsumerV1CustomersIdSubscriptionsPathParams)
    ], PostConsumerV1CustomersIdSubscriptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostConsumerV1CustomersIdSubscriptionsRequests)
    ], PostConsumerV1CustomersIdSubscriptionsRequest.prototype, "request", void 0);
    return PostConsumerV1CustomersIdSubscriptionsRequest;
}(SpeakeasyBase));
export { PostConsumerV1CustomersIdSubscriptionsRequest };
var PostConsumerV1CustomersIdSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(PostConsumerV1CustomersIdSubscriptionsResponse, _super);
    function PostConsumerV1CustomersIdSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostConsumerV1CustomersIdSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CustomerSubscriptionViewModel)
    ], PostConsumerV1CustomersIdSubscriptionsResponse.prototype, "customerSubscriptionViewModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostConsumerV1CustomersIdSubscriptionsResponse.prototype, "statusCode", void 0);
    return PostConsumerV1CustomersIdSubscriptionsResponse;
}(SpeakeasyBase));
export { PostConsumerV1CustomersIdSubscriptionsResponse };
