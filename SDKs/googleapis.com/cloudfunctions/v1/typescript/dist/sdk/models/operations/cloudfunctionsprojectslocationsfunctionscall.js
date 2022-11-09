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
var CloudfunctionsProjectsLocationsFunctionsCallPathParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCallPathParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsCallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallPathParams.prototype, "name", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCallPathParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCallPathParams };
var CloudfunctionsProjectsLocationsFunctionsCallQueryParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCallQueryParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsCallQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallQueryParams.prototype, "uploadProtocol", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCallQueryParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCallQueryParams };
var CloudfunctionsProjectsLocationsFunctionsCallSecurity = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCallSecurity, _super);
    function CloudfunctionsProjectsLocationsFunctionsCallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudfunctionsProjectsLocationsFunctionsCallSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudfunctionsProjectsLocationsFunctionsCallSecurity.prototype, "oauth2c", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCallSecurity;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCallSecurity };
var CloudfunctionsProjectsLocationsFunctionsCallRequest = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCallRequest, _super);
    function CloudfunctionsProjectsLocationsFunctionsCallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsCallPathParams)
    ], CloudfunctionsProjectsLocationsFunctionsCallRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsCallQueryParams)
    ], CloudfunctionsProjectsLocationsFunctionsCallRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CallFunctionRequest)
    ], CloudfunctionsProjectsLocationsFunctionsCallRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsCallSecurity)
    ], CloudfunctionsProjectsLocationsFunctionsCallRequest.prototype, "security", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCallRequest;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCallRequest };
var CloudfunctionsProjectsLocationsFunctionsCallResponse = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsCallResponse, _super);
    function CloudfunctionsProjectsLocationsFunctionsCallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CallFunctionResponse)
    ], CloudfunctionsProjectsLocationsFunctionsCallResponse.prototype, "callFunctionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsCallResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsFunctionsCallResponse.prototype, "statusCode", void 0);
    return CloudfunctionsProjectsLocationsFunctionsCallResponse;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsCallResponse };
