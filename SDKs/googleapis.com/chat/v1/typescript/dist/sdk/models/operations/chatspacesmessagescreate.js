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
var ChatSpacesMessagesCreatePathParams = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesCreatePathParams, _super);
    function ChatSpacesMessagesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreatePathParams.prototype, "parent", void 0);
    return ChatSpacesMessagesCreatePathParams;
}(SpeakeasyBase));
export { ChatSpacesMessagesCreatePathParams };
export var ChatSpacesMessagesCreateMessageReplyOptionEnum;
(function (ChatSpacesMessagesCreateMessageReplyOptionEnum) {
    ChatSpacesMessagesCreateMessageReplyOptionEnum["MessageReplyOptionUnspecified"] = "MESSAGE_REPLY_OPTION_UNSPECIFIED";
    ChatSpacesMessagesCreateMessageReplyOptionEnum["ReplyMessageFallbackToNewThread"] = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD";
    ChatSpacesMessagesCreateMessageReplyOptionEnum["ReplyMessageOrFail"] = "REPLY_MESSAGE_OR_FAIL";
})(ChatSpacesMessagesCreateMessageReplyOptionEnum || (ChatSpacesMessagesCreateMessageReplyOptionEnum = {}));
var ChatSpacesMessagesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesCreateQueryParams, _super);
    function ChatSpacesMessagesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageId" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "messageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageReplyOption" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "messageReplyOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threadKey" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "threadKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ChatSpacesMessagesCreateQueryParams;
}(SpeakeasyBase));
export { ChatSpacesMessagesCreateQueryParams };
var ChatSpacesMessagesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesCreateSecurityOption1, _super);
    function ChatSpacesMessagesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChatSpacesMessagesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChatSpacesMessagesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return ChatSpacesMessagesCreateSecurityOption1;
}(SpeakeasyBase));
export { ChatSpacesMessagesCreateSecurityOption1 };
var ChatSpacesMessagesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesCreateSecurityOption2, _super);
    function ChatSpacesMessagesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChatSpacesMessagesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChatSpacesMessagesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return ChatSpacesMessagesCreateSecurityOption2;
}(SpeakeasyBase));
export { ChatSpacesMessagesCreateSecurityOption2 };
var ChatSpacesMessagesCreateSecurity = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesCreateSecurity, _super);
    function ChatSpacesMessagesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChatSpacesMessagesCreateSecurityOption1)
    ], ChatSpacesMessagesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChatSpacesMessagesCreateSecurityOption2)
    ], ChatSpacesMessagesCreateSecurity.prototype, "option2", void 0);
    return ChatSpacesMessagesCreateSecurity;
}(SpeakeasyBase));
export { ChatSpacesMessagesCreateSecurity };
var ChatSpacesMessagesCreateRequest = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesCreateRequest, _super);
    function ChatSpacesMessagesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesCreatePathParams)
    ], ChatSpacesMessagesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesCreateQueryParams)
    ], ChatSpacesMessagesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MessageInput)
    ], ChatSpacesMessagesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesCreateSecurity)
    ], ChatSpacesMessagesCreateRequest.prototype, "security", void 0);
    return ChatSpacesMessagesCreateRequest;
}(SpeakeasyBase));
export { ChatSpacesMessagesCreateRequest };
var ChatSpacesMessagesCreateResponse = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesCreateResponse, _super);
    function ChatSpacesMessagesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChatSpacesMessagesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], ChatSpacesMessagesCreateResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChatSpacesMessagesCreateResponse.prototype, "statusCode", void 0);
    return ChatSpacesMessagesCreateResponse;
}(SpeakeasyBase));
export { ChatSpacesMessagesCreateResponse };
