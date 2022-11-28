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
var YoutubeAnalyticsGroupItemsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteQueryParams, _super);
    function YoutubeAnalyticsGroupItemsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsGroupItemsDeleteQueryParams;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteQueryParams };
var YoutubeAnalyticsGroupItemsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteSecurityOption1, _super);
    function YoutubeAnalyticsGroupItemsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsDeleteSecurityOption1;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteSecurityOption1 };
var YoutubeAnalyticsGroupItemsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteSecurityOption2, _super);
    function YoutubeAnalyticsGroupItemsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsDeleteSecurityOption2;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteSecurityOption2 };
var YoutubeAnalyticsGroupItemsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteSecurityOption3, _super);
    function YoutubeAnalyticsGroupItemsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsDeleteSecurityOption3;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteSecurityOption3 };
var YoutubeAnalyticsGroupItemsDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteSecurityOption4, _super);
    function YoutubeAnalyticsGroupItemsDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsDeleteSecurityOption4;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteSecurityOption4 };
var YoutubeAnalyticsGroupItemsDeleteSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteSecurityOption5, _super);
    function YoutubeAnalyticsGroupItemsDeleteSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsDeleteSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsDeleteSecurityOption5;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteSecurityOption5 };
var YoutubeAnalyticsGroupItemsDeleteSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteSecurity, _super);
    function YoutubeAnalyticsGroupItemsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsDeleteSecurityOption1)
    ], YoutubeAnalyticsGroupItemsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsDeleteSecurityOption2)
    ], YoutubeAnalyticsGroupItemsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsDeleteSecurityOption3)
    ], YoutubeAnalyticsGroupItemsDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsDeleteSecurityOption4)
    ], YoutubeAnalyticsGroupItemsDeleteSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsDeleteSecurityOption5)
    ], YoutubeAnalyticsGroupItemsDeleteSecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsGroupItemsDeleteSecurity;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteSecurity };
var YoutubeAnalyticsGroupItemsDeleteRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteRequest, _super);
    function YoutubeAnalyticsGroupItemsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsGroupItemsDeleteQueryParams)
    ], YoutubeAnalyticsGroupItemsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsGroupItemsDeleteSecurity)
    ], YoutubeAnalyticsGroupItemsDeleteRequest.prototype, "security", void 0);
    return YoutubeAnalyticsGroupItemsDeleteRequest;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteRequest };
var YoutubeAnalyticsGroupItemsDeleteResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsDeleteResponse, _super);
    function YoutubeAnalyticsGroupItemsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EmptyResponse)
    ], YoutubeAnalyticsGroupItemsDeleteResponse.prototype, "emptyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsGroupItemsDeleteResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsGroupItemsDeleteResponse;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsDeleteResponse };
