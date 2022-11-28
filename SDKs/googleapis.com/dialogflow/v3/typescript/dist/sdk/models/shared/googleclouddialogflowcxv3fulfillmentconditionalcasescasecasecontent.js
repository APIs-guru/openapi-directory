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
import { GoogleCloudDialogflowCxV3ResponseMessageInput } from "./googleclouddialogflowcxv3responsemessage";
// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent
/**
 * The list of messages or conditional cases to activate for this case.
**/
var GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent, _super);
    function GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalCases" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3FulfillmentConditionalCases)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent.prototype, "additionalCases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessage)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent.prototype, "message", void 0);
    return GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent };
// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput
/**
 * The list of messages or conditional cases to activate for this case.
**/
var GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput, _super);
    function GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalCases" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3FulfillmentConditionalCases)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput.prototype, "additionalCases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3ResponseMessageInput)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput.prototype, "message", void 0);
    return GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput };
