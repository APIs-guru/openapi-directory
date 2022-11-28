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
var PubsubSubscriptionsPullQueryParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullQueryParams, _super);
    function PubsubSubscriptionsPullQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubSubscriptionsPullQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubSubscriptionsPullQueryParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullQueryParams };
var PubsubSubscriptionsPullSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullSecurityOption1, _super);
    function PubsubSubscriptionsPullSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsPullSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsPullSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsPullSecurityOption1;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullSecurityOption1 };
var PubsubSubscriptionsPullSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullSecurityOption2, _super);
    function PubsubSubscriptionsPullSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsPullSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsPullSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsPullSecurityOption2;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullSecurityOption2 };
var PubsubSubscriptionsPullSecurity = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullSecurity, _super);
    function PubsubSubscriptionsPullSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsPullSecurityOption1)
    ], PubsubSubscriptionsPullSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsPullSecurityOption2)
    ], PubsubSubscriptionsPullSecurity.prototype, "option2", void 0);
    return PubsubSubscriptionsPullSecurity;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullSecurity };
var PubsubSubscriptionsPullRequest = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullRequest, _super);
    function PubsubSubscriptionsPullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsPullQueryParams)
    ], PubsubSubscriptionsPullRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PullRequest)
    ], PubsubSubscriptionsPullRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsPullSecurity)
    ], PubsubSubscriptionsPullRequest.prototype, "security", void 0);
    return PubsubSubscriptionsPullRequest;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullRequest };
var PubsubSubscriptionsPullResponse = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullResponse, _super);
    function PubsubSubscriptionsPullResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullResponse)
    ], PubsubSubscriptionsPullResponse.prototype, "pullResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubSubscriptionsPullResponse.prototype, "statusCode", void 0);
    return PubsubSubscriptionsPullResponse;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullResponse };
