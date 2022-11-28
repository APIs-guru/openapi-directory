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
import { GoogleCloudDialogflowCxV3Fulfillment } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3Form } from "./googleclouddialogflowcxv3form";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3FormInput } from "./googleclouddialogflowcxv3form";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";
// GoogleCloudDialogflowCxV3Page
/**
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
var GoogleCloudDialogflowCxV3Page = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3Page, _super);
    function GoogleCloudDialogflowCxV3Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Page.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Fulfillment)
    ], GoogleCloudDialogflowCxV3Page.prototype, "entryFulfillment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandler }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Page.prototype, "eventHandlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Form)
    ], GoogleCloudDialogflowCxV3Page.prototype, "form", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Page.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Page.prototype, "transitionRouteGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRoute }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Page.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3Page;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3Page };
// GoogleCloudDialogflowCxV3PageInput
/**
 * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
**/
var GoogleCloudDialogflowCxV3PageInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3PageInput, _super);
    function GoogleCloudDialogflowCxV3PageInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3PageInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entryFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3FulfillmentInput)
    ], GoogleCloudDialogflowCxV3PageInput.prototype, "entryFulfillment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandlerInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3PageInput.prototype, "eventHandlers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3FormInput)
    ], GoogleCloudDialogflowCxV3PageInput.prototype, "form", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3PageInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRouteGroups" }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3PageInput.prototype, "transitionRouteGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transitionRoutes", elemType: GoogleCloudDialogflowCxV3TransitionRouteInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3PageInput.prototype, "transitionRoutes", void 0);
    return GoogleCloudDialogflowCxV3PageInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3PageInput };
