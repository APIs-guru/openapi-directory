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
var ScriptProjectsVersionsListPathParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsListPathParams, _super);
    function ScriptProjectsVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListPathParams.prototype, "scriptId", void 0);
    return ScriptProjectsVersionsListPathParams;
}(SpeakeasyBase));
export { ScriptProjectsVersionsListPathParams };
var ScriptProjectsVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsListQueryParams, _super);
    function ScriptProjectsVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ScriptProjectsVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProjectsVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptProjectsVersionsListQueryParams;
}(SpeakeasyBase));
export { ScriptProjectsVersionsListQueryParams };
var ScriptProjectsVersionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsListSecurityOption1, _super);
    function ScriptProjectsVersionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsVersionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsVersionsListSecurityOption1.prototype, "oauth2c", void 0);
    return ScriptProjectsVersionsListSecurityOption1;
}(SpeakeasyBase));
export { ScriptProjectsVersionsListSecurityOption1 };
var ScriptProjectsVersionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsListSecurityOption2, _super);
    function ScriptProjectsVersionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsVersionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsVersionsListSecurityOption2.prototype, "oauth2c", void 0);
    return ScriptProjectsVersionsListSecurityOption2;
}(SpeakeasyBase));
export { ScriptProjectsVersionsListSecurityOption2 };
var ScriptProjectsVersionsListSecurity = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsListSecurity, _super);
    function ScriptProjectsVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsVersionsListSecurityOption1)
    ], ScriptProjectsVersionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsVersionsListSecurityOption2)
    ], ScriptProjectsVersionsListSecurity.prototype, "option2", void 0);
    return ScriptProjectsVersionsListSecurity;
}(SpeakeasyBase));
export { ScriptProjectsVersionsListSecurity };
var ScriptProjectsVersionsListRequest = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsListRequest, _super);
    function ScriptProjectsVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsVersionsListPathParams)
    ], ScriptProjectsVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsVersionsListQueryParams)
    ], ScriptProjectsVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsVersionsListSecurity)
    ], ScriptProjectsVersionsListRequest.prototype, "security", void 0);
    return ScriptProjectsVersionsListRequest;
}(SpeakeasyBase));
export { ScriptProjectsVersionsListRequest };
var ScriptProjectsVersionsListResponse = /** @class */ (function (_super) {
    __extends(ScriptProjectsVersionsListResponse, _super);
    function ScriptProjectsVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProjectsVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVersionsResponse)
    ], ScriptProjectsVersionsListResponse.prototype, "listVersionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProjectsVersionsListResponse.prototype, "statusCode", void 0);
    return ScriptProjectsVersionsListResponse;
}(SpeakeasyBase));
export { ScriptProjectsVersionsListResponse };
