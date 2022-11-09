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
var PubsubProjectsSubscriptionsPullPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsPullPathParams, _super);
    function PubsubProjectsSubscriptionsPullPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullPathParams.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsPullPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsPullPathParams };
var PubsubProjectsSubscriptionsPullQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsPullQueryParams, _super);
    function PubsubProjectsSubscriptionsPullQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsPullQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsPullQueryParams };
var PubsubProjectsSubscriptionsPullSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsPullSecurityOption1, _super);
    function PubsubProjectsSubscriptionsPullSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsPullSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsPullSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsPullSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsPullSecurityOption1 };
var PubsubProjectsSubscriptionsPullSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsPullSecurityOption2, _super);
    function PubsubProjectsSubscriptionsPullSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsPullSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsPullSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsPullSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsPullSecurityOption2 };
var PubsubProjectsSubscriptionsPullSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsPullSecurity, _super);
    function PubsubProjectsSubscriptionsPullSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsPullSecurityOption1)
    ], PubsubProjectsSubscriptionsPullSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsPullSecurityOption2)
    ], PubsubProjectsSubscriptionsPullSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsPullSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsPullSecurity };
var PubsubProjectsSubscriptionsPullRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsPullRequest, _super);
    function PubsubProjectsSubscriptionsPullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsPullPathParams)
    ], PubsubProjectsSubscriptionsPullRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsPullQueryParams)
    ], PubsubProjectsSubscriptionsPullRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PullRequest)
    ], PubsubProjectsSubscriptionsPullRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsPullSecurity)
    ], PubsubProjectsSubscriptionsPullRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsPullRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsPullRequest };
var PubsubProjectsSubscriptionsPullResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsPullResponse, _super);
    function PubsubProjectsSubscriptionsPullResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsPullResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PullResponse)
    ], PubsubProjectsSubscriptionsPullResponse.prototype, "pullResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsPullResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSubscriptionsPullResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsPullResponse };
