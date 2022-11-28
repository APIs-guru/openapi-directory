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
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCases } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessage } from "./googleclouddialogflowcxv3responsemessage";
import { GoogleCloudDialogflowCxV3FulfillmentSetParameterAction } from "./googleclouddialogflowcxv3fulfillmentsetparameteraction";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcases";
import { GoogleCloudDialogflowCxV3ResponseMessageInput } from "./googleclouddialogflowcxv3responsemessage";
// GoogleCloudDialogflowCxV3Fulfillment
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
var GoogleCloudDialogflowCxV3Fulfillment = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3Fulfillment, _super);
    function GoogleCloudDialogflowCxV3Fulfillment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionalCases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCases }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Fulfillment.prototype, "conditionalCases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowCxV3ResponseMessage }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Fulfillment.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPartialResponses" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3Fulfillment.prototype, "returnPartialResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setParameterActions", elemType: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3Fulfillment.prototype, "setParameterActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Fulfillment.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3Fulfillment.prototype, "webhook", void 0);
    return GoogleCloudDialogflowCxV3Fulfillment;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3Fulfillment };
// GoogleCloudDialogflowCxV3FulfillmentInput
/**
 * A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
**/
var GoogleCloudDialogflowCxV3FulfillmentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FulfillmentInput, _super);
    function GoogleCloudDialogflowCxV3FulfillmentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conditionalCases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FulfillmentInput.prototype, "conditionalCases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages", elemType: GoogleCloudDialogflowCxV3ResponseMessageInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FulfillmentInput.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnPartialResponses" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowCxV3FulfillmentInput.prototype, "returnPartialResponses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=setParameterActions", elemType: GoogleCloudDialogflowCxV3FulfillmentSetParameterAction }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FulfillmentInput.prototype, "setParameterActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3FulfillmentInput.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhook" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3FulfillmentInput.prototype, "webhook", void 0);
    return GoogleCloudDialogflowCxV3FulfillmentInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FulfillmentInput };
