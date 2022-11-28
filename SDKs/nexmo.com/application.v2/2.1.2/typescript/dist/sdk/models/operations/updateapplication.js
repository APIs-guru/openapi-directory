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
var UpdateApplicationPathParams = /** @class */ (function (_super) {
    __extends(UpdateApplicationPathParams, _super);
    function UpdateApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateApplicationPathParams.prototype, "id", void 0);
    return UpdateApplicationPathParams;
}(SpeakeasyBase));
export { UpdateApplicationPathParams };
var UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl.prototype, "httpMethod", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl };
var UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl.prototype, "httpMethod", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl };
var UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_url" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksInboundUrl)
    ], UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks.prototype, "inboundUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_url" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooksStatusUrl)
    ], UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks.prototype, "statusUrl", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks };
// UpdateApplication200ApplicationJsonCapabilitiesMessages
/**
 * Messages / Dispatch related configuration
**/
var UpdateApplication200ApplicationJsonCapabilitiesMessages = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesMessages, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesMessages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesMessagesWebhooks)
    ], UpdateApplication200ApplicationJsonCapabilitiesMessages.prototype, "webhooks", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesMessages;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesMessages };
var UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl.prototype, "httpMethod", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl };
var UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_url" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooksEventUrl)
    ], UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks.prototype, "eventUrl", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks };
// UpdateApplication200ApplicationJsonCapabilitiesRtc
/**
 * RTC / Conversation Service related configuration
**/
var UpdateApplication200ApplicationJsonCapabilitiesRtc = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesRtc, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesRtc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesRtcWebhooks)
    ], UpdateApplication200ApplicationJsonCapabilitiesRtc.prototype, "webhooks", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesRtc;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesRtc };
var UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl.prototype, "socketTimeout", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl };
var UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl.prototype, "socketTimeout", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl };
var UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection_timeout" }),
        __metadata("design:type", Number)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "connectionTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_method" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socket_timeout" }),
        __metadata("design:type", Number)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl.prototype, "socketTimeout", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl };
var UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=answer_url" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksAnswerUrl)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks.prototype, "answerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_url" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksEventUrl)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks.prototype, "eventUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fallback_answer_url" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooksFallbackAnswerUrl)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks.prototype, "fallbackAnswerUrl", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks };
// UpdateApplication200ApplicationJsonCapabilitiesVoice
/**
 * Voice related configuration
**/
var UpdateApplication200ApplicationJsonCapabilitiesVoice = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilitiesVoice, _super);
    function UpdateApplication200ApplicationJsonCapabilitiesVoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhooks" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesVoiceWebhooks)
    ], UpdateApplication200ApplicationJsonCapabilitiesVoice.prototype, "webhooks", void 0);
    return UpdateApplication200ApplicationJsonCapabilitiesVoice;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilitiesVoice };
// UpdateApplication200ApplicationJsonCapabilities
/**
 * Configuration for the products available in this application
**/
var UpdateApplication200ApplicationJsonCapabilities = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonCapabilities, _super);
    function UpdateApplication200ApplicationJsonCapabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesMessages)
    ], UpdateApplication200ApplicationJsonCapabilities.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rtc" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesRtc)
    ], UpdateApplication200ApplicationJsonCapabilities.prototype, "rtc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vbc" }),
        __metadata("design:type", Map)
    ], UpdateApplication200ApplicationJsonCapabilities.prototype, "vbc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voice" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilitiesVoice)
    ], UpdateApplication200ApplicationJsonCapabilities.prototype, "voice", void 0);
    return UpdateApplication200ApplicationJsonCapabilities;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonCapabilities };
var UpdateApplication200ApplicationJsonKeys = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonKeys, _super);
    function UpdateApplication200ApplicationJsonKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_key" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonKeys.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJsonKeys.prototype, "publicKey", void 0);
    return UpdateApplication200ApplicationJsonKeys;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonKeys };
// UpdateApplication200ApplicationJsonPrivacy
/**
 * Application privacy config
**/
var UpdateApplication200ApplicationJsonPrivacy = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJsonPrivacy, _super);
    function UpdateApplication200ApplicationJsonPrivacy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=improve_ai" }),
        __metadata("design:type", Boolean)
    ], UpdateApplication200ApplicationJsonPrivacy.prototype, "improveAi", void 0);
    return UpdateApplication200ApplicationJsonPrivacy;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJsonPrivacy };
var UpdateApplication200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateApplication200ApplicationJson, _super);
    function UpdateApplication200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonCapabilities)
    ], UpdateApplication200ApplicationJson.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keys" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonKeys)
    ], UpdateApplication200ApplicationJson.prototype, "keys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateApplication200ApplicationJson.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privacy" }),
        __metadata("design:type", UpdateApplication200ApplicationJsonPrivacy)
    ], UpdateApplication200ApplicationJson.prototype, "privacy", void 0);
    return UpdateApplication200ApplicationJson;
}(SpeakeasyBase));
export { UpdateApplication200ApplicationJson };
var UpdateApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateApplicationRequest, _super);
    function UpdateApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApplicationPathParams)
    ], UpdateApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], UpdateApplicationRequest.prototype, "request", void 0);
    return UpdateApplicationRequest;
}(SpeakeasyBase));
export { UpdateApplicationRequest };
var UpdateApplicationResponse = /** @class */ (function (_super) {
    __extends(UpdateApplicationResponse, _super);
    function UpdateApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateApplicationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateApplication200ApplicationJson)
    ], UpdateApplicationResponse.prototype, "updateApplication200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationResponse.prototype, "updateApplication400ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationResponse.prototype, "updateApplication401ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationResponse.prototype, "updateApplication404ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationResponse.prototype, "updateApplication405ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationResponse.prototype, "updateApplication406ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateApplicationResponse.prototype, "updateApplication415ApplicationJsonAny", void 0);
    return UpdateApplicationResponse;
}(SpeakeasyBase));
export { UpdateApplicationResponse };
