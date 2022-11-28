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
var YoutubeSubscriptionsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsInsertQueryParams, _super);
    function YoutubeSubscriptionsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part" }),
        __metadata("design:type", Array)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "part", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeSubscriptionsInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeSubscriptionsInsertQueryParams };
var YoutubeSubscriptionsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsInsertSecurityOption1, _super);
    function YoutubeSubscriptionsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeSubscriptionsInsertSecurityOption1 };
var YoutubeSubscriptionsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsInsertSecurityOption2, _super);
    function YoutubeSubscriptionsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeSubscriptionsInsertSecurityOption2 };
var YoutubeSubscriptionsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsInsertSecurityOption3, _super);
    function YoutubeSubscriptionsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeSubscriptionsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeSubscriptionsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeSubscriptionsInsertSecurityOption3;
}(SpeakeasyBase));
export { YoutubeSubscriptionsInsertSecurityOption3 };
var YoutubeSubscriptionsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsInsertSecurity, _super);
    function YoutubeSubscriptionsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsInsertSecurityOption1)
    ], YoutubeSubscriptionsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsInsertSecurityOption2)
    ], YoutubeSubscriptionsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeSubscriptionsInsertSecurityOption3)
    ], YoutubeSubscriptionsInsertSecurity.prototype, "option3", void 0);
    return YoutubeSubscriptionsInsertSecurity;
}(SpeakeasyBase));
export { YoutubeSubscriptionsInsertSecurity };
var YoutubeSubscriptionsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsInsertRequest, _super);
    function YoutubeSubscriptionsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeSubscriptionsInsertQueryParams)
    ], YoutubeSubscriptionsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Subscription)
    ], YoutubeSubscriptionsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeSubscriptionsInsertSecurity)
    ], YoutubeSubscriptionsInsertRequest.prototype, "security", void 0);
    return YoutubeSubscriptionsInsertRequest;
}(SpeakeasyBase));
export { YoutubeSubscriptionsInsertRequest };
var YoutubeSubscriptionsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeSubscriptionsInsertResponse, _super);
    function YoutubeSubscriptionsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeSubscriptionsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeSubscriptionsInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Subscription)
    ], YoutubeSubscriptionsInsertResponse.prototype, "subscription", void 0);
    return YoutubeSubscriptionsInsertResponse;
}(SpeakeasyBase));
export { YoutubeSubscriptionsInsertResponse };
