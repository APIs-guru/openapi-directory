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
import { GoogleCloudDialogflowV2AutomatedAgentConfig } from "./googleclouddialogflowv2automatedagentconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfig } from "./googleclouddialogflowv2humanagentassistantconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfig } from "./googleclouddialogflowv2humanagenthandoffconfig";
import { GoogleCloudDialogflowV2LoggingConfig } from "./googleclouddialogflowv2loggingconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
import { GoogleCloudDialogflowV2SpeechToTextConfig } from "./googleclouddialogflowv2speechtotextconfig";
// GoogleCloudDialogflowV2ConversationProfileInput
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
var GoogleCloudDialogflowV2ConversationProfileInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2ConversationProfileInput, _super);
    function GoogleCloudDialogflowV2ConversationProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2AutomatedAgentConfig)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "automatedAgentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2HumanAgentAssistantConfig)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "humanAgentAssistantConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2HumanAgentHandoffConfig)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "humanAgentHandoffConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2LoggingConfig)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2NotificationConfig)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "newMessageEventNotificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2NotificationConfig)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securitySettings" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "securitySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sttConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2SpeechToTextConfig)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "sttConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfileInput.prototype, "timeZone", void 0);
    return GoogleCloudDialogflowV2ConversationProfileInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2ConversationProfileInput };
// GoogleCloudDialogflowV2ConversationProfile
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
var GoogleCloudDialogflowV2ConversationProfile = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2ConversationProfile, _super);
    function GoogleCloudDialogflowV2ConversationProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2AutomatedAgentConfig)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "automatedAgentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2HumanAgentAssistantConfig)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "humanAgentAssistantConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2HumanAgentHandoffConfig)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "humanAgentHandoffConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2LoggingConfig)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2NotificationConfig)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "newMessageEventNotificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2NotificationConfig)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securitySettings" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "securitySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sttConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2SpeechToTextConfig)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "sttConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationProfile.prototype, "updateTime", void 0);
    return GoogleCloudDialogflowV2ConversationProfile;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2ConversationProfile };
