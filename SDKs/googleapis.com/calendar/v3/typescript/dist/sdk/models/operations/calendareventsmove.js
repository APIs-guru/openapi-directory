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
var CalendarEventsMovePathParams = /** @class */ (function (_super) {
    __extends(CalendarEventsMovePathParams, _super);
    function CalendarEventsMovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarEventsMovePathParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=eventId" }),
        __metadata("design:type", String)
    ], CalendarEventsMovePathParams.prototype, "eventId", void 0);
    return CalendarEventsMovePathParams;
}(SpeakeasyBase));
export { CalendarEventsMovePathParams };
export var CalendarEventsMoveSendUpdatesEnum;
(function (CalendarEventsMoveSendUpdatesEnum) {
    CalendarEventsMoveSendUpdatesEnum["All"] = "all";
    CalendarEventsMoveSendUpdatesEnum["ExternalOnly"] = "externalOnly";
    CalendarEventsMoveSendUpdatesEnum["None"] = "none";
})(CalendarEventsMoveSendUpdatesEnum || (CalendarEventsMoveSendUpdatesEnum = {}));
var CalendarEventsMoveQueryParams = /** @class */ (function (_super) {
    __extends(CalendarEventsMoveQueryParams, _super);
    function CalendarEventsMoveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "destination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsMoveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], CalendarEventsMoveQueryParams.prototype, "sendNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendUpdates" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "sendUpdates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarEventsMoveQueryParams.prototype, "userIp", void 0);
    return CalendarEventsMoveQueryParams;
}(SpeakeasyBase));
export { CalendarEventsMoveQueryParams };
var CalendarEventsMoveSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarEventsMoveSecurityOption1, _super);
    function CalendarEventsMoveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsMoveSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsMoveSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarEventsMoveSecurityOption1;
}(SpeakeasyBase));
export { CalendarEventsMoveSecurityOption1 };
var CalendarEventsMoveSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarEventsMoveSecurityOption2, _super);
    function CalendarEventsMoveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarEventsMoveSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarEventsMoveSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarEventsMoveSecurityOption2;
}(SpeakeasyBase));
export { CalendarEventsMoveSecurityOption2 };
var CalendarEventsMoveSecurity = /** @class */ (function (_super) {
    __extends(CalendarEventsMoveSecurity, _super);
    function CalendarEventsMoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsMoveSecurityOption1)
    ], CalendarEventsMoveSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarEventsMoveSecurityOption2)
    ], CalendarEventsMoveSecurity.prototype, "option2", void 0);
    return CalendarEventsMoveSecurity;
}(SpeakeasyBase));
export { CalendarEventsMoveSecurity };
var CalendarEventsMoveRequest = /** @class */ (function (_super) {
    __extends(CalendarEventsMoveRequest, _super);
    function CalendarEventsMoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsMovePathParams)
    ], CalendarEventsMoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsMoveQueryParams)
    ], CalendarEventsMoveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarEventsMoveSecurity)
    ], CalendarEventsMoveRequest.prototype, "security", void 0);
    return CalendarEventsMoveRequest;
}(SpeakeasyBase));
export { CalendarEventsMoveRequest };
var CalendarEventsMoveResponse = /** @class */ (function (_super) {
    __extends(CalendarEventsMoveResponse, _super);
    function CalendarEventsMoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarEventsMoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Event)
    ], CalendarEventsMoveResponse.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarEventsMoveResponse.prototype, "statusCode", void 0);
    return CalendarEventsMoveResponse;
}(SpeakeasyBase));
export { CalendarEventsMoveResponse };
