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
var DriveRevisionsListPathParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsListPathParams, _super);
    function DriveRevisionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRevisionsListPathParams.prototype, "fileId", void 0);
    return DriveRevisionsListPathParams;
}(SpeakeasyBase));
export { DriveRevisionsListPathParams };
var DriveRevisionsListQueryParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsListQueryParams, _super);
    function DriveRevisionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRevisionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRevisionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRevisionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRevisionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DriveRevisionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveRevisionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRevisionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRevisionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRevisionsListQueryParams.prototype, "userIp", void 0);
    return DriveRevisionsListQueryParams;
}(SpeakeasyBase));
export { DriveRevisionsListQueryParams };
var DriveRevisionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurityOption1, _super);
    function DriveRevisionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsListSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRevisionsListSecurityOption1;
}(SpeakeasyBase));
export { DriveRevisionsListSecurityOption1 };
var DriveRevisionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurityOption2, _super);
    function DriveRevisionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsListSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRevisionsListSecurityOption2;
}(SpeakeasyBase));
export { DriveRevisionsListSecurityOption2 };
var DriveRevisionsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurityOption3, _super);
    function DriveRevisionsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsListSecurityOption3.prototype, "oauth2c", void 0);
    return DriveRevisionsListSecurityOption3;
}(SpeakeasyBase));
export { DriveRevisionsListSecurityOption3 };
var DriveRevisionsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurityOption4, _super);
    function DriveRevisionsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsListSecurityOption4.prototype, "oauth2c", void 0);
    return DriveRevisionsListSecurityOption4;
}(SpeakeasyBase));
export { DriveRevisionsListSecurityOption4 };
var DriveRevisionsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurityOption5, _super);
    function DriveRevisionsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsListSecurityOption5.prototype, "oauth2c", void 0);
    return DriveRevisionsListSecurityOption5;
}(SpeakeasyBase));
export { DriveRevisionsListSecurityOption5 };
var DriveRevisionsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurityOption6, _super);
    function DriveRevisionsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsListSecurityOption6.prototype, "oauth2c", void 0);
    return DriveRevisionsListSecurityOption6;
}(SpeakeasyBase));
export { DriveRevisionsListSecurityOption6 };
var DriveRevisionsListSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurityOption7, _super);
    function DriveRevisionsListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsListSecurityOption7.prototype, "oauth2c", void 0);
    return DriveRevisionsListSecurityOption7;
}(SpeakeasyBase));
export { DriveRevisionsListSecurityOption7 };
var DriveRevisionsListSecurity = /** @class */ (function (_super) {
    __extends(DriveRevisionsListSecurity, _super);
    function DriveRevisionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsListSecurityOption1)
    ], DriveRevisionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsListSecurityOption2)
    ], DriveRevisionsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsListSecurityOption3)
    ], DriveRevisionsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsListSecurityOption4)
    ], DriveRevisionsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsListSecurityOption5)
    ], DriveRevisionsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsListSecurityOption6)
    ], DriveRevisionsListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsListSecurityOption7)
    ], DriveRevisionsListSecurity.prototype, "option7", void 0);
    return DriveRevisionsListSecurity;
}(SpeakeasyBase));
export { DriveRevisionsListSecurity };
var DriveRevisionsListRequest = /** @class */ (function (_super) {
    __extends(DriveRevisionsListRequest, _super);
    function DriveRevisionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsListPathParams)
    ], DriveRevisionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsListQueryParams)
    ], DriveRevisionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsListSecurity)
    ], DriveRevisionsListRequest.prototype, "security", void 0);
    return DriveRevisionsListRequest;
}(SpeakeasyBase));
export { DriveRevisionsListRequest };
var DriveRevisionsListResponse = /** @class */ (function (_super) {
    __extends(DriveRevisionsListResponse, _super);
    function DriveRevisionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRevisionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RevisionList)
    ], DriveRevisionsListResponse.prototype, "revisionList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRevisionsListResponse.prototype, "statusCode", void 0);
    return DriveRevisionsListResponse;
}(SpeakeasyBase));
export { DriveRevisionsListResponse };
