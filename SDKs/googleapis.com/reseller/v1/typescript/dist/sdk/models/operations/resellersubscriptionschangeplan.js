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
var ResellerSubscriptionsChangePlanPathParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangePlanPathParams, _super);
    function ResellerSubscriptionsChangePlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanPathParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanPathParams.prototype, "subscriptionId", void 0);
    return ResellerSubscriptionsChangePlanPathParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangePlanPathParams };
var ResellerSubscriptionsChangePlanQueryParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangePlanQueryParams, _super);
    function ResellerSubscriptionsChangePlanQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerSubscriptionsChangePlanQueryParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangePlanQueryParams };
var ResellerSubscriptionsChangePlanSecurity = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangePlanSecurity, _super);
    function ResellerSubscriptionsChangePlanSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsChangePlanSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsChangePlanSecurity.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsChangePlanSecurity;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangePlanSecurity };
var ResellerSubscriptionsChangePlanRequest = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangePlanRequest, _super);
    function ResellerSubscriptionsChangePlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsChangePlanPathParams)
    ], ResellerSubscriptionsChangePlanRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsChangePlanQueryParams)
    ], ResellerSubscriptionsChangePlanRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChangePlanRequest)
    ], ResellerSubscriptionsChangePlanRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsChangePlanSecurity)
    ], ResellerSubscriptionsChangePlanRequest.prototype, "security", void 0);
    return ResellerSubscriptionsChangePlanRequest;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangePlanRequest };
var ResellerSubscriptionsChangePlanResponse = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsChangePlanResponse, _super);
    function ResellerSubscriptionsChangePlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResellerSubscriptionsChangePlanResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsChangePlanResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Subscription)
    ], ResellerSubscriptionsChangePlanResponse.prototype, "subscription", void 0);
    return ResellerSubscriptionsChangePlanResponse;
}(SpeakeasyBase));
export { ResellerSubscriptionsChangePlanResponse };
