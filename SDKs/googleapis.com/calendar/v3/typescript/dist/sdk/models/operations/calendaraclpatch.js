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
var CalendarAclPatchPathParams = /** @class */ (function (_super) {
    __extends(CalendarAclPatchPathParams, _super);
    function CalendarAclPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=calendarId" }),
        __metadata("design:type", String)
    ], CalendarAclPatchPathParams.prototype, "calendarId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], CalendarAclPatchPathParams.prototype, "ruleId", void 0);
    return CalendarAclPatchPathParams;
}(SpeakeasyBase));
export { CalendarAclPatchPathParams };
var CalendarAclPatchQueryParams = /** @class */ (function (_super) {
    __extends(CalendarAclPatchQueryParams, _super);
    function CalendarAclPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CalendarAclPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CalendarAclPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CalendarAclPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CalendarAclPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CalendarAclPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CalendarAclPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sendNotifications" }),
        __metadata("design:type", Boolean)
    ], CalendarAclPatchQueryParams.prototype, "sendNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], CalendarAclPatchQueryParams.prototype, "userIp", void 0);
    return CalendarAclPatchQueryParams;
}(SpeakeasyBase));
export { CalendarAclPatchQueryParams };
var CalendarAclPatchSecurity = /** @class */ (function (_super) {
    __extends(CalendarAclPatchSecurity, _super);
    function CalendarAclPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CalendarAclPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CalendarAclPatchSecurity.prototype, "oauth2c", void 0);
    return CalendarAclPatchSecurity;
}(SpeakeasyBase));
export { CalendarAclPatchSecurity };
var CalendarAclPatchRequest = /** @class */ (function (_super) {
    __extends(CalendarAclPatchRequest, _super);
    function CalendarAclPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarAclPatchPathParams)
    ], CalendarAclPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarAclPatchQueryParams)
    ], CalendarAclPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AclRule)
    ], CalendarAclPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CalendarAclPatchSecurity)
    ], CalendarAclPatchRequest.prototype, "security", void 0);
    return CalendarAclPatchRequest;
}(SpeakeasyBase));
export { CalendarAclPatchRequest };
var CalendarAclPatchResponse = /** @class */ (function (_super) {
    __extends(CalendarAclPatchResponse, _super);
    function CalendarAclPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AclRule)
    ], CalendarAclPatchResponse.prototype, "aclRule", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CalendarAclPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CalendarAclPatchResponse.prototype, "statusCode", void 0);
    return CalendarAclPatchResponse;
}(SpeakeasyBase));
export { CalendarAclPatchResponse };
