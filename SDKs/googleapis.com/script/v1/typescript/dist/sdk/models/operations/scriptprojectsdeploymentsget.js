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
var ScriptProjectsDeploymentsGetPathParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsGetPathParams, _super);
    function ScriptProjectsDeploymentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deploymentId" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetPathParams.prototype, "deploymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetPathParams.prototype, "scriptId", void 0);
    return ScriptProjectsDeploymentsGetPathParams;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsGetPathParams };
var ScriptProjectsDeploymentsGetQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsGetQueryParams, _super);
    function ScriptProjectsDeploymentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptProjectsDeploymentsGetQueryParams;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsGetQueryParams };
var ScriptProjectsDeploymentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsGetSecurityOption1, _super);
    function ScriptProjectsDeploymentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsDeploymentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsDeploymentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ScriptProjectsDeploymentsGetSecurityOption1;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsGetSecurityOption1 };
var ScriptProjectsDeploymentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsGetSecurityOption2, _super);
    function ScriptProjectsDeploymentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsDeploymentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsDeploymentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ScriptProjectsDeploymentsGetSecurityOption2;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsGetSecurityOption2 };
var ScriptProjectsDeploymentsGetSecurity = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsGetSecurity, _super);
    function ScriptProjectsDeploymentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsDeploymentsGetSecurityOption1)
    ], ScriptProjectsDeploymentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsDeploymentsGetSecurityOption2)
    ], ScriptProjectsDeploymentsGetSecurity.prototype, "option2", void 0);
    return ScriptProjectsDeploymentsGetSecurity;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsGetSecurity };
var ScriptProjectsDeploymentsGetRequest = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsGetRequest, _super);
    function ScriptProjectsDeploymentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsGetPathParams)
    ], ScriptProjectsDeploymentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsGetQueryParams)
    ], ScriptProjectsDeploymentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsGetSecurity)
    ], ScriptProjectsDeploymentsGetRequest.prototype, "security", void 0);
    return ScriptProjectsDeploymentsGetRequest;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsGetRequest };
var ScriptProjectsDeploymentsGetResponse = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsGetResponse, _super);
    function ScriptProjectsDeploymentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Deployment)
    ], ScriptProjectsDeploymentsGetResponse.prototype, "deployment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProjectsDeploymentsGetResponse.prototype, "statusCode", void 0);
    return ScriptProjectsDeploymentsGetResponse;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsGetResponse };
