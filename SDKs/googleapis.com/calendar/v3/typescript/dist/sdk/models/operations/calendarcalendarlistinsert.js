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
var CalendarCalendarListInsertQueryParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarListInsertQueryParams, _super);
    function CalendarCalendarListInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarCalendarListInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=colorRgbFormat" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListInsertQueryParams.prototype, "colorRgbFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarCalendarListInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarCalendarListInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarCalendarListInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarCalendarListInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarCalendarListInsertQueryParams.prototype, "userIp", void 0);
    return CalendarCalendarListInsertQueryParams;
}(SpeakeasyBase));
export { CalendarCalendarListInsertQueryParams };
var CalendarCalendarListInsertSecurity = /** @class */ (function (_super) {
    __extends(CalendarCalendarListInsertSecurity, _super);
    function CalendarCalendarListInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListInsertSecurity.prototype, "oauth2c", void 0);
    return CalendarCalendarListInsertSecurity;
}(SpeakeasyBase));
export { CalendarCalendarListInsertSecurity };
var CalendarCalendarListInsertRequest = /** @class */ (function (_super) {
    __extends(CalendarCalendarListInsertRequest, _super);
    function CalendarCalendarListInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListInsertQueryParams)
    ], CalendarCalendarListInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CalendarListEntry)
    ], CalendarCalendarListInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListInsertSecurity)
    ], CalendarCalendarListInsertRequest.prototype, "security", void 0);
    return CalendarCalendarListInsertRequest;
}(SpeakeasyBase));
export { CalendarCalendarListInsertRequest };
var CalendarCalendarListInsertResponse = /** @class */ (function (_super) {
    __extends(CalendarCalendarListInsertResponse, _super);
    function CalendarCalendarListInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarListEntry)
    ], CalendarCalendarListInsertResponse.prototype, "calendarListEntry", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarCalendarListInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarCalendarListInsertResponse.prototype, "statusCode", void 0);
    return CalendarCalendarListInsertResponse;
}(SpeakeasyBase));
export { CalendarCalendarListInsertResponse };
