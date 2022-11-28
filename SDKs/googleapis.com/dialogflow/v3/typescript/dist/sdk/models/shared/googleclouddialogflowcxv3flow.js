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
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3NluSettings } from "./googleclouddialogflowcxv3nlusettings";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
// GoogleCloudDialogflowCxV3FlowInput
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
var GoogleCloudDialogflowCxV3FlowInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FlowInput, _super);
    function GoogleCloudDialogflowCxV3FlowInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3FlowInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3FlowInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandlerInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FlowInput.prototype, "eventHandlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3FlowInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3NluSettings)
    ], GoogleCloudDialogflowCxV3FlowInput.prototype, "nluSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FlowInput.prototype, "transitionRouteGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRouteInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FlowInput.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3FlowInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FlowInput };
// GoogleCloudDialogflowCxV3Flow
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
var GoogleCloudDialogflowCxV3Flow = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3Flow, _super);
    function GoogleCloudDialogflowCxV3Flow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Flow.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Flow.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandler }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Flow.prototype, "eventHandlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Flow.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3NluSettings)
    ], GoogleCloudDialogflowCxV3Flow.prototype, "nluSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Flow.prototype, "transitionRouteGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRoute }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Flow.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3Flow;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3Flow };
