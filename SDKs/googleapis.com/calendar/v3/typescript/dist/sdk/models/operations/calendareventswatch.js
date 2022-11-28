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
var CalendarEventsWatchPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchPathParams, _super);
    function CalendarEventsWatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchPathParams.prototype, "calendarId", void 0);
    return CalendarEventsWatchPathParams;
}(SpeakeasyBase));
export { CalendarEventsWatchPathParams };
export var CalendarEventsWatchOrderByEnum;
(function (CalendarEventsWatchOrderByEnum) {
    CalendarEventsWatchOrderByEnum["StartTime"] = "startTime";
    CalendarEventsWatchOrderByEnum["Updated"] = "updated";
})(CalendarEventsWatchOrderByEnum || (CalendarEventsWatchOrderByEnum = {}));
var CalendarEventsWatchQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchQueryParams, _super);
    function CalendarEventsWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsWatchQueryParams.prototype, "alwaysIncludeEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iCalUID" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "iCalUid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsWatchQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], CalendarEventsWatchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=privateExtendedProperty" }),
        __metadata("design:type", Array)
    ], CalendarEventsWatchQueryParams.prototype, "privateExtendedProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharedExtendedProperty" }),
        __metadata("design:type", Array)
    ], CalendarEventsWatchQueryParams.prototype, "sharedExtendedProperty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsWatchQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showHiddenInvitations" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsWatchQueryParams.prototype, "showHiddenInvitations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=singleEvents" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsWatchQueryParams.prototype, "singleEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "syncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMax" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "timeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMin" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "timeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeZone" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMin" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "updatedMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsWatchQueryParams.prototype, "userIp", void 0);
    return CalendarEventsWatchQueryParams;
}(SpeakeasyBase));
export { CalendarEventsWatchQueryParams };
var CalendarEventsWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchSecurityOption1, _super);
    function CalendarEventsWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsWatchSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsWatchSecurityOption1;
}(SpeakeasyBase));
export { CalendarEventsWatchSecurityOption1 };
var CalendarEventsWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchSecurityOption2, _super);
    function CalendarEventsWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsWatchSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsWatchSecurityOption2;
}(SpeakeasyBase));
export { CalendarEventsWatchSecurityOption2 };
var CalendarEventsWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchSecurityOption3, _super);
    function CalendarEventsWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsWatchSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarEventsWatchSecurityOption3;
}(SpeakeasyBase));
export { CalendarEventsWatchSecurityOption3 };
var CalendarEventsWatchSecurityOption4 = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchSecurityOption4, _super);
    function CalendarEventsWatchSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsWatchSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsWatchSecurityOption4.prototype, "oauth2c", void 0);
    return CalendarEventsWatchSecurityOption4;
}(SpeakeasyBase));
export { CalendarEventsWatchSecurityOption4 };
var CalendarEventsWatchSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchSecurity, _super);
    function CalendarEventsWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsWatchSecurityOption1)
    ], CalendarEventsWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsWatchSecurityOption2)
    ], CalendarEventsWatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsWatchSecurityOption3)
    ], CalendarEventsWatchSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsWatchSecurityOption4)
    ], CalendarEventsWatchSecurity.prototype, "option4", void 0);
    return CalendarEventsWatchSecurity;
}(SpeakeasyBase));
export { CalendarEventsWatchSecurity };
var CalendarEventsWatchRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchRequest, _super);
    function CalendarEventsWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsWatchPathParams)
    ], CalendarEventsWatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsWatchQueryParams)
    ], CalendarEventsWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], CalendarEventsWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsWatchSecurity)
    ], CalendarEventsWatchRequest.prototype, "security", void 0);
    return CalendarEventsWatchRequest;
}(SpeakeasyBase));
export { CalendarEventsWatchRequest };
var CalendarEventsWatchResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsWatchResponse, _super);
    function CalendarEventsWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], CalendarEventsWatchResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarEventsWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarEventsWatchResponse.prototype, "statusCode", void 0);
    return CalendarEventsWatchResponse;
}(SpeakeasyBase));
export { CalendarEventsWatchResponse };
