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
import { GoogleCloudDialogflowV2ArticleSuggestionModelMetadata } from "./googleclouddialogflowv2articlesuggestionmodelmetadata";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2SmartReplyModelMetadata } from "./googleclouddialogflowv2smartreplymodelmetadata";
export var GoogleCloudDialogflowV2ConversationModelStateEnum;
(function (GoogleCloudDialogflowV2ConversationModelStateEnum) {
    GoogleCloudDialogflowV2ConversationModelStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Creating"] = "CREATING";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Undeployed"] = "UNDEPLOYED";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Deploying"] = "DEPLOYING";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Deployed"] = "DEPLOYED";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Undeploying"] = "UNDEPLOYING";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Deleting"] = "DELETING";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Failed"] = "FAILED";
    GoogleCloudDialogflowV2ConversationModelStateEnum["Pending"] = "PENDING";
})(GoogleCloudDialogflowV2ConversationModelStateEnum || (GoogleCloudDialogflowV2ConversationModelStateEnum = {}));
// GoogleCloudDialogflowV2ConversationModelInput
/**
 * Represents a conversation model.
**/
var GoogleCloudDialogflowV2ConversationModelInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2ConversationModelInput, _super);
    function GoogleCloudDialogflowV2ConversationModelInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articleSuggestionModelMetadata" }),
        __metadata("design:type", GoogleCloudDialogflowV2ArticleSuggestionModelMetadata)
    ], GoogleCloudDialogflowV2ConversationModelInput.prototype, "articleSuggestionModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasets", elemType: GoogleCloudDialogflowV2InputDataset }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2ConversationModelInput.prototype, "datasets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModelInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModelInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModelInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smartReplyModelMetadata" }),
        __metadata("design:type", GoogleCloudDialogflowV2SmartReplyModelMetadata)
    ], GoogleCloudDialogflowV2ConversationModelInput.prototype, "smartReplyModelMetadata", void 0);
    return GoogleCloudDialogflowV2ConversationModelInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2ConversationModelInput };
// GoogleCloudDialogflowV2ConversationModel
/**
 * Represents a conversation model.
**/
var GoogleCloudDialogflowV2ConversationModel = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2ConversationModel, _super);
    function GoogleCloudDialogflowV2ConversationModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=articleSuggestionModelMetadata" }),
        __metadata("design:type", GoogleCloudDialogflowV2ArticleSuggestionModelMetadata)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "articleSuggestionModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasets", elemType: GoogleCloudDialogflowV2InputDataset }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "datasets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smartReplyModelMetadata" }),
        __metadata("design:type", GoogleCloudDialogflowV2SmartReplyModelMetadata)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "smartReplyModelMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationModel.prototype, "state", void 0);
    return GoogleCloudDialogflowV2ConversationModel;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2ConversationModel };
