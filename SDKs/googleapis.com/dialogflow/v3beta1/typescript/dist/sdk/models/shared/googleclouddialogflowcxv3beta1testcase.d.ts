import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TestCaseResultInput } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnInput } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1TestConfig } from "./googleclouddialogflowcxv3beta1testconfig";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn } from "./googleclouddialogflowcxv3beta1conversationturn";
/**
 * Represents a test case.
**/
export declare class GoogleCloudDialogflowCxV3beta1TestCaseInput extends SpeakeasyBase {
    displayName?: string;
    lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultInput;
    name?: string;
    notes?: string;
    tags?: string[];
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurnInput[];
    testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
}
/**
 * Represents a test case.
**/
export declare class GoogleCloudDialogflowCxV3beta1TestCase extends SpeakeasyBase {
    creationTime?: string;
    displayName?: string;
    lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
    name?: string;
    notes?: string;
    tags?: string[];
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[];
    testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
}
