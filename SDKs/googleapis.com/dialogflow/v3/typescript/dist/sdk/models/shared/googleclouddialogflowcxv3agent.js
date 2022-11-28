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
import { GoogleCloudDialogflowCxV3AdvancedSettings } from "./googleclouddialogflowcxv3advancedsettings";
import { GoogleCloudDialogflowCxV3SpeechToTextSettings } from "./googleclouddialogflowcxv3speechtotextsettings";
// GoogleCloudDialogflowCxV3Agent
/**
 * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
**/
var GoogleCloudDialogflowCxV3Agent = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3Agent, _super);
    function GoogleCloudDialogflowCxV3Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advancedSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3AdvancedSettings)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "advancedSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatarUri" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "avatarUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "defaultLanguageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSpellCorrection" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "enableSpellCorrection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "enableStackdriverLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "locked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securitySettings" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "securitySettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speechToTextSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3SpeechToTextSettings)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "speechToTextSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startFlow" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "startFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedLanguageCodes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "supportedLanguageCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Agent.prototype, "timeZone", void 0);
    return GoogleCloudDialogflowCxV3Agent;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3Agent };
