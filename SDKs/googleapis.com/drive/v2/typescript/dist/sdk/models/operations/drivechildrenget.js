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
var DriveChildrenGetPathParams = /** @class */ (function (_super) {
    __extends(DriveChildrenGetPathParams, _super);
    function DriveChildrenGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childId" }),
        __metadata("design:type", String)
    ], DriveChildrenGetPathParams.prototype, "childId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], DriveChildrenGetPathParams.prototype, "folderId", void 0);
    return DriveChildrenGetPathParams;
}(SpeakeasyBase));
export { DriveChildrenGetPathParams };
var DriveChildrenGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveChildrenGetQueryParams, _super);
    function DriveChildrenGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChildrenGetQueryParams.prototype, "userIp", void 0);
    return DriveChildrenGetQueryParams;
}(SpeakeasyBase));
export { DriveChildrenGetQueryParams };
var DriveChildrenGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption1, _super);
    function DriveChildrenGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption1;
}(SpeakeasyBase));
export { DriveChildrenGetSecurityOption1 };
var DriveChildrenGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption2, _super);
    function DriveChildrenGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption2;
}(SpeakeasyBase));
export { DriveChildrenGetSecurityOption2 };
var DriveChildrenGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption3, _super);
    function DriveChildrenGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption3;
}(SpeakeasyBase));
export { DriveChildrenGetSecurityOption3 };
var DriveChildrenGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption4, _super);
    function DriveChildrenGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption4;
}(SpeakeasyBase));
export { DriveChildrenGetSecurityOption4 };
var DriveChildrenGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption5, _super);
    function DriveChildrenGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption5;
}(SpeakeasyBase));
export { DriveChildrenGetSecurityOption5 };
var DriveChildrenGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption6, _super);
    function DriveChildrenGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption6;
}(SpeakeasyBase));
export { DriveChildrenGetSecurityOption6 };
var DriveChildrenGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurityOption7, _super);
    function DriveChildrenGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChildrenGetSecurityOption7;
}(SpeakeasyBase));
export { DriveChildrenGetSecurityOption7 };
var DriveChildrenGetSecurity = /** @class */ (function (_super) {
    __extends(DriveChildrenGetSecurity, _super);
    function DriveChildrenGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption1)
    ], DriveChildrenGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption2)
    ], DriveChildrenGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption3)
    ], DriveChildrenGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption4)
    ], DriveChildrenGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption5)
    ], DriveChildrenGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption6)
    ], DriveChildrenGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenGetSecurityOption7)
    ], DriveChildrenGetSecurity.prototype, "option7", void 0);
    return DriveChildrenGetSecurity;
}(SpeakeasyBase));
export { DriveChildrenGetSecurity };
var DriveChildrenGetRequest = /** @class */ (function (_super) {
    __extends(DriveChildrenGetRequest, _super);
    function DriveChildrenGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenGetPathParams)
    ], DriveChildrenGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenGetQueryParams)
    ], DriveChildrenGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenGetSecurity)
    ], DriveChildrenGetRequest.prototype, "security", void 0);
    return DriveChildrenGetRequest;
}(SpeakeasyBase));
export { DriveChildrenGetRequest };
var DriveChildrenGetResponse = /** @class */ (function (_super) {
    __extends(DriveChildrenGetResponse, _super);
    function DriveChildrenGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChildReference)
    ], DriveChildrenGetResponse.prototype, "childReference", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChildrenGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChildrenGetResponse.prototype, "statusCode", void 0);
    return DriveChildrenGetResponse;
}(SpeakeasyBase));
export { DriveChildrenGetResponse };
