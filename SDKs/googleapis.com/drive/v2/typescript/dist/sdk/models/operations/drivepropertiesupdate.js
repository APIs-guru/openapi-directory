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
var DrivePropertiesUpdatePathParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdatePathParams, _super);
    function DrivePropertiesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdatePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyKey" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdatePathParams.prototype, "propertyKey", void 0);
    return DrivePropertiesUpdatePathParams;
}(SpeakeasyBase));
export { DrivePropertiesUpdatePathParams };
var DrivePropertiesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateQueryParams, _super);
    function DrivePropertiesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePropertiesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" }),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateQueryParams.prototype, "visibility", void 0);
    return DrivePropertiesUpdateQueryParams;
}(SpeakeasyBase));
export { DrivePropertiesUpdateQueryParams };
var DrivePropertiesUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateSecurityOption1, _super);
    function DrivePropertiesUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePropertiesUpdateSecurityOption1;
}(SpeakeasyBase));
export { DrivePropertiesUpdateSecurityOption1 };
var DrivePropertiesUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateSecurityOption2, _super);
    function DrivePropertiesUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePropertiesUpdateSecurityOption2;
}(SpeakeasyBase));
export { DrivePropertiesUpdateSecurityOption2 };
var DrivePropertiesUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateSecurityOption3, _super);
    function DrivePropertiesUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePropertiesUpdateSecurityOption3;
}(SpeakeasyBase));
export { DrivePropertiesUpdateSecurityOption3 };
var DrivePropertiesUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateSecurityOption4, _super);
    function DrivePropertiesUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePropertiesUpdateSecurityOption4;
}(SpeakeasyBase));
export { DrivePropertiesUpdateSecurityOption4 };
var DrivePropertiesUpdateSecurity = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateSecurity, _super);
    function DrivePropertiesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesUpdateSecurityOption1)
    ], DrivePropertiesUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesUpdateSecurityOption2)
    ], DrivePropertiesUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesUpdateSecurityOption3)
    ], DrivePropertiesUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesUpdateSecurityOption4)
    ], DrivePropertiesUpdateSecurity.prototype, "option4", void 0);
    return DrivePropertiesUpdateSecurity;
}(SpeakeasyBase));
export { DrivePropertiesUpdateSecurity };
var DrivePropertiesUpdateRequest = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateRequest, _super);
    function DrivePropertiesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesUpdatePathParams)
    ], DrivePropertiesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesUpdateQueryParams)
    ], DrivePropertiesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Property)
    ], DrivePropertiesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesUpdateSecurity)
    ], DrivePropertiesUpdateRequest.prototype, "security", void 0);
    return DrivePropertiesUpdateRequest;
}(SpeakeasyBase));
export { DrivePropertiesUpdateRequest };
var DrivePropertiesUpdateResponse = /** @class */ (function (_super) {
    __extends(DrivePropertiesUpdateResponse, _super);
    function DrivePropertiesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePropertiesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Property)
    ], DrivePropertiesUpdateResponse.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePropertiesUpdateResponse.prototype, "statusCode", void 0);
    return DrivePropertiesUpdateResponse;
}(SpeakeasyBase));
export { DrivePropertiesUpdateResponse };
