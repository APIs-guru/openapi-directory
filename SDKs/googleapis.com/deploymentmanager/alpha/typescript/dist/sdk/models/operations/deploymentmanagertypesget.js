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
var DeploymentmanagerTypesGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetPathParams, _super);
    function DeploymentmanagerTypesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetPathParams.prototype, "type", void 0);
    return DeploymentmanagerTypesGetPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetPathParams };
var DeploymentmanagerTypesGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetQueryParams, _super);
    function DeploymentmanagerTypesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerTypesGetQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetQueryParams };
var DeploymentmanagerTypesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetSecurityOption1, _super);
    function DeploymentmanagerTypesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesGetSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetSecurityOption1 };
var DeploymentmanagerTypesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetSecurityOption2, _super);
    function DeploymentmanagerTypesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesGetSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetSecurityOption2 };
var DeploymentmanagerTypesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetSecurityOption3, _super);
    function DeploymentmanagerTypesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesGetSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetSecurityOption3 };
var DeploymentmanagerTypesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetSecurityOption4, _super);
    function DeploymentmanagerTypesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerTypesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerTypesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerTypesGetSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetSecurityOption4 };
var DeploymentmanagerTypesGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetSecurity, _super);
    function DeploymentmanagerTypesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesGetSecurityOption1)
    ], DeploymentmanagerTypesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesGetSecurityOption2)
    ], DeploymentmanagerTypesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesGetSecurityOption3)
    ], DeploymentmanagerTypesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerTypesGetSecurityOption4)
    ], DeploymentmanagerTypesGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerTypesGetSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetSecurity };
var DeploymentmanagerTypesGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetRequest, _super);
    function DeploymentmanagerTypesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypesGetPathParams)
    ], DeploymentmanagerTypesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypesGetQueryParams)
    ], DeploymentmanagerTypesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerTypesGetSecurity)
    ], DeploymentmanagerTypesGetRequest.prototype, "security", void 0);
    return DeploymentmanagerTypesGetRequest;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetRequest };
var DeploymentmanagerTypesGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerTypesGetResponse, _super);
    function DeploymentmanagerTypesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerTypesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerTypesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Type)
    ], DeploymentmanagerTypesGetResponse.prototype, "type", void 0);
    return DeploymentmanagerTypesGetResponse;
}(SpeakeasyBase));
export { DeploymentmanagerTypesGetResponse };
