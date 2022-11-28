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
var ScriptProjectsGetContentPathParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetContentPathParams, _super);
    function ScriptProjectsGetContentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentPathParams.prototype, "scriptId", void 0);
    return ScriptProjectsGetContentPathParams;
}(SpeakeasyBase));
export { ScriptProjectsGetContentPathParams };
var ScriptProjectsGetContentQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetContentQueryParams, _super);
    function ScriptProjectsGetContentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProjectsGetContentQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionNumber" }),
        __metadata("design:type", Number)
    ], ScriptProjectsGetContentQueryParams.prototype, "versionNumber", void 0);
    return ScriptProjectsGetContentQueryParams;
}(SpeakeasyBase));
export { ScriptProjectsGetContentQueryParams };
var ScriptProjectsGetContentSecurityOption1 = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetContentSecurityOption1, _super);
    function ScriptProjectsGetContentSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsGetContentSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsGetContentSecurityOption1.prototype, "oauth2c", void 0);
    return ScriptProjectsGetContentSecurityOption1;
}(SpeakeasyBase));
export { ScriptProjectsGetContentSecurityOption1 };
var ScriptProjectsGetContentSecurityOption2 = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetContentSecurityOption2, _super);
    function ScriptProjectsGetContentSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsGetContentSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsGetContentSecurityOption2.prototype, "oauth2c", void 0);
    return ScriptProjectsGetContentSecurityOption2;
}(SpeakeasyBase));
export { ScriptProjectsGetContentSecurityOption2 };
var ScriptProjectsGetContentSecurity = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetContentSecurity, _super);
    function ScriptProjectsGetContentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsGetContentSecurityOption1)
    ], ScriptProjectsGetContentSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsGetContentSecurityOption2)
    ], ScriptProjectsGetContentSecurity.prototype, "option2", void 0);
    return ScriptProjectsGetContentSecurity;
}(SpeakeasyBase));
export { ScriptProjectsGetContentSecurity };
var ScriptProjectsGetContentRequest = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetContentRequest, _super);
    function ScriptProjectsGetContentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsGetContentPathParams)
    ], ScriptProjectsGetContentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsGetContentQueryParams)
    ], ScriptProjectsGetContentRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsGetContentSecurity)
    ], ScriptProjectsGetContentRequest.prototype, "security", void 0);
    return ScriptProjectsGetContentRequest;
}(SpeakeasyBase));
export { ScriptProjectsGetContentRequest };
var ScriptProjectsGetContentResponse = /** @class */ (function (_super) {
    __extends(ScriptProjectsGetContentResponse, _super);
    function ScriptProjectsGetContentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Content)
    ], ScriptProjectsGetContentResponse.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProjectsGetContentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProjectsGetContentResponse.prototype, "statusCode", void 0);
    return ScriptProjectsGetContentResponse;
}(SpeakeasyBase));
export { ScriptProjectsGetContentResponse };
