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
import { Duration } from "./duration";
export var IndividualOutcomeOutcomeSummaryEnum;
(function (IndividualOutcomeOutcomeSummaryEnum) {
    IndividualOutcomeOutcomeSummaryEnum["Unset"] = "unset";
    IndividualOutcomeOutcomeSummaryEnum["Success"] = "success";
    IndividualOutcomeOutcomeSummaryEnum["Failure"] = "failure";
    IndividualOutcomeOutcomeSummaryEnum["Inconclusive"] = "inconclusive";
    IndividualOutcomeOutcomeSummaryEnum["Skipped"] = "skipped";
    IndividualOutcomeOutcomeSummaryEnum["Flaky"] = "flaky";
})(IndividualOutcomeOutcomeSummaryEnum || (IndividualOutcomeOutcomeSummaryEnum = {}));
// IndividualOutcome
/**
 * Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
**/
var IndividualOutcome = /** @class */ (function (_super) {
    __extends(IndividualOutcome, _super);
    function IndividualOutcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multistepNumber" }),
        __metadata("design:type", Number)
    ], IndividualOutcome.prototype, "multistepNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcomeSummary" }),
        __metadata("design:type", String)
    ], IndividualOutcome.prototype, "outcomeSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runDuration" }),
        __metadata("design:type", Duration)
    ], IndividualOutcome.prototype, "runDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepId" }),
        __metadata("design:type", String)
    ], IndividualOutcome.prototype, "stepId", void 0);
    return IndividualOutcome;
}(SpeakeasyBase));
export { IndividualOutcome };
