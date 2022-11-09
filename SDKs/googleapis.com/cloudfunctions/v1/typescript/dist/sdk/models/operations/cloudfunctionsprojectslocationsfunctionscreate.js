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
var CloudfunctionsProjectsLocationsFunctionsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCreatePathParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreatePathParams.prototype, "location", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCreatePathParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCreatePathParams };
var CloudfunctionsProjectsLocationsFunctionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCreateQueryParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCreateQueryParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCreateQueryParams };
var CloudfunctionsProjectsLocationsFunctionsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCreateSecurity, _super);
    function CloudfunctionsProjectsLocationsFunctionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudfunctionsProjectsLocationsFunctionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudfunctionsProjectsLocationsFunctionsCreateSecurity.prototype, "oauth2c", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCreateSecurity;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCreateSecurity };
var CloudfunctionsProjectsLocationsFunctionsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCreateRequest, _super);
    function CloudfunctionsProjectsLocationsFunctionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsCreatePathParams)
    ], CloudfunctionsProjectsLocationsFunctionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsCreateQueryParams)
    ], CloudfunctionsProjectsLocationsFunctionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CloudFunction)
    ], CloudfunctionsProjectsLocationsFunctionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsCreateSecurity)
    ], CloudfunctionsProjectsLocationsFunctionsCreateRequest.prototype, "security", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCreateRequest;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCreateRequest };
var CloudfunctionsProjectsLocationsFunctionsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCreateResponse, _super);
    function CloudfunctionsProjectsLocationsFunctionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudfunctionsProjectsLocationsFunctionsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsFunctionsCreateResponse.prototype, "statusCode", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCreateResponse;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCreateResponse };
