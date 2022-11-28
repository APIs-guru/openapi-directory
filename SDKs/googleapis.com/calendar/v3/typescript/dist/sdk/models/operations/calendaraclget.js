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
var CalendarAclGetPathParams = /** @class */ (function (_super) {
    __extends(CalendarAclGetPathParams, _super);
    function CalendarAclGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarAclGetPathParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], CalendarAclGetPathParams.prototype, "ruleId", void 0);
    return CalendarAclGetPathParams;
}(SpeakeasyBase));
export { CalendarAclGetPathParams };
var CalendarAclGetQueryParams = /** @class */ (function (_super) {
    __extends(CalendarAclGetQueryParams, _super);
    function CalendarAclGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarAclGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarAclGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarAclGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarAclGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarAclGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarAclGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarAclGetQueryParams.prototype, "userIp", void 0);
    return CalendarAclGetQueryParams;
}(SpeakeasyBase));
export { CalendarAclGetQueryParams };
var CalendarAclGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarAclGetSecurityOption1, _super);
    function CalendarAclGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarAclGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarAclGetSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarAclGetSecurityOption1;
}(SpeakeasyBase));
export { CalendarAclGetSecurityOption1 };
var CalendarAclGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarAclGetSecurityOption2, _super);
    function CalendarAclGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarAclGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarAclGetSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarAclGetSecurityOption2;
}(SpeakeasyBase));
export { CalendarAclGetSecurityOption2 };
var CalendarAclGetSecurity = /** @class */ (function (_super) {
    __extends(CalendarAclGetSecurity, _super);
    function CalendarAclGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarAclGetSecurityOption1)
    ], CalendarAclGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarAclGetSecurityOption2)
    ], CalendarAclGetSecurity.prototype, "option2", void 0);
    return CalendarAclGetSecurity;
}(SpeakeasyBase));
export { CalendarAclGetSecurity };
var CalendarAclGetRequest = /** @class */ (function (_super) {
    __extends(CalendarAclGetRequest, _super);
    function CalendarAclGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarAclGetPathParams)
    ], CalendarAclGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarAclGetQueryParams)
    ], CalendarAclGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarAclGetSecurity)
    ], CalendarAclGetRequest.prototype, "security", void 0);
    return CalendarAclGetRequest;
}(SpeakeasyBase));
export { CalendarAclGetRequest };
var CalendarAclGetResponse = /** @class */ (function (_super) {
    __extends(CalendarAclGetResponse, _super);
    function CalendarAclGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AclRule)
    ], CalendarAclGetResponse.prototype, "aclRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarAclGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarAclGetResponse.prototype, "statusCode", void 0);
    return CalendarAclGetResponse;
}(SpeakeasyBase));
export { CalendarAclGetResponse };
