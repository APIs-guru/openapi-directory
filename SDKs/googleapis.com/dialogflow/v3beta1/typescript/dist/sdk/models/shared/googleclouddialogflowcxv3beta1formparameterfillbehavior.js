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
import { GoogleCloudDialogflowCxV3beta1Fulfillment } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1FulfillmentInput } from "./googleclouddialogflowcxv3beta1fulfillment";
import { GoogleCloudDialogflowCxV3beta1EventHandlerInput } from "./googleclouddialogflowcxv3beta1eventhandler";
// GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior
/**
 * Configuration for how the filling of a parameter should be handled.
**/
var GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior, _super);
    function GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1Fulfillment)
    ], GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior.prototype, "initialPromptFulfillment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandler }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior.prototype, "repromptEventHandlers", void 0);
    return GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior };
// GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput
/**
 * Configuration for how the filling of a parameter should be handled.
**/
var GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput, _super);
    function GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1FulfillmentInput)
    ], GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput.prototype, "initialPromptFulfillment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3beta1EventHandlerInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput.prototype, "repromptEventHandlers", void 0);
    return GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput };
