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
var GmailUsersDraftsListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListPathParams, _super);
    function GmailUsersDraftsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListPathParams.prototype, "userId", void 0);
    return GmailUsersDraftsListPathParams;
}(SpeakeasyBase));
export { GmailUsersDraftsListPathParams };
var GmailUsersDraftsListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListQueryParams, _super);
    function GmailUsersDraftsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSpamTrash" }),
        __metadata("design:type", Boolean)
    ], GmailUsersDraftsListQueryParams.prototype, "includeSpamTrash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], GmailUsersDraftsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersDraftsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersDraftsListQueryParams;
}(SpeakeasyBase));
export { GmailUsersDraftsListQueryParams };
var GmailUsersDraftsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListSecurityOption1, _super);
    function GmailUsersDraftsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersDraftsListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersDraftsListSecurityOption1 };
var GmailUsersDraftsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListSecurityOption2, _super);
    function GmailUsersDraftsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersDraftsListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersDraftsListSecurityOption2 };
var GmailUsersDraftsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListSecurityOption3, _super);
    function GmailUsersDraftsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersDraftsListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersDraftsListSecurityOption3 };
var GmailUsersDraftsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListSecurityOption4, _super);
    function GmailUsersDraftsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersDraftsListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersDraftsListSecurityOption4 };
var GmailUsersDraftsListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListSecurity, _super);
    function GmailUsersDraftsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsListSecurityOption1)
    ], GmailUsersDraftsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsListSecurityOption2)
    ], GmailUsersDraftsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsListSecurityOption3)
    ], GmailUsersDraftsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsListSecurityOption4)
    ], GmailUsersDraftsListSecurity.prototype, "option4", void 0);
    return GmailUsersDraftsListSecurity;
}(SpeakeasyBase));
export { GmailUsersDraftsListSecurity };
var GmailUsersDraftsListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListRequest, _super);
    function GmailUsersDraftsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsListPathParams)
    ], GmailUsersDraftsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsListQueryParams)
    ], GmailUsersDraftsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsListSecurity)
    ], GmailUsersDraftsListRequest.prototype, "security", void 0);
    return GmailUsersDraftsListRequest;
}(SpeakeasyBase));
export { GmailUsersDraftsListRequest };
var GmailUsersDraftsListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsListResponse, _super);
    function GmailUsersDraftsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersDraftsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDraftsResponse)
    ], GmailUsersDraftsListResponse.prototype, "listDraftsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersDraftsListResponse.prototype, "statusCode", void 0);
    return GmailUsersDraftsListResponse;
}(SpeakeasyBase));
export { GmailUsersDraftsListResponse };
