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
var DriveChangesGetStartPageTokenQueryParams = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenQueryParams, _super);
    function DriveChangesGetStartPageTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=driveId" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "driveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAllDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "supportsAllDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsTeamDrives" }),
        __metadata("design:type", Boolean)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "supportsTeamDrives", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=teamDriveId" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "teamDriveId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenQueryParams.prototype, "userIp", void 0);
    return DriveChangesGetStartPageTokenQueryParams;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenQueryParams };
var DriveChangesGetStartPageTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption1, _super);
    function DriveChangesGetStartPageTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption1.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption1;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption1 };
var DriveChangesGetStartPageTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption2, _super);
    function DriveChangesGetStartPageTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption2.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption2;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption2 };
var DriveChangesGetStartPageTokenSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption3, _super);
    function DriveChangesGetStartPageTokenSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption3.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption3;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption3 };
var DriveChangesGetStartPageTokenSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption4, _super);
    function DriveChangesGetStartPageTokenSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption4.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption4;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption4 };
var DriveChangesGetStartPageTokenSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption5, _super);
    function DriveChangesGetStartPageTokenSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption5.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption5;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption5 };
var DriveChangesGetStartPageTokenSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption6, _super);
    function DriveChangesGetStartPageTokenSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption6.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption6;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption6 };
var DriveChangesGetStartPageTokenSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption7, _super);
    function DriveChangesGetStartPageTokenSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption7.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption7;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption7 };
var DriveChangesGetStartPageTokenSecurityOption8 = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurityOption8, _super);
    function DriveChangesGetStartPageTokenSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveChangesGetStartPageTokenSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveChangesGetStartPageTokenSecurityOption8.prototype, "oauth2c", void 0);
    return DriveChangesGetStartPageTokenSecurityOption8;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurityOption8 };
var DriveChangesGetStartPageTokenSecurity = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenSecurity, _super);
    function DriveChangesGetStartPageTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption1)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption2)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption3)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption4)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption5)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption6)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption7)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurityOption8)
    ], DriveChangesGetStartPageTokenSecurity.prototype, "option8", void 0);
    return DriveChangesGetStartPageTokenSecurity;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenSecurity };
var DriveChangesGetStartPageTokenRequest = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenRequest, _super);
    function DriveChangesGetStartPageTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesGetStartPageTokenQueryParams)
    ], DriveChangesGetStartPageTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveChangesGetStartPageTokenSecurity)
    ], DriveChangesGetStartPageTokenRequest.prototype, "security", void 0);
    return DriveChangesGetStartPageTokenRequest;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenRequest };
var DriveChangesGetStartPageTokenResponse = /** @class */ (function (_super) {
    __extends(DriveChangesGetStartPageTokenResponse, _super);
    function DriveChangesGetStartPageTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveChangesGetStartPageTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartPageToken)
    ], DriveChangesGetStartPageTokenResponse.prototype, "startPageToken", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveChangesGetStartPageTokenResponse.prototype, "statusCode", void 0);
    return DriveChangesGetStartPageTokenResponse;
}(SpeakeasyBase));
export { DriveChangesGetStartPageTokenResponse };
