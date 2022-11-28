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
var DriveChildrenListPathParams = /** @class */ (function (_super) {
    __extends(DriveChildrenListPathParams, _super);
    function DriveChildrenListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], DriveChildrenListPathParams.prototype, "folderId", void 0);
    return DriveChildrenListPathParams;
}(SpeakeasyBase));
export { DriveChildrenListPathParams };
var DriveChildrenListQueryParams = /** @class */ (function (_super) {
    __extends(DriveChildrenListQueryParams, _super);
    function DriveChildrenListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DriveChildrenListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChildrenListQueryParams.prototype, "userIp", void 0);
    return DriveChildrenListQueryParams;
}(SpeakeasyBase));
export { DriveChildrenListQueryParams };
var DriveChildrenListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurityOption1, _super);
    function DriveChildrenListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenListSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChildrenListSecurityOption1;
}(SpeakeasyBase));
export { DriveChildrenListSecurityOption1 };
var DriveChildrenListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurityOption2, _super);
    function DriveChildrenListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenListSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChildrenListSecurityOption2;
}(SpeakeasyBase));
export { DriveChildrenListSecurityOption2 };
var DriveChildrenListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurityOption3, _super);
    function DriveChildrenListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenListSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChildrenListSecurityOption3;
}(SpeakeasyBase));
export { DriveChildrenListSecurityOption3 };
var DriveChildrenListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurityOption4, _super);
    function DriveChildrenListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenListSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChildrenListSecurityOption4;
}(SpeakeasyBase));
export { DriveChildrenListSecurityOption4 };
var DriveChildrenListSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurityOption5, _super);
    function DriveChildrenListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenListSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChildrenListSecurityOption5;
}(SpeakeasyBase));
export { DriveChildrenListSecurityOption5 };
var DriveChildrenListSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurityOption6, _super);
    function DriveChildrenListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenListSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChildrenListSecurityOption6;
}(SpeakeasyBase));
export { DriveChildrenListSecurityOption6 };
var DriveChildrenListSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurityOption7, _super);
    function DriveChildrenListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenListSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChildrenListSecurityOption7;
}(SpeakeasyBase));
export { DriveChildrenListSecurityOption7 };
var DriveChildrenListSecurity = /** @class */ (function (_super) {
    __extends(DriveChildrenListSecurity, _super);
    function DriveChildrenListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenListSecurityOption1)
    ], DriveChildrenListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenListSecurityOption2)
    ], DriveChildrenListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenListSecurityOption3)
    ], DriveChildrenListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenListSecurityOption4)
    ], DriveChildrenListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenListSecurityOption5)
    ], DriveChildrenListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenListSecurityOption6)
    ], DriveChildrenListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenListSecurityOption7)
    ], DriveChildrenListSecurity.prototype, "option7", void 0);
    return DriveChildrenListSecurity;
}(SpeakeasyBase));
export { DriveChildrenListSecurity };
var DriveChildrenListRequest = /** @class */ (function (_super) {
    __extends(DriveChildrenListRequest, _super);
    function DriveChildrenListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenListPathParams)
    ], DriveChildrenListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenListQueryParams)
    ], DriveChildrenListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenListSecurity)
    ], DriveChildrenListRequest.prototype, "security", void 0);
    return DriveChildrenListRequest;
}(SpeakeasyBase));
export { DriveChildrenListRequest };
var DriveChildrenListResponse = /** @class */ (function (_super) {
    __extends(DriveChildrenListResponse, _super);
    function DriveChildrenListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChildList)
    ], DriveChildrenListResponse.prototype, "childList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChildrenListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChildrenListResponse.prototype, "statusCode", void 0);
    return DriveChildrenListResponse;
}(SpeakeasyBase));
export { DriveChildrenListResponse };
