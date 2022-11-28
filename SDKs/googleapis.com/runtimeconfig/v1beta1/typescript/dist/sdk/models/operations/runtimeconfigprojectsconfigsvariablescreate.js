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
var RuntimeconfigProjectsConfigsVariablesCreatePathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesCreatePathParams, _super);
    function RuntimeconfigProjectsConfigsVariablesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreatePathParams.prototype, "parent", void 0);
    return RuntimeconfigProjectsConfigsVariablesCreatePathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesCreatePathParams };
var RuntimeconfigProjectsConfigsVariablesCreateQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesCreateQueryParams, _super);
    function RuntimeconfigProjectsConfigsVariablesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsVariablesCreateQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesCreateQueryParams };
var RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1, _super);
    function RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1 };
var RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2, _super);
    function RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2 };
var RuntimeconfigProjectsConfigsVariablesCreateSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesCreateSecurity, _super);
    function RuntimeconfigProjectsConfigsVariablesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesCreateSecurityOption1)
    ], RuntimeconfigProjectsConfigsVariablesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesCreateSecurityOption2)
    ], RuntimeconfigProjectsConfigsVariablesCreateSecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsVariablesCreateSecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesCreateSecurity };
var RuntimeconfigProjectsConfigsVariablesCreateRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesCreateRequest, _super);
    function RuntimeconfigProjectsConfigsVariablesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesCreatePathParams)
    ], RuntimeconfigProjectsConfigsVariablesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesCreateQueryParams)
    ], RuntimeconfigProjectsConfigsVariablesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Variable)
    ], RuntimeconfigProjectsConfigsVariablesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsVariablesCreateSecurity)
    ], RuntimeconfigProjectsConfigsVariablesCreateRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsVariablesCreateRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesCreateRequest };
var RuntimeconfigProjectsConfigsVariablesCreateResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsVariablesCreateResponse, _super);
    function RuntimeconfigProjectsConfigsVariablesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsVariablesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsVariablesCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Variable)
    ], RuntimeconfigProjectsConfigsVariablesCreateResponse.prototype, "variable", void 0);
    return RuntimeconfigProjectsConfigsVariablesCreateResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsVariablesCreateResponse };
