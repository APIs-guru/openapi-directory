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
export var DriveFilesListCorpusEnum;
(function (DriveFilesListCorpusEnum) {
    DriveFilesListCorpusEnum["Domain"] = "domain";
    DriveFilesListCorpusEnum["User"] = "user";
})(DriveFilesListCorpusEnum || (DriveFilesListCorpusEnum = {}));
var DriveFilesListQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesListQueryParams, _super);
    function DriveFilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=corpora" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "corpora", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=corpus" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "corpus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=driveId" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemsFromAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesListQueryParams.prototype, "includeItemsFromAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTeamDriveItems" }),
        __metadata("design:type", Boolean)
    ], DriveFilesListQueryParams.prototype, "includeTeamDriveItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DriveFilesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spaces" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "spaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesListQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesListQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamDriveId" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "teamDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesListQueryParams.prototype, "userIp", void 0);
    return DriveFilesListQueryParams;
}(SpeakeasyBase));
export { DriveFilesListQueryParams };
var DriveFilesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurityOption1, _super);
    function DriveFilesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesListSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesListSecurityOption1 };
var DriveFilesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurityOption2, _super);
    function DriveFilesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesListSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesListSecurityOption2 };
var DriveFilesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurityOption3, _super);
    function DriveFilesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesListSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesListSecurityOption3 };
var DriveFilesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurityOption4, _super);
    function DriveFilesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesListSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesListSecurityOption4 };
var DriveFilesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurityOption5, _super);
    function DriveFilesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesListSecurityOption5;
}(SpeakeasyBase));
export { DriveFilesListSecurityOption5 };
var DriveFilesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurityOption6, _super);
    function DriveFilesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListSecurityOption6.prototype, "oauth2c", void 0);
    return DriveFilesListSecurityOption6;
}(SpeakeasyBase));
export { DriveFilesListSecurityOption6 };
var DriveFilesListSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurityOption7, _super);
    function DriveFilesListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesListSecurityOption7.prototype, "oauth2c", void 0);
    return DriveFilesListSecurityOption7;
}(SpeakeasyBase));
export { DriveFilesListSecurityOption7 };
var DriveFilesListSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesListSecurity, _super);
    function DriveFilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListSecurityOption1)
    ], DriveFilesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListSecurityOption2)
    ], DriveFilesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListSecurityOption3)
    ], DriveFilesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListSecurityOption4)
    ], DriveFilesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListSecurityOption5)
    ], DriveFilesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListSecurityOption6)
    ], DriveFilesListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesListSecurityOption7)
    ], DriveFilesListSecurity.prototype, "option7", void 0);
    return DriveFilesListSecurity;
}(SpeakeasyBase));
export { DriveFilesListSecurity };
var DriveFilesListRequest = /** @class */ (function (_super) {
    __extends(DriveFilesListRequest, _super);
    function DriveFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesListQueryParams)
    ], DriveFilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesListSecurity)
    ], DriveFilesListRequest.prototype, "security", void 0);
    return DriveFilesListRequest;
}(SpeakeasyBase));
export { DriveFilesListRequest };
var DriveFilesListResponse = /** @class */ (function (_super) {
    __extends(DriveFilesListResponse, _super);
    function DriveFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FileList)
    ], DriveFilesListResponse.prototype, "fileList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesListResponse.prototype, "statusCode", void 0);
    return DriveFilesListResponse;
}(SpeakeasyBase));
export { DriveFilesListResponse };
