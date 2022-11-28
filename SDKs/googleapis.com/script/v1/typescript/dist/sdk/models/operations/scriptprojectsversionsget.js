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
var ScriptProjectsVersionsGetPathParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsGetPathParams, _super);
    function ScriptProjectsVersionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetPathParams.prototype, "scriptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" }),
        __metadata("design:type", Number)
    ], ScriptProjectsVersionsGetPathParams.prototype, "versionNumber", void 0);
    return ScriptProjectsVersionsGetPathParams;
}(SpeakeasyBase));
export { ScriptProjectsVersionsGetPathParams };
var ScriptProjectsVersionsGetQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsGetQueryParams, _super);
    function ScriptProjectsVersionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptProjectsVersionsGetQueryParams;
}(SpeakeasyBase));
export { ScriptProjectsVersionsGetQueryParams };
var ScriptProjectsVersionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsGetSecurityOption1, _super);
    function ScriptProjectsVersionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsVersionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsVersionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ScriptProjectsVersionsGetSecurityOption1;
}(SpeakeasyBase));
export { ScriptProjectsVersionsGetSecurityOption1 };
var ScriptProjectsVersionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsGetSecurityOption2, _super);
    function ScriptProjectsVersionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsVersionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsVersionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ScriptProjectsVersionsGetSecurityOption2;
}(SpeakeasyBase));
export { ScriptProjectsVersionsGetSecurityOption2 };
var ScriptProjectsVersionsGetSecurity = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsGetSecurity, _super);
    function ScriptProjectsVersionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsVersionsGetSecurityOption1)
    ], ScriptProjectsVersionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsVersionsGetSecurityOption2)
    ], ScriptProjectsVersionsGetSecurity.prototype, "option2", void 0);
    return ScriptProjectsVersionsGetSecurity;
}(SpeakeasyBase));
export { ScriptProjectsVersionsGetSecurity };
var ScriptProjectsVersionsGetRequest = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsGetRequest, _super);
    function ScriptProjectsVersionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsVersionsGetPathParams)
    ], ScriptProjectsVersionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsVersionsGetQueryParams)
    ], ScriptProjectsVersionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsVersionsGetSecurity)
    ], ScriptProjectsVersionsGetRequest.prototype, "security", void 0);
    return ScriptProjectsVersionsGetRequest;
}(SpeakeasyBase));
export { ScriptProjectsVersionsGetRequest };
var ScriptProjectsVersionsGetResponse = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsGetResponse, _super);
    function ScriptProjectsVersionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProjectsVersionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Version)
    ], ScriptProjectsVersionsGetResponse.prototype, "version", void 0);
    return ScriptProjectsVersionsGetResponse;
}(SpeakeasyBase));
export { ScriptProjectsVersionsGetResponse };
