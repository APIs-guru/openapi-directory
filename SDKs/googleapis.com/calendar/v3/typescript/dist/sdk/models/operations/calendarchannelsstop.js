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
var CalendarChannelsStopQueryParams = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopQueryParams, _super);
    function CalendarChannelsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarChannelsStopQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarChannelsStopQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarChannelsStopQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarChannelsStopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarChannelsStopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarChannelsStopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarChannelsStopQueryParams.prototype, "userIp", void 0);
    return CalendarChannelsStopQueryParams;
}(SpeakeasyBase));
export { CalendarChannelsStopQueryParams };
var CalendarChannelsStopSecurityOption1 = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopSecurityOption1, _super);
    function CalendarChannelsStopSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarChannelsStopSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarChannelsStopSecurityOption1.prototype, "oauth2c", void 0);
    return CalendarChannelsStopSecurityOption1;
}(SpeakeasyBase));
export { CalendarChannelsStopSecurityOption1 };
var CalendarChannelsStopSecurityOption2 = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopSecurityOption2, _super);
    function CalendarChannelsStopSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarChannelsStopSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarChannelsStopSecurityOption2.prototype, "oauth2c", void 0);
    return CalendarChannelsStopSecurityOption2;
}(SpeakeasyBase));
export { CalendarChannelsStopSecurityOption2 };
var CalendarChannelsStopSecurityOption3 = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopSecurityOption3, _super);
    function CalendarChannelsStopSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarChannelsStopSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarChannelsStopSecurityOption3.prototype, "oauth2c", void 0);
    return CalendarChannelsStopSecurityOption3;
}(SpeakeasyBase));
export { CalendarChannelsStopSecurityOption3 };
var CalendarChannelsStopSecurityOption4 = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopSecurityOption4, _super);
    function CalendarChannelsStopSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarChannelsStopSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarChannelsStopSecurityOption4.prototype, "oauth2c", void 0);
    return CalendarChannelsStopSecurityOption4;
}(SpeakeasyBase));
export { CalendarChannelsStopSecurityOption4 };
var CalendarChannelsStopSecurityOption5 = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopSecurityOption5, _super);
    function CalendarChannelsStopSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarChannelsStopSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarChannelsStopSecurityOption5.prototype, "oauth2c", void 0);
    return CalendarChannelsStopSecurityOption5;
}(SpeakeasyBase));
export { CalendarChannelsStopSecurityOption5 };
var CalendarChannelsStopSecurity = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopSecurity, _super);
    function CalendarChannelsStopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarChannelsStopSecurityOption1)
    ], CalendarChannelsStopSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarChannelsStopSecurityOption2)
    ], CalendarChannelsStopSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarChannelsStopSecurityOption3)
    ], CalendarChannelsStopSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarChannelsStopSecurityOption4)
    ], CalendarChannelsStopSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CalendarChannelsStopSecurityOption5)
    ], CalendarChannelsStopSecurity.prototype, "option5", void 0);
    return CalendarChannelsStopSecurity;
}(SpeakeasyBase));
export { CalendarChannelsStopSecurity };
var CalendarChannelsStopRequest = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopRequest, _super);
    function CalendarChannelsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarChannelsStopQueryParams)
    ], CalendarChannelsStopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Channel)
    ], CalendarChannelsStopRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarChannelsStopSecurity)
    ], CalendarChannelsStopRequest.prototype, "security", void 0);
    return CalendarChannelsStopRequest;
}(SpeakeasyBase));
export { CalendarChannelsStopRequest };
var CalendarChannelsStopResponse = /** @class */ (function (_super) {
    __extends(CalendarChannelsStopResponse, _super);
    function CalendarChannelsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarChannelsStopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarChannelsStopResponse.prototype, "statusCode", void 0);
    return CalendarChannelsStopResponse;
}(SpeakeasyBase));
export { CalendarChannelsStopResponse };
