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
var YoutubeAnalyticsGroupsInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertQueryParams, _super);
    function YoutubeAnalyticsGroupsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsGroupsInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertQueryParams };
var YoutubeAnalyticsGroupsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertSecurityOption1, _super);
    function YoutubeAnalyticsGroupsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertSecurityOption1 };
var YoutubeAnalyticsGroupsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertSecurityOption2, _super);
    function YoutubeAnalyticsGroupsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertSecurityOption2 };
var YoutubeAnalyticsGroupsInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertSecurityOption3, _super);
    function YoutubeAnalyticsGroupsInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsInsertSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsInsertSecurityOption3;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertSecurityOption3 };
var YoutubeAnalyticsGroupsInsertSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertSecurityOption4, _super);
    function YoutubeAnalyticsGroupsInsertSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsInsertSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsInsertSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsInsertSecurityOption4;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertSecurityOption4 };
var YoutubeAnalyticsGroupsInsertSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertSecurityOption5, _super);
    function YoutubeAnalyticsGroupsInsertSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsInsertSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsInsertSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsInsertSecurityOption5;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertSecurityOption5 };
var YoutubeAnalyticsGroupsInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertSecurity, _super);
    function YoutubeAnalyticsGroupsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsInsertSecurityOption1)
    ], YoutubeAnalyticsGroupsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsInsertSecurityOption2)
    ], YoutubeAnalyticsGroupsInsertSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsInsertSecurityOption3)
    ], YoutubeAnalyticsGroupsInsertSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsInsertSecurityOption4)
    ], YoutubeAnalyticsGroupsInsertSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsInsertSecurityOption5)
    ], YoutubeAnalyticsGroupsInsertSecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsGroupsInsertSecurity;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertSecurity };
var YoutubeAnalyticsGroupsInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertRequest, _super);
    function YoutubeAnalyticsGroupsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsInsertQueryParams)
    ], YoutubeAnalyticsGroupsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Group)
    ], YoutubeAnalyticsGroupsInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsInsertSecurity)
    ], YoutubeAnalyticsGroupsInsertRequest.prototype, "security", void 0);
    return YoutubeAnalyticsGroupsInsertRequest;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertRequest };
var YoutubeAnalyticsGroupsInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsInsertResponse, _super);
    function YoutubeAnalyticsGroupsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Group)
    ], YoutubeAnalyticsGroupsInsertResponse.prototype, "group", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsGroupsInsertResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsGroupsInsertResponse;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsInsertResponse };
