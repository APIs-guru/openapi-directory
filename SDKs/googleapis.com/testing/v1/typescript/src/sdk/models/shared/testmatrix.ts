import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClientInfo } from "./clientinfo";
import { EnvironmentMatrix } from "./environmentmatrix";
import { ResultStorage } from "./resultstorage";
import { TestExecution } from "./testexecution";
import { TestSpecification } from "./testspecification";

export enum TestMatrixInvalidMatrixDetailsEnum {
    InvalidMatrixDetailsUnspecified = "INVALID_MATRIX_DETAILS_UNSPECIFIED"
,    DetailsUnavailable = "DETAILS_UNAVAILABLE"
,    MalformedApk = "MALFORMED_APK"
,    MalformedTestApk = "MALFORMED_TEST_APK"
,    NoManifest = "NO_MANIFEST"
,    NoPackageName = "NO_PACKAGE_NAME"
,    InvalidPackageName = "INVALID_PACKAGE_NAME"
,    TestSameAsApp = "TEST_SAME_AS_APP"
,    NoInstrumentation = "NO_INSTRUMENTATION"
,    NoSignature = "NO_SIGNATURE"
,    InstrumentationOrchestratorIncompatible = "INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE"
,    NoTestRunnerClass = "NO_TEST_RUNNER_CLASS"
,    NoLauncherActivity = "NO_LAUNCHER_ACTIVITY"
,    ForbiddenPermissions = "FORBIDDEN_PERMISSIONS"
,    InvalidRoboDirectives = "INVALID_ROBO_DIRECTIVES"
,    InvalidResourceName = "INVALID_RESOURCE_NAME"
,    InvalidDirectiveAction = "INVALID_DIRECTIVE_ACTION"
,    TestLoopIntentFilterNotFound = "TEST_LOOP_INTENT_FILTER_NOT_FOUND"
,    ScenarioLabelNotDeclared = "SCENARIO_LABEL_NOT_DECLARED"
,    ScenarioLabelMalformed = "SCENARIO_LABEL_MALFORMED"
,    ScenarioNotDeclared = "SCENARIO_NOT_DECLARED"
,    DeviceAdminReceiver = "DEVICE_ADMIN_RECEIVER"
,    MalformedXcTestZip = "MALFORMED_XC_TEST_ZIP"
,    BuiltForIosSimulator = "BUILT_FOR_IOS_SIMULATOR"
,    NoTestsInXcTestZip = "NO_TESTS_IN_XC_TEST_ZIP"
,    UseDestinationArtifacts = "USE_DESTINATION_ARTIFACTS"
,    TestNotAppHosted = "TEST_NOT_APP_HOSTED"
,    PlistCannotBeParsed = "PLIST_CANNOT_BE_PARSED"
,    TestOnlyApk = "TEST_ONLY_APK"
,    MalformedIpa = "MALFORMED_IPA"
,    MissingUrlScheme = "MISSING_URL_SCHEME"
,    MalformedAppBundle = "MALFORMED_APP_BUNDLE"
,    NoCodeApk = "NO_CODE_APK"
,    InvalidInputApk = "INVALID_INPUT_APK"
,    InvalidApkPreviewSdk = "INVALID_APK_PREVIEW_SDK"
,    MatrixTooLarge = "MATRIX_TOO_LARGE"
}

export enum TestMatrixOutcomeSummaryEnum {
    OutcomeSummaryUnspecified = "OUTCOME_SUMMARY_UNSPECIFIED"
,    Success = "SUCCESS"
,    Failure = "FAILURE"
,    Inconclusive = "INCONCLUSIVE"
,    Skipped = "SKIPPED"
}

export enum TestMatrixStateEnum {
    TestStateUnspecified = "TEST_STATE_UNSPECIFIED"
,    Validating = "VALIDATING"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Finished = "FINISHED"
,    Error = "ERROR"
,    UnsupportedEnvironment = "UNSUPPORTED_ENVIRONMENT"
,    IncompatibleEnvironment = "INCOMPATIBLE_ENVIRONMENT"
,    IncompatibleArchitecture = "INCOMPATIBLE_ARCHITECTURE"
,    Cancelled = "CANCELLED"
,    Invalid = "INVALID"
}


// TestMatrix
/** 
 * TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.
**/
export class TestMatrix extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientInfo" })
  clientInfo?: ClientInfo;

  @Metadata({ data: "json, name=environmentMatrix" })
  environmentMatrix?: EnvironmentMatrix;

  @Metadata({ data: "json, name=failFast" })
  failFast?: boolean;

  @Metadata({ data: "json, name=flakyTestAttempts" })
  flakyTestAttempts?: number;

  @Metadata({ data: "json, name=invalidMatrixDetails" })
  invalidMatrixDetails?: TestMatrixInvalidMatrixDetailsEnum;

  @Metadata({ data: "json, name=outcomeSummary" })
  outcomeSummary?: TestMatrixOutcomeSummaryEnum;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=resultStorage" })
  resultStorage?: ResultStorage;

  @Metadata({ data: "json, name=state" })
  state?: TestMatrixStateEnum;

  @Metadata({ data: "json, name=testExecutions", elemType: shared.TestExecution })
  testExecutions?: TestExecution[];

  @Metadata({ data: "json, name=testMatrixId" })
  testMatrixId?: string;

  @Metadata({ data: "json, name=testSpecification" })
  testSpecification?: TestSpecification;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
