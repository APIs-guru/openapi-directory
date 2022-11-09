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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var LintResultLevelEnum;
(function (LintResultLevelEnum) {
    LintResultLevelEnum["LevelUnspecified"] = "LEVEL_UNSPECIFIED";
    LintResultLevelEnum["Condition"] = "CONDITION";
})(LintResultLevelEnum || (LintResultLevelEnum = {}));
export var LintResultSeverityEnum;
(function (LintResultSeverityEnum) {
    LintResultSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    LintResultSeverityEnum["Error"] = "ERROR";
    LintResultSeverityEnum["Warning"] = "WARNING";
    LintResultSeverityEnum["Notice"] = "NOTICE";
    LintResultSeverityEnum["Info"] = "INFO";
    LintResultSeverityEnum["Deprecated"] = "DEPRECATED";
})(LintResultSeverityEnum || (LintResultSeverityEnum = {}));
// LintResult
/**
 * Structured response of a single validation unit.
**/
var LintResult = /** @class */ (function (_super) {
    __extends(LintResult, _super);
    function LintResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=debugMessage" }),
        __metadata("design:type", String)
    ], LintResult.prototype, "debugMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=fieldName" }),
        __metadata("design:type", String)
    ], LintResult.prototype, "fieldName", void 0);
    __decorate([
        Metadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], LintResult.prototype, "level", void 0);
    __decorate([
        Metadata({ data: "json, name=locationOffset" }),
        __metadata("design:type", Number)
    ], LintResult.prototype, "locationOffset", void 0);
    __decorate([
        Metadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], LintResult.prototype, "severity", void 0);
    __decorate([
        Metadata({ data: "json, name=validationUnitName" }),
        __metadata("design:type", String)
    ], LintResult.prototype, "validationUnitName", void 0);
    return LintResult;
}(SpeakeasyBase));
export { LintResult };
