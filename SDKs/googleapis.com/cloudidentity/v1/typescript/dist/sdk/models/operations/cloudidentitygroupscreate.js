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
export var CloudidentityGroupsCreateInitialGroupConfigEnum;
(function (CloudidentityGroupsCreateInitialGroupConfigEnum) {
    CloudidentityGroupsCreateInitialGroupConfigEnum["InitialGroupConfigUnspecified"] = "INITIAL_GROUP_CONFIG_UNSPECIFIED";
    CloudidentityGroupsCreateInitialGroupConfigEnum["WithInitialOwner"] = "WITH_INITIAL_OWNER";
    CloudidentityGroupsCreateInitialGroupConfigEnum["Empty"] = "EMPTY";
})(CloudidentityGroupsCreateInitialGroupConfigEnum || (CloudidentityGroupsCreateInitialGroupConfigEnum = {}));
var CloudidentityGroupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsCreateQueryParams, _super);
    function CloudidentityGroupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=initialGroupConfig" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "initialGroupConfig", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsCreateQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsCreateQueryParams };
var CloudidentityGroupsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsCreateSecurityOption1, _super);
    function CloudidentityGroupsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsCreateSecurityOption1 };
var CloudidentityGroupsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsCreateSecurityOption2, _super);
    function CloudidentityGroupsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsCreateSecurityOption2 };
var CloudidentityGroupsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsCreateSecurity, _super);
    function CloudidentityGroupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsCreateSecurityOption1)
    ], CloudidentityGroupsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsCreateSecurityOption2)
    ], CloudidentityGroupsCreateSecurity.prototype, "option2", void 0);
    return CloudidentityGroupsCreateSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsCreateSecurity };
var CloudidentityGroupsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsCreateRequest, _super);
    function CloudidentityGroupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsCreateQueryParams)
    ], CloudidentityGroupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Group)
    ], CloudidentityGroupsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsCreateSecurity)
    ], CloudidentityGroupsCreateRequest.prototype, "security", void 0);
    return CloudidentityGroupsCreateRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsCreateRequest };
var CloudidentityGroupsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsCreateResponse, _super);
    function CloudidentityGroupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityGroupsCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsCreateResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsCreateResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsCreateResponse };
