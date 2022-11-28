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
var YoutubeAnalyticsGroupItemsListQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListQueryParams, _super);
    function YoutubeAnalyticsGroupItemsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupId" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeAnalyticsGroupItemsListQueryParams;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListQueryParams };
var YoutubeAnalyticsGroupItemsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListSecurityOption1, _super);
    function YoutubeAnalyticsGroupItemsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsListSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsListSecurityOption1;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListSecurityOption1 };
var YoutubeAnalyticsGroupItemsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListSecurityOption2, _super);
    function YoutubeAnalyticsGroupItemsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsListSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsListSecurityOption2;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListSecurityOption2 };
var YoutubeAnalyticsGroupItemsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListSecurityOption3, _super);
    function YoutubeAnalyticsGroupItemsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsListSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsListSecurityOption3;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListSecurityOption3 };
var YoutubeAnalyticsGroupItemsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListSecurityOption4, _super);
    function YoutubeAnalyticsGroupItemsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsListSecurityOption4.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsListSecurityOption4;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListSecurityOption4 };
var YoutubeAnalyticsGroupItemsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListSecurityOption5, _super);
    function YoutubeAnalyticsGroupItemsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeAnalyticsGroupItemsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeAnalyticsGroupItemsListSecurityOption5.prototype, "oauth2c", void 0);
    return YoutubeAnalyticsGroupItemsListSecurityOption5;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListSecurityOption5 };
var YoutubeAnalyticsGroupItemsListSecurity = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListSecurity, _super);
    function YoutubeAnalyticsGroupItemsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsListSecurityOption1)
    ], YoutubeAnalyticsGroupItemsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsListSecurityOption2)
    ], YoutubeAnalyticsGroupItemsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsListSecurityOption3)
    ], YoutubeAnalyticsGroupItemsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsListSecurityOption4)
    ], YoutubeAnalyticsGroupItemsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeAnalyticsGroupItemsListSecurityOption5)
    ], YoutubeAnalyticsGroupItemsListSecurity.prototype, "option5", void 0);
    return YoutubeAnalyticsGroupItemsListSecurity;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListSecurity };
var YoutubeAnalyticsGroupItemsListRequest = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListRequest, _super);
    function YoutubeAnalyticsGroupItemsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsGroupItemsListQueryParams)
    ], YoutubeAnalyticsGroupItemsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeAnalyticsGroupItemsListSecurity)
    ], YoutubeAnalyticsGroupItemsListRequest.prototype, "security", void 0);
    return YoutubeAnalyticsGroupItemsListRequest;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListRequest };
var YoutubeAnalyticsGroupItemsListResponse = /** @class */ (function (_super) {
    __extends(YoutubeAnalyticsGroupItemsListResponse, _super);
    function YoutubeAnalyticsGroupItemsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeAnalyticsGroupItemsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGroupItemsResponse)
    ], YoutubeAnalyticsGroupItemsListResponse.prototype, "listGroupItemsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeAnalyticsGroupItemsListResponse.prototype, "statusCode", void 0);
    return YoutubeAnalyticsGroupItemsListResponse;
}(SpeakeasyBase));
export { YoutubeAnalyticsGroupItemsListResponse };
