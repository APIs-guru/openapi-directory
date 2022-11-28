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
var GmailUsersMessagesInsertPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertPathParams, _super);
    function GmailUsersMessagesInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesInsertPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertPathParams };
export var GmailUsersMessagesInsertInternalDateSourceEnum;
(function (GmailUsersMessagesInsertInternalDateSourceEnum) {
    GmailUsersMessagesInsertInternalDateSourceEnum["ReceivedTime"] = "receivedTime";
    GmailUsersMessagesInsertInternalDateSourceEnum["DateHeader"] = "dateHeader";
})(GmailUsersMessagesInsertInternalDateSourceEnum || (GmailUsersMessagesInsertInternalDateSourceEnum = {}));
var GmailUsersMessagesInsertQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertQueryParams, _super);
    function GmailUsersMessagesInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deleted" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesInsertQueryParams.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=internalDateSource" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "internalDateSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesInsertQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertQueryParams };
var GmailUsersMessagesInsertRequests = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertRequests, _super);
    function GmailUsersMessagesInsertRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/cpim" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageCpim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/external-body" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageExternalBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/feedback-report" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageFeedbackReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageGlobal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageGlobalDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageGlobalDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-headers" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageGlobalHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/imdn+xml" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageImdnPlusXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/news" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/partial" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messagePartial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/rfc822" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageRfc822", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/s-http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageShttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sip" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageSip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sipfrag" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageSipfrag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/tracking-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageTrackingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.si.simp" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageVndSiSimp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.wfa.wsc" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersMessagesInsertRequests.prototype, "messageVndWfaWsc", void 0);
    return GmailUsersMessagesInsertRequests;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertRequests };
var GmailUsersMessagesInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertSecurityOption1, _super);
    function GmailUsersMessagesInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesInsertSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesInsertSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertSecurityOption1 };
var GmailUsersMessagesInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertSecurityOption2, _super);
    function GmailUsersMessagesInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesInsertSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesInsertSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertSecurityOption2 };
var GmailUsersMessagesInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertSecurityOption3, _super);
    function GmailUsersMessagesInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesInsertSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersMessagesInsertSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertSecurityOption3 };
var GmailUsersMessagesInsertSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertSecurity, _super);
    function GmailUsersMessagesInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesInsertSecurityOption1)
    ], GmailUsersMessagesInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesInsertSecurityOption2)
    ], GmailUsersMessagesInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesInsertSecurityOption3)
    ], GmailUsersMessagesInsertSecurity.prototype, "option3", void 0);
    return GmailUsersMessagesInsertSecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertSecurity };
var GmailUsersMessagesInsertRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertRequest, _super);
    function GmailUsersMessagesInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesInsertPathParams)
    ], GmailUsersMessagesInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesInsertQueryParams)
    ], GmailUsersMessagesInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesInsertRequests)
    ], GmailUsersMessagesInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesInsertSecurity)
    ], GmailUsersMessagesInsertRequest.prototype, "security", void 0);
    return GmailUsersMessagesInsertRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertRequest };
var GmailUsersMessagesInsertResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesInsertResponse, _super);
    function GmailUsersMessagesInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], GmailUsersMessagesInsertResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesInsertResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesInsertResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesInsertResponse };
