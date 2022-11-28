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
import { GoogleCloudDialogflowV2DocumentReloadStatus } from "./googleclouddialogflowv2documentreloadstatus";
export var GoogleCloudDialogflowV2DocumentStateEnum;
(function (GoogleCloudDialogflowV2DocumentStateEnum) {
    GoogleCloudDialogflowV2DocumentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDialogflowV2DocumentStateEnum["Creating"] = "CREATING";
    GoogleCloudDialogflowV2DocumentStateEnum["Active"] = "ACTIVE";
    GoogleCloudDialogflowV2DocumentStateEnum["Updating"] = "UPDATING";
    GoogleCloudDialogflowV2DocumentStateEnum["Reloading"] = "RELOADING";
    GoogleCloudDialogflowV2DocumentStateEnum["Deleting"] = "DELETING";
})(GoogleCloudDialogflowV2DocumentStateEnum || (GoogleCloudDialogflowV2DocumentStateEnum = {}));
export var GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum;
(function (GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum) {
    GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum["KnowledgeTypeUnspecified"] = "KNOWLEDGE_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum["Faq"] = "FAQ";
    GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum["ExtractiveQa"] = "EXTRACTIVE_QA";
    GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum["ArticleSuggestion"] = "ARTICLE_SUGGESTION";
    GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum["AgentFacingSmartReply"] = "AGENT_FACING_SMART_REPLY";
})(GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum || (GoogleCloudDialogflowV2DocumentKnowledgeTypesEnum = {}));
// GoogleCloudDialogflowV2Document
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
var GoogleCloudDialogflowV2Document = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2Document, _super);
    function GoogleCloudDialogflowV2Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Document.prototype, "contentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Document.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoReload" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2Document.prototype, "enableAutoReload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=knowledgeTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2Document.prototype, "knowledgeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReloadStatus" }),
        __metadata("design:type", GoogleCloudDialogflowV2DocumentReloadStatus)
    ], GoogleCloudDialogflowV2Document.prototype, "latestReloadStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2Document.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Document.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Document.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawContent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Document.prototype, "rawContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2Document.prototype, "state", void 0);
    return GoogleCloudDialogflowV2Document;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2Document };
// GoogleCloudDialogflowV2DocumentInput
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
var GoogleCloudDialogflowV2DocumentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2DocumentInput, _super);
    function GoogleCloudDialogflowV2DocumentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "contentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoReload" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "enableAutoReload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=knowledgeTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "knowledgeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReloadStatus" }),
        __metadata("design:type", GoogleCloudDialogflowV2DocumentReloadStatus)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "latestReloadStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawContent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2DocumentInput.prototype, "rawContent", void 0);
    return GoogleCloudDialogflowV2DocumentInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2DocumentInput };
