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
import { GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess } from "./googleclouddialogflowcxv3beta1responsemessageconversationsuccess";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff } from "./googleclouddialogflowcxv3beta1responsemessageliveagenthandoff";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio } from "./googleclouddialogflowcxv3beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText } from "./googleclouddialogflowcxv3beta1responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio } from "./googleclouddialogflowcxv3beta1responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall } from "./googleclouddialogflowcxv3beta1responsemessagetelephonytransfercall";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageText } from "./googleclouddialogflowcxv3beta1responsemessagetext";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput } from "./googleclouddialogflowcxv3beta1responsemessagemixedaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput } from "./googleclouddialogflowcxv3beta1responsemessageoutputaudiotext";
import { GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput } from "./googleclouddialogflowcxv3beta1responsemessageplayaudio";
import { GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput } from "./googleclouddialogflowcxv3beta1responsemessagetext";
// GoogleCloudDialogflowCxV3beta1ResponseMessage
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
var GoogleCloudDialogflowCxV3beta1ResponseMessage = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1ResponseMessage, _super);
    function GoogleCloudDialogflowCxV3beta1ResponseMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationSuccess" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "conversationSuccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mixedAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "mixedAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudioText" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "outputAudioText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "playAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "telephonyTransferCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageText)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessage.prototype, "text", void 0);
    return GoogleCloudDialogflowCxV3beta1ResponseMessage;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1ResponseMessage };
// GoogleCloudDialogflowCxV3beta1ResponseMessageInput
/**
 * Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
**/
var GoogleCloudDialogflowCxV3beta1ResponseMessageInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1ResponseMessageInput, _super);
    function GoogleCloudDialogflowCxV3beta1ResponseMessageInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationSuccess" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "conversationSuccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mixedAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioInput)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "mixedAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputAudioText" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioTextInput)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "outputAudioText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=playAudio" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "playAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "telephonyTransferCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput)
    ], GoogleCloudDialogflowCxV3beta1ResponseMessageInput.prototype, "text", void 0);
    return GoogleCloudDialogflowCxV3beta1ResponseMessageInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1ResponseMessageInput };
