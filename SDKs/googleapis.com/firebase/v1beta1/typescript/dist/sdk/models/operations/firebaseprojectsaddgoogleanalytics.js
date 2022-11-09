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
var FirebaseProjectsAddGoogleAnalyticsPathParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddGoogleAnalyticsPathParams, _super);
    function FirebaseProjectsAddGoogleAnalyticsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsPathParams.prototype, "parent", void 0);
    return FirebaseProjectsAddGoogleAnalyticsPathParams;
}(SpeakeasyBase));
export { FirebaseProjectsAddGoogleAnalyticsPathParams };
var FirebaseProjectsAddGoogleAnalyticsQueryParams = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddGoogleAnalyticsQueryParams, _super);
    function FirebaseProjectsAddGoogleAnalyticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsQueryParams.prototype, "uploadProtocol", void 0);
    return FirebaseProjectsAddGoogleAnalyticsQueryParams;
}(SpeakeasyBase));
export { FirebaseProjectsAddGoogleAnalyticsQueryParams };
var FirebaseProjectsAddGoogleAnalyticsSecurityOption1 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddGoogleAnalyticsSecurityOption1, _super);
    function FirebaseProjectsAddGoogleAnalyticsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAddGoogleAnalyticsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAddGoogleAnalyticsSecurityOption1.prototype, "oauth2c", void 0);
    return FirebaseProjectsAddGoogleAnalyticsSecurityOption1;
}(SpeakeasyBase));
export { FirebaseProjectsAddGoogleAnalyticsSecurityOption1 };
var FirebaseProjectsAddGoogleAnalyticsSecurityOption2 = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddGoogleAnalyticsSecurityOption2, _super);
    function FirebaseProjectsAddGoogleAnalyticsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FirebaseProjectsAddGoogleAnalyticsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FirebaseProjectsAddGoogleAnalyticsSecurityOption2.prototype, "oauth2c", void 0);
    return FirebaseProjectsAddGoogleAnalyticsSecurityOption2;
}(SpeakeasyBase));
export { FirebaseProjectsAddGoogleAnalyticsSecurityOption2 };
var FirebaseProjectsAddGoogleAnalyticsSecurity = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddGoogleAnalyticsSecurity, _super);
    function FirebaseProjectsAddGoogleAnalyticsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAddGoogleAnalyticsSecurityOption1)
    ], FirebaseProjectsAddGoogleAnalyticsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", FirebaseProjectsAddGoogleAnalyticsSecurityOption2)
    ], FirebaseProjectsAddGoogleAnalyticsSecurity.prototype, "option2", void 0);
    return FirebaseProjectsAddGoogleAnalyticsSecurity;
}(SpeakeasyBase));
export { FirebaseProjectsAddGoogleAnalyticsSecurity };
var FirebaseProjectsAddGoogleAnalyticsRequest = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddGoogleAnalyticsRequest, _super);
    function FirebaseProjectsAddGoogleAnalyticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsAddGoogleAnalyticsPathParams)
    ], FirebaseProjectsAddGoogleAnalyticsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsAddGoogleAnalyticsQueryParams)
    ], FirebaseProjectsAddGoogleAnalyticsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddGoogleAnalyticsRequest)
    ], FirebaseProjectsAddGoogleAnalyticsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FirebaseProjectsAddGoogleAnalyticsSecurity)
    ], FirebaseProjectsAddGoogleAnalyticsRequest.prototype, "security", void 0);
    return FirebaseProjectsAddGoogleAnalyticsRequest;
}(SpeakeasyBase));
export { FirebaseProjectsAddGoogleAnalyticsRequest };
var FirebaseProjectsAddGoogleAnalyticsResponse = /** @class */ (function (_super) {
    __extends(FirebaseProjectsAddGoogleAnalyticsResponse, _super);
    function FirebaseProjectsAddGoogleAnalyticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FirebaseProjectsAddGoogleAnalyticsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], FirebaseProjectsAddGoogleAnalyticsResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FirebaseProjectsAddGoogleAnalyticsResponse.prototype, "statusCode", void 0);
    return FirebaseProjectsAddGoogleAnalyticsResponse;
}(SpeakeasyBase));
export { FirebaseProjectsAddGoogleAnalyticsResponse };
