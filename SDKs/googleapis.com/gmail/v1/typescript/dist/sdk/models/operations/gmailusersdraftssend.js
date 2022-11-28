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
var GmailUsersDraftsSendPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendPathParams, _super);
    function GmailUsersDraftsSendPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendPathParams.prototype, "userId", void 0);
    return GmailUsersDraftsSendPathParams;
}(SpeakeasyBase));
export { GmailUsersDraftsSendPathParams };
var GmailUsersDraftsSendQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendQueryParams, _super);
    function GmailUsersDraftsSendQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersDraftsSendQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersDraftsSendQueryParams;
}(SpeakeasyBase));
export { GmailUsersDraftsSendQueryParams };
var GmailUsersDraftsSendRequests = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendRequests, _super);
    function GmailUsersDraftsSendRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/cpim" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageCpim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/external-body" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageExternalBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/feedback-report" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageFeedbackReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageGlobal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageGlobalDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageGlobalDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-headers" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageGlobalHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/imdn+xml" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageImdnPlusXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/news" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/partial" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messagePartial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/rfc822" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageRfc822", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/s-http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageShttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sip" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageSip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sipfrag" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageSipfrag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/tracking-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageTrackingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.si.simp" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageVndSiSimp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.wfa.wsc" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsSendRequests.prototype, "messageVndWfaWsc", void 0);
    return GmailUsersDraftsSendRequests;
}(SpeakeasyBase));
export { GmailUsersDraftsSendRequests };
var GmailUsersDraftsSendSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendSecurityOption1, _super);
    function GmailUsersDraftsSendSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsSendSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsSendSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersDraftsSendSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersDraftsSendSecurityOption1 };
var GmailUsersDraftsSendSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendSecurityOption2, _super);
    function GmailUsersDraftsSendSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsSendSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsSendSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersDraftsSendSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersDraftsSendSecurityOption2 };
var GmailUsersDraftsSendSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendSecurityOption3, _super);
    function GmailUsersDraftsSendSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsSendSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsSendSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersDraftsSendSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersDraftsSendSecurityOption3 };
var GmailUsersDraftsSendSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendSecurityOption4, _super);
    function GmailUsersDraftsSendSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsSendSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsSendSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersDraftsSendSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersDraftsSendSecurityOption4 };
var GmailUsersDraftsSendSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendSecurity, _super);
    function GmailUsersDraftsSendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsSendSecurityOption1)
    ], GmailUsersDraftsSendSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsSendSecurityOption2)
    ], GmailUsersDraftsSendSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsSendSecurityOption3)
    ], GmailUsersDraftsSendSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsSendSecurityOption4)
    ], GmailUsersDraftsSendSecurity.prototype, "option4", void 0);
    return GmailUsersDraftsSendSecurity;
}(SpeakeasyBase));
export { GmailUsersDraftsSendSecurity };
var GmailUsersDraftsSendRequest = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendRequest, _super);
    function GmailUsersDraftsSendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsSendPathParams)
    ], GmailUsersDraftsSendRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsSendQueryParams)
    ], GmailUsersDraftsSendRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsSendRequests)
    ], GmailUsersDraftsSendRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsSendSecurity)
    ], GmailUsersDraftsSendRequest.prototype, "security", void 0);
    return GmailUsersDraftsSendRequest;
}(SpeakeasyBase));
export { GmailUsersDraftsSendRequest };
var GmailUsersDraftsSendResponse = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsSendResponse, _super);
    function GmailUsersDraftsSendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersDraftsSendResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], GmailUsersDraftsSendResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersDraftsSendResponse.prototype, "statusCode", void 0);
    return GmailUsersDraftsSendResponse;
}(SpeakeasyBase));
export { GmailUsersDraftsSendResponse };
