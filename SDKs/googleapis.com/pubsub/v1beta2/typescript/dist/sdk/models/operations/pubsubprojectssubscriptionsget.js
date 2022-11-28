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
var PubsubProjectsSubscriptionsGetPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsGetPathParams, _super);
    function PubsubProjectsSubscriptionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetPathParams.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsGetPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsGetPathParams };
var PubsubProjectsSubscriptionsGetQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsGetQueryParams, _super);
    function PubsubProjectsSubscriptionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsGetQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsGetQueryParams };
var PubsubProjectsSubscriptionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsGetSecurityOption1, _super);
    function PubsubProjectsSubscriptionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsGetSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsGetSecurityOption1 };
var PubsubProjectsSubscriptionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsGetSecurityOption2, _super);
    function PubsubProjectsSubscriptionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsGetSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsGetSecurityOption2 };
var PubsubProjectsSubscriptionsGetSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsGetSecurity, _super);
    function PubsubProjectsSubscriptionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsGetSecurityOption1)
    ], PubsubProjectsSubscriptionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsGetSecurityOption2)
    ], PubsubProjectsSubscriptionsGetSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsGetSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsGetSecurity };
var PubsubProjectsSubscriptionsGetRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsGetRequest, _super);
    function PubsubProjectsSubscriptionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsGetPathParams)
    ], PubsubProjectsSubscriptionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsGetQueryParams)
    ], PubsubProjectsSubscriptionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsGetSecurity)
    ], PubsubProjectsSubscriptionsGetRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsGetRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsGetRequest };
var PubsubProjectsSubscriptionsGetResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsGetResponse, _super);
    function PubsubProjectsSubscriptionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subscription)
    ], PubsubProjectsSubscriptionsGetResponse.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsGetResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsGetResponse };
