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
var DrivePropertiesDeletePathParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeletePathParams, _super);
    function DrivePropertiesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeletePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyKey" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeletePathParams.prototype, "propertyKey", void 0);
    return DrivePropertiesDeletePathParams;
}(SpeakeasyBase));
export { DrivePropertiesDeletePathParams };
var DrivePropertiesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteQueryParams, _super);
    function DrivePropertiesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePropertiesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" }),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteQueryParams.prototype, "visibility", void 0);
    return DrivePropertiesDeleteQueryParams;
}(SpeakeasyBase));
export { DrivePropertiesDeleteQueryParams };
var DrivePropertiesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteSecurityOption1, _super);
    function DrivePropertiesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePropertiesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DrivePropertiesDeleteSecurityOption1 };
var DrivePropertiesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteSecurityOption2, _super);
    function DrivePropertiesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePropertiesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DrivePropertiesDeleteSecurityOption2 };
var DrivePropertiesDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteSecurityOption3, _super);
    function DrivePropertiesDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePropertiesDeleteSecurityOption3;
}(SpeakeasyBase));
export { DrivePropertiesDeleteSecurityOption3 };
var DrivePropertiesDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteSecurityOption4, _super);
    function DrivePropertiesDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePropertiesDeleteSecurityOption4;
}(SpeakeasyBase));
export { DrivePropertiesDeleteSecurityOption4 };
var DrivePropertiesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteSecurity, _super);
    function DrivePropertiesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesDeleteSecurityOption1)
    ], DrivePropertiesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesDeleteSecurityOption2)
    ], DrivePropertiesDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesDeleteSecurityOption3)
    ], DrivePropertiesDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesDeleteSecurityOption4)
    ], DrivePropertiesDeleteSecurity.prototype, "option4", void 0);
    return DrivePropertiesDeleteSecurity;
}(SpeakeasyBase));
export { DrivePropertiesDeleteSecurity };
var DrivePropertiesDeleteRequest = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteRequest, _super);
    function DrivePropertiesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesDeletePathParams)
    ], DrivePropertiesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesDeleteQueryParams)
    ], DrivePropertiesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesDeleteSecurity)
    ], DrivePropertiesDeleteRequest.prototype, "security", void 0);
    return DrivePropertiesDeleteRequest;
}(SpeakeasyBase));
export { DrivePropertiesDeleteRequest };
var DrivePropertiesDeleteResponse = /** @class */ (function (_super) {
    __extends(DrivePropertiesDeleteResponse, _super);
    function DrivePropertiesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePropertiesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePropertiesDeleteResponse.prototype, "statusCode", void 0);
    return DrivePropertiesDeleteResponse;
}(SpeakeasyBase));
export { DrivePropertiesDeleteResponse };
