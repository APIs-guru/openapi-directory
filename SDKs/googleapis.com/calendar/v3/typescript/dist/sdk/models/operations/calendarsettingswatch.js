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
var CalendarSettingsWatchQueryParams = /** @class */ (function (_super) {
    __extends(CalendarSettingsWatchQueryParams, _super);
    function CalendarSettingsWatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], CalendarSettingsWatchQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarSettingsWatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=syncToken" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "syncToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarSettingsWatchQueryParams.prototype, "userIp", void 0);
    return CalendarSettingsWatchQueryParams;
}(SpeakeasyBase));
export { CalendarSettingsWatchQueryParams };
var CalendarSettingsWatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarSettingsWatchSecurityOption1, _super);
    function CalendarSettingsWatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarSettingsWatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarSettingsWatchSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarSettingsWatchSecurityOption1;
}(SpeakeasyBase));
export { CalendarSettingsWatchSecurityOption1 };
var CalendarSettingsWatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarSettingsWatchSecurityOption2, _super);
    function CalendarSettingsWatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarSettingsWatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarSettingsWatchSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarSettingsWatchSecurityOption2;
}(SpeakeasyBase));
export { CalendarSettingsWatchSecurityOption2 };
var CalendarSettingsWatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarSettingsWatchSecurityOption3, _super);
    function CalendarSettingsWatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarSettingsWatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarSettingsWatchSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarSettingsWatchSecurityOption3;
}(SpeakeasyBase));
export { CalendarSettingsWatchSecurityOption3 };
var CalendarSettingsWatchSecurity = /** @class */ (function (_super) {
    __extends(CalendarSettingsWatchSecurity, _super);
    function CalendarSettingsWatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarSettingsWatchSecurityOption1)
    ], CalendarSettingsWatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarSettingsWatchSecurityOption2)
    ], CalendarSettingsWatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarSettingsWatchSecurityOption3)
    ], CalendarSettingsWatchSecurity.prototype, "option3", void 0);
    return CalendarSettingsWatchSecurity;
}(SpeakeasyBase));
export { CalendarSettingsWatchSecurity };
var CalendarSettingsWatchRequest = /** @class */ (function (_super) {
    __extends(CalendarSettingsWatchRequest, _super);
    function CalendarSettingsWatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarSettingsWatchQueryParams)
    ], CalendarSettingsWatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], CalendarSettingsWatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarSettingsWatchSecurity)
    ], CalendarSettingsWatchRequest.prototype, "security", void 0);
    return CalendarSettingsWatchRequest;
}(SpeakeasyBase));
export { CalendarSettingsWatchRequest };
var CalendarSettingsWatchResponse = /** @class */ (function (_super) {
    __extends(CalendarSettingsWatchResponse, _super);
    function CalendarSettingsWatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Channel)
    ], CalendarSettingsWatchResponse.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarSettingsWatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarSettingsWatchResponse.prototype, "statusCode", void 0);
    return CalendarSettingsWatchResponse;
}(SpeakeasyBase));
export { CalendarSettingsWatchResponse };
