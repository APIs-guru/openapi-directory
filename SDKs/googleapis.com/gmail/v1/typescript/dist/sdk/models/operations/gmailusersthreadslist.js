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
var GmailUsersThreadsListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListPathParams, _super);
    function GmailUsersThreadsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListPathParams.prototype, "userId", void 0);
    return GmailUsersThreadsListPathParams;
}(SpeakeasyBase));
export { GmailUsersThreadsListPathParams };
var GmailUsersThreadsListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListQueryParams, _super);
    function GmailUsersThreadsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSpamTrash" }),
        __metadata("design:type", Boolean)
    ], GmailUsersThreadsListQueryParams.prototype, "includeSpamTrash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelIds" }),
        __metadata("design:type", Array)
    ], GmailUsersThreadsListQueryParams.prototype, "labelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GmailUsersThreadsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersThreadsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersThreadsListQueryParams;
}(SpeakeasyBase));
export { GmailUsersThreadsListQueryParams };
var GmailUsersThreadsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListSecurityOption1, _super);
    function GmailUsersThreadsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersThreadsListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersThreadsListSecurityOption1 };
var GmailUsersThreadsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListSecurityOption2, _super);
    function GmailUsersThreadsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersThreadsListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersThreadsListSecurityOption2 };
var GmailUsersThreadsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListSecurityOption3, _super);
    function GmailUsersThreadsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersThreadsListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersThreadsListSecurityOption3 };
var GmailUsersThreadsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListSecurityOption4, _super);
    function GmailUsersThreadsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersThreadsListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersThreadsListSecurityOption4 };
var GmailUsersThreadsListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListSecurity, _super);
    function GmailUsersThreadsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsListSecurityOption1)
    ], GmailUsersThreadsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsListSecurityOption2)
    ], GmailUsersThreadsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsListSecurityOption3)
    ], GmailUsersThreadsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsListSecurityOption4)
    ], GmailUsersThreadsListSecurity.prototype, "option4", void 0);
    return GmailUsersThreadsListSecurity;
}(SpeakeasyBase));
export { GmailUsersThreadsListSecurity };
var GmailUsersThreadsListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListRequest, _super);
    function GmailUsersThreadsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsListPathParams)
    ], GmailUsersThreadsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsListQueryParams)
    ], GmailUsersThreadsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsListSecurity)
    ], GmailUsersThreadsListRequest.prototype, "security", void 0);
    return GmailUsersThreadsListRequest;
}(SpeakeasyBase));
export { GmailUsersThreadsListRequest };
var GmailUsersThreadsListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsListResponse, _super);
    function GmailUsersThreadsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersThreadsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListThreadsResponse)
    ], GmailUsersThreadsListResponse.prototype, "listThreadsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersThreadsListResponse.prototype, "statusCode", void 0);
    return GmailUsersThreadsListResponse;
}(SpeakeasyBase));
export { GmailUsersThreadsListResponse };
