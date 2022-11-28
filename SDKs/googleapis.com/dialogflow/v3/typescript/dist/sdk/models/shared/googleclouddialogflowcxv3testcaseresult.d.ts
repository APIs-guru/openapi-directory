import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ConversationTurnInput } from "./googleclouddialogflowcxv3conversationturn";
import { GoogleCloudDialogflowCxV3ConversationTurn } from "./googleclouddialogflowcxv3conversationturn";
export declare enum GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum {
    TestResultUnspecified = "TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}
/**
 * Represents a result from running a test case in an agent environment.
**/
export declare class GoogleCloudDialogflowCxV3TestCaseResultInput extends SpeakeasyBase {
    conversationTurns?: GoogleCloudDialogflowCxV3ConversationTurnInput[];
    environment?: string;
    name?: string;
    testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum;
    testTime?: string;
}
/**
 * Represents a result from running a test case in an agent environment.
**/
export declare class GoogleCloudDialogflowCxV3TestCaseResult extends SpeakeasyBase {
    conversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];
    environment?: string;
    name?: string;
    testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum;
    testTime?: string;
}
