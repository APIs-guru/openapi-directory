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
var CalendarEventsInsertPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsInsertPathParams, _super);
    function CalendarEventsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertPathParams.prototype, "calendarId", void 0);
    return CalendarEventsInsertPathParams;
}(SpeakeasyBase));
export { CalendarEventsInsertPathParams };
export var CalendarEventsInsertSendUpdatesEnum;
(function (CalendarEventsInsertSendUpdatesEnum) {
    CalendarEventsInsertSendUpdatesEnum["All"] = "all";
    CalendarEventsInsertSendUpdatesEnum["ExternalOnly"] = "externalOnly";
    CalendarEventsInsertSendUpdatesEnum["None"] = "none";
})(CalendarEventsInsertSendUpdatesEnum || (CalendarEventsInsertSendUpdatesEnum = {}));
var CalendarEventsInsertQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsInsertQueryParams, _super);
    function CalendarEventsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conferenceDataVersion" }),
        __metadata("design:type", Number)
    ], CalendarEventsInsertQueryParams.prototype, "conferenceDataVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsInsertQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsInsertQueryParams.prototype, "sendNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendUpdates" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertQueryParams.prototype, "sendUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAttachments" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsInsertQueryParams.prototype, "supportsAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsInsertQueryParams.prototype, "userIp", void 0);
    return CalendarEventsInsertQueryParams;
}(SpeakeasyBase));
export { CalendarEventsInsertQueryParams };
var CalendarEventsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsInsertSecurityOption1, _super);
    function CalendarEventsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsInsertSecurityOption1;
}(SpeakeasyBase));
export { CalendarEventsInsertSecurityOption1 };
var CalendarEventsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsInsertSecurityOption2, _super);
    function CalendarEventsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsInsertSecurityOption2;
}(SpeakeasyBase));
export { CalendarEventsInsertSecurityOption2 };
var CalendarEventsInsertSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsInsertSecurity, _super);
    function CalendarEventsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsInsertSecurityOption1)
    ], CalendarEventsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsInsertSecurityOption2)
    ], CalendarEventsInsertSecurity.prototype, "option2", void 0);
    return CalendarEventsInsertSecurity;
}(SpeakeasyBase));
export { CalendarEventsInsertSecurity };
var CalendarEventsInsertRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsInsertRequest, _super);
    function CalendarEventsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsInsertPathParams)
    ], CalendarEventsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsInsertQueryParams)
    ], CalendarEventsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Event)
    ], CalendarEventsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsInsertSecurity)
    ], CalendarEventsInsertRequest.prototype, "security", void 0);
    return CalendarEventsInsertRequest;
}(SpeakeasyBase));
export { CalendarEventsInsertRequest };
var CalendarEventsInsertResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsInsertResponse, _super);
    function CalendarEventsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarEventsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsInsertResponse.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarEventsInsertResponse.prototype, "statusCode", void 0);
    return CalendarEventsInsertResponse;
}(SpeakeasyBase));
export { CalendarEventsInsertResponse };
