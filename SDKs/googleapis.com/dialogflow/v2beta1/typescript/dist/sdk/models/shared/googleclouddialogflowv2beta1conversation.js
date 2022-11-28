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
import { GoogleCloudDialogflowV2beta1ConversationPhoneNumber } from "./googleclouddialogflowv2beta1conversationphonenumber";
export var GoogleCloudDialogflowV2beta1ConversationConversationStageEnum;
(function (GoogleCloudDialogflowV2beta1ConversationConversationStageEnum) {
    GoogleCloudDialogflowV2beta1ConversationConversationStageEnum["ConversationStageUnspecified"] = "CONVERSATION_STAGE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1ConversationConversationStageEnum["VirtualAgentStage"] = "VIRTUAL_AGENT_STAGE";
    GoogleCloudDialogflowV2beta1ConversationConversationStageEnum["HumanAssistStage"] = "HUMAN_ASSIST_STAGE";
})(GoogleCloudDialogflowV2beta1ConversationConversationStageEnum || (GoogleCloudDialogflowV2beta1ConversationConversationStageEnum = {}));
export var GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum;
(function (GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum) {
    GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum["LifecycleStateUnspecified"] = "LIFECYCLE_STATE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum["InProgress"] = "IN_PROGRESS";
    GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum["Completed"] = "COMPLETED";
})(GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum || (GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum = {}));
// GoogleCloudDialogflowV2beta1Conversation
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
var GoogleCloudDialogflowV2beta1Conversation = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1Conversation, _super);
    function GoogleCloudDialogflowV2beta1Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationProfile" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Conversation.prototype, "conversationProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationStage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Conversation.prototype, "conversationStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Conversation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lifecycleState" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Conversation.prototype, "lifecycleState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Conversation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1ConversationPhoneNumber)
    ], GoogleCloudDialogflowV2beta1Conversation.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Conversation.prototype, "startTime", void 0);
    return GoogleCloudDialogflowV2beta1Conversation;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1Conversation };
// GoogleCloudDialogflowV2beta1ConversationInput
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
var GoogleCloudDialogflowV2beta1ConversationInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1ConversationInput, _super);
    function GoogleCloudDialogflowV2beta1ConversationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationProfile" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationInput.prototype, "conversationProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationStage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1ConversationInput.prototype, "conversationStage", void 0);
    return GoogleCloudDialogflowV2beta1ConversationInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1ConversationInput };
