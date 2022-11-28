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
import { GoogleCloudDialogflowV2beta1IntentMessage } from "./googleclouddialogflowv2beta1intentmessage";
import { GoogleCloudDialogflowV2beta1Context } from "./googleclouddialogflowv2beta1context";
import { GoogleCloudDialogflowV2beta1IntentParameter } from "./googleclouddialogflowv2beta1intentparameter";
import { GoogleCloudDialogflowV2beta1IntentTrainingPhrase } from "./googleclouddialogflowv2beta1intenttrainingphrase";
import { GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo } from "./googleclouddialogflowv2beta1intentfollowupintentinfo";
export var GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum;
(function (GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum) {
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Facebook"] = "FACEBOOK";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Slack"] = "SLACK";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Telegram"] = "TELEGRAM";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Kik"] = "KIK";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Skype"] = "SKYPE";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Line"] = "LINE";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Viber"] = "VIBER";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["ActionsOnGoogle"] = "ACTIONS_ON_GOOGLE";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["Telephony"] = "TELEPHONY";
    GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum["GoogleHangouts"] = "GOOGLE_HANGOUTS";
})(GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum || (GoogleCloudDialogflowV2beta1IntentDefaultResponsePlatformsEnum = {}));
export var GoogleCloudDialogflowV2beta1IntentWebhookStateEnum;
(function (GoogleCloudDialogflowV2beta1IntentWebhookStateEnum) {
    GoogleCloudDialogflowV2beta1IntentWebhookStateEnum["WebhookStateUnspecified"] = "WEBHOOK_STATE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1IntentWebhookStateEnum["WebhookStateEnabled"] = "WEBHOOK_STATE_ENABLED";
    GoogleCloudDialogflowV2beta1IntentWebhookStateEnum["WebhookStateEnabledForSlotFilling"] = "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING";
})(GoogleCloudDialogflowV2beta1IntentWebhookStateEnum || (GoogleCloudDialogflowV2beta1IntentWebhookStateEnum = {}));
// GoogleCloudDialogflowV2beta1IntentInput
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
var GoogleCloudDialogflowV2beta1IntentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1IntentInput, _super);
    function GoogleCloudDialogflowV2beta1IntentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "defaultResponsePlatforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContextNames" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "inputContextNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFallback" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "isFallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2beta1IntentMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mlDisabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "mlDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mlEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "mlEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2beta1Context }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2beta1IntentParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "parentFollowupIntentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetContexts" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "resetContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2beta1IntentTrainingPhrase }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "trainingPhrases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookState" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1IntentInput.prototype, "webhookState", void 0);
    return GoogleCloudDialogflowV2beta1IntentInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1IntentInput };
// GoogleCloudDialogflowV2beta1Intent
/**
 * An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
**/
var GoogleCloudDialogflowV2beta1Intent = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1Intent, _super);
    function GoogleCloudDialogflowV2beta1Intent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultResponsePlatforms" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "defaultResponsePlatforms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endInteraction" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "endInteraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followupIntentInfo", elemType: GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "followupIntentInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputContextNames" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "inputContextNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFallback" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "isFallback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=liveAgentHandoff" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "liveAgentHandoff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowV2beta1IntentMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mlDisabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "mlDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mlEnabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "mlEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputContexts", elemType: GoogleCloudDialogflowV2beta1Context }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "outputContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudDialogflowV2beta1IntentParameter }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFollowupIntentName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "parentFollowupIntentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetContexts" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "resetContexts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootFollowupIntentName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "rootFollowupIntentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingPhrases", elemType: GoogleCloudDialogflowV2beta1IntentTrainingPhrase }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "trainingPhrases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookState" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Intent.prototype, "webhookState", void 0);
    return GoogleCloudDialogflowV2beta1Intent;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1Intent };
