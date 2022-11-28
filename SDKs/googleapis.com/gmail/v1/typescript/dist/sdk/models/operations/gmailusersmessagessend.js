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
var GmailUsersMessagesSendPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendPathParams, _super);
    function GmailUsersMessagesSendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesSendPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesSendPathParams };
var GmailUsersMessagesSendQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendQueryParams, _super);
    function GmailUsersMessagesSendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesSendQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesSendQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesSendQueryParams };
var GmailUsersMessagesSendRequests = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendRequests, _super);
    function GmailUsersMessagesSendRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/cpim" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageCpim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/external-body" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageExternalBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/feedback-report" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageFeedbackReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageGlobal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageGlobalDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageGlobalDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-headers" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageGlobalHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/imdn+xml" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageImdnPlusXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/news" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/partial" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messagePartial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/rfc822" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageRfc822", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/s-http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageShttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sip" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageSip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sipfrag" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageSipfrag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/tracking-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageTrackingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.si.simp" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageVndSiSimp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.wfa.wsc" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesSendRequests.prototype, "messageVndWfaWsc", void 0);
    return GmailUsersMessagesSendRequests;
}(SpeakeasyBase));
export { GmailUsersMessagesSendRequests };
var GmailUsersMessagesSendSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendSecurityOption1, _super);
    function GmailUsersMessagesSendSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesSendSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesSendSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesSendSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesSendSecurityOption1 };
var GmailUsersMessagesSendSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendSecurityOption2, _super);
    function GmailUsersMessagesSendSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesSendSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesSendSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesSendSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesSendSecurityOption2 };
var GmailUsersMessagesSendSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendSecurityOption3, _super);
    function GmailUsersMessagesSendSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesSendSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesSendSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersMessagesSendSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersMessagesSendSecurityOption3 };
var GmailUsersMessagesSendSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendSecurityOption4, _super);
    function GmailUsersMessagesSendSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesSendSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesSendSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersMessagesSendSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersMessagesSendSecurityOption4 };
var GmailUsersMessagesSendSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendSecurityOption5, _super);
    function GmailUsersMessagesSendSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesSendSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesSendSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersMessagesSendSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersMessagesSendSecurityOption5 };
var GmailUsersMessagesSendSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendSecurity, _super);
    function GmailUsersMessagesSendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesSendSecurityOption1)
    ], GmailUsersMessagesSendSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesSendSecurityOption2)
    ], GmailUsersMessagesSendSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesSendSecurityOption3)
    ], GmailUsersMessagesSendSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesSendSecurityOption4)
    ], GmailUsersMessagesSendSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesSendSecurityOption5)
    ], GmailUsersMessagesSendSecurity.prototype, "option5", void 0);
    return GmailUsersMessagesSendSecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesSendSecurity };
var GmailUsersMessagesSendRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendRequest, _super);
    function GmailUsersMessagesSendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesSendPathParams)
    ], GmailUsersMessagesSendRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesSendQueryParams)
    ], GmailUsersMessagesSendRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesSendRequests)
    ], GmailUsersMessagesSendRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesSendSecurity)
    ], GmailUsersMessagesSendRequest.prototype, "security", void 0);
    return GmailUsersMessagesSendRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesSendRequest };
var GmailUsersMessagesSendResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesSendResponse, _super);
    function GmailUsersMessagesSendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesSendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], GmailUsersMessagesSendResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesSendResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesSendResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesSendResponse };
