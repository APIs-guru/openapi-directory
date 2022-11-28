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
var DriveChangesListQueryParams = /** @class */ (function (_super) {
    __extends(DriveChangesListQueryParams, _super);
    function DriveChangesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=driveId" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeCorpusRemovals" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "includeCorpusRemovals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemsFromAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "includeItemsFromAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeRemoved" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "includeRemoved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTeamDriveItems" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "includeTeamDriveItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DriveChangesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=restrictToMyDrive" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "restrictToMyDrive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spaces" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "spaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesListQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamDriveId" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "teamDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChangesListQueryParams.prototype, "userIp", void 0);
    return DriveChangesListQueryParams;
}(SpeakeasyBase));
export { DriveChangesListQueryParams };
var DriveChangesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurityOption1, _super);
    function DriveChangesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesListSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChangesListSecurityOption1;
}(SpeakeasyBase));
export { DriveChangesListSecurityOption1 };
var DriveChangesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurityOption2, _super);
    function DriveChangesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesListSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChangesListSecurityOption2;
}(SpeakeasyBase));
export { DriveChangesListSecurityOption2 };
var DriveChangesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurityOption3, _super);
    function DriveChangesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesListSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChangesListSecurityOption3;
}(SpeakeasyBase));
export { DriveChangesListSecurityOption3 };
var DriveChangesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurityOption4, _super);
    function DriveChangesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesListSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChangesListSecurityOption4;
}(SpeakeasyBase));
export { DriveChangesListSecurityOption4 };
var DriveChangesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurityOption5, _super);
    function DriveChangesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesListSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChangesListSecurityOption5;
}(SpeakeasyBase));
export { DriveChangesListSecurityOption5 };
var DriveChangesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurityOption6, _super);
    function DriveChangesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesListSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChangesListSecurityOption6;
}(SpeakeasyBase));
export { DriveChangesListSecurityOption6 };
var DriveChangesListSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurityOption7, _super);
    function DriveChangesListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesListSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChangesListSecurityOption7;
}(SpeakeasyBase));
export { DriveChangesListSecurityOption7 };
var DriveChangesListSecurity = /** @class */ (function (_super) {
    __extends(DriveChangesListSecurity, _super);
    function DriveChangesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesListSecurityOption1)
    ], DriveChangesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesListSecurityOption2)
    ], DriveChangesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesListSecurityOption3)
    ], DriveChangesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesListSecurityOption4)
    ], DriveChangesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesListSecurityOption5)
    ], DriveChangesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesListSecurityOption6)
    ], DriveChangesListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesListSecurityOption7)
    ], DriveChangesListSecurity.prototype, "option7", void 0);
    return DriveChangesListSecurity;
}(SpeakeasyBase));
export { DriveChangesListSecurity };
var DriveChangesListRequest = /** @class */ (function (_super) {
    __extends(DriveChangesListRequest, _super);
    function DriveChangesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesListQueryParams)
    ], DriveChangesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesListSecurity)
    ], DriveChangesListRequest.prototype, "security", void 0);
    return DriveChangesListRequest;
}(SpeakeasyBase));
export { DriveChangesListRequest };
var DriveChangesListResponse = /** @class */ (function (_super) {
    __extends(DriveChangesListResponse, _super);
    function DriveChangesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChangeList)
    ], DriveChangesListResponse.prototype, "changeList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChangesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChangesListResponse.prototype, "statusCode", void 0);
    return DriveChangesListResponse;
}(SpeakeasyBase));
export { DriveChangesListResponse };
