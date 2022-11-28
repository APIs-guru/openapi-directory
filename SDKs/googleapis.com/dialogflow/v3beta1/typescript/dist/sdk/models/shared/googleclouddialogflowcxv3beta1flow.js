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
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1NluSettings } from "./googleclouddialogflowcxv3beta1nlusettings";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
import { GoogleCloudDialogflowCxV3beta1EventHandlerInput } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";
// GoogleCloudDialogflowCxV3beta1Flow
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
var GoogleCloudDialogflowCxV3beta1Flow = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1Flow, _super);
    function GoogleCloudDialogflowCxV3beta1Flow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Flow.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Flow.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandler }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1Flow.prototype, "eventHandlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Flow.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1NluSettings)
    ], GoogleCloudDialogflowCxV3beta1Flow.prototype, "nluSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1Flow.prototype, "transitionRouteGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRoute }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1Flow.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3beta1Flow;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1Flow };
// GoogleCloudDialogflowCxV3beta1FlowInput
/**
 * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
**/
var GoogleCloudDialogflowCxV3beta1FlowInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1FlowInput, _super);
    function GoogleCloudDialogflowCxV3beta1FlowInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FlowInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FlowInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandlerInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1FlowInput.prototype, "eventHandlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1FlowInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1NluSettings)
    ], GoogleCloudDialogflowCxV3beta1FlowInput.prototype, "nluSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1FlowInput.prototype, "transitionRouteGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3beta1TransitionRouteInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1FlowInput.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3beta1FlowInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1FlowInput };
