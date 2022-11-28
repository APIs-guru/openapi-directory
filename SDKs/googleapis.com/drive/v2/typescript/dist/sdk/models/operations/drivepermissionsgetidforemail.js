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
var DrivePermissionsGetIdForEmailPathParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailPathParams, _super);
    function DrivePermissionsGetIdForEmailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=email" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailPathParams.prototype, "email", void 0);
    return DrivePermissionsGetIdForEmailPathParams;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailPathParams };
var DrivePermissionsGetIdForEmailQueryParams = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailQueryParams, _super);
    function DrivePermissionsGetIdForEmailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePermissionsGetIdForEmailQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailQueryParams.prototype, "userIp", void 0);
    return DrivePermissionsGetIdForEmailQueryParams;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailQueryParams };
var DrivePermissionsGetIdForEmailSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption1, _super);
    function DrivePermissionsGetIdForEmailSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption1;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption1 };
var DrivePermissionsGetIdForEmailSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption2, _super);
    function DrivePermissionsGetIdForEmailSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption2;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption2 };
var DrivePermissionsGetIdForEmailSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption3, _super);
    function DrivePermissionsGetIdForEmailSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption3;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption3 };
var DrivePermissionsGetIdForEmailSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption4, _super);
    function DrivePermissionsGetIdForEmailSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption4;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption4 };
var DrivePermissionsGetIdForEmailSecurityOption5 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption5, _super);
    function DrivePermissionsGetIdForEmailSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption5.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption5;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption5 };
var DrivePermissionsGetIdForEmailSecurityOption6 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption6, _super);
    function DrivePermissionsGetIdForEmailSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption6.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption6;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption6 };
var DrivePermissionsGetIdForEmailSecurityOption7 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption7, _super);
    function DrivePermissionsGetIdForEmailSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption7.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption7;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption7 };
var DrivePermissionsGetIdForEmailSecurityOption8 = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurityOption8, _super);
    function DrivePermissionsGetIdForEmailSecurityOption8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePermissionsGetIdForEmailSecurityOption8.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePermissionsGetIdForEmailSecurityOption8.prototype, "oauth2c", void 0);
    return DrivePermissionsGetIdForEmailSecurityOption8;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurityOption8 };
var DrivePermissionsGetIdForEmailSecurity = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailSecurity, _super);
    function DrivePermissionsGetIdForEmailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption1)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption2)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption3)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption4)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption5)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption6)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption7)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option7", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurityOption8)
    ], DrivePermissionsGetIdForEmailSecurity.prototype, "option8", void 0);
    return DrivePermissionsGetIdForEmailSecurity;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailSecurity };
var DrivePermissionsGetIdForEmailRequest = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailRequest, _super);
    function DrivePermissionsGetIdForEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsGetIdForEmailPathParams)
    ], DrivePermissionsGetIdForEmailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsGetIdForEmailQueryParams)
    ], DrivePermissionsGetIdForEmailRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePermissionsGetIdForEmailSecurity)
    ], DrivePermissionsGetIdForEmailRequest.prototype, "security", void 0);
    return DrivePermissionsGetIdForEmailRequest;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailRequest };
var DrivePermissionsGetIdForEmailResponse = /** @class */ (function (_super) {
    __extends(DrivePermissionsGetIdForEmailResponse, _super);
    function DrivePermissionsGetIdForEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePermissionsGetIdForEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PermissionId)
    ], DrivePermissionsGetIdForEmailResponse.prototype, "permissionId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePermissionsGetIdForEmailResponse.prototype, "statusCode", void 0);
    return DrivePermissionsGetIdForEmailResponse;
}(SpeakeasyBase));
export { DrivePermissionsGetIdForEmailResponse };
