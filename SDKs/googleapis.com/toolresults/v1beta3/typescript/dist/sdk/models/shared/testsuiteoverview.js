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
import { FileReference } from "./filereference";
// TestSuiteOverview
/**
 * A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
**/
var TestSuiteOverview = /** @class */ (function (_super) {
    __extends(TestSuiteOverview, _super);
    function TestSuiteOverview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=elapsedTime" }),
        __metadata("design:type", Duration)
    ], TestSuiteOverview.prototype, "elapsedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorCount" }),
        __metadata("design:type", Number)
    ], TestSuiteOverview.prototype, "errorCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureCount" }),
        __metadata("design:type", Number)
    ], TestSuiteOverview.prototype, "failureCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flakyCount" }),
        __metadata("design:type", Number)
    ], TestSuiteOverview.prototype, "flakyCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TestSuiteOverview.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skippedCount" }),
        __metadata("design:type", Number)
    ], TestSuiteOverview.prototype, "skippedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalCount" }),
        __metadata("design:type", Number)
    ], TestSuiteOverview.prototype, "totalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xmlSource" }),
        __metadata("design:type", FileReference)
    ], TestSuiteOverview.prototype, "xmlSource", void 0);
    return TestSuiteOverview;
}(SpeakeasyBase));
export { TestSuiteOverview };
