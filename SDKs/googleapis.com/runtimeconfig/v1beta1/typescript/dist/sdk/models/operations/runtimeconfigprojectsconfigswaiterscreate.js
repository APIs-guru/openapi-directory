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
var RuntimeconfigProjectsConfigsWaitersCreatePathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersCreatePathParams, _super);
    function RuntimeconfigProjectsConfigsWaitersCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreatePathParams.prototype, "parent", void 0);
    return RuntimeconfigProjectsConfigsWaitersCreatePathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersCreatePathParams };
var RuntimeconfigProjectsConfigsWaitersCreateQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersCreateQueryParams, _super);
    function RuntimeconfigProjectsConfigsWaitersCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsWaitersCreateQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersCreateQueryParams };
var RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1, _super);
    function RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1 };
var RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2, _super);
    function RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2 };
var RuntimeconfigProjectsConfigsWaitersCreateSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersCreateSecurity, _super);
    function RuntimeconfigProjectsConfigsWaitersCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersCreateSecurityOption1)
    ], RuntimeconfigProjectsConfigsWaitersCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersCreateSecurityOption2)
    ], RuntimeconfigProjectsConfigsWaitersCreateSecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsWaitersCreateSecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersCreateSecurity };
var RuntimeconfigProjectsConfigsWaitersCreateRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersCreateRequest, _super);
    function RuntimeconfigProjectsConfigsWaitersCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersCreatePathParams)
    ], RuntimeconfigProjectsConfigsWaitersCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersCreateQueryParams)
    ], RuntimeconfigProjectsConfigsWaitersCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Waiter)
    ], RuntimeconfigProjectsConfigsWaitersCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersCreateSecurity)
    ], RuntimeconfigProjectsConfigsWaitersCreateRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsWaitersCreateRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersCreateRequest };
var RuntimeconfigProjectsConfigsWaitersCreateResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersCreateResponse, _super);
    function RuntimeconfigProjectsConfigsWaitersCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], RuntimeconfigProjectsConfigsWaitersCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsWaitersCreateResponse.prototype, "statusCode", void 0);
    return RuntimeconfigProjectsConfigsWaitersCreateResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersCreateResponse };
