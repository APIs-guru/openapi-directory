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
var DeploymentmanagerCompositeTypesPatchPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesPatchPathParams, _super);
    function DeploymentmanagerCompositeTypesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=compositeType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchPathParams.prototype, "compositeType", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchPathParams.prototype, "project", void 0);
    return DeploymentmanagerCompositeTypesPatchPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesPatchPathParams };
var DeploymentmanagerCompositeTypesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesPatchQueryParams, _super);
    function DeploymentmanagerCompositeTypesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerCompositeTypesPatchQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesPatchQueryParams };
var DeploymentmanagerCompositeTypesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesPatchSecurityOption1, _super);
    function DeploymentmanagerCompositeTypesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesPatchSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesPatchSecurityOption1 };
var DeploymentmanagerCompositeTypesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesPatchSecurityOption2, _super);
    function DeploymentmanagerCompositeTypesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerCompositeTypesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerCompositeTypesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerCompositeTypesPatchSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesPatchSecurityOption2 };
var DeploymentmanagerCompositeTypesPatchSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesPatchSecurity, _super);
    function DeploymentmanagerCompositeTypesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesPatchSecurityOption1)
    ], DeploymentmanagerCompositeTypesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerCompositeTypesPatchSecurityOption2)
    ], DeploymentmanagerCompositeTypesPatchSecurity.prototype, "option2", void 0);
    return DeploymentmanagerCompositeTypesPatchSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesPatchSecurity };
var DeploymentmanagerCompositeTypesPatchRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesPatchRequest, _super);
    function DeploymentmanagerCompositeTypesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesPatchPathParams)
    ], DeploymentmanagerCompositeTypesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesPatchQueryParams)
    ], DeploymentmanagerCompositeTypesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CompositeType)
    ], DeploymentmanagerCompositeTypesPatchRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerCompositeTypesPatchSecurity)
    ], DeploymentmanagerCompositeTypesPatchRequest.prototype, "security", void 0);
    return DeploymentmanagerCompositeTypesPatchRequest;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesPatchRequest };
var DeploymentmanagerCompositeTypesPatchResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerCompositeTypesPatchResponse, _super);
    function DeploymentmanagerCompositeTypesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerCompositeTypesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerCompositeTypesPatchResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerCompositeTypesPatchResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerCompositeTypesPatchResponse;
}(SpeakeasyBase));
export { DeploymentmanagerCompositeTypesPatchResponse };
