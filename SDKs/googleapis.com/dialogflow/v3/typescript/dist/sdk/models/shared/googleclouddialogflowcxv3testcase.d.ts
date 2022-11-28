import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCaseResult } from "./googleclouddialogflowcxv3testcaseresult";
import { GoogleCloudDialogflowCxV3ConversationTurn } from "./googleclouddialogflowcxv3conversationturn";
import { GoogleCloudDialogflowCxV3TestConfig } from "./googleclouddialogflowcxv3testconfig";
import { GoogleCloudDialogflowCxV3TestCaseResultInput } from "./googleclouddialogflowcxv3testcaseresult";
import { GoogleCloudDialogflowCxV3ConversationTurnInput } from "./googleclouddialogflowcxv3conversationturn";
/**
 * Represents a test case.
**/
export declare class GoogleCloudDialogflowCxV3TestCase extends SpeakeasyBase {
    creationTime?: string;
    displayName?: string;
    lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
    name?: string;
    notes?: string;
    tags?: string[];
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];
    testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}
/**
 * Represents a test case.
**/
export declare class GoogleCloudDialogflowCxV3TestCaseInput extends SpeakeasyBase {
    displayName?: string;
    lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResultInput;
    name?: string;
    notes?: string;
    tags?: string[];
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3ConversationTurnInput[];
    testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}
