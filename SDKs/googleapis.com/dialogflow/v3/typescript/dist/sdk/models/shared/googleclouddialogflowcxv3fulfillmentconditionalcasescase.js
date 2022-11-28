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
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescasecasecontent";
// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
var GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase, _super);
    function GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseContent", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase.prototype, "caseContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase.prototype, "condition", void 0);
    return GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase };
// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput
/**
 * Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
**/
var GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput, _super);
    function GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caseContent", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput.prototype, "caseContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput.prototype, "condition", void 0);
    return GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput };
