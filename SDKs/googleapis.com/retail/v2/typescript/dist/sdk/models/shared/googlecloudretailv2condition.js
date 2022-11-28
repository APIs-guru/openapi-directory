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
import { GoogleCloudRetailV2ConditionTimeRange } from "./googlecloudretailv2conditiontimerange";
import { GoogleCloudRetailV2ConditionQueryTerm } from "./googlecloudretailv2conditionqueryterm";
// GoogleCloudRetailV2Condition
/**
 * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
**/
var GoogleCloudRetailV2Condition = /** @class */ (function (_super) {
    __extends(GoogleCloudRetailV2Condition, _super);
    function GoogleCloudRetailV2Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeTimeRange", elemType: GoogleCloudRetailV2ConditionTimeRange }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Condition.prototype, "activeTimeRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queryTerms", elemType: GoogleCloudRetailV2ConditionQueryTerm }),
        __metadata("design:type", Array)
    ], GoogleCloudRetailV2Condition.prototype, "queryTerms", void 0);
    return GoogleCloudRetailV2Condition;
}(SpeakeasyBase));
export { GoogleCloudRetailV2Condition };
