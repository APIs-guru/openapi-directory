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
var DriveAboutGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveAboutGetQueryParams, _super);
    function DriveAboutGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSubscribed" }),
        __metadata("design:type", Boolean)
    ], DriveAboutGetQueryParams.prototype, "includeSubscribed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxChangeIdCount" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "maxChangeIdCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveAboutGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startChangeId" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "startChangeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveAboutGetQueryParams.prototype, "userIp", void 0);
    return DriveAboutGetQueryParams;
}(SpeakeasyBase));
export { DriveAboutGetQueryParams };
var DriveAboutGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption1, _super);
    function DriveAboutGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption1;
}(SpeakeasyBase));
export { DriveAboutGetSecurityOption1 };
var DriveAboutGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption2, _super);
    function DriveAboutGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption2;
}(SpeakeasyBase));
export { DriveAboutGetSecurityOption2 };
var DriveAboutGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption3, _super);
    function DriveAboutGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption3;
}(SpeakeasyBase));
export { DriveAboutGetSecurityOption3 };
var DriveAboutGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption4, _super);
    function DriveAboutGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption4;
}(SpeakeasyBase));
export { DriveAboutGetSecurityOption4 };
var DriveAboutGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption5, _super);
    function DriveAboutGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption5;
}(SpeakeasyBase));
export { DriveAboutGetSecurityOption5 };
var DriveAboutGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption6, _super);
    function DriveAboutGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption6;
}(SpeakeasyBase));
export { DriveAboutGetSecurityOption6 };
var DriveAboutGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurityOption7, _super);
    function DriveAboutGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAboutGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAboutGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveAboutGetSecurityOption7;
}(SpeakeasyBase));
export { DriveAboutGetSecurityOption7 };
var DriveAboutGetSecurity = /** @class */ (function (_super) {
    __extends(DriveAboutGetSecurity, _super);
    function DriveAboutGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption1)
    ], DriveAboutGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption2)
    ], DriveAboutGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption3)
    ], DriveAboutGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption4)
    ], DriveAboutGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption5)
    ], DriveAboutGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption6)
    ], DriveAboutGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAboutGetSecurityOption7)
    ], DriveAboutGetSecurity.prototype, "option7", void 0);
    return DriveAboutGetSecurity;
}(SpeakeasyBase));
export { DriveAboutGetSecurity };
var DriveAboutGetRequest = /** @class */ (function (_super) {
    __extends(DriveAboutGetRequest, _super);
    function DriveAboutGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveAboutGetQueryParams)
    ], DriveAboutGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveAboutGetSecurity)
    ], DriveAboutGetRequest.prototype, "security", void 0);
    return DriveAboutGetRequest;
}(SpeakeasyBase));
export { DriveAboutGetRequest };
var DriveAboutGetResponse = /** @class */ (function (_super) {
    __extends(DriveAboutGetResponse, _super);
    function DriveAboutGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.About)
    ], DriveAboutGetResponse.prototype, "about", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveAboutGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveAboutGetResponse.prototype, "statusCode", void 0);
    return DriveAboutGetResponse;
}(SpeakeasyBase));
export { DriveAboutGetResponse };
