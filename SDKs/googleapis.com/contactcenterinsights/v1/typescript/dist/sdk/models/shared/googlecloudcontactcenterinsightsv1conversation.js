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
import { GoogleCloudContactcenterinsightsV1ConversationCallMetadata } from "./googlecloudcontactcenterinsightsv1conversationcallmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationDataSource } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1DialogflowIntent } from "./googlecloudcontactcenterinsightsv1dialogflowintent";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";
import { GoogleCloudContactcenterinsightsV1RuntimeAnnotation } from "./googlecloudcontactcenterinsightsv1runtimeannotation";
import { GoogleCloudContactcenterinsightsV1ConversationTranscript } from "./googlecloudcontactcenterinsightsv1conversationtranscript";
import { GoogleCloudContactcenterinsightsV1ConversationDataSourceInput } from "./googlecloudcontactcenterinsightsv1conversationdatasource";
import { GoogleCloudContactcenterinsightsV1AnalysisInput } from "./googlecloudcontactcenterinsightsv1analysis";
export var GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
(function (GoogleCloudContactcenterinsightsV1ConversationMediumEnum) {
    GoogleCloudContactcenterinsightsV1ConversationMediumEnum["MediumUnspecified"] = "MEDIUM_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1ConversationMediumEnum["PhoneCall"] = "PHONE_CALL";
    GoogleCloudContactcenterinsightsV1ConversationMediumEnum["Chat"] = "CHAT";
})(GoogleCloudContactcenterinsightsV1ConversationMediumEnum || (GoogleCloudContactcenterinsightsV1ConversationMediumEnum = {}));
// GoogleCloudContactcenterinsightsV1Conversation
/**
 * The conversation resource.
**/
var GoogleCloudContactcenterinsightsV1Conversation = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1Conversation, _super);
    function GoogleCloudContactcenterinsightsV1Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "agentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callMetadata" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationCallMetadata)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "callMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSource" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationDataSource)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dialogflowIntents", elemType: GoogleCloudContactcenterinsightsV1DialogflowIntent }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "dialogflowIntents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestAnalysis" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1Analysis)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "latestAnalysis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "medium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscatedUserId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "obfuscatedUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeAnnotations", elemType: GoogleCloudContactcenterinsightsV1RuntimeAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "runtimeAnnotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transcript" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationTranscript)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "transcript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=turnCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "turnCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "updateTime", void 0);
    return GoogleCloudContactcenterinsightsV1Conversation;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1Conversation };
// GoogleCloudContactcenterinsightsV1ConversationInput
/**
 * The conversation resource.
**/
var GoogleCloudContactcenterinsightsV1ConversationInput = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ConversationInput, _super);
    function GoogleCloudContactcenterinsightsV1ConversationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "agentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callMetadata" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationCallMetadata)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "callMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataSource" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationDataSourceInput)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "dataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestAnalysis" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1AnalysisInput)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "latestAnalysis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "medium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=obfuscatedUserId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "obfuscatedUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transcript" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1ConversationTranscript)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "transcript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "ttl", void 0);
    return GoogleCloudContactcenterinsightsV1ConversationInput;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1ConversationInput };
