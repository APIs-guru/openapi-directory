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
var CalendarCalendarsGetPathParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarsGetPathParams, _super);
    function CalendarCalendarsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarCalendarsGetPathParams.prototype, "calendarId", void 0);
    return CalendarCalendarsGetPathParams;
}(SpeakeasyBase));
export { CalendarCalendarsGetPathParams };
var CalendarCalendarsGetQueryParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarsGetQueryParams, _super);
    function CalendarCalendarsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarCalendarsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarCalendarsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarCalendarsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarCalendarsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarCalendarsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarCalendarsGetQueryParams.prototype, "userIp", void 0);
    return CalendarCalendarsGetQueryParams;
}(SpeakeasyBase));
export { CalendarCalendarsGetQueryParams };
var CalendarCalendarsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarCalendarsGetSecurityOption1, _super);
    function CalendarCalendarsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarCalendarsGetSecurityOption1;
}(SpeakeasyBase));
export { CalendarCalendarsGetSecurityOption1 };
var CalendarCalendarsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarCalendarsGetSecurityOption2, _super);
    function CalendarCalendarsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarCalendarsGetSecurityOption2;
}(SpeakeasyBase));
export { CalendarCalendarsGetSecurityOption2 };
var CalendarCalendarsGetSecurity = /** @class */ (function (_super) {
    __extends(CalendarCalendarsGetSecurity, _super);
    function CalendarCalendarsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarsGetSecurityOption1)
    ], CalendarCalendarsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarsGetSecurityOption2)
    ], CalendarCalendarsGetSecurity.prototype, "option2", void 0);
    return CalendarCalendarsGetSecurity;
}(SpeakeasyBase));
export { CalendarCalendarsGetSecurity };
var CalendarCalendarsGetRequest = /** @class */ (function (_super) {
    __extends(CalendarCalendarsGetRequest, _super);
    function CalendarCalendarsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarsGetPathParams)
    ], CalendarCalendarsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarsGetQueryParams)
    ], CalendarCalendarsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarsGetSecurity)
    ], CalendarCalendarsGetRequest.prototype, "security", void 0);
    return CalendarCalendarsGetRequest;
}(SpeakeasyBase));
export { CalendarCalendarsGetRequest };
var CalendarCalendarsGetResponse = /** @class */ (function (_super) {
    __extends(CalendarCalendarsGetResponse, _super);
    function CalendarCalendarsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Calendar)
    ], CalendarCalendarsGetResponse.prototype, "calendar", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarCalendarsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarCalendarsGetResponse.prototype, "statusCode", void 0);
    return CalendarCalendarsGetResponse;
}(SpeakeasyBase));
export { CalendarCalendarsGetResponse };
