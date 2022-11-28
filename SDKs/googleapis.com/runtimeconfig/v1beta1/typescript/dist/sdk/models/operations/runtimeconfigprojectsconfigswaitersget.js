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
var RuntimeconfigProjectsConfigsWaitersGetPathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersGetPathParams, _super);
    function RuntimeconfigProjectsConfigsWaitersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetPathParams.prototype, "name", void 0);
    return RuntimeconfigProjectsConfigsWaitersGetPathParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersGetPathParams };
var RuntimeconfigProjectsConfigsWaitersGetQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersGetQueryParams, _super);
    function RuntimeconfigProjectsConfigsWaitersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigProjectsConfigsWaitersGetQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersGetQueryParams };
var RuntimeconfigProjectsConfigsWaitersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersGetSecurityOption1, _super);
    function RuntimeconfigProjectsConfigsWaitersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsWaitersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsWaitersGetSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsWaitersGetSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersGetSecurityOption1 };
var RuntimeconfigProjectsConfigsWaitersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersGetSecurityOption2, _super);
    function RuntimeconfigProjectsConfigsWaitersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigProjectsConfigsWaitersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigProjectsConfigsWaitersGetSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigProjectsConfigsWaitersGetSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersGetSecurityOption2 };
var RuntimeconfigProjectsConfigsWaitersGetSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersGetSecurity, _super);
    function RuntimeconfigProjectsConfigsWaitersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersGetSecurityOption1)
    ], RuntimeconfigProjectsConfigsWaitersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersGetSecurityOption2)
    ], RuntimeconfigProjectsConfigsWaitersGetSecurity.prototype, "option2", void 0);
    return RuntimeconfigProjectsConfigsWaitersGetSecurity;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersGetSecurity };
var RuntimeconfigProjectsConfigsWaitersGetRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersGetRequest, _super);
    function RuntimeconfigProjectsConfigsWaitersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersGetPathParams)
    ], RuntimeconfigProjectsConfigsWaitersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersGetQueryParams)
    ], RuntimeconfigProjectsConfigsWaitersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RuntimeconfigProjectsConfigsWaitersGetSecurity)
    ], RuntimeconfigProjectsConfigsWaitersGetRequest.prototype, "security", void 0);
    return RuntimeconfigProjectsConfigsWaitersGetRequest;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersGetRequest };
var RuntimeconfigProjectsConfigsWaitersGetResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigProjectsConfigsWaitersGetResponse, _super);
    function RuntimeconfigProjectsConfigsWaitersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RuntimeconfigProjectsConfigsWaitersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigProjectsConfigsWaitersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Waiter)
    ], RuntimeconfigProjectsConfigsWaitersGetResponse.prototype, "waiter", void 0);
    return RuntimeconfigProjectsConfigsWaitersGetResponse;
}(SpeakeasyBase));
export { RuntimeconfigProjectsConfigsWaitersGetResponse };
