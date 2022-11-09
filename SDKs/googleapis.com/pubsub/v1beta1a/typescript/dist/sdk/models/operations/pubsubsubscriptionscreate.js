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
var PubsubSubscriptionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsCreateQueryParams, _super);
    function PubsubSubscriptionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubSubscriptionsCreateQueryParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsCreateQueryParams };
var PubsubSubscriptionsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsCreateSecurityOption1, _super);
    function PubsubSubscriptionsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsCreateSecurityOption1;
}(SpeakeasyBase));
export { PubsubSubscriptionsCreateSecurityOption1 };
var PubsubSubscriptionsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsCreateSecurityOption2, _super);
    function PubsubSubscriptionsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsCreateSecurityOption2;
}(SpeakeasyBase));
export { PubsubSubscriptionsCreateSecurityOption2 };
var PubsubSubscriptionsCreateSecurity = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsCreateSecurity, _super);
    function PubsubSubscriptionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsCreateSecurityOption1)
    ], PubsubSubscriptionsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsCreateSecurityOption2)
    ], PubsubSubscriptionsCreateSecurity.prototype, "option2", void 0);
    return PubsubSubscriptionsCreateSecurity;
}(SpeakeasyBase));
export { PubsubSubscriptionsCreateSecurity };
var PubsubSubscriptionsCreateRequest = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsCreateRequest, _super);
    function PubsubSubscriptionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubSubscriptionsCreateQueryParams)
    ], PubsubSubscriptionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Subscription)
    ], PubsubSubscriptionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubSubscriptionsCreateSecurity)
    ], PubsubSubscriptionsCreateRequest.prototype, "security", void 0);
    return PubsubSubscriptionsCreateRequest;
}(SpeakeasyBase));
export { PubsubSubscriptionsCreateRequest };
var PubsubSubscriptionsCreateResponse = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsCreateResponse, _super);
    function PubsubSubscriptionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubSubscriptionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubSubscriptionsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Subscription)
    ], PubsubSubscriptionsCreateResponse.prototype, "subscription", void 0);
    return PubsubSubscriptionsCreateResponse;
}(SpeakeasyBase));
export { PubsubSubscriptionsCreateResponse };
