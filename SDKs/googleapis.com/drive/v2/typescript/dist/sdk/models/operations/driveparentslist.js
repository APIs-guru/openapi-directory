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
var DriveParentsListPathParams = /** @class */ (function (_super) {
    __extends(DriveParentsListPathParams, _super);
    function DriveParentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DriveParentsListPathParams.prototype, "fileId", void 0);
    return DriveParentsListPathParams;
}(SpeakeasyBase));
export { DriveParentsListPathParams };
var DriveParentsListQueryParams = /** @class */ (function (_super) {
    __extends(DriveParentsListQueryParams, _super);
    function DriveParentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DriveParentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DriveParentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DriveParentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DriveParentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DriveParentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DriveParentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DriveParentsListQueryParams.prototype, "userIp", void 0);
    return DriveParentsListQueryParams;
}(SpeakeasyBase));
export { DriveParentsListQueryParams };
var DriveParentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurityOption1, _super);
    function DriveParentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsListSecurityOption1.prototype, "oauth2c", void 0);
    return DriveParentsListSecurityOption1;
}(SpeakeasyBase));
export { DriveParentsListSecurityOption1 };
var DriveParentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurityOption2, _super);
    function DriveParentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsListSecurityOption2.prototype, "oauth2c", void 0);
    return DriveParentsListSecurityOption2;
}(SpeakeasyBase));
export { DriveParentsListSecurityOption2 };
var DriveParentsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurityOption3, _super);
    function DriveParentsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsListSecurityOption3.prototype, "oauth2c", void 0);
    return DriveParentsListSecurityOption3;
}(SpeakeasyBase));
export { DriveParentsListSecurityOption3 };
var DriveParentsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurityOption4, _super);
    function DriveParentsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsListSecurityOption4.prototype, "oauth2c", void 0);
    return DriveParentsListSecurityOption4;
}(SpeakeasyBase));
export { DriveParentsListSecurityOption4 };
var DriveParentsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurityOption5, _super);
    function DriveParentsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsListSecurityOption5.prototype, "oauth2c", void 0);
    return DriveParentsListSecurityOption5;
}(SpeakeasyBase));
export { DriveParentsListSecurityOption5 };
var DriveParentsListSecurityOption6 = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurityOption6, _super);
    function DriveParentsListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsListSecurityOption6.prototype, "oauth2c", void 0);
    return DriveParentsListSecurityOption6;
}(SpeakeasyBase));
export { DriveParentsListSecurityOption6 };
var DriveParentsListSecurityOption7 = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurityOption7, _super);
    function DriveParentsListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DriveParentsListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DriveParentsListSecurityOption7.prototype, "oauth2c", void 0);
    return DriveParentsListSecurityOption7;
}(SpeakeasyBase));
export { DriveParentsListSecurityOption7 };
var DriveParentsListSecurity = /** @class */ (function (_super) {
    __extends(DriveParentsListSecurity, _super);
    function DriveParentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsListSecurityOption1)
    ], DriveParentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsListSecurityOption2)
    ], DriveParentsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsListSecurityOption3)
    ], DriveParentsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsListSecurityOption4)
    ], DriveParentsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsListSecurityOption5)
    ], DriveParentsListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsListSecurityOption6)
    ], DriveParentsListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DriveParentsListSecurityOption7)
    ], DriveParentsListSecurity.prototype, "option7", void 0);
    return DriveParentsListSecurity;
}(SpeakeasyBase));
export { DriveParentsListSecurity };
var DriveParentsListRequest = /** @class */ (function (_super) {
    __extends(DriveParentsListRequest, _super);
    function DriveParentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsListPathParams)
    ], DriveParentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsListQueryParams)
    ], DriveParentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DriveParentsListSecurity)
    ], DriveParentsListRequest.prototype, "security", void 0);
    return DriveParentsListRequest;
}(SpeakeasyBase));
export { DriveParentsListRequest };
var DriveParentsListResponse = /** @class */ (function (_super) {
    __extends(DriveParentsListResponse, _super);
    function DriveParentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DriveParentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ParentList)
    ], DriveParentsListResponse.prototype, "parentList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DriveParentsListResponse.prototype, "statusCode", void 0);
    return DriveParentsListResponse;
}(SpeakeasyBase));
export { DriveParentsListResponse };
