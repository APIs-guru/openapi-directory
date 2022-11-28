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
import { Outcome } from "./outcome";
import { TestSuiteOverview } from "./testsuiteoverview";
export var MergedResultStateEnum;
(function (MergedResultStateEnum) {
    MergedResultStateEnum["UnknownState"] = "unknownState";
    MergedResultStateEnum["Pending"] = "pending";
    MergedResultStateEnum["InProgress"] = "inProgress";
    MergedResultStateEnum["Complete"] = "complete";
})(MergedResultStateEnum || (MergedResultStateEnum = {}));
// MergedResult
/**
 * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
**/
var MergedResult = /** @class */ (function (_super) {
    __extends(MergedResult, _super);
    function MergedResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcome" }),
        __metadata("design:type", Outcome)
    ], MergedResult.prototype, "outcome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], MergedResult.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSuiteOverviews", elemType: TestSuiteOverview }),
        __metadata("design:type", Array)
    ], MergedResult.prototype, "testSuiteOverviews", void 0);
    return MergedResult;
}(SpeakeasyBase));
export { MergedResult };
