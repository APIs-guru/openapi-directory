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
var CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl, _super);
    function CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl.prototype, "httpMethod", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl };
var CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl, _super);
    function CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl.prototype, "httpMethod", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl };
var CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks, _super);
    function CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_url" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl)
    ], CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks.prototype, "inboundUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_url" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl)
    ], CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks.prototype, "statusUrl", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks };
// CreateApplication201ApplicationJsonCapabilitiesMessages
/**
 * Messages / Dispatch related configuration
**/
var CreateApplication201ApplicationJsonCapabilitiesMessages = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesMessages, _super);
    function CreateApplication201ApplicationJsonCapabilitiesMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesMessagesWebhooks)
    ], CreateApplication201ApplicationJsonCapabilitiesMessages.prototype, "webhooks", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesMessages;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesMessages };
var CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl, _super);
    function CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl.prototype, "httpMethod", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl };
var CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks, _super);
    function CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_url" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesRtcWebhooksEventUrl)
    ], CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks.prototype, "eventUrl", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks };
// CreateApplication201ApplicationJsonCapabilitiesRtc
/**
 * RTC / Conversation Service related configuration
**/
var CreateApplication201ApplicationJsonCapabilitiesRtc = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesRtc, _super);
    function CreateApplication201ApplicationJsonCapabilitiesRtc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesRtcWebhooks)
    ], CreateApplication201ApplicationJsonCapabilitiesRtc.prototype, "webhooks", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesRtc;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesRtc };
var CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl, _super);
    function CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "socketTimeout", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl };
var CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl, _super);
    function CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "socketTimeout", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl };
var CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl, _super);
    function CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "socketTimeout", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl };
var CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks, _super);
    function CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer_url" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks.prototype, "answerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_url" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksEventUrl)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks.prototype, "eventUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallback_answer_url" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl)
    ], CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks.prototype, "fallbackAnswerUrl", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks };
// CreateApplication201ApplicationJsonCapabilitiesVoice
/**
 * Voice related configuration
**/
var CreateApplication201ApplicationJsonCapabilitiesVoice = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilitiesVoice, _super);
    function CreateApplication201ApplicationJsonCapabilitiesVoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesVoiceWebhooks)
    ], CreateApplication201ApplicationJsonCapabilitiesVoice.prototype, "webhooks", void 0);
    return CreateApplication201ApplicationJsonCapabilitiesVoice;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilitiesVoice };
// CreateApplication201ApplicationJsonCapabilities
/**
 * Configuration for the products available in this application
**/
var CreateApplication201ApplicationJsonCapabilities = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonCapabilities, _super);
    function CreateApplication201ApplicationJsonCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesMessages)
    ], CreateApplication201ApplicationJsonCapabilities.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rtc" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesRtc)
    ], CreateApplication201ApplicationJsonCapabilities.prototype, "rtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vbc" }),
        __metadata("design:type", Map)
    ], CreateApplication201ApplicationJsonCapabilities.prototype, "vbc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilitiesVoice)
    ], CreateApplication201ApplicationJsonCapabilities.prototype, "voice", void 0);
    return CreateApplication201ApplicationJsonCapabilities;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonCapabilities };
var CreateApplication201ApplicationJsonKeys = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonKeys, _super);
    function CreateApplication201ApplicationJsonKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_key" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonKeys.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJsonKeys.prototype, "publicKey", void 0);
    return CreateApplication201ApplicationJsonKeys;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonKeys };
// CreateApplication201ApplicationJsonPrivacy
/**
 * Application privacy config
**/
var CreateApplication201ApplicationJsonPrivacy = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJsonPrivacy, _super);
    function CreateApplication201ApplicationJsonPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=improve_ai" }),
        __metadata("design:type", Boolean)
    ], CreateApplication201ApplicationJsonPrivacy.prototype, "improveAi", void 0);
    return CreateApplication201ApplicationJsonPrivacy;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJsonPrivacy };
var CreateApplication201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateApplication201ApplicationJson, _super);
    function CreateApplication201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", CreateApplication201ApplicationJsonCapabilities)
    ], CreateApplication201ApplicationJson.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys" }),
        __metadata("design:type", CreateApplication201ApplicationJsonKeys)
    ], CreateApplication201ApplicationJson.prototype, "keys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateApplication201ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", CreateApplication201ApplicationJsonPrivacy)
    ], CreateApplication201ApplicationJson.prototype, "privacy", void 0);
    return CreateApplication201ApplicationJson;
}(SpeakeasyBase));
export { CreateApplication201ApplicationJson };
var CreateApplicationRequest = /** @class */ (function (_super) {
    __extends(CreateApplicationRequest, _super);
    function CreateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], CreateApplicationRequest.prototype, "request", void 0);
    return CreateApplicationRequest;
}(SpeakeasyBase));
export { CreateApplicationRequest };
var CreateApplicationResponse = /** @class */ (function (_super) {
    __extends(CreateApplicationResponse, _super);
    function CreateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateApplication201ApplicationJson)
    ], CreateApplicationResponse.prototype, "createApplication201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication400ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication401ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication405ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication406ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateApplicationResponse.prototype, "createApplication415ApplicationJsonAny", void 0);
    return CreateApplicationResponse;
}(SpeakeasyBase));
export { CreateApplicationResponse };
