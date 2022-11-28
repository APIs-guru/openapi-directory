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
export var CounterStructuredNameOriginEnum;
(function (CounterStructuredNameOriginEnum) {
    CounterStructuredNameOriginEnum["System"] = "SYSTEM";
    CounterStructuredNameOriginEnum["User"] = "USER";
})(CounterStructuredNameOriginEnum || (CounterStructuredNameOriginEnum = {}));
export var CounterStructuredNamePortionEnum;
(function (CounterStructuredNamePortionEnum) {
    CounterStructuredNamePortionEnum["All"] = "ALL";
    CounterStructuredNamePortionEnum["Key"] = "KEY";
    CounterStructuredNamePortionEnum["Value"] = "VALUE";
})(CounterStructuredNamePortionEnum || (CounterStructuredNamePortionEnum = {}));
// CounterStructuredName
/**
 * Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
**/
var CounterStructuredName = /** @class */ (function (_super) {
    __extends(CounterStructuredName, _super);
    function CounterStructuredName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=componentStepName" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "componentStepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStepName" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "executionStepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputIndex" }),
        __metadata("design:type", Number)
    ], CounterStructuredName.prototype, "inputIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origin" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originNamespace" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "originNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalRequestingStepName" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "originalRequestingStepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalStepName" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "originalStepName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portion" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "portion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerId" }),
        __metadata("design:type", String)
    ], CounterStructuredName.prototype, "workerId", void 0);
    return CounterStructuredName;
}(SpeakeasyBase));
export { CounterStructuredName };
