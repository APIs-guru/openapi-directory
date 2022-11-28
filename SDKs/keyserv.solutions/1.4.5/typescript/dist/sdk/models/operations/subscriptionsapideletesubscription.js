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
var SubscriptionsApiDeleteSubscriptionPathParams = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscriptionPathParams, _super);
    function SubscriptionsApiDeleteSubscriptionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], SubscriptionsApiDeleteSubscriptionPathParams.prototype, "serial", void 0);
    return SubscriptionsApiDeleteSubscriptionPathParams;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscriptionPathParams };
var SubscriptionsApiDeleteSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscriptionQueryParams, _super);
    function SubscriptionsApiDeleteSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keep" }),
        __metadata("design:type", Boolean)
    ], SubscriptionsApiDeleteSubscriptionQueryParams.prototype, "keep", void 0);
    return SubscriptionsApiDeleteSubscriptionQueryParams;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscriptionQueryParams };
var SubscriptionsApiDeleteSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscriptionHeaders, _super);
    function SubscriptionsApiDeleteSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" }),
        __metadata("design:type", String)
    ], SubscriptionsApiDeleteSubscriptionHeaders.prototype, "xApiKey", void 0);
    return SubscriptionsApiDeleteSubscriptionHeaders;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscriptionHeaders };
var SubscriptionsApiDeleteSubscriptionRequest = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscriptionRequest, _super);
    function SubscriptionsApiDeleteSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscriptionsApiDeleteSubscriptionPathParams)
    ], SubscriptionsApiDeleteSubscriptionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscriptionsApiDeleteSubscriptionQueryParams)
    ], SubscriptionsApiDeleteSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SubscriptionsApiDeleteSubscriptionHeaders)
    ], SubscriptionsApiDeleteSubscriptionRequest.prototype, "headers", void 0);
    return SubscriptionsApiDeleteSubscriptionRequest;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscriptionRequest };
var SubscriptionsApiDeleteSubscriptionResponse = /** @class */ (function (_super) {
    __extends(SubscriptionsApiDeleteSubscriptionResponse, _super);
    function SubscriptionsApiDeleteSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SubscriptionsApiDeleteSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SubscriptionsApiDeleteSubscriptionResponse.prototype, "statusCode", void 0);
    return SubscriptionsApiDeleteSubscriptionResponse;
}(SpeakeasyBase));
export { SubscriptionsApiDeleteSubscriptionResponse };
