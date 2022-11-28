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
var CalendarEventsDeletePathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsDeletePathParams, _super);
    function CalendarEventsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsDeletePathParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", String)
    ], CalendarEventsDeletePathParams.prototype, "eventId", void 0);
    return CalendarEventsDeletePathParams;
}(SpeakeasyBase));
export { CalendarEventsDeletePathParams };
export var CalendarEventsDeleteSendUpdatesEnum;
(function (CalendarEventsDeleteSendUpdatesEnum) {
    CalendarEventsDeleteSendUpdatesEnum["All"] = "all";
    CalendarEventsDeleteSendUpdatesEnum["ExternalOnly"] = "externalOnly";
    CalendarEventsDeleteSendUpdatesEnum["None"] = "none";
})(CalendarEventsDeleteSendUpdatesEnum || (CalendarEventsDeleteSendUpdatesEnum = {}));
var CalendarEventsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsDeleteQueryParams, _super);
    function CalendarEventsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsDeleteQueryParams.prototype, "sendNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendUpdates" }),
        __metadata("design:type", String)
    ], CalendarEventsDeleteQueryParams.prototype, "sendUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsDeleteQueryParams.prototype, "userIp", void 0);
    return CalendarEventsDeleteQueryParams;
}(SpeakeasyBase));
export { CalendarEventsDeleteQueryParams };
var CalendarEventsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsDeleteSecurityOption1, _super);
    function CalendarEventsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsDeleteSecurityOption1;
}(SpeakeasyBase));
export { CalendarEventsDeleteSecurityOption1 };
var CalendarEventsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsDeleteSecurityOption2, _super);
    function CalendarEventsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsDeleteSecurityOption2;
}(SpeakeasyBase));
export { CalendarEventsDeleteSecurityOption2 };
var CalendarEventsDeleteSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsDeleteSecurity, _super);
    function CalendarEventsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsDeleteSecurityOption1)
    ], CalendarEventsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsDeleteSecurityOption2)
    ], CalendarEventsDeleteSecurity.prototype, "option2", void 0);
    return CalendarEventsDeleteSecurity;
}(SpeakeasyBase));
export { CalendarEventsDeleteSecurity };
var CalendarEventsDeleteRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsDeleteRequest, _super);
    function CalendarEventsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsDeletePathParams)
    ], CalendarEventsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsDeleteQueryParams)
    ], CalendarEventsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsDeleteSecurity)
    ], CalendarEventsDeleteRequest.prototype, "security", void 0);
    return CalendarEventsDeleteRequest;
}(SpeakeasyBase));
export { CalendarEventsDeleteRequest };
var CalendarEventsDeleteResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsDeleteResponse, _super);
    function CalendarEventsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarEventsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarEventsDeleteResponse.prototype, "statusCode", void 0);
    return CalendarEventsDeleteResponse;
}(SpeakeasyBase));
export { CalendarEventsDeleteResponse };
