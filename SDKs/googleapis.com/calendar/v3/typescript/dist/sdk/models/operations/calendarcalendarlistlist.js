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
export var CalendarCalendarListListMinAccessRoleEnum;
(function (CalendarCalendarListListMinAccessRoleEnum) {
    CalendarCalendarListListMinAccessRoleEnum["FreeBusyReader"] = "freeBusyReader";
    CalendarCalendarListListMinAccessRoleEnum["Owner"] = "owner";
    CalendarCalendarListListMinAccessRoleEnum["Reader"] = "reader";
    CalendarCalendarListListMinAccessRoleEnum["Writer"] = "writer";
})(CalendarCalendarListListMinAccessRoleEnum || (CalendarCalendarListListMinAccessRoleEnum = {}));
var CalendarCalendarListListQueryParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarListListQueryParams, _super);
    function CalendarCalendarListListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], CalendarCalendarListListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minAccessRole" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "minAccessRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showHidden" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListListQueryParams.prototype, "showHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "syncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarCalendarListListQueryParams.prototype, "userIp", void 0);
    return CalendarCalendarListListQueryParams;
}(SpeakeasyBase));
export { CalendarCalendarListListQueryParams };
var CalendarCalendarListListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarCalendarListListSecurityOption1, _super);
    function CalendarCalendarListListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListListSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarCalendarListListSecurityOption1;
}(SpeakeasyBase));
export { CalendarCalendarListListSecurityOption1 };
var CalendarCalendarListListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarCalendarListListSecurityOption2, _super);
    function CalendarCalendarListListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListListSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarCalendarListListSecurityOption2;
}(SpeakeasyBase));
export { CalendarCalendarListListSecurityOption2 };
var CalendarCalendarListListSecurity = /** @class */ (function (_super) {
    __extends(CalendarCalendarListListSecurity, _super);
    function CalendarCalendarListListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarListListSecurityOption1)
    ], CalendarCalendarListListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarCalendarListListSecurityOption2)
    ], CalendarCalendarListListSecurity.prototype, "option2", void 0);
    return CalendarCalendarListListSecurity;
}(SpeakeasyBase));
export { CalendarCalendarListListSecurity };
var CalendarCalendarListListRequest = /** @class */ (function (_super) {
    __extends(CalendarCalendarListListRequest, _super);
    function CalendarCalendarListListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListListQueryParams)
    ], CalendarCalendarListListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListListSecurity)
    ], CalendarCalendarListListRequest.prototype, "security", void 0);
    return CalendarCalendarListListRequest;
}(SpeakeasyBase));
export { CalendarCalendarListListRequest };
var CalendarCalendarListListResponse = /** @class */ (function (_super) {
    __extends(CalendarCalendarListListResponse, _super);
    function CalendarCalendarListListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarList)
    ], CalendarCalendarListListResponse.prototype, "calendarList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarCalendarListListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarCalendarListListResponse.prototype, "statusCode", void 0);
    return CalendarCalendarListListResponse;
}(SpeakeasyBase));
export { CalendarCalendarListListResponse };
