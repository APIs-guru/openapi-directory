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
var PubsubSubscriptionsGetPathParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsGetPathParams, _super);
    function PubsubSubscriptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetPathParams.prototype, "subscription", void 0);
    return PubsubSubscriptionsGetPathParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsGetPathParams };
var PubsubSubscriptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsGetQueryParams, _super);
    function PubsubSubscriptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubSubscriptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubSubscriptionsGetQueryParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsGetQueryParams };
var PubsubSubscriptionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsGetSecurityOption1, _super);
    function PubsubSubscriptionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsGetSecurityOption1;
}(SpeakeasyBase));
export { PubsubSubscriptionsGetSecurityOption1 };
var PubsubSubscriptionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsGetSecurityOption2, _super);
    function PubsubSubscriptionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsGetSecurityOption2;
}(SpeakeasyBase));
export { PubsubSubscriptionsGetSecurityOption2 };
var PubsubSubscriptionsGetSecurity = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsGetSecurity, _super);
    function PubsubSubscriptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsGetSecurityOption1)
    ], PubsubSubscriptionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsGetSecurityOption2)
    ], PubsubSubscriptionsGetSecurity.prototype, "option2", void 0);
    return PubsubSubscriptionsGetSecurity;
}(SpeakeasyBase));
export { PubsubSubscriptionsGetSecurity };
var PubsubSubscriptionsGetRequest = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsGetRequest, _super);
    function PubsubSubscriptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubSubscriptionsGetPathParams)
    ], PubsubSubscriptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubSubscriptionsGetQueryParams)
    ], PubsubSubscriptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubSubscriptionsGetSecurity)
    ], PubsubSubscriptionsGetRequest.prototype, "security", void 0);
    return PubsubSubscriptionsGetRequest;
}(SpeakeasyBase));
export { PubsubSubscriptionsGetRequest };
var PubsubSubscriptionsGetResponse = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsGetResponse, _super);
    function PubsubSubscriptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubSubscriptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubSubscriptionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Subscription)
    ], PubsubSubscriptionsGetResponse.prototype, "subscription", void 0);
    return PubsubSubscriptionsGetResponse;
}(SpeakeasyBase));
export { PubsubSubscriptionsGetResponse };
