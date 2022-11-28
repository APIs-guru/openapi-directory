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
var DrivePropertiesListPathParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesListPathParams, _super);
    function DrivePropertiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], DrivePropertiesListPathParams.prototype, "fileId", void 0);
    return DrivePropertiesListPathParams;
}(SpeakeasyBase));
export { DrivePropertiesListPathParams };
var DrivePropertiesListQueryParams = /** @class */ (function (_super) {
    __extends(DrivePropertiesListQueryParams, _super);
    function DrivePropertiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DrivePropertiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DrivePropertiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DrivePropertiesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DrivePropertiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DrivePropertiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DrivePropertiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DrivePropertiesListQueryParams.prototype, "userIp", void 0);
    return DrivePropertiesListQueryParams;
}(SpeakeasyBase));
export { DrivePropertiesListQueryParams };
var DrivePropertiesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurityOption1, _super);
    function DrivePropertiesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesListSecurityOption1.prototype, "oauth2c", void 0);
    return DrivePropertiesListSecurityOption1;
}(SpeakeasyBase));
export { DrivePropertiesListSecurityOption1 };
var DrivePropertiesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurityOption2, _super);
    function DrivePropertiesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesListSecurityOption2.prototype, "oauth2c", void 0);
    return DrivePropertiesListSecurityOption2;
}(SpeakeasyBase));
export { DrivePropertiesListSecurityOption2 };
var DrivePropertiesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurityOption3, _super);
    function DrivePropertiesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesListSecurityOption3.prototype, "oauth2c", void 0);
    return DrivePropertiesListSecurityOption3;
}(SpeakeasyBase));
export { DrivePropertiesListSecurityOption3 };
var DrivePropertiesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurityOption4, _super);
    function DrivePropertiesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesListSecurityOption4.prototype, "oauth2c", void 0);
    return DrivePropertiesListSecurityOption4;
}(SpeakeasyBase));
export { DrivePropertiesListSecurityOption4 };
var DrivePropertiesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurityOption5, _super);
    function DrivePropertiesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesListSecurityOption5.prototype, "oauth2c", void 0);
    return DrivePropertiesListSecurityOption5;
}(SpeakeasyBase));
export { DrivePropertiesListSecurityOption5 };
var DrivePropertiesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurityOption6, _super);
    function DrivePropertiesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesListSecurityOption6.prototype, "oauth2c", void 0);
    return DrivePropertiesListSecurityOption6;
}(SpeakeasyBase));
export { DrivePropertiesListSecurityOption6 };
var DrivePropertiesListSecurityOption7 = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurityOption7, _super);
    function DrivePropertiesListSecurityOption7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DrivePropertiesListSecurityOption7.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DrivePropertiesListSecurityOption7.prototype, "oauth2c", void 0);
    return DrivePropertiesListSecurityOption7;
}(SpeakeasyBase));
export { DrivePropertiesListSecurityOption7 };
var DrivePropertiesListSecurity = /** @class */ (function (_super) {
    __extends(DrivePropertiesListSecurity, _super);
    function DrivePropertiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesListSecurityOption1)
    ], DrivePropertiesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesListSecurityOption2)
    ], DrivePropertiesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesListSecurityOption3)
    ], DrivePropertiesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesListSecurityOption4)
    ], DrivePropertiesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesListSecurityOption5)
    ], DrivePropertiesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesListSecurityOption6)
    ], DrivePropertiesListSecurity.prototype, "option6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DrivePropertiesListSecurityOption7)
    ], DrivePropertiesListSecurity.prototype, "option7", void 0);
    return DrivePropertiesListSecurity;
}(SpeakeasyBase));
export { DrivePropertiesListSecurity };
var DrivePropertiesListRequest = /** @class */ (function (_super) {
    __extends(DrivePropertiesListRequest, _super);
    function DrivePropertiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesListPathParams)
    ], DrivePropertiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesListQueryParams)
    ], DrivePropertiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DrivePropertiesListSecurity)
    ], DrivePropertiesListRequest.prototype, "security", void 0);
    return DrivePropertiesListRequest;
}(SpeakeasyBase));
export { DrivePropertiesListRequest };
var DrivePropertiesListResponse = /** @class */ (function (_super) {
    __extends(DrivePropertiesListResponse, _super);
    function DrivePropertiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DrivePropertiesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PropertyList)
    ], DrivePropertiesListResponse.prototype, "propertyList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DrivePropertiesListResponse.prototype, "statusCode", void 0);
    return DrivePropertiesListResponse;
}(SpeakeasyBase));
export { DrivePropertiesListResponse };
