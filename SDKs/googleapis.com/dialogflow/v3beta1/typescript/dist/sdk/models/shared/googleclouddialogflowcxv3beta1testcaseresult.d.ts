import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnInput } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";
export declare enum GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum {
    TestResultUnspecified = "TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}
/**
 * Represents a result from running a test case in an agent environment.
**/
export declare class GoogleCloudDialogflowCxV3beta1TestCaseResultInput extends SpeakeasyBase {
    conversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurnInput[];
    environment?: string;
    name?: string;
    testResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum;
    testTime?: string;
}
/**
 * Represents a result from running a test case in an agent environment.
**/
export declare class GoogleCloudDialogflowCxV3beta1TestCaseResult extends SpeakeasyBase {
    conversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[];
    environment?: string;
    name?: string;
    testResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum;
    testTime?: string;
}
