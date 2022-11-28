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
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionfeatureconfig";
export var GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum;
(function (GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum) {
    GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum["RoleUnspecified"] = "ROLE_UNSPECIFIED";
    GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum["HumanAgent"] = "HUMAN_AGENT";
    GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum["AutomatedAgent"] = "AUTOMATED_AGENT";
    GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum["EndUser"] = "END_USER";
})(GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum || (GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequestParticipantRoleEnum = {}));
// GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest
/**
 * The request message for ConversationProfiles.SetSuggestionFeature.
**/
var GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest, _super);
    function GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=participantRole" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest.prototype, "participantRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestionFeatureConfig" }),
        __metadata("design:type", GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig)
    ], GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest.prototype, "suggestionFeatureConfig", void 0);
    return GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2SetSuggestionFeatureConfigRequest };
