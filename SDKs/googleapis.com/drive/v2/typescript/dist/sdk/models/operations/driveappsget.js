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
var DriveAppsGetPathParams = /** @class */ (function (_super) {
    __extends(DriveAppsGetPathParams, _super);
    function DriveAppsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], DriveAppsGetPathParams.prototype, "appId", void 0);
    return DriveAppsGetPathParams;
}(SpeakeasyBase));
export { DriveAppsGetPathParams };
var DriveAppsGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveAppsGetQueryParams, _super);
    function DriveAppsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveAppsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveAppsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveAppsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveAppsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveAppsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveAppsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveAppsGetQueryParams.prototype, "userIp", void 0);
    return DriveAppsGetQueryParams;
}(SpeakeasyBase));
export { DriveAppsGetQueryParams };
var DriveAppsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurityOption1, _super);
    function DriveAppsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAppsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAppsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveAppsGetSecurityOption1;
}(SpeakeasyBase));
export { DriveAppsGetSecurityOption1 };
var DriveAppsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurityOption2, _super);
    function DriveAppsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAppsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAppsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveAppsGetSecurityOption2;
}(SpeakeasyBase));
export { DriveAppsGetSecurityOption2 };
var DriveAppsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurityOption3, _super);
    function DriveAppsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAppsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAppsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveAppsGetSecurityOption3;
}(SpeakeasyBase));
export { DriveAppsGetSecurityOption3 };
var DriveAppsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurityOption4, _super);
    function DriveAppsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAppsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAppsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveAppsGetSecurityOption4;
}(SpeakeasyBase));
export { DriveAppsGetSecurityOption4 };
var DriveAppsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurityOption5, _super);
    function DriveAppsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAppsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAppsGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveAppsGetSecurityOption5;
}(SpeakeasyBase));
export { DriveAppsGetSecurityOption5 };
var DriveAppsGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurityOption6, _super);
    function DriveAppsGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAppsGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAppsGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveAppsGetSecurityOption6;
}(SpeakeasyBase));
export { DriveAppsGetSecurityOption6 };
var DriveAppsGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurityOption7, _super);
    function DriveAppsGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveAppsGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveAppsGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveAppsGetSecurityOption7;
}(SpeakeasyBase));
export { DriveAppsGetSecurityOption7 };
var DriveAppsGetSecurity = /** @class */ (function (_super) {
    __extends(DriveAppsGetSecurity, _super);
    function DriveAppsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAppsGetSecurityOption1)
    ], DriveAppsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAppsGetSecurityOption2)
    ], DriveAppsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAppsGetSecurityOption3)
    ], DriveAppsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAppsGetSecurityOption4)
    ], DriveAppsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAppsGetSecurityOption5)
    ], DriveAppsGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAppsGetSecurityOption6)
    ], DriveAppsGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveAppsGetSecurityOption7)
    ], DriveAppsGetSecurity.prototype, "option7", void 0);
    return DriveAppsGetSecurity;
}(SpeakeasyBase));
export { DriveAppsGetSecurity };
var DriveAppsGetRequest = /** @class */ (function (_super) {
    __extends(DriveAppsGetRequest, _super);
    function DriveAppsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveAppsGetPathParams)
    ], DriveAppsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveAppsGetQueryParams)
    ], DriveAppsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveAppsGetSecurity)
    ], DriveAppsGetRequest.prototype, "security", void 0);
    return DriveAppsGetRequest;
}(SpeakeasyBase));
export { DriveAppsGetRequest };
var DriveAppsGetResponse = /** @class */ (function (_super) {
    __extends(DriveAppsGetResponse, _super);
    function DriveAppsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.App)
    ], DriveAppsGetResponse.prototype, "app", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveAppsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveAppsGetResponse.prototype, "statusCode", void 0);
    return DriveAppsGetResponse;
}(SpeakeasyBase));
export { DriveAppsGetResponse };
