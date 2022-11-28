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
import { Condition } from "./condition";
import { Parameter } from "./parameter";
export var TriggerTypeEnum;
(function (TriggerTypeEnum) {
    TriggerTypeEnum["Pageview"] = "pageview";
    TriggerTypeEnum["DomReady"] = "domReady";
    TriggerTypeEnum["WindowLoaded"] = "windowLoaded";
    TriggerTypeEnum["CustomEvent"] = "customEvent";
    TriggerTypeEnum["TriggerGroup"] = "triggerGroup";
    TriggerTypeEnum["Always"] = "always";
    TriggerTypeEnum["FormSubmission"] = "formSubmission";
    TriggerTypeEnum["Click"] = "click";
    TriggerTypeEnum["LinkClick"] = "linkClick";
    TriggerTypeEnum["JsError"] = "jsError";
    TriggerTypeEnum["HistoryChange"] = "historyChange";
    TriggerTypeEnum["Timer"] = "timer";
    TriggerTypeEnum["AmpClick"] = "ampClick";
    TriggerTypeEnum["AmpTimer"] = "ampTimer";
    TriggerTypeEnum["AmpScroll"] = "ampScroll";
    TriggerTypeEnum["AmpVisibility"] = "ampVisibility";
    TriggerTypeEnum["YouTubeVideo"] = "youTubeVideo";
    TriggerTypeEnum["ScrollDepth"] = "scrollDepth";
    TriggerTypeEnum["ElementVisibility"] = "elementVisibility";
})(TriggerTypeEnum || (TriggerTypeEnum = {}));
// Trigger
/**
 * Represents a Google Tag Manager Trigger
**/
var Trigger = /** @class */ (function (_super) {
    __extends(Trigger, _super);
    function Trigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoEventFilter", elemType: Condition }),
        __metadata("design:type", Array)
    ], Trigger.prototype, "autoEventFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkValidation" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "checkValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerId" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "containerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=continuousTimeMinMilliseconds" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "continuousTimeMinMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customEventFilter", elemType: Condition }),
        __metadata("design:type", Array)
    ], Trigger.prototype, "customEventFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventName" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "eventName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter", elemType: Condition }),
        __metadata("design:type", Array)
    ], Trigger.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=horizontalScrollPercentageList" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "horizontalScrollPercentageList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intervalSeconds" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "intervalSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTimerLengthSeconds" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "maxTimerLengthSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameter", elemType: Parameter }),
        __metadata("design:type", Array)
    ], Trigger.prototype, "parameter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFolderId" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "parentFolderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "selector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalTimeMinMilliseconds" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "totalTimeMinMilliseconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerId" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "triggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Trigger.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uniqueTriggerId" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "uniqueTriggerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verticalScrollPercentageList" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "verticalScrollPercentageList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibilitySelector" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "visibilitySelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visiblePercentageMax" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "visiblePercentageMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visiblePercentageMin" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "visiblePercentageMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitForTags" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "waitForTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitForTagsTimeout" }),
        __metadata("design:type", Parameter)
    ], Trigger.prototype, "waitForTagsTimeout", void 0);
    return Trigger;
}(SpeakeasyBase));
export { Trigger };
