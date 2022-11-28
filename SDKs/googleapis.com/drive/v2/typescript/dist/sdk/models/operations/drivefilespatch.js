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
var DriveFilesPatchPathParams = /** @class */ (function (_super) {
    __extends(DriveFilesPatchPathParams, _super);
    function DriveFilesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveFilesPatchPathParams.prototype, "fileId", void 0);
    return DriveFilesPatchPathParams;
}(SpeakeasyBase));
export { DriveFilesPatchPathParams };
export var DriveFilesPatchModifiedDateBehaviorEnum;
(function (DriveFilesPatchModifiedDateBehaviorEnum) {
    DriveFilesPatchModifiedDateBehaviorEnum["FromBody"] = "fromBody";
    DriveFilesPatchModifiedDateBehaviorEnum["FromBodyIfNeeded"] = "fromBodyIfNeeded";
    DriveFilesPatchModifiedDateBehaviorEnum["FromBodyOrNow"] = "fromBodyOrNow";
    DriveFilesPatchModifiedDateBehaviorEnum["NoChange"] = "noChange";
    DriveFilesPatchModifiedDateBehaviorEnum["Now"] = "now";
    DriveFilesPatchModifiedDateBehaviorEnum["NowIfNeeded"] = "nowIfNeeded";
})(DriveFilesPatchModifiedDateBehaviorEnum || (DriveFilesPatchModifiedDateBehaviorEnum = {}));
var DriveFilesPatchQueryParams = /** @class */ (function (_super) {
    __extends(DriveFilesPatchQueryParams, _super);
    function DriveFilesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=addParents" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "addParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convert" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "convert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enforceSingleParent" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "enforceSingleParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLabels" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "includeLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includePermissionsForView" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "includePermissionsForView", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modifiedDateBehavior" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "modifiedDateBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newRevision" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "newRevision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocr" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "ocr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ocrLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "ocrLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pinned" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "pinned", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeParents" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "removeParents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=setModifiedDate" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "setModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextLanguage" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "timedTextLanguage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timedTextTrackName" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "timedTextTrackName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateViewedDate" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "updateViewedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=useContentAsIndexableText" }),
        __metadata("design:type", Boolean)
    ], DriveFilesPatchQueryParams.prototype, "useContentAsIndexableText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveFilesPatchQueryParams.prototype, "userIp", void 0);
    return DriveFilesPatchQueryParams;
}(SpeakeasyBase));
export { DriveFilesPatchQueryParams };
var DriveFilesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveFilesPatchSecurityOption1, _super);
    function DriveFilesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DriveFilesPatchSecurityOption1;
}(SpeakeasyBase));
export { DriveFilesPatchSecurityOption1 };
var DriveFilesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveFilesPatchSecurityOption2, _super);
    function DriveFilesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DriveFilesPatchSecurityOption2;
}(SpeakeasyBase));
export { DriveFilesPatchSecurityOption2 };
var DriveFilesPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveFilesPatchSecurityOption3, _super);
    function DriveFilesPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesPatchSecurityOption3.prototype, "oauth2c", void 0);
    return DriveFilesPatchSecurityOption3;
}(SpeakeasyBase));
export { DriveFilesPatchSecurityOption3 };
var DriveFilesPatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveFilesPatchSecurityOption4, _super);
    function DriveFilesPatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesPatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesPatchSecurityOption4.prototype, "oauth2c", void 0);
    return DriveFilesPatchSecurityOption4;
}(SpeakeasyBase));
export { DriveFilesPatchSecurityOption4 };
var DriveFilesPatchSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveFilesPatchSecurityOption5, _super);
    function DriveFilesPatchSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesPatchSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesPatchSecurityOption5.prototype, "oauth2c", void 0);
    return DriveFilesPatchSecurityOption5;
}(SpeakeasyBase));
export { DriveFilesPatchSecurityOption5 };
var DriveFilesPatchSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveFilesPatchSecurityOption6, _super);
    function DriveFilesPatchSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveFilesPatchSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveFilesPatchSecurityOption6.prototype, "oauth2c", void 0);
    return DriveFilesPatchSecurityOption6;
}(SpeakeasyBase));
export { DriveFilesPatchSecurityOption6 };
var DriveFilesPatchSecurity = /** @class */ (function (_super) {
    __extends(DriveFilesPatchSecurity, _super);
    function DriveFilesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesPatchSecurityOption1)
    ], DriveFilesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesPatchSecurityOption2)
    ], DriveFilesPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesPatchSecurityOption3)
    ], DriveFilesPatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesPatchSecurityOption4)
    ], DriveFilesPatchSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesPatchSecurityOption5)
    ], DriveFilesPatchSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveFilesPatchSecurityOption6)
    ], DriveFilesPatchSecurity.prototype, "option6", void 0);
    return DriveFilesPatchSecurity;
}(SpeakeasyBase));
export { DriveFilesPatchSecurity };
var DriveFilesPatchRequest = /** @class */ (function (_super) {
    __extends(DriveFilesPatchRequest, _super);
    function DriveFilesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesPatchPathParams)
    ], DriveFilesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesPatchQueryParams)
    ], DriveFilesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FileInput)
    ], DriveFilesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveFilesPatchSecurity)
    ], DriveFilesPatchRequest.prototype, "security", void 0);
    return DriveFilesPatchRequest;
}(SpeakeasyBase));
export { DriveFilesPatchRequest };
var DriveFilesPatchResponse = /** @class */ (function (_super) {
    __extends(DriveFilesPatchResponse, _super);
    function DriveFilesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveFilesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], DriveFilesPatchResponse.prototype, "file", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveFilesPatchResponse.prototype, "statusCode", void 0);
    return DriveFilesPatchResponse;
}(SpeakeasyBase));
export { DriveFilesPatchResponse };
