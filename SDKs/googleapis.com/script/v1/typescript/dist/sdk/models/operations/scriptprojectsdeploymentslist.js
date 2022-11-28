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
var ScriptProjectsDeploymentsListPathParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsListPathParams, _super);
    function ScriptProjectsDeploymentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=scriptId" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListPathParams.prototype, "scriptId", void 0);
    return ScriptProjectsDeploymentsListPathParams;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsListPathParams };
var ScriptProjectsDeploymentsListQueryParams = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsListQueryParams, _super);
    function ScriptProjectsDeploymentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListQueryParams.prototype, "uploadProtocol", void 0);
    return ScriptProjectsDeploymentsListQueryParams;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsListQueryParams };
var ScriptProjectsDeploymentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsListSecurityOption1, _super);
    function ScriptProjectsDeploymentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsDeploymentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsDeploymentsListSecurityOption1.prototype, "oauth2c", void 0);
    return ScriptProjectsDeploymentsListSecurityOption1;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsListSecurityOption1 };
var ScriptProjectsDeploymentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsListSecurityOption2, _super);
    function ScriptProjectsDeploymentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ScriptProjectsDeploymentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ScriptProjectsDeploymentsListSecurityOption2.prototype, "oauth2c", void 0);
    return ScriptProjectsDeploymentsListSecurityOption2;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsListSecurityOption2 };
var ScriptProjectsDeploymentsListSecurity = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsListSecurity, _super);
    function ScriptProjectsDeploymentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsDeploymentsListSecurityOption1)
    ], ScriptProjectsDeploymentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ScriptProjectsDeploymentsListSecurityOption2)
    ], ScriptProjectsDeploymentsListSecurity.prototype, "option2", void 0);
    return ScriptProjectsDeploymentsListSecurity;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsListSecurity };
var ScriptProjectsDeploymentsListRequest = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsListRequest, _super);
    function ScriptProjectsDeploymentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsListPathParams)
    ], ScriptProjectsDeploymentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsListQueryParams)
    ], ScriptProjectsDeploymentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ScriptProjectsDeploymentsListSecurity)
    ], ScriptProjectsDeploymentsListRequest.prototype, "security", void 0);
    return ScriptProjectsDeploymentsListRequest;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsListRequest };
var ScriptProjectsDeploymentsListResponse = /** @class */ (function (_super) {
    __extends(ScriptProjectsDeploymentsListResponse, _super);
    function ScriptProjectsDeploymentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ScriptProjectsDeploymentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDeploymentsResponse)
    ], ScriptProjectsDeploymentsListResponse.prototype, "listDeploymentsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ScriptProjectsDeploymentsListResponse.prototype, "statusCode", void 0);
    return ScriptProjectsDeploymentsListResponse;
}(SpeakeasyBase));
export { ScriptProjectsDeploymentsListResponse };
