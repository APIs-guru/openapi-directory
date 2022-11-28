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
var DrivePropertiesPatchPathParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchPathParams, _super);
    function DrivePropertiesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchPathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyKey" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchPathParams.prototype, "propertyKey", void 0);
    return DrivePropertiesPatchPathParams;
}(SpeakeasyBase));
export { DrivePropertiesPatchPathParams };
var DrivePropertiesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchQueryParams, _super);
    function DrivePropertiesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePropertiesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchQueryParams.prototype, "userIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=visibility" }),
        __metadata("design:type", String)
    ], DrivePropertiesPatchQueryParams.prototype, "visibility", void 0);
    return DrivePropertiesPatchQueryParams;
}(SpeakeasyBase));
export { DrivePropertiesPatchQueryParams };
var DrivePropertiesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchSecurityOption1, _super);
    function DrivePropertiesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePropertiesPatchSecurityOption1;
}(SpeakeasyBase));
export { DrivePropertiesPatchSecurityOption1 };
var DrivePropertiesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchSecurityOption2, _super);
    function DrivePropertiesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePropertiesPatchSecurityOption2;
}(SpeakeasyBase));
export { DrivePropertiesPatchSecurityOption2 };
var DrivePropertiesPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchSecurityOption3, _super);
    function DrivePropertiesPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesPatchSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePropertiesPatchSecurityOption3;
}(SpeakeasyBase));
export { DrivePropertiesPatchSecurityOption3 };
var DrivePropertiesPatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchSecurityOption4, _super);
    function DrivePropertiesPatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesPatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesPatchSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePropertiesPatchSecurityOption4;
}(SpeakeasyBase));
export { DrivePropertiesPatchSecurityOption4 };
var DrivePropertiesPatchSecurity = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchSecurity, _super);
    function DrivePropertiesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesPatchSecurityOption1)
    ], DrivePropertiesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesPatchSecurityOption2)
    ], DrivePropertiesPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesPatchSecurityOption3)
    ], DrivePropertiesPatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesPatchSecurityOption4)
    ], DrivePropertiesPatchSecurity.prototype, "option4", void 0);
    return DrivePropertiesPatchSecurity;
}(SpeakeasyBase));
export { DrivePropertiesPatchSecurity };
var DrivePropertiesPatchRequest = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchRequest, _super);
    function DrivePropertiesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesPatchPathParams)
    ], DrivePropertiesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesPatchQueryParams)
    ], DrivePropertiesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Property)
    ], DrivePropertiesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesPatchSecurity)
    ], DrivePropertiesPatchRequest.prototype, "security", void 0);
    return DrivePropertiesPatchRequest;
}(SpeakeasyBase));
export { DrivePropertiesPatchRequest };
var DrivePropertiesPatchResponse = /** @class */ (function (_super) {
    __extends(DrivePropertiesPatchResponse, _super);
    function DrivePropertiesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePropertiesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Property)
    ], DrivePropertiesPatchResponse.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePropertiesPatchResponse.prototype, "statusCode", void 0);
    return DrivePropertiesPatchResponse;
}(SpeakeasyBase));
export { DrivePropertiesPatchResponse };
