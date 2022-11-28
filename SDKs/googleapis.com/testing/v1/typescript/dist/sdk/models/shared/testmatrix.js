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
import { ClientInfo } from "./clientinfo";
import { EnvironmentMatrix } from "./environmentmatrix";
import { ResultStorage } from "./resultstorage";
import { TestExecution } from "./testexecution";
import { TestSpecification } from "./testspecification";
export var TestMatrixInvalidMatrixDetailsEnum;
(function (TestMatrixInvalidMatrixDetailsEnum) {
    TestMatrixInvalidMatrixDetailsEnum["InvalidMatrixDetailsUnspecified"] = "INVALID_MATRIX_DETAILS_UNSPECIFIED";
    TestMatrixInvalidMatrixDetailsEnum["DetailsUnavailable"] = "DETAILS_UNAVAILABLE";
    TestMatrixInvalidMatrixDetailsEnum["MalformedApk"] = "MALFORMED_APK";
    TestMatrixInvalidMatrixDetailsEnum["MalformedTestApk"] = "MALFORMED_TEST_APK";
    TestMatrixInvalidMatrixDetailsEnum["NoManifest"] = "NO_MANIFEST";
    TestMatrixInvalidMatrixDetailsEnum["NoPackageName"] = "NO_PACKAGE_NAME";
    TestMatrixInvalidMatrixDetailsEnum["InvalidPackageName"] = "INVALID_PACKAGE_NAME";
    TestMatrixInvalidMatrixDetailsEnum["TestSameAsApp"] = "TEST_SAME_AS_APP";
    TestMatrixInvalidMatrixDetailsEnum["NoInstrumentation"] = "NO_INSTRUMENTATION";
    TestMatrixInvalidMatrixDetailsEnum["NoSignature"] = "NO_SIGNATURE";
    TestMatrixInvalidMatrixDetailsEnum["InstrumentationOrchestratorIncompatible"] = "INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE";
    TestMatrixInvalidMatrixDetailsEnum["NoTestRunnerClass"] = "NO_TEST_RUNNER_CLASS";
    TestMatrixInvalidMatrixDetailsEnum["NoLauncherActivity"] = "NO_LAUNCHER_ACTIVITY";
    TestMatrixInvalidMatrixDetailsEnum["ForbiddenPermissions"] = "FORBIDDEN_PERMISSIONS";
    TestMatrixInvalidMatrixDetailsEnum["InvalidRoboDirectives"] = "INVALID_ROBO_DIRECTIVES";
    TestMatrixInvalidMatrixDetailsEnum["InvalidResourceName"] = "INVALID_RESOURCE_NAME";
    TestMatrixInvalidMatrixDetailsEnum["InvalidDirectiveAction"] = "INVALID_DIRECTIVE_ACTION";
    TestMatrixInvalidMatrixDetailsEnum["TestLoopIntentFilterNotFound"] = "TEST_LOOP_INTENT_FILTER_NOT_FOUND";
    TestMatrixInvalidMatrixDetailsEnum["ScenarioLabelNotDeclared"] = "SCENARIO_LABEL_NOT_DECLARED";
    TestMatrixInvalidMatrixDetailsEnum["ScenarioLabelMalformed"] = "SCENARIO_LABEL_MALFORMED";
    TestMatrixInvalidMatrixDetailsEnum["ScenarioNotDeclared"] = "SCENARIO_NOT_DECLARED";
    TestMatrixInvalidMatrixDetailsEnum["DeviceAdminReceiver"] = "DEVICE_ADMIN_RECEIVER";
    TestMatrixInvalidMatrixDetailsEnum["MalformedXcTestZip"] = "MALFORMED_XC_TEST_ZIP";
    TestMatrixInvalidMatrixDetailsEnum["BuiltForIosSimulator"] = "BUILT_FOR_IOS_SIMULATOR";
    TestMatrixInvalidMatrixDetailsEnum["NoTestsInXcTestZip"] = "NO_TESTS_IN_XC_TEST_ZIP";
    TestMatrixInvalidMatrixDetailsEnum["UseDestinationArtifacts"] = "USE_DESTINATION_ARTIFACTS";
    TestMatrixInvalidMatrixDetailsEnum["TestNotAppHosted"] = "TEST_NOT_APP_HOSTED";
    TestMatrixInvalidMatrixDetailsEnum["PlistCannotBeParsed"] = "PLIST_CANNOT_BE_PARSED";
    TestMatrixInvalidMatrixDetailsEnum["TestOnlyApk"] = "TEST_ONLY_APK";
    TestMatrixInvalidMatrixDetailsEnum["MalformedIpa"] = "MALFORMED_IPA";
    TestMatrixInvalidMatrixDetailsEnum["MissingUrlScheme"] = "MISSING_URL_SCHEME";
    TestMatrixInvalidMatrixDetailsEnum["MalformedAppBundle"] = "MALFORMED_APP_BUNDLE";
    TestMatrixInvalidMatrixDetailsEnum["NoCodeApk"] = "NO_CODE_APK";
    TestMatrixInvalidMatrixDetailsEnum["InvalidInputApk"] = "INVALID_INPUT_APK";
    TestMatrixInvalidMatrixDetailsEnum["InvalidApkPreviewSdk"] = "INVALID_APK_PREVIEW_SDK";
    TestMatrixInvalidMatrixDetailsEnum["MatrixTooLarge"] = "MATRIX_TOO_LARGE";
})(TestMatrixInvalidMatrixDetailsEnum || (TestMatrixInvalidMatrixDetailsEnum = {}));
export var TestMatrixOutcomeSummaryEnum;
(function (TestMatrixOutcomeSummaryEnum) {
    TestMatrixOutcomeSummaryEnum["OutcomeSummaryUnspecified"] = "OUTCOME_SUMMARY_UNSPECIFIED";
    TestMatrixOutcomeSummaryEnum["Success"] = "SUCCESS";
    TestMatrixOutcomeSummaryEnum["Failure"] = "FAILURE";
    TestMatrixOutcomeSummaryEnum["Inconclusive"] = "INCONCLUSIVE";
    TestMatrixOutcomeSummaryEnum["Skipped"] = "SKIPPED";
})(TestMatrixOutcomeSummaryEnum || (TestMatrixOutcomeSummaryEnum = {}));
export var TestMatrixStateEnum;
(function (TestMatrixStateEnum) {
    TestMatrixStateEnum["TestStateUnspecified"] = "TEST_STATE_UNSPECIFIED";
    TestMatrixStateEnum["Validating"] = "VALIDATING";
    TestMatrixStateEnum["Pending"] = "PENDING";
    TestMatrixStateEnum["Running"] = "RUNNING";
    TestMatrixStateEnum["Finished"] = "FINISHED";
    TestMatrixStateEnum["Error"] = "ERROR";
    TestMatrixStateEnum["UnsupportedEnvironment"] = "UNSUPPORTED_ENVIRONMENT";
    TestMatrixStateEnum["IncompatibleEnvironment"] = "INCOMPATIBLE_ENVIRONMENT";
    TestMatrixStateEnum["IncompatibleArchitecture"] = "INCOMPATIBLE_ARCHITECTURE";
    TestMatrixStateEnum["Cancelled"] = "CANCELLED";
    TestMatrixStateEnum["Invalid"] = "INVALID";
})(TestMatrixStateEnum || (TestMatrixStateEnum = {}));
// TestMatrix
/**
 * TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.
**/
var TestMatrix = /** @class */ (function (_super) {
    __extends(TestMatrix, _super);
    function TestMatrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientInfo" }),
        __metadata("design:type", ClientInfo)
    ], TestMatrix.prototype, "clientInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentMatrix" }),
        __metadata("design:type", EnvironmentMatrix)
    ], TestMatrix.prototype, "environmentMatrix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failFast" }),
        __metadata("design:type", Boolean)
    ], TestMatrix.prototype, "failFast", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flakyTestAttempts" }),
        __metadata("design:type", Number)
    ], TestMatrix.prototype, "flakyTestAttempts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidMatrixDetails" }),
        __metadata("design:type", String)
    ], TestMatrix.prototype, "invalidMatrixDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outcomeSummary" }),
        __metadata("design:type", String)
    ], TestMatrix.prototype, "outcomeSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], TestMatrix.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resultStorage" }),
        __metadata("design:type", ResultStorage)
    ], TestMatrix.prototype, "resultStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], TestMatrix.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testExecutions", elemType: TestExecution }),
        __metadata("design:type", Array)
    ], TestMatrix.prototype, "testExecutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testMatrixId" }),
        __metadata("design:type", String)
    ], TestMatrix.prototype, "testMatrixId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testSpecification" }),
        __metadata("design:type", TestSpecification)
    ], TestMatrix.prototype, "testSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], TestMatrix.prototype, "timestamp", void 0);
    return TestMatrix;
}(SpeakeasyBase));
export { TestMatrix };
