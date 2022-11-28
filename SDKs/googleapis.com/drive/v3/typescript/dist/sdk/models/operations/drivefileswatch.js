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
var DriveFilesWatchPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesWatchPathParams, _super);
    function DriveFilesWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesWatchPathParams.prototype, "fileId", void 0);
    return DriveFilesWatchPathParams;
}(SpeakeasyBase));
export { DriveFilesWatchPathParams };
var DriveFilesWatchQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesWatchQueryParams, _super);
    function DriveFilesWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=acknowledgeAbuse" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "acknowledgeAbuse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesWatchQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesWatchQueryParams.prototype, "userIp", void 0);
    return DriveFilesWatchQueryParams;
}(SpeakeasyBase));
export { DriveFilesWatchQueryParams };
var DriveFilesWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption1, _super);
    function DriveFilesWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesWatchSecurityOption1 };
var DriveFilesWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption2, _super);
    function DriveFilesWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesWatchSecurityOption2 };
var DriveFilesWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption3, _super);
    function DriveFilesWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesWatchSecurityOption3 };
var DriveFilesWatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption4, _super);
    function DriveFilesWatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesWatchSecurityOption4 };
var DriveFilesWatchSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption5, _super);
    function DriveFilesWatchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption5;
}(SpeakeasyBase));
export { DriveFilesWatchSecurityOption5 };
var DriveFilesWatchSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption6, _super);
    function DriveFilesWatchSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption6.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption6;
}(SpeakeasyBase));
export { DriveFilesWatchSecurityOption6 };
var DriveFilesWatchSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurityOption7, _super);
    function DriveFilesWatchSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesWatchSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesWatchSecurityOption7.prototype, "oauth2c", void 0);
    return DriveFilesWatchSecurityOption7;
}(SpeakeasyBase));
export { DriveFilesWatchSecurityOption7 };
var DriveFilesWatchSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesWatchSecurity, _super);
    function DriveFilesWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption1)
    ], DriveFilesWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption2)
    ], DriveFilesWatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption3)
    ], DriveFilesWatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption4)
    ], DriveFilesWatchSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption5)
    ], DriveFilesWatchSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption6)
    ], DriveFilesWatchSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesWatchSecurityOption7)
    ], DriveFilesWatchSecurity.prototype, "option7", void 0);
    return DriveFilesWatchSecurity;
}(SpeakeasyBase));
export { DriveFilesWatchSecurity };
var DriveFilesWatchRequest = /** @class */ (function (_super) {
    __extends(DriveFilesWatchRequest, _super);
    function DriveFilesWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesWatchPathParams)
    ], DriveFilesWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesWatchQueryParams)
    ], DriveFilesWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], DriveFilesWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesWatchSecurity)
    ], DriveFilesWatchRequest.prototype, "security", void 0);
    return DriveFilesWatchRequest;
}(SpeakeasyBase));
export { DriveFilesWatchRequest };
var DriveFilesWatchResponse = /** @class */ (function (_super) {
    __extends(DriveFilesWatchResponse, _super);
    function DriveFilesWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], DriveFilesWatchResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesWatchResponse.prototype, "statusCode", void 0);
    return DriveFilesWatchResponse;
}(SpeakeasyBase));
export { DriveFilesWatchResponse };
