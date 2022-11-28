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
var DriveFilesGetPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesGetPathParams, _super);
    function DriveFilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesGetPathParams.prototype, "fileId", void 0);
    return DriveFilesGetPathParams;
}(SpeakeasyBase));
export { DriveFilesGetPathParams };
export var DriveFilesGetProjectionEnum;
(function (DriveFilesGetProjectionEnum) {
    DriveFilesGetProjectionEnum["Basic"] = "BASIC";
    DriveFilesGetProjectionEnum["Full"] = "FULL";
})(DriveFilesGetProjectionEnum || (DriveFilesGetProjectionEnum = {}));
var DriveFilesGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesGetQueryParams, _super);
    function DriveFilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acknowledgeAbuse" }),
        __metadata("design:type", Boolean)
    ], DriveFilesGetQueryParams.prototype, "acknowledgeAbuse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=revisionId" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesGetQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesGetQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateViewedDate" }),
        __metadata("design:type", Boolean)
    ], DriveFilesGetQueryParams.prototype, "updateViewedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesGetQueryParams.prototype, "userIp", void 0);
    return DriveFilesGetQueryParams;
}(SpeakeasyBase));
export { DriveFilesGetQueryParams };
var DriveFilesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurityOption1, _super);
    function DriveFilesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesGetSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesGetSecurityOption1 };
var DriveFilesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurityOption2, _super);
    function DriveFilesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesGetSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesGetSecurityOption2 };
var DriveFilesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurityOption3, _super);
    function DriveFilesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesGetSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesGetSecurityOption3 };
var DriveFilesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurityOption4, _super);
    function DriveFilesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesGetSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesGetSecurityOption4 };
var DriveFilesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurityOption5, _super);
    function DriveFilesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesGetSecurityOption5;
}(SpeakeasyBase));
export { DriveFilesGetSecurityOption5 };
var DriveFilesGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurityOption6, _super);
    function DriveFilesGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveFilesGetSecurityOption6;
}(SpeakeasyBase));
export { DriveFilesGetSecurityOption6 };
var DriveFilesGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurityOption7, _super);
    function DriveFilesGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveFilesGetSecurityOption7;
}(SpeakeasyBase));
export { DriveFilesGetSecurityOption7 };
var DriveFilesGetSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesGetSecurity, _super);
    function DriveFilesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGetSecurityOption1)
    ], DriveFilesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGetSecurityOption2)
    ], DriveFilesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGetSecurityOption3)
    ], DriveFilesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGetSecurityOption4)
    ], DriveFilesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGetSecurityOption5)
    ], DriveFilesGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGetSecurityOption6)
    ], DriveFilesGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesGetSecurityOption7)
    ], DriveFilesGetSecurity.prototype, "option7", void 0);
    return DriveFilesGetSecurity;
}(SpeakeasyBase));
export { DriveFilesGetSecurity };
var DriveFilesGetRequest = /** @class */ (function (_super) {
    __extends(DriveFilesGetRequest, _super);
    function DriveFilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesGetPathParams)
    ], DriveFilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesGetQueryParams)
    ], DriveFilesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesGetSecurity)
    ], DriveFilesGetRequest.prototype, "security", void 0);
    return DriveFilesGetRequest;
}(SpeakeasyBase));
export { DriveFilesGetRequest };
var DriveFilesGetResponse = /** @class */ (function (_super) {
    __extends(DriveFilesGetResponse, _super);
    function DriveFilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesGetResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesGetResponse.prototype, "statusCode", void 0);
    return DriveFilesGetResponse;
}(SpeakeasyBase));
export { DriveFilesGetResponse };
