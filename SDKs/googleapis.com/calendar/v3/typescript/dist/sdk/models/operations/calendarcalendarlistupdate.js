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
var CalendarCalendarListUpdatePathParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarListUpdatePathParams, _super);
    function CalendarCalendarListUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdatePathParams.prototype, "calendarId", void 0);
    return CalendarCalendarListUpdatePathParams;
}(SpeakeasyBase));
export { CalendarCalendarListUpdatePathParams };
var CalendarCalendarListUpdateQueryParams = /** @class */ (function (_super) {
    __extends(CalendarCalendarListUpdateQueryParams, _super);
    function CalendarCalendarListUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=colorRgbFormat" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListUpdateQueryParams.prototype, "colorRgbFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarCalendarListUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdateQueryParams.prototype, "userIp", void 0);
    return CalendarCalendarListUpdateQueryParams;
}(SpeakeasyBase));
export { CalendarCalendarListUpdateQueryParams };
var CalendarCalendarListUpdateSecurity = /** @class */ (function (_super) {
    __extends(CalendarCalendarListUpdateSecurity, _super);
    function CalendarCalendarListUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarCalendarListUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarCalendarListUpdateSecurity.prototype, "oauth2c", void 0);
    return CalendarCalendarListUpdateSecurity;
}(SpeakeasyBase));
export { CalendarCalendarListUpdateSecurity };
var CalendarCalendarListUpdateRequest = /** @class */ (function (_super) {
    __extends(CalendarCalendarListUpdateRequest, _super);
    function CalendarCalendarListUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListUpdatePathParams)
    ], CalendarCalendarListUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListUpdateQueryParams)
    ], CalendarCalendarListUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CalendarListEntry)
    ], CalendarCalendarListUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarCalendarListUpdateSecurity)
    ], CalendarCalendarListUpdateRequest.prototype, "security", void 0);
    return CalendarCalendarListUpdateRequest;
}(SpeakeasyBase));
export { CalendarCalendarListUpdateRequest };
var CalendarCalendarListUpdateResponse = /** @class */ (function (_super) {
    __extends(CalendarCalendarListUpdateResponse, _super);
    function CalendarCalendarListUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CalendarListEntry)
    ], CalendarCalendarListUpdateResponse.prototype, "calendarListEntry", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarCalendarListUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarCalendarListUpdateResponse.prototype, "statusCode", void 0);
    return CalendarCalendarListUpdateResponse;
}(SpeakeasyBase));
export { CalendarCalendarListUpdateResponse };
