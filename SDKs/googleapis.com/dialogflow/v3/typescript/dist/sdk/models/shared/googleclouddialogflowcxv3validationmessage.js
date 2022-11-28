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
import { GoogleCloudDialogflowCxV3ResourceName } from "./googleclouddialogflowcxv3resourcename";
export var GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum;
(function (GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum) {
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["ResourceTypeUnspecified"] = "RESOURCE_TYPE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["Agent"] = "AGENT";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["Intent"] = "INTENT";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["IntentTrainingPhrase"] = "INTENT_TRAINING_PHRASE";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["IntentParameter"] = "INTENT_PARAMETER";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["Intents"] = "INTENTS";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["IntentTrainingPhrases"] = "INTENT_TRAINING_PHRASES";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["EntityType"] = "ENTITY_TYPE";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["EntityTypes"] = "ENTITY_TYPES";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["Webhook"] = "WEBHOOK";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["Flow"] = "FLOW";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["Page"] = "PAGE";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["Pages"] = "PAGES";
    GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum["TransitionRouteGroup"] = "TRANSITION_ROUTE_GROUP";
})(GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum || (GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum = {}));
export var GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum;
(function (GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum) {
    GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum["Info"] = "INFO";
    GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum["Warning"] = "WARNING";
    GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum["Error"] = "ERROR";
})(GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum || (GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum = {}));
// GoogleCloudDialogflowCxV3ValidationMessage
/**
 * Agent/flow validation message.
**/
var GoogleCloudDialogflowCxV3ValidationMessage = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3ValidationMessage, _super);
    function GoogleCloudDialogflowCxV3ValidationMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ValidationMessage.prototype, "detail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceNames", elemType: GoogleCloudDialogflowCxV3ResourceName }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3ValidationMessage.prototype, "resourceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ValidationMessage.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3ValidationMessage.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3ValidationMessage.prototype, "severity", void 0);
    return GoogleCloudDialogflowCxV3ValidationMessage;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3ValidationMessage };
