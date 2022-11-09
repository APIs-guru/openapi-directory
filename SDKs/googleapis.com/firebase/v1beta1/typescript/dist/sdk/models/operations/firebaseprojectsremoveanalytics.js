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
var FirebaseProjectsRemoveAnalyticsPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsRemoveAnalyticsPathParams, _super);
    function FirebaseProjectsRemoveAnalyticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsPathParams.prototype, "parent", void 0);
    return FirebaseProjectsRemoveAnalyticsPathParams;
}(SpeakeasyBase));
export { FirebaseProjectsRemoveAnalyticsPathParams };
var FirebaseProjectsRemoveAnalyticsQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsRemoveAnalyticsQueryParams, _super);
    function FirebaseProjectsRemoveAnalyticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsRemoveAnalyticsQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsRemoveAnalyticsQueryParams };
var FirebaseProjectsRemoveAnalyticsSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsRemoveAnalyticsSecurityOption1, _super);
    function FirebaseProjectsRemoveAnalyticsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsRemoveAnalyticsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsRemoveAnalyticsSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsRemoveAnalyticsSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsRemoveAnalyticsSecurityOption1 };
var FirebaseProjectsRemoveAnalyticsSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsRemoveAnalyticsSecurityOption2, _super);
    function FirebaseProjectsRemoveAnalyticsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsRemoveAnalyticsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsRemoveAnalyticsSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsRemoveAnalyticsSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsRemoveAnalyticsSecurityOption2 };
var FirebaseProjectsRemoveAnalyticsSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsRemoveAnalyticsSecurity, _super);
    function FirebaseProjectsRemoveAnalyticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsRemoveAnalyticsSecurityOption1)
    ], FirebaseProjectsRemoveAnalyticsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsRemoveAnalyticsSecurityOption2)
    ], FirebaseProjectsRemoveAnalyticsSecurity.prototype, "option2", void 0);
    return FirebaseProjectsRemoveAnalyticsSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsRemoveAnalyticsSecurity };
var FirebaseProjectsRemoveAnalyticsRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsRemoveAnalyticsRequest, _super);
    function FirebaseProjectsRemoveAnalyticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsRemoveAnalyticsPathParams)
    ], FirebaseProjectsRemoveAnalyticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsRemoveAnalyticsQueryParams)
    ], FirebaseProjectsRemoveAnalyticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemoveAnalyticsRequest)
    ], FirebaseProjectsRemoveAnalyticsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsRemoveAnalyticsSecurity)
    ], FirebaseProjectsRemoveAnalyticsRequest.prototype, "security", void 0);
    return FirebaseProjectsRemoveAnalyticsRequest;
}(SpeakeasyBase));
export { FirebaseProjectsRemoveAnalyticsRequest };
var FirebaseProjectsRemoveAnalyticsResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsRemoveAnalyticsResponse, _super);
    function FirebaseProjectsRemoveAnalyticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsRemoveAnalyticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FirebaseProjectsRemoveAnalyticsResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsRemoveAnalyticsResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsRemoveAnalyticsResponse;
}(SpeakeasyBase));
export { FirebaseProjectsRemoveAnalyticsResponse };
