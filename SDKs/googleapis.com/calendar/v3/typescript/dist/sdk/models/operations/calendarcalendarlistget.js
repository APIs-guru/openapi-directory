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
var CalendarCalendarListGetPathParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarListGetPathParams, _super);
    function CalendarCalendarListGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarCalendarListGetPathParams.prototype, "calendarId", void 0);
    return CalendarCalendarListGetPathParams;
}(SpeakeasyBase));
export { CalendarCalendarListGetPathParams };
var CalendarCalendarListGetQueryParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarListGetQueryParams, _super);
    function CalendarCalendarListGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarCalendarListGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarCalendarListGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarCalendarListGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarCalendarListGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarCalendarListGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarCalendarListGetQueryParams.prototype, "userIp", void 0);
    return CalendarCalendarListGetQueryParams;
}(SpeakeasyBase));
export { CalendarCalendarListGetQueryParams };
var CalendarCalendarListGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarCalendarListGetSecurityOption1, _super);
    function CalendarCalendarListGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListGetSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarCalendarListGetSecurityOption1;
}(SpeakeasyBase));
export { CalendarCalendarListGetSecurityOption1 };
var CalendarCalendarListGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarCalendarListGetSecurityOption2, _super);
    function CalendarCalendarListGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListGetSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarCalendarListGetSecurityOption2;
}(SpeakeasyBase));
export { CalendarCalendarListGetSecurityOption2 };
var CalendarCalendarListGetSecurity = /** @class */ (function (_super) {
    __extends(CalendarCalendarListGetSecurity, _super);
    function CalendarCalendarListGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarListGetSecurityOption1)
    ], CalendarCalendarListGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarListGetSecurityOption2)
    ], CalendarCalendarListGetSecurity.prototype, "option2", void 0);
    return CalendarCalendarListGetSecurity;
}(SpeakeasyBase));
export { CalendarCalendarListGetSecurity };
var CalendarCalendarListGetRequest = /** @class */ (function (_super) {
    __extends(CalendarCalendarListGetRequest, _super);
    function CalendarCalendarListGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListGetPathParams)
    ], CalendarCalendarListGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListGetQueryParams)
    ], CalendarCalendarListGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListGetSecurity)
    ], CalendarCalendarListGetRequest.prototype, "security", void 0);
    return CalendarCalendarListGetRequest;
}(SpeakeasyBase));
export { CalendarCalendarListGetRequest };
var CalendarCalendarListGetResponse = /** @class */ (function (_super) {
    __extends(CalendarCalendarListGetResponse, _super);
    function CalendarCalendarListGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarListEntry)
    ], CalendarCalendarListGetResponse.prototype, "calendarListEntry", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarCalendarListGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarCalendarListGetResponse.prototype, "statusCode", void 0);
    return CalendarCalendarListGetResponse;
}(SpeakeasyBase));
export { CalendarCalendarListGetResponse };
