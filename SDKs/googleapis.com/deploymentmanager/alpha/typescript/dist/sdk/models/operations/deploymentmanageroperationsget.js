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
var DeploymentmanagerOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetPathParams, _super);
    function DeploymentmanagerOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=operation" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetPathParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetPathParams.prototype, "project", void 0);
    return DeploymentmanagerOperationsGetPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetPathParams };
var DeploymentmanagerOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetQueryParams, _super);
    function DeploymentmanagerOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerOperationsGetQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetQueryParams };
var DeploymentmanagerOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption1, _super);
    function DeploymentmanagerOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetSecurityOption1 };
var DeploymentmanagerOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption2, _super);
    function DeploymentmanagerOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetSecurityOption2 };
var DeploymentmanagerOperationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption3, _super);
    function DeploymentmanagerOperationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption3;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetSecurityOption3 };
var DeploymentmanagerOperationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurityOption4, _super);
    function DeploymentmanagerOperationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerOperationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerOperationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DeploymentmanagerOperationsGetSecurityOption4;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetSecurityOption4 };
var DeploymentmanagerOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetSecurity, _super);
    function DeploymentmanagerOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption1)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption2)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption3)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurityOption4)
    ], DeploymentmanagerOperationsGetSecurity.prototype, "option4", void 0);
    return DeploymentmanagerOperationsGetSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetSecurity };
var DeploymentmanagerOperationsGetRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetRequest, _super);
    function DeploymentmanagerOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerOperationsGetPathParams)
    ], DeploymentmanagerOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerOperationsGetQueryParams)
    ], DeploymentmanagerOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerOperationsGetSecurity)
    ], DeploymentmanagerOperationsGetRequest.prototype, "security", void 0);
    return DeploymentmanagerOperationsGetRequest;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetRequest };
var DeploymentmanagerOperationsGetResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerOperationsGetResponse, _super);
    function DeploymentmanagerOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DeploymentmanagerOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerOperationsGetResponse.prototype, "statusCode", void 0);
    return DeploymentmanagerOperationsGetResponse;
}(SpeakeasyBase));
export { DeploymentmanagerOperationsGetResponse };
