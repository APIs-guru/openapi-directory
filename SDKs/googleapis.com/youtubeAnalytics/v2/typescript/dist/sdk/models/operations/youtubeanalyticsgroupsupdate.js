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
var YoutubeAnalyticsGroupsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateQueryParams, _super);
    function YoutubeAnalyticsGroupsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsGroupsUpdateQueryParams;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateQueryParams };
var YoutubeAnalyticsGroupsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateSecurityOption1, _super);
    function YoutubeAnalyticsGroupsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsUpdateSecurityOption1;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateSecurityOption1 };
var YoutubeAnalyticsGroupsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateSecurityOption2, _super);
    function YoutubeAnalyticsGroupsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsUpdateSecurityOption2;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateSecurityOption2 };
var YoutubeAnalyticsGroupsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateSecurityOption3, _super);
    function YoutubeAnalyticsGroupsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsUpdateSecurityOption3;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateSecurityOption3 };
var YoutubeAnalyticsGroupsUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateSecurityOption4, _super);
    function YoutubeAnalyticsGroupsUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsUpdateSecurityOption4;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateSecurityOption4 };
var YoutubeAnalyticsGroupsUpdateSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateSecurityOption5, _super);
    function YoutubeAnalyticsGroupsUpdateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsUpdateSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsUpdateSecurityOption5;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateSecurityOption5 };
var YoutubeAnalyticsGroupsUpdateSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateSecurity, _super);
    function YoutubeAnalyticsGroupsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsUpdateSecurityOption1)
    ], YoutubeAnalyticsGroupsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsUpdateSecurityOption2)
    ], YoutubeAnalyticsGroupsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsUpdateSecurityOption3)
    ], YoutubeAnalyticsGroupsUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsUpdateSecurityOption4)
    ], YoutubeAnalyticsGroupsUpdateSecurity.prototype, "option4", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsUpdateSecurityOption5)
    ], YoutubeAnalyticsGroupsUpdateSecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsGroupsUpdateSecurity;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateSecurity };
var YoutubeAnalyticsGroupsUpdateRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateRequest, _super);
    function YoutubeAnalyticsGroupsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsUpdateQueryParams)
    ], YoutubeAnalyticsGroupsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Group)
    ], YoutubeAnalyticsGroupsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsUpdateSecurity)
    ], YoutubeAnalyticsGroupsUpdateRequest.prototype, "security", void 0);
    return YoutubeAnalyticsGroupsUpdateRequest;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateRequest };
var YoutubeAnalyticsGroupsUpdateResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsUpdateResponse, _super);
    function YoutubeAnalyticsGroupsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Group)
    ], YoutubeAnalyticsGroupsUpdateResponse.prototype, "group", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsGroupsUpdateResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsGroupsUpdateResponse;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsUpdateResponse };
