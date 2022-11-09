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
var DeploymentmanagerTypeProvidersGetTypePathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypePathParams, _super);
    function DeploymentmanagerTypeProvidersGetTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypePathParams.prototype, "project", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypePathParams.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=typeProvider" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypePathParams.prototype, "typeProvider", void 0);
    return DeploymentmanagerTypeProvidersGetTypePathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypePathParams };
var DeploymentmanagerTypeProvidersGetTypeQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeQueryParams, _super);
    function DeploymentmanagerTypeProvidersGetTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypeProvidersGetTypeQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeQueryParams };
var DeploymentmanagerTypeProvidersGetTypeSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeSecurityOption1, _super);
    function DeploymentmanagerTypeProvidersGetTypeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetTypeSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeSecurityOption1 };
var DeploymentmanagerTypeProvidersGetTypeSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeSecurityOption2, _super);
    function DeploymentmanagerTypeProvidersGetTypeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetTypeSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeSecurityOption2 };
var DeploymentmanagerTypeProvidersGetTypeSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeSecurityOption3, _super);
    function DeploymentmanagerTypeProvidersGetTypeSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetTypeSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeSecurityOption3 };
var DeploymentmanagerTypeProvidersGetTypeSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeSecurityOption4, _super);
    function DeploymentmanagerTypeProvidersGetTypeSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypeProvidersGetTypeSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypeProvidersGetTypeSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeSecurityOption4 };
var DeploymentmanagerTypeProvidersGetTypeSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeSecurity, _super);
    function DeploymentmanagerTypeProvidersGetTypeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetTypeSecurityOption1)
    ], DeploymentmanagerTypeProvidersGetTypeSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetTypeSecurityOption2)
    ], DeploymentmanagerTypeProvidersGetTypeSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetTypeSecurityOption3)
    ], DeploymentmanagerTypeProvidersGetTypeSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetTypeSecurityOption4)
    ], DeploymentmanagerTypeProvidersGetTypeSecurity.prototype, "option4", void 0);
    return DeploymentmanagerTypeProvidersGetTypeSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeSecurity };
var DeploymentmanagerTypeProvidersGetTypeRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeRequest, _super);
    function DeploymentmanagerTypeProvidersGetTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetTypePathParams)
    ], DeploymentmanagerTypeProvidersGetTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetTypeQueryParams)
    ], DeploymentmanagerTypeProvidersGetTypeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeploymentmanagerTypeProvidersGetTypeSecurity)
    ], DeploymentmanagerTypeProvidersGetTypeRequest.prototype, "security", void 0);
    return DeploymentmanagerTypeProvidersGetTypeRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeRequest };
var DeploymentmanagerTypeProvidersGetTypeResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypeProvidersGetTypeResponse, _super);
    function DeploymentmanagerTypeProvidersGetTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypeProvidersGetTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypeProvidersGetTypeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TypeInfo)
    ], DeploymentmanagerTypeProvidersGetTypeResponse.prototype, "typeInfo", void 0);
    return DeploymentmanagerTypeProvidersGetTypeResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypeProvidersGetTypeResponse };
