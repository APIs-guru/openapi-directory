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
var CalendarEventsImportPathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsImportPathParams, _super);
    function CalendarEventsImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsImportPathParams.prototype, "calendarId", void 0);
    return CalendarEventsImportPathParams;
}(SpeakeasyBase));
export { CalendarEventsImportPathParams };
var CalendarEventsImportQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsImportQueryParams, _super);
    function CalendarEventsImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conferenceDataVersion" }),
        __metadata("design:type", Number)
    ], CalendarEventsImportQueryParams.prototype, "conferenceDataVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supportsAttachments" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsImportQueryParams.prototype, "supportsAttachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsImportQueryParams.prototype, "userIp", void 0);
    return CalendarEventsImportQueryParams;
}(SpeakeasyBase));
export { CalendarEventsImportQueryParams };
var CalendarEventsImportSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsImportSecurityOption1, _super);
    function CalendarEventsImportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsImportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsImportSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsImportSecurityOption1;
}(SpeakeasyBase));
export { CalendarEventsImportSecurityOption1 };
var CalendarEventsImportSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsImportSecurityOption2, _super);
    function CalendarEventsImportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsImportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsImportSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsImportSecurityOption2;
}(SpeakeasyBase));
export { CalendarEventsImportSecurityOption2 };
var CalendarEventsImportSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsImportSecurity, _super);
    function CalendarEventsImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsImportSecurityOption1)
    ], CalendarEventsImportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsImportSecurityOption2)
    ], CalendarEventsImportSecurity.prototype, "option2", void 0);
    return CalendarEventsImportSecurity;
}(SpeakeasyBase));
export { CalendarEventsImportSecurity };
var CalendarEventsImportRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsImportRequest, _super);
    function CalendarEventsImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsImportPathParams)
    ], CalendarEventsImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsImportQueryParams)
    ], CalendarEventsImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Event)
    ], CalendarEventsImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsImportSecurity)
    ], CalendarEventsImportRequest.prototype, "security", void 0);
    return CalendarEventsImportRequest;
}(SpeakeasyBase));
export { CalendarEventsImportRequest };
var CalendarEventsImportResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsImportResponse, _super);
    function CalendarEventsImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarEventsImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsImportResponse.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarEventsImportResponse.prototype, "statusCode", void 0);
    return CalendarEventsImportResponse;
}(SpeakeasyBase));
export { CalendarEventsImportResponse };
