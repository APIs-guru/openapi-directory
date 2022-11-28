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
import { GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess } from "./googleclouddialogflowcxv3responsemessageconversationsuccess";
import { GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowcxv3responsemessageliveagenthandoff";
import { GoogleCloudDialogflowCxV3ResponseMessageMixedAudio } from "./googleclouddialogflowcxv3responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText } from "./googleclouddialogflowcxv3responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3ResponseMessagePlayAudio } from "./googleclouddialogflowcxv3responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowcxv3responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowCxV3ResponseMessageText } from "./googleclouddialogflowcxv3responsemessagetext";
import { GoogleCloudDialogflowCxV3ResponseMessageMixedAudioInput } from "./googleclouddialogflowcxv3responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput } from "./googleclouddialogflowcxv3responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput } from "./googleclouddialogflowcxv3responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3ResponseMessageTextInput } from "./googleclouddialogflowcxv3responsemessagetext";
// GoogleCloudDialogflowCxV3ResponseMessage
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
var GoogleCloudDialogflowCxV3ResponseMessage = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ResponseMessage, _super);
    function GoogleCloudDialogflowCxV3ResponseMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationSuccess" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "conversationSuccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mixedAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageMixedAudio)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "mixedAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudioText" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "outputAudioText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessagePlayAudio)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "playAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "telephonyTransferCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageText)
    ], GoogleCloudDialogflowCxV3ResponseMessage.prototype, "text", void 0);
    return GoogleCloudDialogflowCxV3ResponseMessage;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ResponseMessage };
// GoogleCloudDialogflowCxV3ResponseMessageInput
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
var GoogleCloudDialogflowCxV3ResponseMessageInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ResponseMessageInput, _super);
    function GoogleCloudDialogflowCxV3ResponseMessageInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationSuccess" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "conversationSuccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mixedAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageMixedAudioInput)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "mixedAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudioText" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "outputAudioText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessagePlayAudioInput)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "playAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageTelephonyTransferCall)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "telephonyTransferCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageTextInput)
    ], GoogleCloudDialogflowCxV3ResponseMessageInput.prototype, "text", void 0);
    return GoogleCloudDialogflowCxV3ResponseMessageInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ResponseMessageInput };
