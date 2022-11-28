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
var LoggingProjectsLocationsBucketsListPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListPathParams, _super);
    function LoggingProjectsLocationsBucketsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListPathParams.prototype, "parent", void 0);
    return LoggingProjectsLocationsBucketsListPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListPathParams };
var LoggingProjectsLocationsBucketsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListQueryParams, _super);
    function LoggingProjectsLocationsBucketsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsBucketsListQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListQueryParams };
var LoggingProjectsLocationsBucketsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListSecurityOption1, _super);
    function LoggingProjectsLocationsBucketsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListSecurityOption1 };
var LoggingProjectsLocationsBucketsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListSecurityOption2, _super);
    function LoggingProjectsLocationsBucketsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListSecurityOption2 };
var LoggingProjectsLocationsBucketsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListSecurityOption3, _super);
    function LoggingProjectsLocationsBucketsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListSecurityOption3 };
var LoggingProjectsLocationsBucketsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListSecurityOption4, _super);
    function LoggingProjectsLocationsBucketsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListSecurityOption4 };
var LoggingProjectsLocationsBucketsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListSecurity, _super);
    function LoggingProjectsLocationsBucketsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsListSecurityOption1)
    ], LoggingProjectsLocationsBucketsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsListSecurityOption2)
    ], LoggingProjectsLocationsBucketsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsListSecurityOption3)
    ], LoggingProjectsLocationsBucketsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsListSecurityOption4)
    ], LoggingProjectsLocationsBucketsListSecurity.prototype, "option4", void 0);
    return LoggingProjectsLocationsBucketsListSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListSecurity };
var LoggingProjectsLocationsBucketsListRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListRequest, _super);
    function LoggingProjectsLocationsBucketsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsListPathParams)
    ], LoggingProjectsLocationsBucketsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsListQueryParams)
    ], LoggingProjectsLocationsBucketsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsListSecurity)
    ], LoggingProjectsLocationsBucketsListRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsBucketsListRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListRequest };
var LoggingProjectsLocationsBucketsListResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsListResponse, _super);
    function LoggingProjectsLocationsBucketsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBucketsResponse)
    ], LoggingProjectsLocationsBucketsListResponse.prototype, "listBucketsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsListResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsBucketsListResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsListResponse };
