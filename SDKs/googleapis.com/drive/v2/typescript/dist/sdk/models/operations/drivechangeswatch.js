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
var DriveChangesWatchQueryParams = /** @class */ (function (_super) {
    __extends(DriveChangesWatchQueryParams, _super);
    function DriveChangesWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=driveId" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeCorpusRemovals" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "includeCorpusRemovals", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDeleted" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "includeDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeItemsFromAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "includeItemsFromAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeSubscribed" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "includeSubscribed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeTeamDriveItems" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "includeTeamDriveItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DriveChangesWatchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=spaces" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "spaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startChangeId" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "startChangeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesWatchQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamDriveId" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "teamDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChangesWatchQueryParams.prototype, "userIp", void 0);
    return DriveChangesWatchQueryParams;
}(SpeakeasyBase));
export { DriveChangesWatchQueryParams };
var DriveChangesWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption1, _super);
    function DriveChangesWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption1;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption1 };
var DriveChangesWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption2, _super);
    function DriveChangesWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption2;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption2 };
var DriveChangesWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption3, _super);
    function DriveChangesWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption3;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption3 };
var DriveChangesWatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption4, _super);
    function DriveChangesWatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption4;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption4 };
var DriveChangesWatchSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption5, _super);
    function DriveChangesWatchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption5;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption5 };
var DriveChangesWatchSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption6, _super);
    function DriveChangesWatchSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption6;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption6 };
var DriveChangesWatchSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption7, _super);
    function DriveChangesWatchSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption7;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption7 };
var DriveChangesWatchSecurityOption8 = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurityOption8, _super);
    function DriveChangesWatchSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesWatchSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesWatchSecurityOption8.prototype, "oauth2c", void 0);
    return DriveChangesWatchSecurityOption8;
}(SpeakeasyBase));
export { DriveChangesWatchSecurityOption8 };
var DriveChangesWatchSecurity = /** @class */ (function (_super) {
    __extends(DriveChangesWatchSecurity, _super);
    function DriveChangesWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption1)
    ], DriveChangesWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption2)
    ], DriveChangesWatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption3)
    ], DriveChangesWatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption4)
    ], DriveChangesWatchSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption5)
    ], DriveChangesWatchSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption6)
    ], DriveChangesWatchSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption7)
    ], DriveChangesWatchSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesWatchSecurityOption8)
    ], DriveChangesWatchSecurity.prototype, "option8", void 0);
    return DriveChangesWatchSecurity;
}(SpeakeasyBase));
export { DriveChangesWatchSecurity };
var DriveChangesWatchRequest = /** @class */ (function (_super) {
    __extends(DriveChangesWatchRequest, _super);
    function DriveChangesWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesWatchQueryParams)
    ], DriveChangesWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], DriveChangesWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesWatchSecurity)
    ], DriveChangesWatchRequest.prototype, "security", void 0);
    return DriveChangesWatchRequest;
}(SpeakeasyBase));
export { DriveChangesWatchRequest };
var DriveChangesWatchResponse = /** @class */ (function (_super) {
    __extends(DriveChangesWatchResponse, _super);
    function DriveChangesWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], DriveChangesWatchResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChangesWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChangesWatchResponse.prototype, "statusCode", void 0);
    return DriveChangesWatchResponse;
}(SpeakeasyBase));
export { DriveChangesWatchResponse };
