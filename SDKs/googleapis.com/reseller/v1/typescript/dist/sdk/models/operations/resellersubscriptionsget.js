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
var ResellerSubscriptionsGetPathParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsGetPathParams, _super);
    function ResellerSubscriptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetPathParams.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetPathParams.prototype, "subscriptionId", void 0);
    return ResellerSubscriptionsGetPathParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsGetPathParams };
var ResellerSubscriptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsGetQueryParams, _super);
    function ResellerSubscriptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ResellerSubscriptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ResellerSubscriptionsGetQueryParams;
}(SpeakeasyBase));
export { ResellerSubscriptionsGetQueryParams };
var ResellerSubscriptionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsGetSecurityOption1, _super);
    function ResellerSubscriptionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsGetSecurityOption1;
}(SpeakeasyBase));
export { ResellerSubscriptionsGetSecurityOption1 };
var ResellerSubscriptionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsGetSecurityOption2, _super);
    function ResellerSubscriptionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ResellerSubscriptionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ResellerSubscriptionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ResellerSubscriptionsGetSecurityOption2;
}(SpeakeasyBase));
export { ResellerSubscriptionsGetSecurityOption2 };
var ResellerSubscriptionsGetSecurity = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsGetSecurity, _super);
    function ResellerSubscriptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerSubscriptionsGetSecurityOption1)
    ], ResellerSubscriptionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ResellerSubscriptionsGetSecurityOption2)
    ], ResellerSubscriptionsGetSecurity.prototype, "option2", void 0);
    return ResellerSubscriptionsGetSecurity;
}(SpeakeasyBase));
export { ResellerSubscriptionsGetSecurity };
var ResellerSubscriptionsGetRequest = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsGetRequest, _super);
    function ResellerSubscriptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerSubscriptionsGetPathParams)
    ], ResellerSubscriptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerSubscriptionsGetQueryParams)
    ], ResellerSubscriptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResellerSubscriptionsGetSecurity)
    ], ResellerSubscriptionsGetRequest.prototype, "security", void 0);
    return ResellerSubscriptionsGetRequest;
}(SpeakeasyBase));
export { ResellerSubscriptionsGetRequest };
var ResellerSubscriptionsGetResponse = /** @class */ (function (_super) {
    __extends(ResellerSubscriptionsGetResponse, _super);
    function ResellerSubscriptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResellerSubscriptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResellerSubscriptionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subscription)
    ], ResellerSubscriptionsGetResponse.prototype, "subscription", void 0);
    return ResellerSubscriptionsGetResponse;
}(SpeakeasyBase));
export { ResellerSubscriptionsGetResponse };
