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
var LoggingProjectsExclusionsListPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListPathParams, _super);
    function LoggingProjectsExclusionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListPathParams.prototype, "parent", void 0);
    return LoggingProjectsExclusionsListPathParams;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListPathParams };
var LoggingProjectsExclusionsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListQueryParams, _super);
    function LoggingProjectsExclusionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsExclusionsListQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListQueryParams };
var LoggingProjectsExclusionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListSecurityOption1, _super);
    function LoggingProjectsExclusionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsExclusionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsExclusionsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsExclusionsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListSecurityOption1 };
var LoggingProjectsExclusionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListSecurityOption2, _super);
    function LoggingProjectsExclusionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsExclusionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsExclusionsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsExclusionsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListSecurityOption2 };
var LoggingProjectsExclusionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListSecurityOption3, _super);
    function LoggingProjectsExclusionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsExclusionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsExclusionsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsExclusionsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListSecurityOption3 };
var LoggingProjectsExclusionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListSecurityOption4, _super);
    function LoggingProjectsExclusionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsExclusionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsExclusionsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsExclusionsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListSecurityOption4 };
var LoggingProjectsExclusionsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListSecurity, _super);
    function LoggingProjectsExclusionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsExclusionsListSecurityOption1)
    ], LoggingProjectsExclusionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsExclusionsListSecurityOption2)
    ], LoggingProjectsExclusionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsExclusionsListSecurityOption3)
    ], LoggingProjectsExclusionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsExclusionsListSecurityOption4)
    ], LoggingProjectsExclusionsListSecurity.prototype, "option4", void 0);
    return LoggingProjectsExclusionsListSecurity;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListSecurity };
var LoggingProjectsExclusionsListRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListRequest, _super);
    function LoggingProjectsExclusionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsExclusionsListPathParams)
    ], LoggingProjectsExclusionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsExclusionsListQueryParams)
    ], LoggingProjectsExclusionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsExclusionsListSecurity)
    ], LoggingProjectsExclusionsListRequest.prototype, "security", void 0);
    return LoggingProjectsExclusionsListRequest;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListRequest };
var LoggingProjectsExclusionsListResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsExclusionsListResponse, _super);
    function LoggingProjectsExclusionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsExclusionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListExclusionsResponse)
    ], LoggingProjectsExclusionsListResponse.prototype, "listExclusionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsExclusionsListResponse.prototype, "statusCode", void 0);
    return LoggingProjectsExclusionsListResponse;
}(SpeakeasyBase));
export { LoggingProjectsExclusionsListResponse };
