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
var LoggingSinksListPathParams = /** @class */ (function (_super) {
    __extends(LoggingSinksListPathParams, _super);
    function LoggingSinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingSinksListPathParams.prototype, "parent", void 0);
    return LoggingSinksListPathParams;
}(SpeakeasyBase));
export { LoggingSinksListPathParams };
var LoggingSinksListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingSinksListQueryParams, _super);
    function LoggingSinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingSinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingSinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingSinksListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingSinksListQueryParams;
}(SpeakeasyBase));
export { LoggingSinksListQueryParams };
var LoggingSinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingSinksListSecurityOption1, _super);
    function LoggingSinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingSinksListSecurityOption1;
}(SpeakeasyBase));
export { LoggingSinksListSecurityOption1 };
var LoggingSinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingSinksListSecurityOption2, _super);
    function LoggingSinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingSinksListSecurityOption2;
}(SpeakeasyBase));
export { LoggingSinksListSecurityOption2 };
var LoggingSinksListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingSinksListSecurityOption3, _super);
    function LoggingSinksListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingSinksListSecurityOption3;
}(SpeakeasyBase));
export { LoggingSinksListSecurityOption3 };
var LoggingSinksListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingSinksListSecurityOption4, _super);
    function LoggingSinksListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingSinksListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingSinksListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingSinksListSecurityOption4;
}(SpeakeasyBase));
export { LoggingSinksListSecurityOption4 };
var LoggingSinksListSecurity = /** @class */ (function (_super) {
    __extends(LoggingSinksListSecurity, _super);
    function LoggingSinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksListSecurityOption1)
    ], LoggingSinksListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksListSecurityOption2)
    ], LoggingSinksListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksListSecurityOption3)
    ], LoggingSinksListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingSinksListSecurityOption4)
    ], LoggingSinksListSecurity.prototype, "option4", void 0);
    return LoggingSinksListSecurity;
}(SpeakeasyBase));
export { LoggingSinksListSecurity };
var LoggingSinksListRequest = /** @class */ (function (_super) {
    __extends(LoggingSinksListRequest, _super);
    function LoggingSinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksListPathParams)
    ], LoggingSinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksListQueryParams)
    ], LoggingSinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingSinksListSecurity)
    ], LoggingSinksListRequest.prototype, "security", void 0);
    return LoggingSinksListRequest;
}(SpeakeasyBase));
export { LoggingSinksListRequest };
var LoggingSinksListResponse = /** @class */ (function (_super) {
    __extends(LoggingSinksListResponse, _super);
    function LoggingSinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingSinksListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListSinksResponse)
    ], LoggingSinksListResponse.prototype, "listSinksResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingSinksListResponse.prototype, "statusCode", void 0);
    return LoggingSinksListResponse;
}(SpeakeasyBase));
export { LoggingSinksListResponse };
