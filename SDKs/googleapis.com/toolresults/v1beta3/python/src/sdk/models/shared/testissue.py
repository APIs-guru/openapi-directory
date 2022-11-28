from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TestIssueCategoryEnum(str, Enum):
    UNSPECIFIED_CATEGORY = "unspecifiedCategory"
    COMMON = "common"
    ROBO = "robo"

class TestIssueSeverityEnum(str, Enum):
    UNSPECIFIED_SEVERITY = "unspecifiedSeverity"
    INFO = "info"
    SUGGESTION = "suggestion"
    WARNING = "warning"
    SEVERE = "severe"

class TestIssueTypeEnum(str, Enum):
    UNSPECIFIED_TYPE = "unspecifiedType"
    FATAL_EXCEPTION = "fatalException"
    NATIVE_CRASH = "nativeCrash"
    ANR = "anr"
    UNUSED_ROBO_DIRECTIVE = "unusedRoboDirective"
    COMPATIBLE_WITH_ORCHESTRATOR = "compatibleWithOrchestrator"
    LAUNCHER_ACTIVITY_NOT_FOUND = "launcherActivityNotFound"
    START_ACTIVITY_NOT_FOUND = "startActivityNotFound"
    INCOMPLETE_ROBO_SCRIPT_EXECUTION = "incompleteRoboScriptExecution"
    COMPLETE_ROBO_SCRIPT_EXECUTION = "completeRoboScriptExecution"
    FAILED_TO_INSTALL = "failedToInstall"
    AVAILABLE_DEEP_LINKS = "availableDeepLinks"
    NON_SDK_API_USAGE_VIOLATION = "nonSdkApiUsageViolation"
    NON_SDK_API_USAGE_REPORT = "nonSdkApiUsageReport"
    ENCOUNTERED_NON_ANDROID_UI_WIDGET_SCREEN = "encounteredNonAndroidUiWidgetScreen"
    ENCOUNTERED_LOGIN_SCREEN = "encounteredLoginScreen"
    PERFORMED_GOOGLE_LOGIN = "performedGoogleLogin"
    IOS_EXCEPTION = "iosException"
    IOS_CRASH = "iosCrash"
    PERFORMED_MONKEY_ACTIONS = "performedMonkeyActions"
    USED_ROBO_DIRECTIVE = "usedRoboDirective"
    USED_ROBO_IGNORE_DIRECTIVE = "usedRoboIgnoreDirective"
    INSUFFICIENT_COVERAGE = "insufficientCoverage"
    IN_APP_PURCHASES = "inAppPurchases"
    CRASH_DIALOG_ERROR = "crashDialogError"
    UI_ELEMENTS_TOO_DEEP = "uiElementsTooDeep"
    BLANK_SCREEN = "blankScreen"
    OVERLAPPING_UI_ELEMENTS = "overlappingUiElements"
    UNITY_EXCEPTION = "unityException"
    DEVICE_OUT_OF_MEMORY = "deviceOutOfMemory"
    LOGCAT_COLLECTION_ERROR = "logcatCollectionError"
    DETECTED_APP_SPLASH_SCREEN = "detectedAppSplashScreen"


@dataclass_json
@dataclass
class TestIssue:
    r"""TestIssue
    An issue detected occurring during a test execution.
    """
    
    category: Optional[TestIssueCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    severity: Optional[TestIssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    stack_trace: Optional[StackTrace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTrace') }})
    type: Optional[TestIssueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    warning: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    
