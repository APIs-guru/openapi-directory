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
import { GoogleCloudDialogflowV2beta1AutomatedAgentConfig } from "./googleclouddialogflowv2beta1automatedagentconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfig";
import { GoogleCloudDialogflowV2beta1LoggingConfig } from "./googleclouddialogflowv2beta1loggingconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";
import { GoogleCloudDialogflowV2beta1SpeechToTextConfig } from "./googleclouddialogflowv2beta1speechtotextconfig";
// GoogleCloudDialogflowV2beta1ConversationProfile
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
var GoogleCloudDialogflowV2beta1ConversationProfile = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1ConversationProfile, _super);
    function GoogleCloudDialogflowV2beta1ConversationProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1AutomatedAgentConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "automatedAgentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "humanAgentAssistantConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "humanAgentHandoffConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1LoggingConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1NotificationConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "newMessageEventNotificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1NotificationConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securitySettings" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "securitySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sttConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SpeechToTextConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "sttConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfile.prototype, "updateTime", void 0);
    return GoogleCloudDialogflowV2beta1ConversationProfile;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1ConversationProfile };
// GoogleCloudDialogflowV2beta1ConversationProfileInput
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
var GoogleCloudDialogflowV2beta1ConversationProfileInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1ConversationProfileInput, _super);
    function GoogleCloudDialogflowV2beta1ConversationProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1AutomatedAgentConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "automatedAgentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "humanAgentAssistantConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "humanAgentHandoffConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loggingConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1LoggingConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "loggingConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1NotificationConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "newMessageEventNotificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notificationConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1NotificationConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "notificationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securitySettings" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "securitySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sttConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SpeechToTextConfig)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "sttConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationProfileInput.prototype, "timeZone", void 0);
    return GoogleCloudDialogflowV2beta1ConversationProfileInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1ConversationProfileInput };
