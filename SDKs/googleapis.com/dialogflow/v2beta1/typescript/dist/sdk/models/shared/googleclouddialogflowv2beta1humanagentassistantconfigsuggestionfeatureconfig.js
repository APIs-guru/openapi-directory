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
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationmodelconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationprocessconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfig";
import { GoogleCloudDialogflowV2beta1SuggestionFeature } from "./googleclouddialogflowv2beta1suggestionfeature";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestiontriggersettings";
// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig
/**
 * Config for suggestion features.
**/
var GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig, _super);
    function GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationModelConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig)
    ], GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.prototype, "conversationModelConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversationProcessConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig)
    ], GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.prototype, "conversationProcessConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableEventBasedSuggestion" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.prototype, "enableEventBasedSuggestion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig)
    ], GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.prototype, "queryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestionFeature" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1SuggestionFeature)
    ], GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.prototype, "suggestionFeature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestionTriggerSettings" }),
        __metadata("design:type", GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings)
    ], GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig.prototype, "suggestionTriggerSettings", void 0);
    return GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig };
