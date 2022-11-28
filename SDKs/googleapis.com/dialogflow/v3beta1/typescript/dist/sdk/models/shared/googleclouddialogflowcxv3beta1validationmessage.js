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
import { GoogleCloudDialogflowCxV3beta1ResourceName } from "./googleclouddialogflowcxv3beta1resourcename";
export var GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum;
(function (GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum) {
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["ResourceTypeUnspecified"] = "RESOURCE_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["Agent"] = "AGENT";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["Intent"] = "INTENT";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["IntentTrainingPhrase"] = "INTENT_TRAINING_PHRASE";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["IntentParameter"] = "INTENT_PARAMETER";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["Intents"] = "INTENTS";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["IntentTrainingPhrases"] = "INTENT_TRAINING_PHRASES";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["EntityType"] = "ENTITY_TYPE";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["EntityTypes"] = "ENTITY_TYPES";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["Webhook"] = "WEBHOOK";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["Flow"] = "FLOW";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["Page"] = "PAGE";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["Pages"] = "PAGES";
    GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum["TransitionRouteGroup"] = "TRANSITION_ROUTE_GROUP";
})(GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum || (GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum = {}));
export var GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum;
(function (GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum) {
    GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum["Info"] = "INFO";
    GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum["Warning"] = "WARNING";
    GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum["Error"] = "ERROR";
})(GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum || (GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum = {}));
// GoogleCloudDialogflowCxV3beta1ValidationMessage
/**
 * Agent/flow validation message.
**/
var GoogleCloudDialogflowCxV3beta1ValidationMessage = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1ValidationMessage, _super);
    function GoogleCloudDialogflowCxV3beta1ValidationMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1ValidationMessage.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceNames", elemType: GoogleCloudDialogflowCxV3beta1ResourceName }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1ValidationMessage.prototype, "resourceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1ValidationMessage.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1ValidationMessage.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1ValidationMessage.prototype, "severity", void 0);
    return GoogleCloudDialogflowCxV3beta1ValidationMessage;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1ValidationMessage };
