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
var GmailUsersDraftsUpdatePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdatePathParams, _super);
    function GmailUsersDraftsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdatePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdatePathParams.prototype, "userId", void 0);
    return GmailUsersDraftsUpdatePathParams;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdatePathParams };
var GmailUsersDraftsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateQueryParams, _super);
    function GmailUsersDraftsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersDraftsUpdateQueryParams;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateQueryParams };
var GmailUsersDraftsUpdateRequests = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateRequests, _super);
    function GmailUsersDraftsUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/cpim" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageCpim", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/external-body" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageExternalBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/feedback-report" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageFeedbackReport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageGlobal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-delivery-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageGlobalDeliveryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-disposition-notification" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageGlobalDispositionNotification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/global-headers" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageGlobalHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/imdn+xml" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageImdnPlusXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/news" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageNews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/partial" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messagePartial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/rfc822" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageRfc822", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/s-http" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageShttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sip" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageSip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/sipfrag" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageSipfrag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/tracking-status" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageTrackingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.si.simp" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageVndSiSimp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=message/vnd.wfa.wsc" }),
        __metadata("design:type", Uint8Array)
    ], GmailUsersDraftsUpdateRequests.prototype, "messageVndWfaWsc", void 0);
    return GmailUsersDraftsUpdateRequests;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateRequests };
var GmailUsersDraftsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateSecurityOption1, _super);
    function GmailUsersDraftsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersDraftsUpdateSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateSecurityOption1 };
var GmailUsersDraftsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateSecurityOption2, _super);
    function GmailUsersDraftsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersDraftsUpdateSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateSecurityOption2 };
var GmailUsersDraftsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateSecurityOption3, _super);
    function GmailUsersDraftsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersDraftsUpdateSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateSecurityOption3 };
var GmailUsersDraftsUpdateSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateSecurityOption4, _super);
    function GmailUsersDraftsUpdateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsUpdateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsUpdateSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersDraftsUpdateSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateSecurityOption4 };
var GmailUsersDraftsUpdateSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateSecurity, _super);
    function GmailUsersDraftsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsUpdateSecurityOption1)
    ], GmailUsersDraftsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsUpdateSecurityOption2)
    ], GmailUsersDraftsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsUpdateSecurityOption3)
    ], GmailUsersDraftsUpdateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsUpdateSecurityOption4)
    ], GmailUsersDraftsUpdateSecurity.prototype, "option4", void 0);
    return GmailUsersDraftsUpdateSecurity;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateSecurity };
var GmailUsersDraftsUpdateRequest = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateRequest, _super);
    function GmailUsersDraftsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsUpdatePathParams)
    ], GmailUsersDraftsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsUpdateQueryParams)
    ], GmailUsersDraftsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsUpdateRequests)
    ], GmailUsersDraftsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsUpdateSecurity)
    ], GmailUsersDraftsUpdateRequest.prototype, "security", void 0);
    return GmailUsersDraftsUpdateRequest;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateRequest };
var GmailUsersDraftsUpdateResponse = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsUpdateResponse, _super);
    function GmailUsersDraftsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersDraftsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Draft)
    ], GmailUsersDraftsUpdateResponse.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersDraftsUpdateResponse.prototype, "statusCode", void 0);
    return GmailUsersDraftsUpdateResponse;
}(SpeakeasyBase));
export { GmailUsersDraftsUpdateResponse };
