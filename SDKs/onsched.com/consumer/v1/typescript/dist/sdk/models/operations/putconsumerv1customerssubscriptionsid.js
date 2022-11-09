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
var PutConsumerV1CustomersSubscriptionsIdPathParams = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersSubscriptionsIdPathParams, _super);
    function PutConsumerV1CustomersSubscriptionsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutConsumerV1CustomersSubscriptionsIdPathParams.prototype, "id", void 0);
    return PutConsumerV1CustomersSubscriptionsIdPathParams;
}(SpeakeasyBase));
export { PutConsumerV1CustomersSubscriptionsIdPathParams };
var PutConsumerV1CustomersSubscriptionsIdRequests = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersSubscriptionsIdRequests, _super);
    function PutConsumerV1CustomersSubscriptionsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CustomerSubscriptionUpdateModel)
    ], PutConsumerV1CustomersSubscriptionsIdRequests.prototype, "customerSubscriptionUpdateModel", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerSubscriptionUpdateModel)
    ], PutConsumerV1CustomersSubscriptionsIdRequests.prototype, "customerSubscriptionUpdateModel1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.CustomerSubscriptionUpdateModel)
    ], PutConsumerV1CustomersSubscriptionsIdRequests.prototype, "customerSubscriptionUpdateModel2", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CustomerSubscriptionUpdateModel)
    ], PutConsumerV1CustomersSubscriptionsIdRequests.prototype, "customerSubscriptionUpdateModel3", void 0);
    return PutConsumerV1CustomersSubscriptionsIdRequests;
}(SpeakeasyBase));
export { PutConsumerV1CustomersSubscriptionsIdRequests };
var PutConsumerV1CustomersSubscriptionsIdRequest = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersSubscriptionsIdRequest, _super);
    function PutConsumerV1CustomersSubscriptionsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1CustomersSubscriptionsIdPathParams)
    ], PutConsumerV1CustomersSubscriptionsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutConsumerV1CustomersSubscriptionsIdRequests)
    ], PutConsumerV1CustomersSubscriptionsIdRequest.prototype, "request", void 0);
    return PutConsumerV1CustomersSubscriptionsIdRequest;
}(SpeakeasyBase));
export { PutConsumerV1CustomersSubscriptionsIdRequest };
var PutConsumerV1CustomersSubscriptionsIdResponse = /** @class */ (function (_super) {
    __extends(PutConsumerV1CustomersSubscriptionsIdResponse, _super);
    function PutConsumerV1CustomersSubscriptionsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutConsumerV1CustomersSubscriptionsIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutConsumerV1CustomersSubscriptionsIdResponse.prototype, "statusCode", void 0);
    return PutConsumerV1CustomersSubscriptionsIdResponse;
}(SpeakeasyBase));
export { PutConsumerV1CustomersSubscriptionsIdResponse };
