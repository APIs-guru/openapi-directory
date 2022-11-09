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
var SubscriptionsApiListQueryParams = /** @class */ (function (_super) {
    __extends(SubscriptionsApiListQueryParams, _super);
    function SubscriptionsApiListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SubscriptionsApiListQueryParams.prototype, "page", void 0);
    return SubscriptionsApiListQueryParams;
}(SpeakeasyBase));
export { SubscriptionsApiListQueryParams };
var SubscriptionsApiListRequest = /** @class */ (function (_super) {
    __extends(SubscriptionsApiListRequest, _super);
    function SubscriptionsApiListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SubscriptionsApiListQueryParams)
    ], SubscriptionsApiListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], SubscriptionsApiListRequest.prototype, "request", void 0);
    return SubscriptionsApiListRequest;
}(SpeakeasyBase));
export { SubscriptionsApiListRequest };
var SubscriptionsApiListResponse = /** @class */ (function (_super) {
    __extends(SubscriptionsApiListResponse, _super);
    function SubscriptionsApiListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SubscriptionsApiListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SubscriptionsApiListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata({ elemType: shared.SubscriptionView }),
        __metadata("design:type", Array)
    ], SubscriptionsApiListResponse.prototype, "subscriptionViews", void 0);
    return SubscriptionsApiListResponse;
}(SpeakeasyBase));
export { SubscriptionsApiListResponse };
