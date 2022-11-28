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
var CalendarEventsInstancesPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesPathParams, _super);
    function CalendarEventsInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesPathParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesPathParams.prototype, "eventId", void 0);
    return CalendarEventsInstancesPathParams;
}(SpeakeasyBase));
export { CalendarEventsInstancesPathParams };
var CalendarEventsInstancesQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesQueryParams, _super);
    function CalendarEventsInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alwaysIncludeEmail" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsInstancesQueryParams.prototype, "alwaysIncludeEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAttendees" }),
        __metadata("design:type", Number)
    ], CalendarEventsInstancesQueryParams.prototype, "maxAttendees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], CalendarEventsInstancesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=originalStart" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "originalStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsInstancesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsInstancesQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMax" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "timeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeMin" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "timeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeZone" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsInstancesQueryParams.prototype, "userIp", void 0);
    return CalendarEventsInstancesQueryParams;
}(SpeakeasyBase));
export { CalendarEventsInstancesQueryParams };
var CalendarEventsInstancesSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesSecurityOption1, _super);
    function CalendarEventsInstancesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsInstancesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsInstancesSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsInstancesSecurityOption1;
}(SpeakeasyBase));
export { CalendarEventsInstancesSecurityOption1 };
var CalendarEventsInstancesSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesSecurityOption2, _super);
    function CalendarEventsInstancesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsInstancesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsInstancesSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsInstancesSecurityOption2;
}(SpeakeasyBase));
export { CalendarEventsInstancesSecurityOption2 };
var CalendarEventsInstancesSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesSecurityOption3, _super);
    function CalendarEventsInstancesSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsInstancesSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsInstancesSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarEventsInstancesSecurityOption3;
}(SpeakeasyBase));
export { CalendarEventsInstancesSecurityOption3 };
var CalendarEventsInstancesSecurityOption4 = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesSecurityOption4, _super);
    function CalendarEventsInstancesSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsInstancesSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsInstancesSecurityOption4.prototype, "oauth2c", void 0);
    return CalendarEventsInstancesSecurityOption4;
}(SpeakeasyBase));
export { CalendarEventsInstancesSecurityOption4 };
var CalendarEventsInstancesSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesSecurity, _super);
    function CalendarEventsInstancesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsInstancesSecurityOption1)
    ], CalendarEventsInstancesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsInstancesSecurityOption2)
    ], CalendarEventsInstancesSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsInstancesSecurityOption3)
    ], CalendarEventsInstancesSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsInstancesSecurityOption4)
    ], CalendarEventsInstancesSecurity.prototype, "option4", void 0);
    return CalendarEventsInstancesSecurity;
}(SpeakeasyBase));
export { CalendarEventsInstancesSecurity };
var CalendarEventsInstancesRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesRequest, _super);
    function CalendarEventsInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsInstancesPathParams)
    ], CalendarEventsInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsInstancesQueryParams)
    ], CalendarEventsInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsInstancesSecurity)
    ], CalendarEventsInstancesRequest.prototype, "security", void 0);
    return CalendarEventsInstancesRequest;
}(SpeakeasyBase));
export { CalendarEventsInstancesRequest };
var CalendarEventsInstancesResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsInstancesResponse, _super);
    function CalendarEventsInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarEventsInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Events)
    ], CalendarEventsInstancesResponse.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarEventsInstancesResponse.prototype, "statusCode", void 0);
    return CalendarEventsInstancesResponse;
}(SpeakeasyBase));
export { CalendarEventsInstancesResponse };
