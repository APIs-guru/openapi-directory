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
import { GoogleCloudDialogflowV2ConversationPhoneNumber } from "./googleclouddialogflowv2conversationphonenumber";
export var GoogleCloudDialogflowV2ConversationConversationStageEnum;
(function (GoogleCloudDialogflowV2ConversationConversationStageEnum) {
    GoogleCloudDialogflowV2ConversationConversationStageEnum["ConversationStageUnspecified"] = "CONVERSATION_STAGE_UNSPECIFIED";
    GoogleCloudDialogflowV2ConversationConversationStageEnum["VirtualAgentStage"] = "VIRTUAL_AGENT_STAGE";
    GoogleCloudDialogflowV2ConversationConversationStageEnum["HumanAssistStage"] = "HUMAN_ASSIST_STAGE";
})(GoogleCloudDialogflowV2ConversationConversationStageEnum || (GoogleCloudDialogflowV2ConversationConversationStageEnum = {}));
export var GoogleCloudDialogflowV2ConversationLifecycleStateEnum;
(function (GoogleCloudDialogflowV2ConversationLifecycleStateEnum) {
    GoogleCloudDialogflowV2ConversationLifecycleStateEnum["LifecycleStateUnspecified"] = "LIFECYCLE_STATE_UNSPECIFIED";
    GoogleCloudDialogflowV2ConversationLifecycleStateEnum["InProgress"] = "IN_PROGRESS";
    GoogleCloudDialogflowV2ConversationLifecycleStateEnum["Completed"] = "COMPLETED";
})(GoogleCloudDialogflowV2ConversationLifecycleStateEnum || (GoogleCloudDialogflowV2ConversationLifecycleStateEnum = {}));
// GoogleCloudDialogflowV2ConversationInput
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
var GoogleCloudDialogflowV2ConversationInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2ConversationInput, _super);
    function GoogleCloudDialogflowV2ConversationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationProfile" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationInput.prototype, "conversationProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationStage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationInput.prototype, "conversationStage", void 0);
    return GoogleCloudDialogflowV2ConversationInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2ConversationInput };
// GoogleCloudDialogflowV2Conversation
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
var GoogleCloudDialogflowV2Conversation = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2Conversation, _super);
    function GoogleCloudDialogflowV2Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationProfile" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Conversation.prototype, "conversationProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationStage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Conversation.prototype, "conversationStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Conversation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycleState" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Conversation.prototype, "lifecycleState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Conversation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", GoogleCloudDialogflowV2ConversationPhoneNumber)
    ], GoogleCloudDialogflowV2Conversation.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Conversation.prototype, "startTime", void 0);
    return GoogleCloudDialogflowV2Conversation;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2Conversation };
