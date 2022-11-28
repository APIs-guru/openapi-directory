import { SpeakeasyBase } from "../../../internal/utils";
import { ClientInfo } from "./clientinfo";
import { EnvironmentMatrix } from "./environmentmatrix";
import { ResultStorage } from "./resultstorage";
import { TestExecution } from "./testexecution";
import { TestSpecification } from "./testspecification";
export declare enum TestMatrixInvalidMatrixDetailsEnum {
    InvalidMatrixDetailsUnspecified = "INVALID_MATRIX_DETAILS_UNSPECIFIED",
    DetailsUnavailable = "DETAILS_UNAVAILABLE",
    MalformedApk = "MALFORMED_APK",
    MalformedTestApk = "MALFORMED_TEST_APK",
    NoManifest = "NO_MANIFEST",
    NoPackageName = "NO_PACKAGE_NAME",
    InvalidPackageName = "INVALID_PACKAGE_NAME",
    TestSameAsApp = "TEST_SAME_AS_APP",
    NoInstrumentation = "NO_INSTRUMENTATION",
    NoSignature = "NO_SIGNATURE",
    InstrumentationOrchestratorIncompatible = "INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE",
    NoTestRunnerClass = "NO_TEST_RUNNER_CLASS",
    NoLauncherActivity = "NO_LAUNCHER_ACTIVITY",
    ForbiddenPermissions = "FORBIDDEN_PERMISSIONS",
    InvalidRoboDirectives = "INVALID_ROBO_DIRECTIVES",
    InvalidResourceName = "INVALID_RESOURCE_NAME",
    InvalidDirectiveAction = "INVALID_DIRECTIVE_ACTION",
    TestLoopIntentFilterNotFound = "TEST_LOOP_INTENT_FILTER_NOT_FOUND",
    ScenarioLabelNotDeclared = "SCENARIO_LABEL_NOT_DECLARED",
    ScenarioLabelMalformed = "SCENARIO_LABEL_MALFORMED",
    ScenarioNotDeclared = "SCENARIO_NOT_DECLARED",
    DeviceAdminReceiver = "DEVICE_ADMIN_RECEIVER",
    MalformedXcTestZip = "MALFORMED_XC_TEST_ZIP",
    BuiltForIosSimulator = "BUILT_FOR_IOS_SIMULATOR",
    NoTestsInXcTestZip = "NO_TESTS_IN_XC_TEST_ZIP",
    UseDestinationArtifacts = "USE_DESTINATION_ARTIFACTS",
    TestNotAppHosted = "TEST_NOT_APP_HOSTED",
    PlistCannotBeParsed = "PLIST_CANNOT_BE_PARSED",
    TestOnlyApk = "TEST_ONLY_APK",
    MalformedIpa = "MALFORMED_IPA",
    MissingUrlScheme = "MISSING_URL_SCHEME",
    MalformedAppBundle = "MALFORMED_APP_BUNDLE",
    NoCodeApk = "NO_CODE_APK",
    InvalidInputApk = "INVALID_INPUT_APK",
    InvalidApkPreviewSdk = "INVALID_APK_PREVIEW_SDK",
    MatrixTooLarge = "MATRIX_TOO_LARGE"
}
export declare enum TestMatrixOutcomeSummaryEnum {
    OutcomeSummaryUnspecified = "OUTCOME_SUMMARY_UNSPECIFIED",
    Success = "SUCCESS",
    Failure = "FAILURE",
    Inconclusive = "INCONCLUSIVE",
    Skipped = "SKIPPED"
}
export declare enum TestMatrixStateEnum {
    TestStateUnspecified = "TEST_STATE_UNSPECIFIED",
    Validating = "VALIDATING",
    Pending = "PENDING",
    Running = "RUNNING",
    Finished = "FINISHED",
    Error = "ERROR",
    UnsupportedEnvironment = "UNSUPPORTED_ENVIRONMENT",
    IncompatibleEnvironment = "INCOMPATIBLE_ENVIRONMENT",
    IncompatibleArchitecture = "INCOMPATIBLE_ARCHITECTURE",
    Cancelled = "CANCELLED",
    Invalid = "INVALID"
}
/**
 * TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.
**/
export declare class TestMatrix extends SpeakeasyBase {
    clientInfo?: ClientInfo;
    environmentMatrix?: EnvironmentMatrix;
    failFast?: boolean;
    flakyTestAttempts?: number;
    invalidMatrixDetails?: TestMatrixInvalidMatrixDetailsEnum;
    outcomeSummary?: TestMatrixOutcomeSummaryEnum;
    projectId?: string;
    resultStorage?: ResultStorage;
    state?: TestMatrixStateEnum;
    testExecutions?: TestExecution[];
    testMatrixId?: string;
    testSpecification?: TestSpecification;
    timestamp?: string;
}
