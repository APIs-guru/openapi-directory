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
var CalendarEventsGetPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsGetPathParams, _super);
    function CalendarEventsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsGetPathParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", String)
    ], CalendarEventsGetPathParams.prototype, "eventId", void 0);
    return CalendarEventsGetPathParams;
}(SpeakeasyBase));
export { CalendarEventsGetPathParams };
var CalendarEventsGetQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsGetQueryParams, _super);
    function CalendarEventsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsGetQueryParams.prototype, "alwaysIncludeEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsGetQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeZone" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsGetQueryParams.prototype, "userIp", void 0);
    return CalendarEventsGetQueryParams;
}(SpeakeasyBase));
export { CalendarEventsGetQueryParams };
var CalendarEventsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption1, _super);
    function CalendarEventsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption1;
}(SpeakeasyBase));
export { CalendarEventsGetSecurityOption1 };
var CalendarEventsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption2, _super);
    function CalendarEventsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption2;
}(SpeakeasyBase));
export { CalendarEventsGetSecurityOption2 };
var CalendarEventsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption3, _super);
    function CalendarEventsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption3;
}(SpeakeasyBase));
export { CalendarEventsGetSecurityOption3 };
var CalendarEventsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurityOption4, _super);
    function CalendarEventsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsGetSecurityOption4.prototype, "oauth2c", void 0);
    return CalendarEventsGetSecurityOption4;
}(SpeakeasyBase));
export { CalendarEventsGetSecurityOption4 };
var CalendarEventsGetSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsGetSecurity, _super);
    function CalendarEventsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption1)
    ], CalendarEventsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption2)
    ], CalendarEventsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption3)
    ], CalendarEventsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsGetSecurityOption4)
    ], CalendarEventsGetSecurity.prototype, "option4", void 0);
    return CalendarEventsGetSecurity;
}(SpeakeasyBase));
export { CalendarEventsGetSecurity };
var CalendarEventsGetRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsGetRequest, _super);
    function CalendarEventsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsGetPathParams)
    ], CalendarEventsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsGetQueryParams)
    ], CalendarEventsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsGetSecurity)
    ], CalendarEventsGetRequest.prototype, "security", void 0);
    return CalendarEventsGetRequest;
}(SpeakeasyBase));
export { CalendarEventsGetRequest };
var CalendarEventsGetResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsGetResponse, _super);
    function CalendarEventsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarEventsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsGetResponse.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarEventsGetResponse.prototype, "statusCode", void 0);
    return CalendarEventsGetResponse;
}(SpeakeasyBase));
export { CalendarEventsGetResponse };
