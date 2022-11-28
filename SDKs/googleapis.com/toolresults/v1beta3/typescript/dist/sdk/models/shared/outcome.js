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
import { FailureDetail } from "./failuredetail";
import { InconclusiveDetail } from "./inconclusivedetail";
import { SkippedDetail } from "./skippeddetail";
import { SuccessDetail } from "./successdetail";
export var OutcomeSummaryEnum;
(function (OutcomeSummaryEnum) {
    OutcomeSummaryEnum["Unset"] = "unset";
    OutcomeSummaryEnum["Success"] = "success";
    OutcomeSummaryEnum["Failure"] = "failure";
    OutcomeSummaryEnum["Inconclusive"] = "inconclusive";
    OutcomeSummaryEnum["Skipped"] = "skipped";
    OutcomeSummaryEnum["Flaky"] = "flaky";
})(OutcomeSummaryEnum || (OutcomeSummaryEnum = {}));
// Outcome
/**
 * Interprets a result so that humans and machines can act on it.
**/
var Outcome = /** @class */ (function (_super) {
    __extends(Outcome, _super);
    function Outcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureDetail" }),
        __metadata("design:type", FailureDetail)
    ], Outcome.prototype, "failureDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inconclusiveDetail" }),
        __metadata("design:type", InconclusiveDetail)
    ], Outcome.prototype, "inconclusiveDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippedDetail" }),
        __metadata("design:type", SkippedDetail)
    ], Outcome.prototype, "skippedDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=successDetail" }),
        __metadata("design:type", SuccessDetail)
    ], Outcome.prototype, "successDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], Outcome.prototype, "summary", void 0);
    return Outcome;
}(SpeakeasyBase));
export { Outcome };
