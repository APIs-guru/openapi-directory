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
import { GoogleCloudDialogflowCxV3beta1FulfillmentInput } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";
// GoogleCloudDialogflowCxV3beta1EventHandlerInput
/**
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
**/
var GoogleCloudDialogflowCxV3beta1EventHandlerInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1EventHandlerInput, _super);
    function GoogleCloudDialogflowCxV3beta1EventHandlerInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EventHandlerInput.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetFlow" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EventHandlerInput.prototype, "targetFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EventHandlerInput.prototype, "targetPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1FulfillmentInput)
    ], GoogleCloudDialogflowCxV3beta1EventHandlerInput.prototype, "triggerFulfillment", void 0);
    return GoogleCloudDialogflowCxV3beta1EventHandlerInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1EventHandlerInput };
// GoogleCloudDialogflowCxV3beta1EventHandler
/**
 * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
**/
var GoogleCloudDialogflowCxV3beta1EventHandler = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1EventHandler, _super);
    function GoogleCloudDialogflowCxV3beta1EventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EventHandler.prototype, "event", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EventHandler.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetFlow" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EventHandler.prototype, "targetFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPage" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1EventHandler.prototype, "targetPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=triggerFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1Fulfillment)
    ], GoogleCloudDialogflowCxV3beta1EventHandler.prototype, "triggerFulfillment", void 0);
    return GoogleCloudDialogflowCxV3beta1EventHandler;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1EventHandler };
