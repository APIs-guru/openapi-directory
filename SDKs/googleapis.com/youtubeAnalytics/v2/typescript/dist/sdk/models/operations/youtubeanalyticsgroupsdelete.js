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
var YoutubeAnalyticsGroupsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteQueryParams, _super);
    function YoutubeAnalyticsGroupsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsGroupsDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteQueryParams };
var YoutubeAnalyticsGroupsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteSecurityOption1, _super);
    function YoutubeAnalyticsGroupsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteSecurityOption1 };
var YoutubeAnalyticsGroupsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteSecurityOption2, _super);
    function YoutubeAnalyticsGroupsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteSecurityOption2 };
var YoutubeAnalyticsGroupsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteSecurityOption3, _super);
    function YoutubeAnalyticsGroupsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsDeleteSecurityOption3;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteSecurityOption3 };
var YoutubeAnalyticsGroupsDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteSecurityOption4, _super);
    function YoutubeAnalyticsGroupsDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsDeleteSecurityOption4;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteSecurityOption4 };
var YoutubeAnalyticsGroupsDeleteSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteSecurityOption5, _super);
    function YoutubeAnalyticsGroupsDeleteSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupsDeleteSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupsDeleteSecurityOption5;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteSecurityOption5 };
var YoutubeAnalyticsGroupsDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteSecurity, _super);
    function YoutubeAnalyticsGroupsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsDeleteSecurityOption1)
    ], YoutubeAnalyticsGroupsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsDeleteSecurityOption2)
    ], YoutubeAnalyticsGroupsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsDeleteSecurityOption3)
    ], YoutubeAnalyticsGroupsDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsDeleteSecurityOption4)
    ], YoutubeAnalyticsGroupsDeleteSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupsDeleteSecurityOption5)
    ], YoutubeAnalyticsGroupsDeleteSecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsGroupsDeleteSecurity;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteSecurity };
var YoutubeAnalyticsGroupsDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteRequest, _super);
    function YoutubeAnalyticsGroupsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsDeleteQueryParams)
    ], YoutubeAnalyticsGroupsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsGroupsDeleteSecurity)
    ], YoutubeAnalyticsGroupsDeleteRequest.prototype, "security", void 0);
    return YoutubeAnalyticsGroupsDeleteRequest;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteRequest };
var YoutubeAnalyticsGroupsDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupsDeleteResponse, _super);
    function YoutubeAnalyticsGroupsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EmptyResponse)
    ], YoutubeAnalyticsGroupsDeleteResponse.prototype, "emptyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsGroupsDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsGroupsDeleteResponse;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupsDeleteResponse };
