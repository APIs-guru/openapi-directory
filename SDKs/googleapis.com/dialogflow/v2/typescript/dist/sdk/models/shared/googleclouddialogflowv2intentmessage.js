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
import { GoogleCloudDialogflowV2IntentMessageBasicCard } from "./googleclouddialogflowv2intentmessagebasiccard";
import { GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard } from "./googleclouddialogflowv2intentmessagebrowsecarouselcard";
import { GoogleCloudDialogflowV2IntentMessageCard } from "./googleclouddialogflowv2intentmessagecard";
import { GoogleCloudDialogflowV2IntentMessageCarouselSelect } from "./googleclouddialogflowv2intentmessagecarouselselect";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion } from "./googleclouddialogflowv2intentmessagelinkoutsuggestion";
import { GoogleCloudDialogflowV2IntentMessageListSelect } from "./googleclouddialogflowv2intentmessagelistselect";
import { GoogleCloudDialogflowV2IntentMessageMediaContent } from "./googleclouddialogflowv2intentmessagemediacontent";
import { GoogleCloudDialogflowV2IntentMessageQuickReplies } from "./googleclouddialogflowv2intentmessagequickreplies";
import { GoogleCloudDialogflowV2IntentMessageSimpleResponses } from "./googleclouddialogflowv2intentmessagesimpleresponses";
import { GoogleCloudDialogflowV2IntentMessageSuggestions } from "./googleclouddialogflowv2intentmessagesuggestions";
import { GoogleCloudDialogflowV2IntentMessageTableCard } from "./googleclouddialogflowv2intentmessagetablecard";
import { GoogleCloudDialogflowV2IntentMessageText } from "./googleclouddialogflowv2intentmessagetext";
export var GoogleCloudDialogflowV2IntentMessagePlatformEnum;
(function (GoogleCloudDialogflowV2IntentMessagePlatformEnum) {
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["Facebook"] = "FACEBOOK";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["Slack"] = "SLACK";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["Telegram"] = "TELEGRAM";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["Kik"] = "KIK";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["Skype"] = "SKYPE";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["Line"] = "LINE";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["Viber"] = "VIBER";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["ActionsOnGoogle"] = "ACTIONS_ON_GOOGLE";
    GoogleCloudDialogflowV2IntentMessagePlatformEnum["GoogleHangouts"] = "GOOGLE_HANGOUTS";
})(GoogleCloudDialogflowV2IntentMessagePlatformEnum || (GoogleCloudDialogflowV2IntentMessagePlatformEnum = {}));
// GoogleCloudDialogflowV2IntentMessage
/**
 * A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
**/
var GoogleCloudDialogflowV2IntentMessage = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2IntentMessage, _super);
    function GoogleCloudDialogflowV2IntentMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageBasicCard)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "basicCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browseCarouselCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "browseCarouselCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=card" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageCard)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "card", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=carouselSelect" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageCarouselSelect)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "carouselSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageImage)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkOutSuggestion" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "linkOutSuggestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listSelect" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageListSelect)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "listSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mediaContent" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageMediaContent)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "mediaContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quickReplies" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageQuickReplies)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "quickReplies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simpleResponses" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageSimpleResponses)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "simpleResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestions" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageSuggestions)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "suggestions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableCard" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageTableCard)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "tableCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", GoogleCloudDialogflowV2IntentMessageText)
    ], GoogleCloudDialogflowV2IntentMessage.prototype, "text", void 0);
    return GoogleCloudDialogflowV2IntentMessage;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2IntentMessage };
