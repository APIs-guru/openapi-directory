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
var ResellerSubscriptionsStartPaidServicePathParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsStartPaidServicePathParams, _super);
    function ResellerSubscriptionsStartPaidServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServicePathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServicePathParams.prototype, "subscriptionId", void 0);
    return ResellerSubscriptionsStartPaidServicePathParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsStartPaidServicePathParams };
var ResellerSubscriptionsStartPaidServiceQueryParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsStartPaidServiceQueryParams, _super);
    function ResellerSubscriptionsStartPaidServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerSubscriptionsStartPaidServiceQueryParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsStartPaidServiceQueryParams };
var ResellerSubscriptionsStartPaidServiceSecurity = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsStartPaidServiceSecurity, _super);
    function ResellerSubscriptionsStartPaidServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsStartPaidServiceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsStartPaidServiceSecurity.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsStartPaidServiceSecurity;
}(SpeakeasyBase));
export { ResellerSubscriptionsStartPaidServiceSecurity };
var ResellerSubscriptionsStartPaidServiceRequest = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsStartPaidServiceRequest, _super);
    function ResellerSubscriptionsStartPaidServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerSubscriptionsStartPaidServicePathParams)
    ], ResellerSubscriptionsStartPaidServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerSubscriptionsStartPaidServiceQueryParams)
    ], ResellerSubscriptionsStartPaidServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerSubscriptionsStartPaidServiceSecurity)
    ], ResellerSubscriptionsStartPaidServiceRequest.prototype, "security", void 0);
    return ResellerSubscriptionsStartPaidServiceRequest;
}(SpeakeasyBase));
export { ResellerSubscriptionsStartPaidServiceRequest };
var ResellerSubscriptionsStartPaidServiceResponse = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsStartPaidServiceResponse, _super);
    function ResellerSubscriptionsStartPaidServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResellerSubscriptionsStartPaidServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsStartPaidServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subscription)
    ], ResellerSubscriptionsStartPaidServiceResponse.prototype, "subscription", void 0);
    return ResellerSubscriptionsStartPaidServiceResponse;
}(SpeakeasyBase));
export { ResellerSubscriptionsStartPaidServiceResponse };
