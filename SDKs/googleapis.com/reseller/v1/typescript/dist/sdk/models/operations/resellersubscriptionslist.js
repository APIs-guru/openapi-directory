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
var ResellerSubscriptionsListQueryParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsListQueryParams, _super);
    function ResellerSubscriptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customerAuthToken" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "customerAuthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "customerId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customerNamePrefix" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "customerNamePrefix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerSubscriptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerSubscriptionsListQueryParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsListQueryParams };
var ResellerSubscriptionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsListSecurityOption1, _super);
    function ResellerSubscriptionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsListSecurityOption1.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsListSecurityOption1;
}(SpeakeasyBase));
export { ResellerSubscriptionsListSecurityOption1 };
var ResellerSubscriptionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsListSecurityOption2, _super);
    function ResellerSubscriptionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsListSecurityOption2.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsListSecurityOption2;
}(SpeakeasyBase));
export { ResellerSubscriptionsListSecurityOption2 };
var ResellerSubscriptionsListSecurity = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsListSecurity, _super);
    function ResellerSubscriptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerSubscriptionsListSecurityOption1)
    ], ResellerSubscriptionsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerSubscriptionsListSecurityOption2)
    ], ResellerSubscriptionsListSecurity.prototype, "option2", void 0);
    return ResellerSubscriptionsListSecurity;
}(SpeakeasyBase));
export { ResellerSubscriptionsListSecurity };
var ResellerSubscriptionsListRequest = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsListRequest, _super);
    function ResellerSubscriptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsListQueryParams)
    ], ResellerSubscriptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResellerSubscriptionsListSecurity)
    ], ResellerSubscriptionsListRequest.prototype, "security", void 0);
    return ResellerSubscriptionsListRequest;
}(SpeakeasyBase));
export { ResellerSubscriptionsListRequest };
var ResellerSubscriptionsListResponse = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsListResponse, _super);
    function ResellerSubscriptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResellerSubscriptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Subscriptions)
    ], ResellerSubscriptionsListResponse.prototype, "subscriptions", void 0);
    return ResellerSubscriptionsListResponse;
}(SpeakeasyBase));
export { ResellerSubscriptionsListResponse };
