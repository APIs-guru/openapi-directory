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
var DriveParentsGetPathParams = /** @class */ (function (_super) {
    __extends(DriveParentsGetPathParams, _super);
    function DriveParentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveParentsGetPathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parentId" }),
        __metadata("design:type", String)
    ], DriveParentsGetPathParams.prototype, "parentId", void 0);
    return DriveParentsGetPathParams;
}(SpeakeasyBase));
export { DriveParentsGetPathParams };
var DriveParentsGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveParentsGetQueryParams, _super);
    function DriveParentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveParentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveParentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveParentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveParentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveParentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveParentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveParentsGetQueryParams.prototype, "userIp", void 0);
    return DriveParentsGetQueryParams;
}(SpeakeasyBase));
export { DriveParentsGetQueryParams };
var DriveParentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurityOption1, _super);
    function DriveParentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveParentsGetSecurityOption1;
}(SpeakeasyBase));
export { DriveParentsGetSecurityOption1 };
var DriveParentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurityOption2, _super);
    function DriveParentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveParentsGetSecurityOption2;
}(SpeakeasyBase));
export { DriveParentsGetSecurityOption2 };
var DriveParentsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurityOption3, _super);
    function DriveParentsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveParentsGetSecurityOption3;
}(SpeakeasyBase));
export { DriveParentsGetSecurityOption3 };
var DriveParentsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurityOption4, _super);
    function DriveParentsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveParentsGetSecurityOption4;
}(SpeakeasyBase));
export { DriveParentsGetSecurityOption4 };
var DriveParentsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurityOption5, _super);
    function DriveParentsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveParentsGetSecurityOption5;
}(SpeakeasyBase));
export { DriveParentsGetSecurityOption5 };
var DriveParentsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurityOption6, _super);
    function DriveParentsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveParentsGetSecurityOption6;
}(SpeakeasyBase));
export { DriveParentsGetSecurityOption6 };
var DriveParentsGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurityOption7, _super);
    function DriveParentsGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveParentsGetSecurityOption7;
}(SpeakeasyBase));
export { DriveParentsGetSecurityOption7 };
var DriveParentsGetSecurity = /** @class */ (function (_super) {
    __extends(DriveParentsGetSecurity, _super);
    function DriveParentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsGetSecurityOption1)
    ], DriveParentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsGetSecurityOption2)
    ], DriveParentsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsGetSecurityOption3)
    ], DriveParentsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsGetSecurityOption4)
    ], DriveParentsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsGetSecurityOption5)
    ], DriveParentsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsGetSecurityOption6)
    ], DriveParentsGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsGetSecurityOption7)
    ], DriveParentsGetSecurity.prototype, "option7", void 0);
    return DriveParentsGetSecurity;
}(SpeakeasyBase));
export { DriveParentsGetSecurity };
var DriveParentsGetRequest = /** @class */ (function (_super) {
    __extends(DriveParentsGetRequest, _super);
    function DriveParentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsGetPathParams)
    ], DriveParentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsGetQueryParams)
    ], DriveParentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsGetSecurity)
    ], DriveParentsGetRequest.prototype, "security", void 0);
    return DriveParentsGetRequest;
}(SpeakeasyBase));
export { DriveParentsGetRequest };
var DriveParentsGetResponse = /** @class */ (function (_super) {
    __extends(DriveParentsGetResponse, _super);
    function DriveParentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveParentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ParentReference)
    ], DriveParentsGetResponse.prototype, "parentReference", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveParentsGetResponse.prototype, "statusCode", void 0);
    return DriveParentsGetResponse;
}(SpeakeasyBase));
export { DriveParentsGetResponse };
