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
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";
import { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput } from "./googleclouddialogflowcxv3fulfillmentconditionalcasescase";
// GoogleCloudDialogflowCxV3FulfillmentConditionalCases
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
var GoogleCloudDialogflowCxV3FulfillmentConditionalCases = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FulfillmentConditionalCases, _super);
    function GoogleCloudDialogflowCxV3FulfillmentConditionalCases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCases.prototype, "cases", void 0);
    return GoogleCloudDialogflowCxV3FulfillmentConditionalCases;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FulfillmentConditionalCases };
// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput
/**
 * A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
**/
var GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput, _super);
    function GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cases", elemType: GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput.prototype, "cases", void 0);
    return GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput };
