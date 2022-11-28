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
var GmailUsersDraftsCreatePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreatePathParams, _super);
    function GmailUsersDraftsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreatePathParams.prototype, "userId", void 0);
    return GmailUsersDraftsCreatePathParams;
}(SpeakeasyBase));
export { GmailUsersDraftsCreatePathParams };
var GmailUsersDraftsCreateQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateQueryParams, _super);
    function GmailUsersDraftsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersDraftsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersDraftsCreateQueryParams;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateQueryParams };
var GmailUsersDraftsCreateRequests = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateRequests, _super);
    function GmailUsersDraftsCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/cpim" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageCpim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/external-body" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageExternalBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/feedback-report" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageFeedbackReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageGlobal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageGlobalDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageGlobalDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-headers" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageGlobalHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/imdn+xml" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageImdnPlusXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/news" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/partial" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messagePartial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/rfc822" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageRfc822", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/s-http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageShttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sip" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageSip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sipfrag" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageSipfrag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/tracking-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageTrackingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.si.simp" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageVndSiSimp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.wfa.wsc" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsCreateRequests.prototype, "messageVndWfaWsc", void 0);
    return GmailUsersDraftsCreateRequests;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateRequests };
var GmailUsersDraftsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateSecurityOption1, _super);
    function GmailUsersDraftsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersDraftsCreateSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateSecurityOption1 };
var GmailUsersDraftsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateSecurityOption2, _super);
    function GmailUsersDraftsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersDraftsCreateSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateSecurityOption2 };
var GmailUsersDraftsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateSecurityOption3, _super);
    function GmailUsersDraftsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersDraftsCreateSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateSecurityOption3 };
var GmailUsersDraftsCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateSecurityOption4, _super);
    function GmailUsersDraftsCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsCreateSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersDraftsCreateSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateSecurityOption4 };
var GmailUsersDraftsCreateSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateSecurity, _super);
    function GmailUsersDraftsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsCreateSecurityOption1)
    ], GmailUsersDraftsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsCreateSecurityOption2)
    ], GmailUsersDraftsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsCreateSecurityOption3)
    ], GmailUsersDraftsCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsCreateSecurityOption4)
    ], GmailUsersDraftsCreateSecurity.prototype, "option4", void 0);
    return GmailUsersDraftsCreateSecurity;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateSecurity };
var GmailUsersDraftsCreateRequest = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateRequest, _super);
    function GmailUsersDraftsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsCreatePathParams)
    ], GmailUsersDraftsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsCreateQueryParams)
    ], GmailUsersDraftsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsCreateRequests)
    ], GmailUsersDraftsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsCreateSecurity)
    ], GmailUsersDraftsCreateRequest.prototype, "security", void 0);
    return GmailUsersDraftsCreateRequest;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateRequest };
var GmailUsersDraftsCreateResponse = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsCreateResponse, _super);
    function GmailUsersDraftsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersDraftsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Draft)
    ], GmailUsersDraftsCreateResponse.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersDraftsCreateResponse.prototype, "statusCode", void 0);
    return GmailUsersDraftsCreateResponse;
}(SpeakeasyBase));
export { GmailUsersDraftsCreateResponse };
