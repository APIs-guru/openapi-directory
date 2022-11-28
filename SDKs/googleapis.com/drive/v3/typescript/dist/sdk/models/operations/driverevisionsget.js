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
var DriveRevisionsGetPathParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetPathParams, _super);
    function DriveRevisionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetPathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionId" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetPathParams.prototype, "revisionId", void 0);
    return DriveRevisionsGetPathParams;
}(SpeakeasyBase));
export { DriveRevisionsGetPathParams };
var DriveRevisionsGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetQueryParams, _super);
    function DriveRevisionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acknowledgeAbuse" }),
        __metadata("design:type", Boolean)
    ], DriveRevisionsGetQueryParams.prototype, "acknowledgeAbuse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveRevisionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveRevisionsGetQueryParams.prototype, "userIp", void 0);
    return DriveRevisionsGetQueryParams;
}(SpeakeasyBase));
export { DriveRevisionsGetQueryParams };
var DriveRevisionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption1, _super);
    function DriveRevisionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption1;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurityOption1 };
var DriveRevisionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption2, _super);
    function DriveRevisionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption2;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurityOption2 };
var DriveRevisionsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption3, _super);
    function DriveRevisionsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption3;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurityOption3 };
var DriveRevisionsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption4, _super);
    function DriveRevisionsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption4;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurityOption4 };
var DriveRevisionsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption5, _super);
    function DriveRevisionsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption5;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurityOption5 };
var DriveRevisionsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption6, _super);
    function DriveRevisionsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption6;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurityOption6 };
var DriveRevisionsGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurityOption7, _super);
    function DriveRevisionsGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveRevisionsGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveRevisionsGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveRevisionsGetSecurityOption7;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurityOption7 };
var DriveRevisionsGetSecurity = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetSecurity, _super);
    function DriveRevisionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption1)
    ], DriveRevisionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption2)
    ], DriveRevisionsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption3)
    ], DriveRevisionsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption4)
    ], DriveRevisionsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption5)
    ], DriveRevisionsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption6)
    ], DriveRevisionsGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveRevisionsGetSecurityOption7)
    ], DriveRevisionsGetSecurity.prototype, "option7", void 0);
    return DriveRevisionsGetSecurity;
}(SpeakeasyBase));
export { DriveRevisionsGetSecurity };
var DriveRevisionsGetRequest = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetRequest, _super);
    function DriveRevisionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsGetPathParams)
    ], DriveRevisionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsGetQueryParams)
    ], DriveRevisionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveRevisionsGetSecurity)
    ], DriveRevisionsGetRequest.prototype, "security", void 0);
    return DriveRevisionsGetRequest;
}(SpeakeasyBase));
export { DriveRevisionsGetRequest };
var DriveRevisionsGetResponse = /** @class */ (function (_super) {
    __extends(DriveRevisionsGetResponse, _super);
    function DriveRevisionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveRevisionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Revision)
    ], DriveRevisionsGetResponse.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveRevisionsGetResponse.prototype, "statusCode", void 0);
    return DriveRevisionsGetResponse;
}(SpeakeasyBase));
export { DriveRevisionsGetResponse };
