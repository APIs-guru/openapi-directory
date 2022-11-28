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
var ChatSpacesWebhooksPathParams = /** @class */ (function (_super) {
    __extends(ChatSpacesWebhooksPathParams, _super);
    function ChatSpacesWebhooksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksPathParams.prototype, "parent", void 0);
    return ChatSpacesWebhooksPathParams;
}(SpeakeasyBase));
export { ChatSpacesWebhooksPathParams };
export var ChatSpacesWebhooksMessageReplyOptionEnum;
(function (ChatSpacesWebhooksMessageReplyOptionEnum) {
    ChatSpacesWebhooksMessageReplyOptionEnum["MessageReplyOptionUnspecified"] = "MESSAGE_REPLY_OPTION_UNSPECIFIED";
    ChatSpacesWebhooksMessageReplyOptionEnum["ReplyMessageFallbackToNewThread"] = "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD";
    ChatSpacesWebhooksMessageReplyOptionEnum["ReplyMessageOrFail"] = "REPLY_MESSAGE_OR_FAIL";
})(ChatSpacesWebhooksMessageReplyOptionEnum || (ChatSpacesWebhooksMessageReplyOptionEnum = {}));
var ChatSpacesWebhooksQueryParams = /** @class */ (function (_super) {
    __extends(ChatSpacesWebhooksQueryParams, _super);
    function ChatSpacesWebhooksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageId" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "messageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageReplyOption" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "messageReplyOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChatSpacesWebhooksQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threadKey" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "threadKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksQueryParams.prototype, "uploadProtocol", void 0);
    return ChatSpacesWebhooksQueryParams;
}(SpeakeasyBase));
export { ChatSpacesWebhooksQueryParams };
var ChatSpacesWebhooksRequest = /** @class */ (function (_super) {
    __extends(ChatSpacesWebhooksRequest, _super);
    function ChatSpacesWebhooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesWebhooksPathParams)
    ], ChatSpacesWebhooksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesWebhooksQueryParams)
    ], ChatSpacesWebhooksRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MessageInput)
    ], ChatSpacesWebhooksRequest.prototype, "request", void 0);
    return ChatSpacesWebhooksRequest;
}(SpeakeasyBase));
export { ChatSpacesWebhooksRequest };
var ChatSpacesWebhooksResponse = /** @class */ (function (_super) {
    __extends(ChatSpacesWebhooksResponse, _super);
    function ChatSpacesWebhooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChatSpacesWebhooksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], ChatSpacesWebhooksResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChatSpacesWebhooksResponse.prototype, "statusCode", void 0);
    return ChatSpacesWebhooksResponse;
}(SpeakeasyBase));
export { ChatSpacesWebhooksResponse };
