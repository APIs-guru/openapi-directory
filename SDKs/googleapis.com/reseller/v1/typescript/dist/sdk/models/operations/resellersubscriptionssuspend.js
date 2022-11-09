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
var ResellerSubscriptionsSuspendPathParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsSuspendPathParams, _super);
    function ResellerSubscriptionsSuspendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendPathParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendPathParams.prototype, "subscriptionId", void 0);
    return ResellerSubscriptionsSuspendPathParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsSuspendPathParams };
var ResellerSubscriptionsSuspendQueryParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsSuspendQueryParams, _super);
    function ResellerSubscriptionsSuspendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerSubscriptionsSuspendQueryParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsSuspendQueryParams };
var ResellerSubscriptionsSuspendSecurity = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsSuspendSecurity, _super);
    function ResellerSubscriptionsSuspendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsSuspendSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsSuspendSecurity.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsSuspendSecurity;
}(SpeakeasyBase));
export { ResellerSubscriptionsSuspendSecurity };
var ResellerSubscriptionsSuspendRequest = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsSuspendRequest, _super);
    function ResellerSubscriptionsSuspendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsSuspendPathParams)
    ], ResellerSubscriptionsSuspendRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsSuspendQueryParams)
    ], ResellerSubscriptionsSuspendRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsSuspendSecurity)
    ], ResellerSubscriptionsSuspendRequest.prototype, "security", void 0);
    return ResellerSubscriptionsSuspendRequest;
}(SpeakeasyBase));
export { ResellerSubscriptionsSuspendRequest };
var ResellerSubscriptionsSuspendResponse = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsSuspendResponse, _super);
    function ResellerSubscriptionsSuspendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResellerSubscriptionsSuspendResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsSuspendResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Subscription)
    ], ResellerSubscriptionsSuspendResponse.prototype, "subscription", void 0);
    return ResellerSubscriptionsSuspendResponse;
}(SpeakeasyBase));
export { ResellerSubscriptionsSuspendResponse };
