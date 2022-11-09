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
var PubsubProjectsSubscriptionsDetachPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDetachPathParams, _super);
    function PubsubProjectsSubscriptionsDetachPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachPathParams.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsDetachPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDetachPathParams };
var PubsubProjectsSubscriptionsDetachQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDetachQueryParams, _super);
    function PubsubProjectsSubscriptionsDetachQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsDetachQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDetachQueryParams };
var PubsubProjectsSubscriptionsDetachSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDetachSecurityOption1, _super);
    function PubsubProjectsSubscriptionsDetachSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsDetachSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsDetachSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsDetachSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDetachSecurityOption1 };
var PubsubProjectsSubscriptionsDetachSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDetachSecurityOption2, _super);
    function PubsubProjectsSubscriptionsDetachSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsDetachSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsDetachSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsDetachSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDetachSecurityOption2 };
var PubsubProjectsSubscriptionsDetachSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDetachSecurity, _super);
    function PubsubProjectsSubscriptionsDetachSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsDetachSecurityOption1)
    ], PubsubProjectsSubscriptionsDetachSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsDetachSecurityOption2)
    ], PubsubProjectsSubscriptionsDetachSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsDetachSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDetachSecurity };
var PubsubProjectsSubscriptionsDetachRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDetachRequest, _super);
    function PubsubProjectsSubscriptionsDetachRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsDetachPathParams)
    ], PubsubProjectsSubscriptionsDetachRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsDetachQueryParams)
    ], PubsubProjectsSubscriptionsDetachRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsDetachSecurity)
    ], PubsubProjectsSubscriptionsDetachRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsDetachRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDetachRequest };
var PubsubProjectsSubscriptionsDetachResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDetachResponse, _super);
    function PubsubProjectsSubscriptionsDetachResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDetachResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSubscriptionsDetachResponse.prototype, "detachSubscriptionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsDetachResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSubscriptionsDetachResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDetachResponse };
