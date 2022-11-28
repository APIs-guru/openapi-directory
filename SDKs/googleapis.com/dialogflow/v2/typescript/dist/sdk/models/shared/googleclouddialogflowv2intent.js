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
import { GoogleCloudDialogflowV2IntentFollowupIntentInfo } from "./googleclouddialogflowv2intentfollowupintentinfo";
import { GoogleCloudDialogflowV2IntentMessage } from "./googleclouddialogflowv2intentmessage";
import { GoogleCloudDialogflowV2Context } from "./googleclouddialogflowv2context";
import { GoogleCloudDialogflowV2IntentParameter } from "./googleclouddialogflowv2intentparameter";
import { GoogleCloudDialogflowV2IntentTrainingPhrase } from "./googleclouddialogflowv2intenttrainingphrase";
export var GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum;
(function (GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum) {
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["Facebook"] = "FACEBOOK";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["Slack"] = "SLACK";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["Telegram"] = "TELEGRAM";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["Kik"] = "KIK";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["Skype"] = "SKYPE";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["Line"] = "LINE";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["Viber"] = "VIBER";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["ActionsOnGoogle"] = "ACTIONS_ON_GOOGLE";
    GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum["GoogleHangouts"] = "GOOGLE_HANGOUTS";
})(GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum || (GoogleCloudDialogflowV2IntentDefaultResponsePlatformsEnum = {}));
export var GoogleCloudDialogflowV2IntentWebhookStateEnum;
(function (GoogleCloudDialogflowV2IntentWebhookStateEnum) {
    GoogleCloudDialogflowV2IntentWebhookStateEnum["WebhookStateUnspecified"] = "WEBHOOK_STATE_UNSPECIFIED";
    GoogleCloudDialogflowV2IntentWebhookStateEnum["WebhookStateEnabled"] = "WEBHOOK_STATE_ENABLED";
    GoogleCloudDialogflowV2IntentWebhookStateEnum["WebhookStateEnabledForSlotFilling"] = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING";
})(GoogleCloudDialogflowV2IntentWebhookStateEnum || (GoogleCloudDialogflowV2IntentWebhookStateEnum = {}));
// GoogleCloudDialogflowV2Intent
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
var GoogleCloudDialogflowV2Intent = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2Intent, _super);
    function GoogleCloudDialogflowV2Intent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Intent.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "defaultResponsePlatforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Intent.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2Intent.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followupIntentInfo", elemType: GoogleCloudDialogflowV2IntentFollowupIntentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "followupIntentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContextNames" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "inputContextNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFallback" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2Intent.prototype, "isFallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2Intent.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2IntentMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mlDisabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2Intent.prototype, "mlDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Intent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2Context }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2IntentParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Intent.prototype, "parentFollowupIntentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2Intent.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetContexts" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2Intent.prototype, "resetContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootFollowupIntentName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Intent.prototype, "rootFollowupIntentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2IntentTrainingPhrase }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Intent.prototype, "trainingPhrases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookState" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Intent.prototype, "webhookState", void 0);
    return GoogleCloudDialogflowV2Intent;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2Intent };
// GoogleCloudDialogflowV2IntentInput
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
var GoogleCloudDialogflowV2IntentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2IntentInput, _super);
    function GoogleCloudDialogflowV2IntentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "defaultResponsePlatforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContextNames" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "inputContextNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFallback" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "isFallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2IntentMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mlDisabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "mlDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2Context }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2IntentParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "parentFollowupIntentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetContexts" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "resetContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2IntentTrainingPhrase }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "trainingPhrases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookState" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2IntentInput.prototype, "webhookState", void 0);
    return GoogleCloudDialogflowV2IntentInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2IntentInput };
