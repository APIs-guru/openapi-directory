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
import { GoogleCloudDialogflowCxV3FulfillmentInput } from "./googleclouddialogflowcxv3fulfillment";
import { GoogleCloudDialogflowCxV3EventHandlerInput } from "./googleclouddialogflowcxv3eventhandler";
// GoogleCloudDialogflowCxV3FormParameterFillBehavior
/**
 * Configuration for how the filling of a parameter should be handled.
**/
var GoogleCloudDialogflowCxV3FormParameterFillBehavior = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FormParameterFillBehavior, _super);
    function GoogleCloudDialogflowCxV3FormParameterFillBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3Fulfillment)
    ], GoogleCloudDialogflowCxV3FormParameterFillBehavior.prototype, "initialPromptFulfillment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandler }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FormParameterFillBehavior.prototype, "repromptEventHandlers", void 0);
    return GoogleCloudDialogflowCxV3FormParameterFillBehavior;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FormParameterFillBehavior };
// GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput
/**
 * Configuration for how the filling of a parameter should be handled.
**/
var GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput, _super);
    function GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=initialPromptFulfillment" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3FulfillmentInput)
    ], GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput.prototype, "initialPromptFulfillment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repromptEventHandlers", elemType: GoogleCloudDialogflowCxV3EventHandlerInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput.prototype, "repromptEventHandlers", void 0);
    return GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput };
