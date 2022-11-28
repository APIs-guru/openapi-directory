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
var DrivePropertiesGetPathParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetPathParams, _super);
    function DrivePropertiesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetPathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyKey" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetPathParams.prototype, "propertyKey", void 0);
    return DrivePropertiesGetPathParams;
}(SpeakeasyBase));
export { DrivePropertiesGetPathParams };
var DrivePropertiesGetQueryParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetQueryParams, _super);
    function DrivePropertiesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePropertiesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" }),
        __metadata("design:type", String)
    ], DrivePropertiesGetQueryParams.prototype, "visibility", void 0);
    return DrivePropertiesGetQueryParams;
}(SpeakeasyBase));
export { DrivePropertiesGetQueryParams };
var DrivePropertiesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurityOption1, _super);
    function DrivePropertiesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePropertiesGetSecurityOption1;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurityOption1 };
var DrivePropertiesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurityOption2, _super);
    function DrivePropertiesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePropertiesGetSecurityOption2;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurityOption2 };
var DrivePropertiesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurityOption3, _super);
    function DrivePropertiesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePropertiesGetSecurityOption3;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurityOption3 };
var DrivePropertiesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurityOption4, _super);
    function DrivePropertiesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePropertiesGetSecurityOption4;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurityOption4 };
var DrivePropertiesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurityOption5, _super);
    function DrivePropertiesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesGetSecurityOption5.prototype, "oauth2c", void 0);
    return DrivePropertiesGetSecurityOption5;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurityOption5 };
var DrivePropertiesGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurityOption6, _super);
    function DrivePropertiesGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesGetSecurityOption6.prototype, "oauth2c", void 0);
    return DrivePropertiesGetSecurityOption6;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurityOption6 };
var DrivePropertiesGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurityOption7, _super);
    function DrivePropertiesGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesGetSecurityOption7.prototype, "oauth2c", void 0);
    return DrivePropertiesGetSecurityOption7;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurityOption7 };
var DrivePropertiesGetSecurity = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetSecurity, _super);
    function DrivePropertiesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesGetSecurityOption1)
    ], DrivePropertiesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesGetSecurityOption2)
    ], DrivePropertiesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesGetSecurityOption3)
    ], DrivePropertiesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesGetSecurityOption4)
    ], DrivePropertiesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesGetSecurityOption5)
    ], DrivePropertiesGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesGetSecurityOption6)
    ], DrivePropertiesGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesGetSecurityOption7)
    ], DrivePropertiesGetSecurity.prototype, "option7", void 0);
    return DrivePropertiesGetSecurity;
}(SpeakeasyBase));
export { DrivePropertiesGetSecurity };
var DrivePropertiesGetRequest = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetRequest, _super);
    function DrivePropertiesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesGetPathParams)
    ], DrivePropertiesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesGetQueryParams)
    ], DrivePropertiesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesGetSecurity)
    ], DrivePropertiesGetRequest.prototype, "security", void 0);
    return DrivePropertiesGetRequest;
}(SpeakeasyBase));
export { DrivePropertiesGetRequest };
var DrivePropertiesGetResponse = /** @class */ (function (_super) {
    __extends(DrivePropertiesGetResponse, _super);
    function DrivePropertiesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePropertiesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Property)
    ], DrivePropertiesGetResponse.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePropertiesGetResponse.prototype, "statusCode", void 0);
    return DrivePropertiesGetResponse;
}(SpeakeasyBase));
export { DrivePropertiesGetResponse };
