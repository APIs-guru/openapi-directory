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
import { GoogleCloudDialogflowV2beta1DocumentReloadStatus } from "./googleclouddialogflowv2beta1documentreloadstatus";
export var GoogleCloudDialogflowV2beta1DocumentStateEnum;
(function (GoogleCloudDialogflowV2beta1DocumentStateEnum) {
    GoogleCloudDialogflowV2beta1DocumentStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1DocumentStateEnum["Creating"] = "CREATING";
    GoogleCloudDialogflowV2beta1DocumentStateEnum["Active"] = "ACTIVE";
    GoogleCloudDialogflowV2beta1DocumentStateEnum["Updating"] = "UPDATING";
    GoogleCloudDialogflowV2beta1DocumentStateEnum["Reloading"] = "RELOADING";
    GoogleCloudDialogflowV2beta1DocumentStateEnum["Deleting"] = "DELETING";
})(GoogleCloudDialogflowV2beta1DocumentStateEnum || (GoogleCloudDialogflowV2beta1DocumentStateEnum = {}));
export var GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum;
(function (GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum) {
    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum["KnowledgeTypeUnspecified"] = "KNOWLEDGE_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum["Faq"] = "FAQ";
    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum["ExtractiveQa"] = "EXTRACTIVE_QA";
    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum["ArticleSuggestion"] = "ARTICLE_SUGGESTION";
    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum["AgentFacingSmartReply"] = "AGENT_FACING_SMART_REPLY";
    GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum["SmartReply"] = "SMART_REPLY";
})(GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum || (GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum = {}));
// GoogleCloudDialogflowV2beta1Document
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
var GoogleCloudDialogflowV2beta1Document = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1Document, _super);
    function GoogleCloudDialogflowV2beta1Document() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "contentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoReload" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "enableAutoReload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=knowledgeTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "knowledgeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReloadStatus" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1DocumentReloadStatus)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "latestReloadStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawContent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "rawContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Document.prototype, "state", void 0);
    return GoogleCloudDialogflowV2beta1Document;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1Document };
// GoogleCloudDialogflowV2beta1DocumentInput
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
**/
var GoogleCloudDialogflowV2beta1DocumentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1DocumentInput, _super);
    function GoogleCloudDialogflowV2beta1DocumentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "contentUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAutoReload" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "enableAutoReload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=knowledgeTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "knowledgeTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestReloadStatus" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1DocumentReloadStatus)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "latestReloadStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "mimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawContent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1DocumentInput.prototype, "rawContent", void 0);
    return GoogleCloudDialogflowV2beta1DocumentInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1DocumentInput };
