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
var DriveParentsDeletePathParams = /** @class */ (function (_super) {
    __extends(DriveParentsDeletePathParams, _super);
    function DriveParentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveParentsDeletePathParams.prototype, "fileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parentId" }),
        __metadata("design:type", String)
    ], DriveParentsDeletePathParams.prototype, "parentId", void 0);
    return DriveParentsDeletePathParams;
}(SpeakeasyBase));
export { DriveParentsDeletePathParams };
var DriveParentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DriveParentsDeleteQueryParams, _super);
    function DriveParentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveParentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveParentsDeleteQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveParentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveParentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveParentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveParentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveParentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveParentsDeleteQueryParams.prototype, "userIp", void 0);
    return DriveParentsDeleteQueryParams;
}(SpeakeasyBase));
export { DriveParentsDeleteQueryParams };
var DriveParentsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveParentsDeleteSecurityOption1, _super);
    function DriveParentsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DriveParentsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DriveParentsDeleteSecurityOption1 };
var DriveParentsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveParentsDeleteSecurityOption2, _super);
    function DriveParentsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DriveParentsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DriveParentsDeleteSecurityOption2 };
var DriveParentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DriveParentsDeleteSecurity, _super);
    function DriveParentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsDeleteSecurityOption1)
    ], DriveParentsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsDeleteSecurityOption2)
    ], DriveParentsDeleteSecurity.prototype, "option2", void 0);
    return DriveParentsDeleteSecurity;
}(SpeakeasyBase));
export { DriveParentsDeleteSecurity };
var DriveParentsDeleteRequest = /** @class */ (function (_super) {
    __extends(DriveParentsDeleteRequest, _super);
    function DriveParentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsDeletePathParams)
    ], DriveParentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsDeleteQueryParams)
    ], DriveParentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsDeleteSecurity)
    ], DriveParentsDeleteRequest.prototype, "security", void 0);
    return DriveParentsDeleteRequest;
}(SpeakeasyBase));
export { DriveParentsDeleteRequest };
var DriveParentsDeleteResponse = /** @class */ (function (_super) {
    __extends(DriveParentsDeleteResponse, _super);
    function DriveParentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveParentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveParentsDeleteResponse.prototype, "statusCode", void 0);
    return DriveParentsDeleteResponse;
}(SpeakeasyBase));
export { DriveParentsDeleteResponse };
