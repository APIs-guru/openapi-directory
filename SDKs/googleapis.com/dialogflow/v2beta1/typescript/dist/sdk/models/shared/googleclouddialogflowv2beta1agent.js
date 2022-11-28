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
export var GoogleCloudDialogflowV2beta1AgentApiVersionEnum;
(function (GoogleCloudDialogflowV2beta1AgentApiVersionEnum) {
    GoogleCloudDialogflowV2beta1AgentApiVersionEnum["ApiVersionUnspecified"] = "API_VERSION_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1AgentApiVersionEnum["ApiVersionV1"] = "API_VERSION_V1";
    GoogleCloudDialogflowV2beta1AgentApiVersionEnum["ApiVersionV2"] = "API_VERSION_V2";
    GoogleCloudDialogflowV2beta1AgentApiVersionEnum["ApiVersionV2Beta1"] = "API_VERSION_V2_BETA_1";
})(GoogleCloudDialogflowV2beta1AgentApiVersionEnum || (GoogleCloudDialogflowV2beta1AgentApiVersionEnum = {}));
export var GoogleCloudDialogflowV2beta1AgentMatchModeEnum;
(function (GoogleCloudDialogflowV2beta1AgentMatchModeEnum) {
    GoogleCloudDialogflowV2beta1AgentMatchModeEnum["MatchModeUnspecified"] = "MATCH_MODE_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1AgentMatchModeEnum["MatchModeHybrid"] = "MATCH_MODE_HYBRID";
    GoogleCloudDialogflowV2beta1AgentMatchModeEnum["MatchModeMlOnly"] = "MATCH_MODE_ML_ONLY";
})(GoogleCloudDialogflowV2beta1AgentMatchModeEnum || (GoogleCloudDialogflowV2beta1AgentMatchModeEnum = {}));
export var GoogleCloudDialogflowV2beta1AgentTierEnum;
(function (GoogleCloudDialogflowV2beta1AgentTierEnum) {
    GoogleCloudDialogflowV2beta1AgentTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1AgentTierEnum["TierStandard"] = "TIER_STANDARD";
    GoogleCloudDialogflowV2beta1AgentTierEnum["TierEnterprise"] = "TIER_ENTERPRISE";
    GoogleCloudDialogflowV2beta1AgentTierEnum["TierEnterprisePlus"] = "TIER_ENTERPRISE_PLUS";
})(GoogleCloudDialogflowV2beta1AgentTierEnum || (GoogleCloudDialogflowV2beta1AgentTierEnum = {}));
// GoogleCloudDialogflowV2beta1Agent
/**
 * A Dialogflow agent is a virtual agent that handles conversations with your end-users. It is a natural language understanding module that understands the nuances of human language. Dialogflow translates end-user text or audio during a conversation to structured data that your apps and services can understand. You design and build a Dialogflow agent to handle the types of conversations required for your system. For more information about agents, see the [Agent guide](https://cloud.google.com/dialogflow/docs/agents-overview).
**/
var GoogleCloudDialogflowV2beta1Agent = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1Agent, _super);
    function GoogleCloudDialogflowV2beta1Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiVersion" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatarUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "avatarUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classificationThreshold" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "classificationThreshold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "defaultLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableLogging" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "enableLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchMode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "matchMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedLanguageCodes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "supportedLanguageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Agent.prototype, "timeZone", void 0);
    return GoogleCloudDialogflowV2beta1Agent;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1Agent };
