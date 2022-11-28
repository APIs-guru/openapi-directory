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
export var CalendarCalendarListWatchMinAccessRoleEnum;
(function (CalendarCalendarListWatchMinAccessRoleEnum) {
    CalendarCalendarListWatchMinAccessRoleEnum["FreeBusyReader"] = "freeBusyReader";
    CalendarCalendarListWatchMinAccessRoleEnum["Owner"] = "owner";
    CalendarCalendarListWatchMinAccessRoleEnum["Reader"] = "reader";
    CalendarCalendarListWatchMinAccessRoleEnum["Writer"] = "writer";
})(CalendarCalendarListWatchMinAccessRoleEnum || (CalendarCalendarListWatchMinAccessRoleEnum = {}));
var CalendarCalendarListWatchQueryParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarListWatchQueryParams, _super);
    function CalendarCalendarListWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], CalendarCalendarListWatchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minAccessRole" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "minAccessRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListWatchQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showHidden" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListWatchQueryParams.prototype, "showHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "syncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchQueryParams.prototype, "userIp", void 0);
    return CalendarCalendarListWatchQueryParams;
}(SpeakeasyBase));
export { CalendarCalendarListWatchQueryParams };
var CalendarCalendarListWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarCalendarListWatchSecurityOption1, _super);
    function CalendarCalendarListWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListWatchSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarCalendarListWatchSecurityOption1;
}(SpeakeasyBase));
export { CalendarCalendarListWatchSecurityOption1 };
var CalendarCalendarListWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarCalendarListWatchSecurityOption2, _super);
    function CalendarCalendarListWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListWatchSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarCalendarListWatchSecurityOption2;
}(SpeakeasyBase));
export { CalendarCalendarListWatchSecurityOption2 };
var CalendarCalendarListWatchSecurity = /** @class */ (function (_super) {
    __extends(CalendarCalendarListWatchSecurity, _super);
    function CalendarCalendarListWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarListWatchSecurityOption1)
    ], CalendarCalendarListWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarListWatchSecurityOption2)
    ], CalendarCalendarListWatchSecurity.prototype, "option2", void 0);
    return CalendarCalendarListWatchSecurity;
}(SpeakeasyBase));
export { CalendarCalendarListWatchSecurity };
var CalendarCalendarListWatchRequest = /** @class */ (function (_super) {
    __extends(CalendarCalendarListWatchRequest, _super);
    function CalendarCalendarListWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListWatchQueryParams)
    ], CalendarCalendarListWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], CalendarCalendarListWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListWatchSecurity)
    ], CalendarCalendarListWatchRequest.prototype, "security", void 0);
    return CalendarCalendarListWatchRequest;
}(SpeakeasyBase));
export { CalendarCalendarListWatchRequest };
var CalendarCalendarListWatchResponse = /** @class */ (function (_super) {
    __extends(CalendarCalendarListWatchResponse, _super);
    function CalendarCalendarListWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], CalendarCalendarListWatchResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarCalendarListWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarCalendarListWatchResponse.prototype, "statusCode", void 0);
    return CalendarCalendarListWatchResponse;
}(SpeakeasyBase));
export { CalendarCalendarListWatchResponse };
