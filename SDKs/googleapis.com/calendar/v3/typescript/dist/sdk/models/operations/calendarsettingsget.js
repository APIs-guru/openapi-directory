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
var CalendarSettingsGetPathParams = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetPathParams, _super);
    function CalendarSettingsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=setting" }),
        __metadata("design:type", String)
    ], CalendarSettingsGetPathParams.prototype, "setting", void 0);
    return CalendarSettingsGetPathParams;
}(SpeakeasyBase));
export { CalendarSettingsGetPathParams };
var CalendarSettingsGetQueryParams = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetQueryParams, _super);
    function CalendarSettingsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarSettingsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarSettingsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarSettingsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarSettingsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarSettingsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarSettingsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarSettingsGetQueryParams.prototype, "userIp", void 0);
    return CalendarSettingsGetQueryParams;
}(SpeakeasyBase));
export { CalendarSettingsGetQueryParams };
var CalendarSettingsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetSecurityOption1, _super);
    function CalendarSettingsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarSettingsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarSettingsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarSettingsGetSecurityOption1;
}(SpeakeasyBase));
export { CalendarSettingsGetSecurityOption1 };
var CalendarSettingsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetSecurityOption2, _super);
    function CalendarSettingsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarSettingsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarSettingsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarSettingsGetSecurityOption2;
}(SpeakeasyBase));
export { CalendarSettingsGetSecurityOption2 };
var CalendarSettingsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetSecurityOption3, _super);
    function CalendarSettingsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarSettingsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarSettingsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarSettingsGetSecurityOption3;
}(SpeakeasyBase));
export { CalendarSettingsGetSecurityOption3 };
var CalendarSettingsGetSecurity = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetSecurity, _super);
    function CalendarSettingsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarSettingsGetSecurityOption1)
    ], CalendarSettingsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarSettingsGetSecurityOption2)
    ], CalendarSettingsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarSettingsGetSecurityOption3)
    ], CalendarSettingsGetSecurity.prototype, "option3", void 0);
    return CalendarSettingsGetSecurity;
}(SpeakeasyBase));
export { CalendarSettingsGetSecurity };
var CalendarSettingsGetRequest = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetRequest, _super);
    function CalendarSettingsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarSettingsGetPathParams)
    ], CalendarSettingsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarSettingsGetQueryParams)
    ], CalendarSettingsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarSettingsGetSecurity)
    ], CalendarSettingsGetRequest.prototype, "security", void 0);
    return CalendarSettingsGetRequest;
}(SpeakeasyBase));
export { CalendarSettingsGetRequest };
var CalendarSettingsGetResponse = /** @class */ (function (_super) {
    __extends(CalendarSettingsGetResponse, _super);
    function CalendarSettingsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarSettingsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Setting)
    ], CalendarSettingsGetResponse.prototype, "setting", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarSettingsGetResponse.prototype, "statusCode", void 0);
    return CalendarSettingsGetResponse;
}(SpeakeasyBase));
export { CalendarSettingsGetResponse };
