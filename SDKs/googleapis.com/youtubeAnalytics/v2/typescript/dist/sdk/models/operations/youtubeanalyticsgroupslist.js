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
var YoutubeAnalyticsGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListQueryParams, _super);
    function YoutubeAnalyticsGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=mine" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "mine", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsGroupsListQueryParams;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListQueryParams };
var YoutubeAnalyticsGroupsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListSecurityOption1, _super);
    function YoutubeAnalyticsGroupsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListSecurityOption1 };
var YoutubeAnalyticsGroupsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListSecurityOption2, _super);
    function YoutubeAnalyticsGroupsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListSecurityOption2 };
var YoutubeAnalyticsGroupsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListSecurityOption3, _super);
    function YoutubeAnalyticsGroupsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListSecurityOption3 };
var YoutubeAnalyticsGroupsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListSecurityOption4, _super);
    function YoutubeAnalyticsGroupsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListSecurityOption4 };
var YoutubeAnalyticsGroupsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListSecurityOption5, _super);
    function YoutubeAnalyticsGroupsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsListSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsListSecurityOption5;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListSecurityOption5 };
var YoutubeAnalyticsGroupsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListSecurity, _super);
    function YoutubeAnalyticsGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsListSecurityOption1)
    ], YoutubeAnalyticsGroupsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsListSecurityOption2)
    ], YoutubeAnalyticsGroupsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsListSecurityOption3)
    ], YoutubeAnalyticsGroupsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsListSecurityOption4)
    ], YoutubeAnalyticsGroupsListSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsListSecurityOption5)
    ], YoutubeAnalyticsGroupsListSecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsGroupsListSecurity;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListSecurity };
var YoutubeAnalyticsGroupsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListRequest, _super);
    function YoutubeAnalyticsGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsListQueryParams)
    ], YoutubeAnalyticsGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsListSecurity)
    ], YoutubeAnalyticsGroupsListRequest.prototype, "security", void 0);
    return YoutubeAnalyticsGroupsListRequest;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListRequest };
var YoutubeAnalyticsGroupsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsListResponse, _super);
    function YoutubeAnalyticsGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListGroupsResponse)
    ], YoutubeAnalyticsGroupsListResponse.prototype, "listGroupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsGroupsListResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsGroupsListResponse;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsListResponse };
