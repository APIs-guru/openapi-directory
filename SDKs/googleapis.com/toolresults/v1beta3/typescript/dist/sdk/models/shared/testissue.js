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
import { StackTrace } from "./stacktrace";
import { Any } from "./any";
export var TestIssueCategoryEnum;
(function (TestIssueCategoryEnum) {
    TestIssueCategoryEnum["UnspecifiedCategory"] = "unspecifiedCategory";
    TestIssueCategoryEnum["Common"] = "common";
    TestIssueCategoryEnum["Robo"] = "robo";
})(TestIssueCategoryEnum || (TestIssueCategoryEnum = {}));
export var TestIssueSeverityEnum;
(function (TestIssueSeverityEnum) {
    TestIssueSeverityEnum["UnspecifiedSeverity"] = "unspecifiedSeverity";
    TestIssueSeverityEnum["Info"] = "info";
    TestIssueSeverityEnum["Suggestion"] = "suggestion";
    TestIssueSeverityEnum["Warning"] = "warning";
    TestIssueSeverityEnum["Severe"] = "severe";
})(TestIssueSeverityEnum || (TestIssueSeverityEnum = {}));
export var TestIssueTypeEnum;
(function (TestIssueTypeEnum) {
    TestIssueTypeEnum["UnspecifiedType"] = "unspecifiedType";
    TestIssueTypeEnum["FatalException"] = "fatalException";
    TestIssueTypeEnum["NativeCrash"] = "nativeCrash";
    TestIssueTypeEnum["Anr"] = "anr";
    TestIssueTypeEnum["UnusedRoboDirective"] = "unusedRoboDirective";
    TestIssueTypeEnum["CompatibleWithOrchestrator"] = "compatibleWithOrchestrator";
    TestIssueTypeEnum["LauncherActivityNotFound"] = "launcherActivityNotFound";
    TestIssueTypeEnum["StartActivityNotFound"] = "startActivityNotFound";
    TestIssueTypeEnum["IncompleteRoboScriptExecution"] = "incompleteRoboScriptExecution";
    TestIssueTypeEnum["CompleteRoboScriptExecution"] = "completeRoboScriptExecution";
    TestIssueTypeEnum["FailedToInstall"] = "failedToInstall";
    TestIssueTypeEnum["AvailableDeepLinks"] = "availableDeepLinks";
    TestIssueTypeEnum["NonSdkApiUsageViolation"] = "nonSdkApiUsageViolation";
    TestIssueTypeEnum["NonSdkApiUsageReport"] = "nonSdkApiUsageReport";
    TestIssueTypeEnum["EncounteredNonAndroidUiWidgetScreen"] = "encounteredNonAndroidUiWidgetScreen";
    TestIssueTypeEnum["EncounteredLoginScreen"] = "encounteredLoginScreen";
    TestIssueTypeEnum["PerformedGoogleLogin"] = "performedGoogleLogin";
    TestIssueTypeEnum["IosException"] = "iosException";
    TestIssueTypeEnum["IosCrash"] = "iosCrash";
    TestIssueTypeEnum["PerformedMonkeyActions"] = "performedMonkeyActions";
    TestIssueTypeEnum["UsedRoboDirective"] = "usedRoboDirective";
    TestIssueTypeEnum["UsedRoboIgnoreDirective"] = "usedRoboIgnoreDirective";
    TestIssueTypeEnum["InsufficientCoverage"] = "insufficientCoverage";
    TestIssueTypeEnum["InAppPurchases"] = "inAppPurchases";
    TestIssueTypeEnum["CrashDialogError"] = "crashDialogError";
    TestIssueTypeEnum["UiElementsTooDeep"] = "uiElementsTooDeep";
    TestIssueTypeEnum["BlankScreen"] = "blankScreen";
    TestIssueTypeEnum["OverlappingUiElements"] = "overlappingUiElements";
    TestIssueTypeEnum["UnityException"] = "unityException";
    TestIssueTypeEnum["DeviceOutOfMemory"] = "deviceOutOfMemory";
    TestIssueTypeEnum["LogcatCollectionError"] = "logcatCollectionError";
    TestIssueTypeEnum["DetectedAppSplashScreen"] = "detectedAppSplashScreen";
})(TestIssueTypeEnum || (TestIssueTypeEnum = {}));
// TestIssue
/**
 * An issue detected occurring during a test execution.
**/
var TestIssue = /** @class */ (function (_super) {
    __extends(TestIssue, _super);
    function TestIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], TestIssue.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], TestIssue.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], TestIssue.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stackTrace" }),
        __metadata("design:type", StackTrace)
    ], TestIssue.prototype, "stackTrace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TestIssue.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warning" }),
        __metadata("design:type", Any)
    ], TestIssue.prototype, "warning", void 0);
    return TestIssue;
}(SpeakeasyBase));
export { TestIssue };
