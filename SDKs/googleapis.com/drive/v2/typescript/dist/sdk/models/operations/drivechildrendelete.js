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
var DriveChildrenDeletePathParams = /** @class */ (function (_super) {
    __extends(DriveChildrenDeletePathParams, _super);
    function DriveChildrenDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childId" }),
        __metadata("design:type", String)
    ], DriveChildrenDeletePathParams.prototype, "childId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderId" }),
        __metadata("design:type", String)
    ], DriveChildrenDeletePathParams.prototype, "folderId", void 0);
    return DriveChildrenDeletePathParams;
}(SpeakeasyBase));
export { DriveChildrenDeletePathParams };
var DriveChildrenDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DriveChildrenDeleteQueryParams, _super);
    function DriveChildrenDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChildrenDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenDeleteQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChildrenDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChildrenDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChildrenDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChildrenDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChildrenDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChildrenDeleteQueryParams.prototype, "userIp", void 0);
    return DriveChildrenDeleteQueryParams;
}(SpeakeasyBase));
export { DriveChildrenDeleteQueryParams };
var DriveChildrenDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChildrenDeleteSecurityOption1, _super);
    function DriveChildrenDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChildrenDeleteSecurityOption1;
}(SpeakeasyBase));
export { DriveChildrenDeleteSecurityOption1 };
var DriveChildrenDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChildrenDeleteSecurityOption2, _super);
    function DriveChildrenDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChildrenDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChildrenDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChildrenDeleteSecurityOption2;
}(SpeakeasyBase));
export { DriveChildrenDeleteSecurityOption2 };
var DriveChildrenDeleteSecurity = /** @class */ (function (_super) {
    __extends(DriveChildrenDeleteSecurity, _super);
    function DriveChildrenDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenDeleteSecurityOption1)
    ], DriveChildrenDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChildrenDeleteSecurityOption2)
    ], DriveChildrenDeleteSecurity.prototype, "option2", void 0);
    return DriveChildrenDeleteSecurity;
}(SpeakeasyBase));
export { DriveChildrenDeleteSecurity };
var DriveChildrenDeleteRequest = /** @class */ (function (_super) {
    __extends(DriveChildrenDeleteRequest, _super);
    function DriveChildrenDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenDeletePathParams)
    ], DriveChildrenDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenDeleteQueryParams)
    ], DriveChildrenDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChildrenDeleteSecurity)
    ], DriveChildrenDeleteRequest.prototype, "security", void 0);
    return DriveChildrenDeleteRequest;
}(SpeakeasyBase));
export { DriveChildrenDeleteRequest };
var DriveChildrenDeleteResponse = /** @class */ (function (_super) {
    __extends(DriveChildrenDeleteResponse, _super);
    function DriveChildrenDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChildrenDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChildrenDeleteResponse.prototype, "statusCode", void 0);
    return DriveChildrenDeleteResponse;
}(SpeakeasyBase));
export { DriveChildrenDeleteResponse };
