from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import clientinfo
from . import environmentmatrix
from . import resultstorage
from . import testexecution
from . import testspecification

class TestMatrixInvalidMatrixDetailsEnum(str, Enum):
    INVALID_MATRIX_DETAILS_UNSPECIFIED = "INVALID_MATRIX_DETAILS_UNSPECIFIED"
    DETAILS_UNAVAILABLE = "DETAILS_UNAVAILABLE"
    MALFORMED_APK = "MALFORMED_APK"
    MALFORMED_TEST_APK = "MALFORMED_TEST_APK"
    NO_MANIFEST = "NO_MANIFEST"
    NO_PACKAGE_NAME = "NO_PACKAGE_NAME"
    INVALID_PACKAGE_NAME = "INVALID_PACKAGE_NAME"
    TEST_SAME_AS_APP = "TEST_SAME_AS_APP"
    NO_INSTRUMENTATION = "NO_INSTRUMENTATION"
    NO_SIGNATURE = "NO_SIGNATURE"
    INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE = "INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE"
    NO_TEST_RUNNER_CLASS = "NO_TEST_RUNNER_CLASS"
    NO_LAUNCHER_ACTIVITY = "NO_LAUNCHER_ACTIVITY"
    FORBIDDEN_PERMISSIONS = "FORBIDDEN_PERMISSIONS"
    INVALID_ROBO_DIRECTIVES = "INVALID_ROBO_DIRECTIVES"
    INVALID_RESOURCE_NAME = "INVALID_RESOURCE_NAME"
    INVALID_DIRECTIVE_ACTION = "INVALID_DIRECTIVE_ACTION"
    TEST_LOOP_INTENT_FILTER_NOT_FOUND = "TEST_LOOP_INTENT_FILTER_NOT_FOUND"
    SCENARIO_LABEL_NOT_DECLARED = "SCENARIO_LABEL_NOT_DECLARED"
    SCENARIO_LABEL_MALFORMED = "SCENARIO_LABEL_MALFORMED"
    SCENARIO_NOT_DECLARED = "SCENARIO_NOT_DECLARED"
    DEVICE_ADMIN_RECEIVER = "DEVICE_ADMIN_RECEIVER"
    MALFORMED_XC_TEST_ZIP = "MALFORMED_XC_TEST_ZIP"
    BUILT_FOR_IOS_SIMULATOR = "BUILT_FOR_IOS_SIMULATOR"
    NO_TESTS_IN_XC_TEST_ZIP = "NO_TESTS_IN_XC_TEST_ZIP"
    USE_DESTINATION_ARTIFACTS = "USE_DESTINATION_ARTIFACTS"
    TEST_NOT_APP_HOSTED = "TEST_NOT_APP_HOSTED"
    PLIST_CANNOT_BE_PARSED = "PLIST_CANNOT_BE_PARSED"
    TEST_ONLY_APK = "TEST_ONLY_APK"
    MALFORMED_IPA = "MALFORMED_IPA"
    MISSING_URL_SCHEME = "MISSING_URL_SCHEME"
    MALFORMED_APP_BUNDLE = "MALFORMED_APP_BUNDLE"
    NO_CODE_APK = "NO_CODE_APK"
    INVALID_INPUT_APK = "INVALID_INPUT_APK"
    INVALID_APK_PREVIEW_SDK = "INVALID_APK_PREVIEW_SDK"
    MATRIX_TOO_LARGE = "MATRIX_TOO_LARGE"

class TestMatrixOutcomeSummaryEnum(str, Enum):
    OUTCOME_SUMMARY_UNSPECIFIED = "OUTCOME_SUMMARY_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"
    INCONCLUSIVE = "INCONCLUSIVE"
    SKIPPED = "SKIPPED"

class TestMatrixStateEnum(str, Enum):
    TEST_STATE_UNSPECIFIED = "TEST_STATE_UNSPECIFIED"
    VALIDATING = "VALIDATING"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    FINISHED = "FINISHED"
    ERROR = "ERROR"
    UNSUPPORTED_ENVIRONMENT = "UNSUPPORTED_ENVIRONMENT"
    INCOMPATIBLE_ENVIRONMENT = "INCOMPATIBLE_ENVIRONMENT"
    INCOMPATIBLE_ARCHITECTURE = "INCOMPATIBLE_ARCHITECTURE"
    CANCELLED = "CANCELLED"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class TestMatrix:
    client_info: Optional[clientinfo.ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientInfo' }})
    environment_matrix: Optional[environmentmatrix.EnvironmentMatrix] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentMatrix' }})
    fail_fast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failFast' }})
    flaky_test_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flakyTestAttempts' }})
    invalid_matrix_details: Optional[TestMatrixInvalidMatrixDetailsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalidMatrixDetails' }})
    outcome_summary: Optional[TestMatrixOutcomeSummaryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcomeSummary' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    result_storage: Optional[resultstorage.ResultStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultStorage' }})
    state: Optional[TestMatrixStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    test_executions: Optional[List[testexecution.TestExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testExecutions' }})
    test_matrix_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testMatrixId' }})
    test_specification: Optional[testspecification.TestSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSpecification' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    
