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
import { GoogleCloudDialogflowV2ConversationInfo } from "./googleclouddialogflowv2conversationinfo";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";
// GoogleCloudDialogflowV2ConversationDataset
/**
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
**/
var GoogleCloudDialogflowV2ConversationDataset = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2ConversationDataset, _super);
    function GoogleCloudDialogflowV2ConversationDataset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationCount" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationDataset.prototype, "conversationCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationInfo" }),
        __metadata("design:type", GoogleCloudDialogflowV2ConversationInfo)
    ], GoogleCloudDialogflowV2ConversationDataset.prototype, "conversationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationDataset.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationDataset.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationDataset.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2InputConfig)
    ], GoogleCloudDialogflowV2ConversationDataset.prototype, "inputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationDataset.prototype, "name", void 0);
    return GoogleCloudDialogflowV2ConversationDataset;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2ConversationDataset };
// GoogleCloudDialogflowV2ConversationDatasetInput
/**
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
**/
var GoogleCloudDialogflowV2ConversationDatasetInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2ConversationDatasetInput, _super);
    function GoogleCloudDialogflowV2ConversationDatasetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationInfo" }),
        __metadata("design:type", GoogleCloudDialogflowV2ConversationInfo)
    ], GoogleCloudDialogflowV2ConversationDatasetInput.prototype, "conversationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationDatasetInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2ConversationDatasetInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2InputConfig)
    ], GoogleCloudDialogflowV2ConversationDatasetInput.prototype, "inputConfig", void 0);
    return GoogleCloudDialogflowV2ConversationDatasetInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2ConversationDatasetInput };
