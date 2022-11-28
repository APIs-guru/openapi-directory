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
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCard } from "./googleclouddialogflowv2beta1intentmessagebasiccard";
import { GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard } from "./googleclouddialogflowv2beta1intentmessagebrowsecarouselcard";
import { GoogleCloudDialogflowV2beta1IntentMessageCard } from "./googleclouddialogflowv2beta1intentmessagecard";
import { GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect } from "./googleclouddialogflowv2beta1intentmessagecarouselselect";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion } from "./googleclouddialogflowv2beta1intentmessagelinkoutsuggestion";
import { GoogleCloudDialogflowV2beta1IntentMessageListSelect } from "./googleclouddialogflowv2beta1intentmessagelistselect";
import { GoogleCloudDialogflowV2beta1IntentMessageMediaContent } from "./googleclouddialogflowv2beta1intentmessagemediacontent";
import { GoogleCloudDialogflowV2beta1IntentMessageQuickReplies } from "./googleclouddialogflowv2beta1intentmessagequickreplies";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard } from "./googleclouddialogflowv2beta1intentmessagerbmcarouselcard";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard } from "./googleclouddialogflowv2beta1intentmessagerbmstandalonecard";
import { GoogleCloudDialogflowV2beta1IntentMessageRbmText } from "./googleclouddialogflowv2beta1intentmessagerbmtext";
import { GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses } from "./googleclouddialogflowv2beta1intentmessagesimpleresponses";
import { GoogleCloudDialogflowV2beta1IntentMessageSuggestions } from "./googleclouddialogflowv2beta1intentmessagesuggestions";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCard } from "./googleclouddialogflowv2beta1intentmessagetablecard";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio } from "./googleclouddialogflowv2beta1intentmessagetelephonyplayaudio";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech } from "./googleclouddialogflowv2beta1intentmessagetelephonysynthesizespeech";
import { GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall } from "./googleclouddialogflowv2beta1intentmessagetelephonytransfercall";
import { GoogleCloudDialogflowV2beta1IntentMessageText } from "./googleclouddialogflowv2beta1intentmessagetext";
export var GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum;
(function (GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum) {
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Facebook"] = "FACEBOOK";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Slack"] = "SLACK";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Telegram"] = "TELEGRAM";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Kik"] = "KIK";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Skype"] = "SKYPE";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Line"] = "LINE";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Viber"] = "VIBER";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["ActionsOnGoogle"] = "ACTIONS_ON_GOOGLE";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["Telephony"] = "TELEPHONY";
    GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum["GoogleHangouts"] = "GOOGLE_HANGOUTS";
})(GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum || (GoogleCloudDialogflowV2beta1IntentMessagePlatformEnum = {}));
// GoogleCloudDialogflowV2beta1IntentMessage
/**
 * Corresponds to the `Response` field in the Dialogflow console.
**/
var GoogleCloudDialogflowV2beta1IntentMessage = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1IntentMessage, _super);
    function GoogleCloudDialogflowV2beta1IntentMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageBasicCard)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "basicCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browseCarouselCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "browseCarouselCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageCard)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "card", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carouselSelect" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "carouselSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageImage)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkOutSuggestion" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "linkOutSuggestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listSelect" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageListSelect)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "listSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaContent" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageMediaContent)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "mediaContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quickReplies" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageQuickReplies)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "quickReplies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rbmCarouselRichCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "rbmCarouselRichCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rbmStandaloneRichCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "rbmStandaloneRichCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rbmText" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageRbmText)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "rbmText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simpleResponses" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "simpleResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestions" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageSuggestions)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "suggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageTableCard)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "tableCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonyPlayAudio" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "telephonyPlayAudio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonySynthesizeSpeech" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "telephonySynthesizeSpeech", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telephonyTransferCall" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "telephonyTransferCall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1IntentMessageText)
    ], GoogleCloudDialogflowV2beta1IntentMessage.prototype, "text", void 0);
    return GoogleCloudDialogflowV2beta1IntentMessage;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1IntentMessage };
