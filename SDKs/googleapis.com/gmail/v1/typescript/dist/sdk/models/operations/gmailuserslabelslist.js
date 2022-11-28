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
var GmailUsersLabelsListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListPathParams, _super);
    function GmailUsersLabelsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListPathParams.prototype, "userId", void 0);
    return GmailUsersLabelsListPathParams;
}(SpeakeasyBase));
export { GmailUsersLabelsListPathParams };
var GmailUsersLabelsListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListQueryParams, _super);
    function GmailUsersLabelsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersLabelsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersLabelsListQueryParams;
}(SpeakeasyBase));
export { GmailUsersLabelsListQueryParams };
var GmailUsersLabelsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListSecurityOption1, _super);
    function GmailUsersLabelsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersLabelsListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersLabelsListSecurityOption1 };
var GmailUsersLabelsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListSecurityOption2, _super);
    function GmailUsersLabelsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersLabelsListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersLabelsListSecurityOption2 };
var GmailUsersLabelsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListSecurityOption3, _super);
    function GmailUsersLabelsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersLabelsListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersLabelsListSecurityOption3 };
var GmailUsersLabelsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListSecurityOption4, _super);
    function GmailUsersLabelsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersLabelsListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersLabelsListSecurityOption4 };
var GmailUsersLabelsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListSecurityOption5, _super);
    function GmailUsersLabelsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsListSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersLabelsListSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersLabelsListSecurityOption5 };
var GmailUsersLabelsListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListSecurity, _super);
    function GmailUsersLabelsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsListSecurityOption1)
    ], GmailUsersLabelsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsListSecurityOption2)
    ], GmailUsersLabelsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsListSecurityOption3)
    ], GmailUsersLabelsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsListSecurityOption4)
    ], GmailUsersLabelsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsListSecurityOption5)
    ], GmailUsersLabelsListSecurity.prototype, "option5", void 0);
    return GmailUsersLabelsListSecurity;
}(SpeakeasyBase));
export { GmailUsersLabelsListSecurity };
var GmailUsersLabelsListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListRequest, _super);
    function GmailUsersLabelsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsListPathParams)
    ], GmailUsersLabelsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsListQueryParams)
    ], GmailUsersLabelsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsListSecurity)
    ], GmailUsersLabelsListRequest.prototype, "security", void 0);
    return GmailUsersLabelsListRequest;
}(SpeakeasyBase));
export { GmailUsersLabelsListRequest };
var GmailUsersLabelsListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsListResponse, _super);
    function GmailUsersLabelsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersLabelsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLabelsResponse)
    ], GmailUsersLabelsListResponse.prototype, "listLabelsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersLabelsListResponse.prototype, "statusCode", void 0);
    return GmailUsersLabelsListResponse;
}(SpeakeasyBase));
export { GmailUsersLabelsListResponse };
