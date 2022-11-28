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
var DriveChangesGetPathParams = /** @class */ (function (_super) {
    __extends(DriveChangesGetPathParams, _super);
    function DriveChangesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeId" }),
        __metadata("design:type", String)
    ], DriveChangesGetPathParams.prototype, "changeId", void 0);
    return DriveChangesGetPathParams;
}(SpeakeasyBase));
export { DriveChangesGetPathParams };
var DriveChangesGetQueryParams = /** @class */ (function (_super) {
    __extends(DriveChangesGetQueryParams, _super);
    function DriveChangesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=driveId" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChangesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesGetQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesGetQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamDriveId" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "teamDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChangesGetQueryParams.prototype, "userIp", void 0);
    return DriveChangesGetQueryParams;
}(SpeakeasyBase));
export { DriveChangesGetQueryParams };
var DriveChangesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption1, _super);
    function DriveChangesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption1;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption1 };
var DriveChangesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption2, _super);
    function DriveChangesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption2;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption2 };
var DriveChangesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption3, _super);
    function DriveChangesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption3;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption3 };
var DriveChangesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption4, _super);
    function DriveChangesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption4;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption4 };
var DriveChangesGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption5, _super);
    function DriveChangesGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption5;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption5 };
var DriveChangesGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption6, _super);
    function DriveChangesGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption6;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption6 };
var DriveChangesGetSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption7, _super);
    function DriveChangesGetSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption7;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption7 };
var DriveChangesGetSecurityOption8 = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurityOption8, _super);
    function DriveChangesGetSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetSecurityOption8.prototype, "oauth2c", void 0);
    return DriveChangesGetSecurityOption8;
}(SpeakeasyBase));
export { DriveChangesGetSecurityOption8 };
var DriveChangesGetSecurity = /** @class */ (function (_super) {
    __extends(DriveChangesGetSecurity, _super);
    function DriveChangesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption1)
    ], DriveChangesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption2)
    ], DriveChangesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption3)
    ], DriveChangesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption4)
    ], DriveChangesGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption5)
    ], DriveChangesGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption6)
    ], DriveChangesGetSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption7)
    ], DriveChangesGetSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetSecurityOption8)
    ], DriveChangesGetSecurity.prototype, "option8", void 0);
    return DriveChangesGetSecurity;
}(SpeakeasyBase));
export { DriveChangesGetSecurity };
var DriveChangesGetRequest = /** @class */ (function (_super) {
    __extends(DriveChangesGetRequest, _super);
    function DriveChangesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesGetPathParams)
    ], DriveChangesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesGetQueryParams)
    ], DriveChangesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesGetSecurity)
    ], DriveChangesGetRequest.prototype, "security", void 0);
    return DriveChangesGetRequest;
}(SpeakeasyBase));
export { DriveChangesGetRequest };
var DriveChangesGetResponse = /** @class */ (function (_super) {
    __extends(DriveChangesGetResponse, _super);
    function DriveChangesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Change)
    ], DriveChangesGetResponse.prototype, "change", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChangesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChangesGetResponse.prototype, "statusCode", void 0);
    return DriveChangesGetResponse;
}(SpeakeasyBase));
export { DriveChangesGetResponse };
