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
var RuntimeconfigOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsDeletePathParams, _super);
    function RuntimeconfigOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeletePathParams.prototype, "name", void 0);
    return RuntimeconfigOperationsDeletePathParams;
}(SpeakeasyBase));
export { RuntimeconfigOperationsDeletePathParams };
var RuntimeconfigOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsDeleteQueryParams, _super);
    function RuntimeconfigOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return RuntimeconfigOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { RuntimeconfigOperationsDeleteQueryParams };
var RuntimeconfigOperationsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsDeleteSecurityOption1, _super);
    function RuntimeconfigOperationsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigOperationsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigOperationsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return RuntimeconfigOperationsDeleteSecurityOption1;
}(SpeakeasyBase));
export { RuntimeconfigOperationsDeleteSecurityOption1 };
var RuntimeconfigOperationsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsDeleteSecurityOption2, _super);
    function RuntimeconfigOperationsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RuntimeconfigOperationsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RuntimeconfigOperationsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return RuntimeconfigOperationsDeleteSecurityOption2;
}(SpeakeasyBase));
export { RuntimeconfigOperationsDeleteSecurityOption2 };
var RuntimeconfigOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsDeleteSecurity, _super);
    function RuntimeconfigOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigOperationsDeleteSecurityOption1)
    ], RuntimeconfigOperationsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", RuntimeconfigOperationsDeleteSecurityOption2)
    ], RuntimeconfigOperationsDeleteSecurity.prototype, "option2", void 0);
    return RuntimeconfigOperationsDeleteSecurity;
}(SpeakeasyBase));
export { RuntimeconfigOperationsDeleteSecurity };
var RuntimeconfigOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsDeleteRequest, _super);
    function RuntimeconfigOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RuntimeconfigOperationsDeletePathParams)
    ], RuntimeconfigOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RuntimeconfigOperationsDeleteQueryParams)
    ], RuntimeconfigOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RuntimeconfigOperationsDeleteSecurity)
    ], RuntimeconfigOperationsDeleteRequest.prototype, "security", void 0);
    return RuntimeconfigOperationsDeleteRequest;
}(SpeakeasyBase));
export { RuntimeconfigOperationsDeleteRequest };
var RuntimeconfigOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(RuntimeconfigOperationsDeleteResponse, _super);
    function RuntimeconfigOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RuntimeconfigOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], RuntimeconfigOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RuntimeconfigOperationsDeleteResponse.prototype, "statusCode", void 0);
    return RuntimeconfigOperationsDeleteResponse;
}(SpeakeasyBase));
export { RuntimeconfigOperationsDeleteResponse };
